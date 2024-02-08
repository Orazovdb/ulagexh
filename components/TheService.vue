<template>
  <div class="services-item">
    <div class="services-item__image">
      <img :src="`${imgURL}service/${service.image}`" alt="" />
    </div>
    <p
      class="services-item__description"
      v-if="normalizeTextByLang(service, 'title')[$i18n.locale]"
      v-html="normalizeTextByLang(service, 'title')[$i18n.locale]"
    ></p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    service: {
      type: Object,
      default: () => {},
    },
  },

  computed: {
    ...mapGetters(['isPopup', 'imgURL']),
  },

  methods: {
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

<style lang="scss" scoped>
.services-item {
  padding: 30px 20px;
  box-shadow: 0px 0px 10px var(--shadow);
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__image {
    margin-bottom: 50px;
    width: 112px;
    height: 112px;
    border-radius: 20px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      border-radius: 20px;
    }
    @media (max-width: 767px) {
      width: 90px;
      height: 90px;
      margin-bottom: 26px;
    }
    @media (max-width: 479px) {
      width: 80px;
      height: 80px;
      margin-bottom: 20px;
    }
  }

  &__description {
    font-weight: 400;
    font-size: 18px;
    line-height: calc(34 / 18) * 100%;
    text-align: center;
    color: var(--light-black);
    @media (max-width: 479px) {
      font-size: 14px;
      line-height: calc(30 / 14) * 100%;
    }
  }
}
</style>
