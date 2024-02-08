<template>
  <div class="admin-slider">
    <base-table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Ady</th>
          <th>Email</th>
          <th>Tema</th>
          <th>Habar</th>
          <th>Gelen sene</th>
        </tr>
      </thead>
      <tbody v-if="items && items.length">
        <tr v-for="item in items" :key="item?.uuid">
          <td class="tac">1</td>
          <td>
            <span v-if="item.name">{{ item.name }}</span>
          </td>
          <td v-if="item.email">
            <span>{{ item.email }}</span>
          </td>
          <td>
            <span v-if="item.subject">{{ item.subject }}</span>
          </td>
          <td>
            <span v-if="item.note">{{ item.note }}</span>
          </td>
          <td>
            <span v-if="item.created_at">
              {{ new Date(item.created_at).toLocaleDateString() }}
            </span>
          </td>
          <td>
            <div class="table-icons">
              <base-icon @clicked="openPage" icon="adminEye"></base-icon>
              <base-icon
                @clicked="deleteContacts(item?.uuid)"
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
import { getContact, deleteContact } from '@/api/admin.api'
export default {
  layout: 'admin',
  middleware: 'auth-admin',

  data() {
    return {
      items: [],
    }
  },

  async mounted() {
    this.fetchContact()
  },

  methods: {
    async fetchContact() {
      try {
        const { data, status } = await getContact()
        if (!status) return
        this.items = data.data
        console.log(this.items)
      } catch (error) {
        console.log(error)
      }
    },

    async deleteContacts(id) {
      try {
        const { status } = await deleteContact({ data: { uuid: id } })
        if (!status) return
        await this.fetchContact()
      } catch (error) {
        console.error(error)
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
