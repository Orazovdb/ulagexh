<template>
  <div class="laws-columns">
    <the-laws-column
      v-for="item in laws"
      :key="item.uuid"
      :item="item"
    ></the-laws-column>
  </div>
</template>

<script>
import { getLaws } from '@/api/user.api'
export default {
  data() {
    return {
      laws: [],
      limit: 20,
      page: 1,
      oneNews: {},
      pageLength: 1,
    }
  },
  async fetch() {
    await this.fetchLaws()
  },

  methods: {
    async fetchLaws() {
      try {
        const { data, status } = await getLaws({
          params: { l: this.limit, p: this.page },
        })
        if (!status) return
        this.pageLength = Math.ceil(data.data.count / this.limit)
        this.laws = data.data.documents
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.laws-columns {
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media (max-width: 767px) {
    gap: 30px;
  }
}
</style>
