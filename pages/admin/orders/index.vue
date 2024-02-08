<template>
  <div class="admin-slider">
    <base-table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Roly</th>
          <th>Ady we Familiýasy</th>
          <th>Telefon belgiňiz</th>
          <th>Senesi (ý/a/g)</th>
          <th>Ýüküň görnüşi</th>
          <th>Ýüküň agramy</th>
        </tr>
      </thead>
      <tbody v-if="items && items.length">
        <tr v-for="item in items" :key="item?.uuid">
          <td class="tac">
            <span v-if="item.ID">{{ item.ID }}</span>
          </td>
          <td>
            <span v-if="item.legal">{{ item.legal }}</span>
          </td>
          <td>
            <span>{{ item.name }}</span>
          </td>
          <td>
            <span v-if="item.number">{{ item.number }}</span>
          </td>
          <td>
            <span v-if="item.car_date">
              {{ new Date(item.car_date).toLocaleDateString() }}
            </span>
          </td>
          <td>
            <span v-if="item.stuff_type">{{ item.stuff_type }}</span>
          </td>
          <td>
            <span v-if="item.stuff_weight">{{ item.stuff_weight }}</span>
          </td>
          <td>
            <div class="table-icons">
              <base-icon @clicked="openPage" icon="adminEye"></base-icon>
              <base-icon
                @clicked="deleteOrder(item?.uuid)"
                icon="adminCrash"
              ></base-icon>
            </div>
          </td>
        </tr>
      </tbody>
    </base-table>
  </div>
</template>

<script>
import { getOrderPhysic, deleteOrder } from '@/api/admin.api'

export default {
  middleware: ['auth-admin'],
  layout: 'admin',
  data() {
    return {
      items: [],
      limit: 20,
      page: 1,
    }
  },

  async mounted() {
    await this.fetchOrder()
  },

  methods: {
    openPage(id) {
      this.$router.push(`/orders/${id}`)
    },

    async fetchOrder() {
      try {
        const { data, status } = await getOrderPhysic()
        if (!status) return
        this.items = data.data
      } catch (error) {
        console.log(error)
      }
    },

    async deleteOrder(id) {
      try {
        const { status } = await deleteOrder({ data: { uuid: id } })
        if (!status) return
        await this.fetchOrder()
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
