<template>
  <div class="news-inside-item" @click="openPage">
    <div class="news-inside-item__image">
      <img :src="`${imgURL}news/${item.img_path}`" alt="" />
    </div>
    <div class="news-inside-item__content">
      <p class="news-inside-item__date">
        {{ new Date(item.date).toLocaleDateString() }}
      </p>
      <div
        class="news-inside-item__description"
        v-if="normalizeTextByLang(item, 'title')[$i18n.locale]"
        v-html="normalizeTextByLang(item, 'title')[$i18n.locale]"
      ></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    item: {
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

    openPage() {
      this.$emit('open', this.item.uuid)
    },
  },
}
</script>

<style lang="scss" scoped>
.news-inside-item {
  display: flex;
  gap: 10px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease 0s;
  &:hover {
    transform: translate(2px, 2px);
    &::before {
      content: '';
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.050);
      position: absolute;
      z-index: 5;
      top: 0;
      left: 0;
      transition: all 0.3s ease 0s;
    }
  }
  @media (min-width: 767px) {
    flex-direction: column;
  }
  @media (max-width: 767px) {
    align-items: center;
  }
  &__image {
    height: 192px;
    border-radius: 8px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      border-radius: 8px;
    }
    @media (max-width: 767px) {
      width: 160px;
      height: 120px;
    }
    @media (max-width: 479px) {
      min-width: 100px;
      max-width: 100px;
      height: 62px;
    }
  }

  &__content {
    padding: 6px 10px 10px 10px;
  }

  &__date {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    color: var(--primary);
    margin-bottom: 2px;
    @media (max-width: 479px) {
      font-size: 12px;
    }
  }

  &__description {
    font-weight: 600;
    font-size: 16px;
    line-height: calc(19 / 16) * 100%;
    color: var(--light-black);
    @media (max-width: 479px) {
      font-size: 12px;
    }
  }
}
</style>
