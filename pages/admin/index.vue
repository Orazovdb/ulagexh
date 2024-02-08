<template>
  <div class="admin-slider">
    <base-table>
      <thead>
        <tr>
          <th>Foto</th>
          <th>Slider title</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.uuid">
          <td>
            <div class="table-img">
              <img :src="`${imgURL}slider/${item.image}`" alt="" />
            </div>
          </td>
          <td>
            {{ item.title_tm }}
          </td>
          <td>
            <div class="table-icons">
              <base-icon icon="adminEdit" @clicked="updateSlider(item)" />
              <base-icon icon="adminCrash" @clicked="deleteImage(item.uuid)" />
            </div>
          </td>
        </tr>
      </tbody>
    </base-table>
    <pop-up-slider v-if="isPopup" :item="oneLaw" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getSlider, deleteSlider } from '@/api/admin.api'

export default {
  layout: 'admin',
  middleware: 'auth-admin',
  data() {
    return {
      isActive: false,
      items: [],
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
        this.fetchSlider()
      }
    },
  },

  created() {
    this.$store.commit('setTextButton', 'Täze slider goşmak')
  },

  async mounted() {
    await this.fetchSlider()
  },

  methods: {
    async fetchSlider() {
      try {
        const { data, status } = await getSlider()
        if (!status) return
        this.items = data.data
      } catch (error) {
        console.log(error)
      }
    },

    updateSlider(item) {
      this.oneLaw = item
      this.$store.commit('openPopup', true)
    },

    async deleteImage(id) {
      try {
        const { status } = await deleteSlider({ data: { uuid: id } })
        if (!status) return
        await this.fetchSlider()
      } catch (error) {
        console.error(error)
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
