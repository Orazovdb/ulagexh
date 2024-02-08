<template>
  <div class="admin-slider">
    <base-table>
      <thead>
        <tr>
          <th>Number</th>
          <th>Text</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>
            <div v-if="item.number">
              {{ item.number }}
            </div>
          </td>
          <td>
            <span v-if="item.title_tm">{{ item.title_tm }}</span>
          </td>
          <td>
            <div class="table-icons">
              <base-icon
                @clicked="updateCounter(item)"
                icon="adminEdit"
              ></base-icon>
              <base-icon
                @clicked="deleteCounter(item.uuid)"
                icon="adminCrash"
              ></base-icon>
            </div>
          </td>
        </tr>
      </tbody>
    </base-table>
    <pop-up-counter v-if="isPopup" :item="oneLaw"></pop-up-counter>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getCounter, deleteCounter } from '@/api/admin.api'
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
    ...mapGetters(['isPopup']),
  },

  created() {
    this.$store.commit('setTextButton', 'Şotçik goşmak')
  },
  watch: {
    isPopup(val) {
      if (!val) {
        Object.keys(this.oneLaw).forEach((key) => (this.oneLaw[key] = null))
        this.fetchCounter()
      }
    },
  },
  async mounted() {
    await this.fetchCounter()
  },

  methods: {
    async fetchCounter() {
      try {
        const { data, status } = await getCounter()
        if (!status) return
        this.items = data.data
      } catch (error) {
        console.log(error)
      }
    },

    updateCounter(item) {
      console.log(item)
      this.oneLaw = item
      this.$store.commit('openPopup', true)
    },

    async deleteCounter(id) {
      try {
        const { status } = await deleteCounter({ data: { uuid: id } })
        if (!status) return
        await this.fetchCounter()
      } catch (error) {
        console.error(error)
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
