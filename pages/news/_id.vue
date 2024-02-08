<template>
  <div class="">
    <div class="__container">
      <base-page-map
        @clickPageMap="clickPageMapOpen"
        to="/"
        link="news"
        linkTo="/news"
      ></base-page-map>
      <div v-if="selectedNews">
        <the-news-inside :item="selectedNews"></the-news-inside>
      </div>
    </div>
  </div>
</template>

<script>
import { getNewsId } from '@/api/user.api'
export default {
  data() {
    return {
      selectedNews: null,
    }
  },
  async fetch() {
    await this.fetchNews()
  },
  methods: {
    async fetchNews() {
      try {
        const { data, status } = await getNewsId({
          data: { id: this.$route.params.id },
        })
        if (status) this.selectedNews = data.data
        console.log(this.selectedNews)
      } catch (error) {
        console.error(error)
      }
    },

    clickPageMapOpen() {
      const path =
        this.$i18n.locale === 'tm' ? `/news/` : `/${this.$i18n.locale}/news/`
      this.$router.push(path)
    },
  },
}
</script>

<style lang="scss" scoped>
.orders-page {
  margin-bottom: 120px;
}
</style>
