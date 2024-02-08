<template>
  <section class="services">
    <div class="services__container __container">
      <base-title class="services__title" title="service"></base-title>
      <div class="services__columns">
        <the-service
          v-for="service in services"
          :key="service.uuid"
          :service="service"
        ></the-service>
      </div>
    </div>
  </section>
</template>

<script>
import { getService } from '@/api/user.api'
export default {
  data() {
    return {
      services: [],
    }
  },
  async fetch() {
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
.services {
  margin-top: 50px;
  margin-bottom: 80px;
  @media (max-width: 767px) {
    margin-top: 40px;
    margin-bottom: 60px;
  }

  &__title {
    margin-bottom: 60px;
    text-align: center;
    @media (max-width: 767px) {
      margin-bottom: 30px;
    }
  }

  &__columns {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    margin: 0 70px;
    @media (max-width: 992px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 767px) {
      grid-template-columns: 1fr;
      margin: 0;
      gap: 30px;
    }
  }
}
</style>
