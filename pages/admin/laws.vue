<template>
  <div class="admin-slider">
    <base-table>
      <thead>
        <tr>
          <th class="tal">Number</th>
          <th>Text</th>
          <th>Date</th>
          <th>File</th>
        </tr>
      </thead>
      <tbody v-if="items && items.length">
        <tr v-for="item in items" :key="item?.uuid">
          <td class="width-300">
            <div v-if="item.title_tm">
              {{ item.title_tm }}
            </div>
          </td>
          <td>
            <span v-if="item.text_tm">{{ item.text_tm }}</span>
          </td>
          <td>
            <span v-if="item.date">
              {{ new Date(item.date).toLocaleDateString() }}
            </span>
          </td>
          <td class="td-icon">
            <span v-if="item.img_path"
              ><div class="">
                <img src="@/assets/img/pdf-icon.png" alt="" />
              </div>
            </span>
          </td>
          <td>
            <div class="table-icons">
              <base-icon
                @clicked="updateLaw(item)"
                icon="adminEdit"
              ></base-icon>
              <base-icon
                @clicked="deleteLaw(item?.uuid)"
                icon="adminCrash"
              ></base-icon>
            </div>
          </td>
        </tr>
      </tbody>
    </base-table>
    <pop-up-law v-if="isPopup" :item="oneLaw"></pop-up-law>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getLaw, deleteLaw } from '@/api/admin.api'
export default {
  layout: 'admin',
  middleware: 'auth-admin',
  data() {
    return {
      oneLaw: {},
      items: [],
      limit: 20,
      page: 1,
    }
  },

  computed: {
    ...mapGetters(['isPopup']),
  },

  created() {
    this.$store.commit('setTextButton', 'Täze Kadalaşdyryjy hukuknama goşmak')
  },

  watch: {
    isPopup(val) {
      if (!val) {
        Object.keys(this.oneLaw).forEach((key) => (this.oneLaw[key] = null))
        this.fetchLaw()
      }
    },
  },

  async mounted() {
    await this.fetchLaw()
  },

  methods: {
    async fetchLaw() {
      try {
        const { data, status } = await getLaw({
          data: { l: this.limit, p: this.page },
        })
        if (!status) return
        this.pageLength = Math.ceil(data.data.count / this.limit)
        this.items = data.data.documents
      } catch (error) {
        console.log(error)
      }
    },

    updateLaw(item) {
      console.log(item)
      this.oneLaw = item
      this.$store.commit('openPopup', true)
    },

    async deleteLaw(id) {
      try {
        const { status } = await deleteLaw({ data: { uuid: id } })
        if (!status) return
        await this.fetchLaw()
      } catch (error) {
        console.error(error)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
table {
}
</style>
