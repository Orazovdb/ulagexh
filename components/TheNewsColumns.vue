<template>
  <section class="news">
    <div class="news__container __container">
      <div class="news__top flex flex-sb flex-y-center">
        <base-title class="news__title" title="news" />
        <div class="news__navigations flex flex-y-center gap-20">
          <base-icon icon="arrowCircleLeftBlack" class="swiper-button-prev">
          </base-icon>
          <base-icon icon="arrowCircleRightBlack" class="swiper-button-next">
          </base-icon>
        </div>
      </div>
      <div class="news__swiper-slider">
        <div v-swiper:mySwiper="options" class="news__swiper swiper">
          <div class="news__wrapper swiper-wrapper">
            <the-news-column
              v-for="item in items"
              :item="item"
              :key="item.uuid"
              @open="openNewPage"
              class="news__slide swiper-slide"
            ></the-news-column>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { getNews } from '@/api/user.api'

export default {
  data() {
    return {
      limit: 20,
      page: 1,
      items: [],
      pageLength: 1,

      options: {
        loop: false,
        spaceBetween: 30,
        cache: false,
        autoplay: false,
        // speed: 2000,
        // autoplay: {
        //   delay: 500,
        // },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          320: {
            slidesPerView: 1.2,
            spaceBetween: 15,
          },
          479: {
            slidesPerView: 2.2,
            spaceBetween: 15,
          },
          900: {
            slidesPerView: 2.8,
            spaceBetween: 30,
          },
        },
      },
    }
  },

  async fetch() {
    await this.getAllNews()
  },

  methods: {
    openNewPage(id) {
      console.log(id)
      this.$router.push(this.localeLocation(`/news/${id}`))
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
.news {
  padding: 66px 0 100px;
  background-color: var(--primary-light);
  @media (max-width: 767px) {
    padding: 30px 0;
  }
  &__top {
    margin-bottom: 60px;
    @media (max-width: 757px) {
      margin-bottom: 30px;
    }
  }

  &__title {
    @media (max-width: 767px) {
      flex: 1 1 100%;
      text-align: center;
    }
  }

  &__navigations {
    @media (max-width: 767px) {
      display: none;
    }
  }

  &__swiper-slider {
    &::before {
      content: '';
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      background-color: var(--primary-light);
    }
  }

  &__swiper {
    position: relative;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      height: 110%;
      width: 100vw;
      background-color: var(--primary-light);
      z-index: 3;
      transform: translate(-100%, 0px);
    }
  }

  &__wrapper {
    display: flex;
    width: fit-content;
  }

  &__slide {
    position: relative;
  }
}
</style>
