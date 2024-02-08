<template>
  <section class="swiper-block">
    <div v-swiper:mySwiper="options" class="swiper-block__swiper swiper">
      <div class="swiper-block__wrapper swiper-wrapper">
        <div
          v-for="item in sliderImages"
          :key="item.uuid"
          class="swiper-block__slide swiper-slide"
        >
          <div class="swiper-block__image">
            <img :src="`${imgURL}slider/${item.image}`" alt="" />
          </div>
          <div class="__container relative">
            <div class="banner-title" data-aos="fade-down">
              <h1
                v-if="normalizeTextByLang(item, 'title')[$i18n.locale]"
                v-html="normalizeTextByLang(item, 'title')[$i18n.locale]"
              ></h1>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-block__navigations">
        <div
          class="swiper-block__navigation swiper-button-prev"
          slot="button-prev"
        >
          <base-icon icon="navigationLeft" />
        </div>
        <div
          class="swiper-block__navigation swiper-button-next"
          slot="button-next"
        >
          <base-icon icon="navigationRight" />
        </div>
      </div>
      <div class="__container relative">
        <div class="swiper-block__bullets-wrapper">
          <div class="swiper-block__bullets swiper-pagination-bullet" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import { getSlider } from '@/api/user.api'

export default {
  data() {
    return {
      sliderImages: [],
      options: {
        loop: true,
        slidesPerView: 1,
        speed: 2000,
        spaceBetween: 20,
        autoplay: {
          delay: 3000,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination-bullet',
          clickable: true,
        },
      },
    }
  },
  async fetch() {
    await this.fetchSlider()
  },
  computed: {
    ...mapGetters(['imgURL']),
  },
  methods: {
    async fetchSlider() {
      try {
        const { data, status } = await getSlider()
        if (!status) return
        this.sliderImages = data.data
      } catch (error) {
        console.error(error)
      }
    },

    normalizeTextByLang(dontNormalItem, prefix = 'title') {
      return {
        tm: dontNormalItem[`${prefix}_tm`],
        ru: dontNormalItem[`${prefix}_ru`],
        en: dontNormalItem[`${prefix}_en`],
      }
    },
  },
}
</script>

<style lang="scss">
.swiper-block {
  width: 100%;
  height: calc(100vh - 120px);
  position: relative;
  transform: 1s all;
  @media (max-width: 767px) {
    height: auto;
  }

  &__swiper {
    height: 100%;
  }

  &__wrapper {
    display: flex;
    width: fit-content;
    height: 100%;
    position: relative;
    &::after {
      content: '';
      position: fixed;
      height: 100%;
      width: 100%;
      left: 0;
      top: 0;
      background-color: rgba(0, 0, 0, 0.3);
    }
  }

  &__slide {
  }

  &__image {
    width: 100%;
    height: 100%;
    cursor: pointer;
    transition: all 0.3s;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  &__navigations {
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    transform: translateY(50%);
    @media (max-width: 767px) {
      display: none;
    }
  }

  &__navigation {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 1px solid #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:first-child {
      margin-left: 70px;
    }
    &:last-child {
      margin-right: 70px;
    }
    @media (max-width: 992px) {
      &:first-child {
        margin-left: 20px;
      }
      &:last-child {
        margin-right: 20px;
      }
    }
  }

  &__bullets-wrapper {
    position: absolute;
    z-index: 5;
    bottom: 40px;
    left: 0;
    width: 100%;
    @media (max-width: 767px) {
      bottom: 16px;
    }
    @media (max-width: 479px) {
      bottom: 6px;
    }
  }

  &__bullets {
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 0 20px;
    .swiper-pagination-bullet {
      cursor: pointer;
      width: 100%;
      height: 4px;
      border-radius: 4px;
      background-color: var(--white-opacity-second);
      @media (max-width: 479px) {
        height: 2px;
      }
    }
    .swiper-pagination-bullet-active {
      background-color: #fff;
    }
  }
}
.banner-title {
  position: absolute;
  left: 0;
  bottom: 100px;
  max-width: 822px;
  z-index: 5;
  padding: 0 20px;
  @media (max-width: 992px) {
    max-width: 700px;
  }
  @media (max-width: 767px) {
    max-width: 500px;
    bottom: 40px;
  }
  @media (max-width: 479px) {
    max-width: 246px;
    bottom: 20px;
  }
  h1 {
    font-weight: 700;
    font-size: 64px;
    line-height: calc(84 / 64) * 100%;
    color: #fff;
    text-transform: uppercase;
		word-break: break-all;
    @media (max-width: 992px) {
      font-size: 50px;
    }
    @media (max-width: 767px) {
      font-size: 30px;
    }
    @media (max-width: 479px) {
      font-size: 16px;
    }
  }
}
</style>
