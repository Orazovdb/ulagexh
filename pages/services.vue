<template>
  <div class="service-page">
    <div class="service-page__container">
      <base-title title="services" class="service-page__title"/>
      <div class="service-page__columns">
        <the-service
          v-for="service in services"
          :key="service.uuid"
          :service="service"
        ></the-service>
      </div>
      <the-services-table></the-services-table>
    </div>
  </div>
</template>

<script>
import { getService } from '@/api/user.api'
export default {
  data() {
    return {
      services: [],
    }
  },
  async mounted() {
    await this.fetchService()
  },
  methods: {
    async fetchService() {
      try {
        const { data, status } = await getService()
        if (!status) return
        this.services = data.data
      } catch (error) {
        console.error(error)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.service-page {
  padding: 70px 0 140px;
  @media (max-width: 767px) {
    padding: 40px 20px;
  }
  &__container {
    padding: 0 80px;
    @media (max-width: 767px) {
      padding: 0;
    }
  }

  &__title {
    text-align: center;
    margin-bottom: 60px;
    @media (max-width: 767px) {
      margin-bottom: 30px;
    }
  }

  &__columns {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    margin-bottom: 100px;
    @media (max-width: 992px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 767px) {
      grid-template-columns: 1fr;
      gap: 30px;
      margin-bottom: 30px;
    }
  }
}
</style>
