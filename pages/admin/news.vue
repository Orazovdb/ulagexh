<template>
  <div class="admin-news">
    <div class="admin-news__items">
      <div v-for="item in items" :key="item.uuid" class="item-admin-news">
        <div class="item-admin-news__icons-wrapper">
          <div class="item-admin-news__icons">
            <base-icon @clicked="updateNews(item)" icon="adminEdit"></base-icon>
            <base-icon
              @clicked="deleteNews(item.uuid)"
              icon="adminCrash"
            ></base-icon>
            <base-icon icon="adminEye"></base-icon>
          </div>
        </div>
        <div class="item-admin-news__body">
          <div class="item-admin-news__image">
            <img :src="`${imgURL}news/${item.img_path}`" alt="" />
          </div>
          <div class="item-admin-news__text">
            {{ item.title_tm }}
          </div>
          <div class="flex flex-x-end">
            <div class="item-admin-news__date">
              {{ new Date(item.date).toLocaleDateString() }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="admin-news__pagination">
      <base-pagination
        v-if="pageLength > 1"
        v-model="page"
        :pageCount="pageLength"
        @clickPage="updatePage"
      />
    </div>
    <pop-up-news v-if="isPopup" :item="oneNews"></pop-up-news>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getNews, deleteNews } from '@/api/admin.api'

export default {
  layout: 'admin',
  middleware: 'auth-admin',
  data() {
    return {
      isActive: false,
      limit: 10,
      page: 1,
      items: [],
      oneNews: {},
      pageLength: 1,
    }
  },

  computed: {
    ...mapGetters(['isPopup', 'imgURL']),
  },

  watch: {
    isPopup(val) {
      if (!val) {
        Object.keys(this.oneNews).forEach((key) => (this.oneNews[key] = null))
        this.fetchNews()
      }
    },
  },

  created() {
    this.$store.commit('setTextButton', 'Täze täzelik goşmak')
  },

  async mounted() {
    await this.fetchNews()
  },
  methods: {
    updatePage(p) {
      this.page = p
      this.fetchNews()
    },
    async fetchNews() {
      try {
        const { data, status } = await getNews({
          data: { l: this.limit, p: this.page },
        })
        if (!status) return
        this.pageLength = Math.ceil(data.data.count / this.limit)
        this.items = data.data.news
      } catch (error) {
        console.log(error)
      }
    },

    updateNews(item) {
      console.log(item)
      this.oneNews = item
      this.$store.commit('openPopup', true)
    },

    async deleteNews(id) {
      try {
        const { status } = await deleteNews({ data: { uuid: id } })
        if (!status) return
        await this.fetchNews()
      } catch (error) {
        console.error(error)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.admin-news {
  position: relative;
  height: 100%;
  &__items {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
  }

  &__pagination {
    position: absolute;
    bottom: 20px;
    right: 20px;
  }
}
.item-admin-news {
  background-color: #fff;
  border-radius: 10px;
  &__icons-wrapper {
    padding: 8px 16px;
  }

  &__icons {
    display: flex;
    justify-content: flex-end;
    gap: 4px;
  }

  &__body {
    padding: 10px;
  }

  &__image {
    background-color: #d9d9d9;
    height: 200px;
    margin-bottom: 10px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  &__text {
    font-weight: 500;
    font-size: 14px;
    line-height: 120%;
    color: var(--admin-text);
    margin-bottom: 20px;
  }

  &__date {
    font-weight: 600;
    font-size: 14px;
    line-height: 120%;
    color: var(--admin-text);
  }
}
</style>
