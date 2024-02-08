<template>
  <div class="new-item">
    <div class="new-item__image-wrapper">
      <div class="new-item__image">
        <img :src="`${imgURL}news/${item.img_path}`" alt="" />
      </div>
      <div class="new-item__date">
        {{ new Date(item.date).toLocaleDateString() }}
      </div>
    </div>
    <p
      class="new-item__description"
      v-if="normalizeTextByLang(item, 'title')[$i18n.locale]"
      v-html="normalizeTextByLang(item, 'title')[$i18n.locale]"
    ></p>
    <base-button @clickedButton="openPage" icon="arrowRight">
      {{ $t('readFull') }}
    </base-button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  emits: ['open'],
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },

  computed: {
    ...mapGetters(['imgURL']),
  },

  methods: {
    openPage() {
      this.$emit('open', this.item.uuid)
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

<style lang="scss" scoped>
.new-item {
  position: relative;
  transition: all 0.3s;
  &__image-wrapper {
    position: relative;
    margin-bottom: 12px;
    @media (max-width: 767px) {
      margin-bottom: 8px;
    }
  }

  &__image {
    border-radius: 14px;
    height: 400px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      border-radius: 14px;
    }
    @media (max-width: 767px) {
      height: 350px;
    }
    @media (max-width: 479px) {
      height: 300px;
    }
  }

  &__date {
    position: absolute;
    top: 20px;
    right: 20px;
    padding: 8px 17px;
    background: var(--white);
    border-radius: 14px;
    box-shadow: 0.2px 0.2px 3px;
    p {
      color: var(--primary);
      font-weight: 700;
      font-size: 18px;
      line-height: calc(25 / 18) * 100%;
      text-align: center;
      @media (max-width: 767px) {
        font-size: 16px;
      }
      @media (max-width: 479px) {
        font-size: 14px;
      }
    }

    h4 {
      color: var(--gray);
      font-weight: 700;
      font-size: 14px;
      line-height: calc(19 / 14) * 100%;
      text-align: center;
      @media (max-width: 767px) {
        font-size: 12px;
        line-height: calc(25 / 18) * 100%;
      }
    }
  }

  &__description {
    color: var(--light-black);
    font-weight: 400;
    font-size: 20px;
    line-height: calc(33 / 24) * 100%;
    margin-bottom: 14px;
    @media (max-width: 767px) {
      margin-bottom: 10px;
      font-size: 14px;
      line-height: calc(19 / 14) * 100%;
    }
  }
}
</style>
