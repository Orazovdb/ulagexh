<template>
  <div class="">
    <div class="__container">
      <base-page-map
        to="/orders"
        link="Sargytlar"
        linkTo="/orders"
      ></base-page-map>
    </div>
  </div>
</template>

<script>
import { getNewsId } from '@/api/user.api'
export default {
  data() {
    return {
    }
  },
  async mounted() {
    // await this.fetchNews()
  },
  methods: {
    // async fetchNews() {
    //   try {
    //     const { data, status } = await getNewsId({
    //       data: { id: this.$route.params.id },
    //     })
    //     if (status) this.selectedNews = data.data
    //     console.log(this.selectedNews)
    //   } catch (error) {
    //     console.error(error)
    //   }
    // },
    openNewPage(id) {
      this.$router.push(`ashauk-admin/orders_id/${id}`)
    },
  },
}
</script>

<style lang="scss" scoped>
.orders-page {
  margin-bottom: 120px;
}
</style>
