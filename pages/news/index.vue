<template>
  <div class="news-page">
    <div class="news-page__container">
      <base-title class="news-page__title" title="news" />
      <div class="news-page__columns">
        <lazy-the-news-column
          v-for="item in items"
          :key="item.uuid"
          :item="item"
          @open="openNewPage"
        ></lazy-the-news-column>
      </div>
      <base-pagination
        v-if="pageLength > 1"
        v-model="page"
        :pageCount="pageLength"
        @clickPage="updatePage"
      ></base-pagination>
      <!-- @clickPage="updatePage" -->
    </div>
  </div>
</template>

<script>
import { getNews } from '@/api/user.api'
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      limit: 6,
      page: 1,
      items: [],
      oneNews: {},
      pageLength: 1,
    }
  },

  computed: {
    ...mapGetters(['imgURL']),
  },

  async fetch() {
    await this.getAllNews()
  },

  methods: {
    openNewPage(id) {
      const path =
        this.$i18n.locale === 'tm'
          ? `/news/${id}`
          : `/${this.$i18n.locale}/news/${id}`
      this.$router.push(path)
    },
    updatePage(p) {
      this.page = p
      this.getAllNews()
    },
    async getAllNews() {
      try {
        const { data, status } = await getNews({
          params: { l: this.limit, p: this.page },
        })
        if (!status) return
        this.pageLength = Math.ceil(data.data.count / this.limit)
        this.items = data.data.news
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.news-page {
  padding: 70px 0 140px;
  @media (max-width: 767px) {
    padding: 40px 0 60px;
  }
  &__container {
  }

  &__title {
    text-align: center;
    margin-bottom: 40px;
    @media (max-width: 767px) {
      margin-bottom: 40px;
    }
  }

  &__columns {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin-bottom: 90px;
    @media (max-width: 992px) {
      grid-template-columns: repeat(2, 1fr);
      margin-bottom: 40px;
    }
    @media (max-width: 600px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
