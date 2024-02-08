<template>
  <div class="about-us-page">
    <div class="about-us-page__container">
      <div class="about-us-page__top">
        <div class="about-us-page__logo-wrapper">
          <div class="about-us-page__logo">
            <img src="@/assets/img/logo.png" alt="logo" />
          </div>
          <h4 class="about-us-page__title" data-aos="fade-down">
            <span> {{ $t('title') }} </span>
            <br />
            {{ $t('subtitle') }}
          </h4>
        </div>
        <div v-for="item in items" :key="item.id">
          <p
            class="about-us-page__description"
            v-if="normalizeTextByLang(item, 'text')[$i18n.locale]"
            v-html="normalizeTextByLang(item, 'text')[$i18n.locale]"
          ></p>
        </div>
      </div>
    </div>
    <div class="about-us-page__swiper-slider">
      <div class="about-us-page__overflow">
        <base-title
          class="about-us-page__swiper-slider-title"
          title="gallery"
        ></base-title>
        <div class="__container">
          <the-about-us-gallery></the-about-us-gallery>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAbout } from '@/api/user.api'

export default {
  data() {
    return {
      items: [],
    }
  },
  async fetch() {
    await this.fetchText()
  },

  methods: {
    async fetchText() {
      try {
        const { data, status } = await getAbout()
        if (!status) return
        this.items = data.data
        console.log(this.items)
      } catch (error) {
        console.error(error)
      }
    },

    normalizeTextByLang(dontNormalItem, prefix = 'text') {
      return {
        tm: dontNormalItem[`${prefix}_tm`],
        ru: dontNormalItem[`${prefix}_ru`],
        en: dontNormalItem[`${prefix}_en`],
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.about-us-page {
  padding-top: 70px;
  @media (max-width: 767px) {
    padding-top: 40px;
  }

  &__overflow {
    max-width: 1800px;
    margin: 0 auto;
    overflow: hidden;
  }

  &__container {
  }

  &__top {
    max-width: 1200px;
    margin: 0 auto;
    margin-bottom: 113px;
    @media (max-width: 767px) {
      margin-bottom: 40px;
    }
  }

  &__logo-wrapper {
    max-width: 400px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
    @media (max-width: 767px) {
      margin-bottom: 20px;
      max-width: 233px;
    }
  }

  &__logo {
    width: 101px;
    margin-bottom: 10px;
    img {
      width: 100%;
      height: 100%;
    }
    @media (max-width: 767px) {
      width: 90px;
    }
    @media (max-width: 479px) {
      width: 75px;
    }
  }

  &__title {
    text-align: center;
    font-weight: 600;
    font-size: 17px;
    line-height: calc(22 / 17) * 100%;
    color: var(--primary);
    span {
      font-weight: 300;
    }
    @media (max-width: 767px) {
      font-size: 14px;
    }
  }

  &__description {
    text-align: center;
    font-weight: 400;
    font-size: 16px;
    line-height: calc(40 / 16) * 100%;
    color: var(--light-black);
    @media (max-width: 767px) {
      font-size: 14px;
      line-height: calc(22 / 14) * 100%;
    }
  }

  &__swiper-slider {
    padding: 40px 0 80px;
    background-color: var(--light-blue);
    @media (max-width: 479px) {
      padding-bottom: 50px;
    }
  }

  &__swiper-slider-title {
    text-align: center;
    margin-bottom: 10px;
    @media (max-width: 767px) {
      margin-bottom: 30px;
    }
  }
}
</style>
