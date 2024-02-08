<template>
  <div class="admin-slider">
    <base-table>
      <thead>
        <tr>
          <th>Icon</th>
          <th>Slider title</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.uuid">
          <td>
            <div class="table-img">
              <img :src="`${imgURL}service/${item.image}`" alt="" />
            </div>
          </td>
          <td>
            {{ item.title_tm }}
            <!-- {{ translationTitle(item) }} -->
          </td>
          <td>
            <div class="table-icons">
              <base-icon
                icon="adminEdit"
                @clicked="updateService(item)"
              ></base-icon>
              <base-icon
                icon="adminCrash"
                @clicked="deleteService(item.uuid)"
              ></base-icon>
            </div>
          </td>
        </tr>
      </tbody>
    </base-table>
    <pop-up-service v-if="isPopup" :item="oneLaw"></pop-up-service>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getService, deleteService } from '@/api/admin.api'

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
        this.fetchService()
      }
    },
  },

  created() {
    this.$store.commit('setTextButton', 'Täze hyzmat goşmak')
  },

  async mounted() {
    await this.fetchService()
  },
  methods: {
    async fetchService() {
      try {
        const { data, status } = await getService()
        if (!status) return
        this.items = data.data
      } catch (error) {
        console.log(error)
      }
    },

    updateService(item) {
      console.log(item)
      this.oneLaw = item
      this.$store.commit('openPopup', true)
    },

    async deleteService(id) {
      try {
        const { status } = await deleteService({ data: { uuid: id } })
        if (!status) return
        await this.fetchService()
      } catch (error) {
        console.error(error)
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
