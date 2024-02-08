<template>
  <div class="about-us-page-gallery">
    <div
      v-swiper:mySwiper="options"
      class="about-us-page-gallery__swiper swiper"
    >
      <div class="about-us-page-gallery__navigations flex flex-y-center gap-20">
        <base-icon icon="arrowCircleLeftBlack" class="swiper-button-prev">
        </base-icon>
        <base-icon icon="arrowCircleRightBlack" class="swiper-button-next">
        </base-icon>
      </div>
      <div class="about-us-page-gallery__wrapper swiper-wrapper">
        <div
          v-for="item in gallery"
          :key="item.uuid"
          class="about-us-page-gallery__slide about-us-page-item swiper-slide"
        >
          <div class="about-us-page-item__image">
            <img :src="`${imgURL}gallery/${item.img_path}`" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAboutGallery } from '@/api/user.api'
import { mapGetters } from 'vuex'

export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      gallery: [],
      options: {
        loop: true,
        centeredSlides: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          320: {
             centeredSlides: false,
          },
          479: {
            slidesPerView: 2.2,
            centeredSlides: false,
          },
          900: {
            slidesPerView: 2.8,
            spaceBetween: 4,
          },
        },
      },
    }
  },

  computed: {
    ...mapGetters(['isPopup', 'imgURL']),
  },

  async fetch() {
    await this.fetchGallery()
  },

  methods: {
    async fetchGallery() {
      try {
        const { data, status } = await getAboutGallery()
        if (!status) return
        this.gallery = data.data
      } catch (error) {
        console.error(error)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.about-us-page-gallery {
  position: relative;
  &__swiper {
    @media (max-width: 992px) {
      overflow: hidden;
    }
  }

  &__navigations {
    width: 100%;
    position: absolute;
    top: 50%;
    z-index: 5;
    left: 0;
    justify-content: space-between;
    @media (max-width: 767px) {
      display: none;
    }
  }

  &__wrapper {
    display: flex;
    width: fit-content;
    align-items: center;
    height: 426px;
    @media (max-width: 992px) {
      height: 100%;
    }
  }

  &__slide {
  }
}
.about-us-page-item {
  &.swiper-slide-active {
    .about-us-page-item__image {
      transition: all 1s ease 0s;

      &::before {
        display: none;
      }
      img {
        transition: all 1s ease 0s;
        width: 100%;
        height: 24em;
      }
      @media (max-width: 992px) {
        img {
          height: 100%;
        }
      }
    }
  }
  &.swiper-slide-duplicate-prev,
  &.swiper-slide-duplicate-next {
    .about-us-page-item__image {
      transition: all 1s ease 0s;
      &::before {
        content: '';
        background-color: var(--opacity-black-second);
      }
      img {
        transition: all 1s ease 0s;
        width: 100%;
        height: 14em;
      }
      @media (max-width: 992px) {
        &::before {
          display: none;
        }
        img {
          height: 100%;
        }
      }
    }
  }

  &__image {
    position: relative;
    transition: all 1s ease 0s;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--opacity-black);
    }
    img {
      transition: all 1s ease 0s;
      width: 100%;
      height: 20em;
    }
    @media (max-width: 992px) {
      &::before {
        display: none;
      }
      height: 300px !important;
      img {
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }
  }
}
</style>
