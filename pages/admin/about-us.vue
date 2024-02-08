<template>
  <div class="admin-slider">
    <div class="admin-slider__table">
      <base-table class="mb-5">
        <thead>
          <tr>
            <th class="tal">Text</th>
            <th class="width-auto"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.uuid">
            <td class="width-auto">
              {{ item.text_tm }}
            </td>
            <td>
              <div class="table-icons">
                <base-icon
                  @clicked="updateAbout(item)"
                  icon="adminEdit"
                ></base-icon>
                <base-icon
                  icon="adminCrash"
                  @clicked="deleteText(item.uuid)"
                ></base-icon>
              </div>
            </td>
          </tr>
        </tbody>
      </base-table>
    </div>
    <div class="admin-slider-gallery">
      <h3 class="admin-slider-gallery__title">Galareýa</h3>
      <div class="admin-slider-gallery__items">
        <div class="admin-slider-gallery__row">
          <base-file-input @file="uploadPhoto"></base-file-input>
          <template v-if="photos && photos.length">
            <div
              v-for="photo in photos"
              :key="photo.uuid"
              class="item-admin-slider-gallery"
            >
              <div class="item-admin-slider-gallery__image">
                <img :src="`${imgURL}gallery/${photo.image}`" alt="" />
              </div>
              <div class="item-admin-slider-gallery__icons">
                <div></div>
                <base-icon
                  icon="adminCrashSecond"
                  @clicked="deleteImage(photo.uuid)"
                ></base-icon>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
    <pop-up-about v-if="isPopup" :item="oneLaw"></pop-up-about>
  </div>
</template>

<script>
import {
  addAboutGallery,
  deleteAbout,
  deleteAboutGallery,
  getAbout,
  getAboutGallery,
} from '@/api/admin.api'
import { mapGetters } from 'vuex'

export default {
  layout: 'admin',
  middleware: 'auth-admin',
  data() {
    return {
      items: [],
      photos: [],
      file: null,
      oneLaw: {},
    }
  },

  computed: {
    ...mapGetters(['isPopup', 'imgURL']),
  },

  watch: {
    isPopup(val) {
      if (!val) {
        Object.keys(this.oneLaw).forEach((key) => (this.oneLaw[key] = null))
        this.fetchAbout()
      }
    },
  },

  created() {
    this.$store.commit('setTextButton', 'Tekst goshmak')
  },

  async mounted() {
    await this.fetchAbout()
    await this.fetchGalleryPhoto()
  },

  methods: {
    async fetchAbout() {
      try {
        const { data, status } = await getAbout()
        if (status) {
          this.items = data.data
        }
      } catch (error) {
        console.error(error)
      }
    },

    updateAbout(item) {
      console.log(item)
      this.oneLaw = item
      this.$store.commit('openPopup', true)
    },

    async uploadPhoto(file) {
      try {
        const { data, status } = await addAboutGallery({ data: { file: file } })
        if (!status) return
        await this.fetchGalleryPhoto()
      } catch (error) {
        console.log(error)
      }
    },

    async fetchGalleryPhoto() {
      try {
        const { data, status } = await getAboutGallery()
        if (!status) return
        this.photos = data.data
      } catch (error) {
        console.log(error)
      }
    },

    // editImage(item) {
    //   this.selectedImage = item
    //   this.openPopup()
    // },

    async deleteImage(id) {
      try {
        const { status } = await deleteAboutGallery({ data: { uuid: id } })
        if (!status) return
        await this.fetchGalleryPhoto()
      } catch (error) {
        console.error(error)
      }
    },

    async deleteText(id) {
      try {
        const { status } = await deleteAbout({ data: { uuid: id } })
        if (!status) return
        await this.fetchAbout()
      } catch (error) {
        console.error(error)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.admin-slider-gallery {
  &__title {
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    color: var(--admin-text2);
    margin-bottom: 12px;
  }

  &__items {
  }

  &__row {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 10px;
  }
}
.item-admin-slider-gallery {
  position: relative;
  &__image {
    height: 150px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  &__icons {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px 7px;
    border-radius: 2px;
  }
}
</style>
