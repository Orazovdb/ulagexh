<template>
  <div class="laws-column">
    <div class="laws-column__row">
      <div class="laws-column__icon">
        <img src="@/assets/img/pdf-icon.png" alt="" />
      </div>
      <div class="laws-column__content">
        <p class="laws-column__date">
          {{ new Date(item.date).toLocaleDateString() }}
        </p>
        <h3
          class="laws-column__title"
          v-if="normalizeTextByLang(item, 'title')[$i18n.locale]"
          v-html="normalizeTextByLang(item, 'title')[$i18n.locale]"
        ></h3>
        <p
          class="laws-column__description"
          v-if="normalizeTextByLang(item, 'text')[$i18n.locale]"
          v-html="normalizeTextByLang(item, 'text')[$i18n.locale]"
        ></p>
        <base-button icon="download" @clickedButton="downloadFile(item)">
          {{ $t('downloadIt') }}
        </base-button>
      </div>
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
    ...mapGetters(['imgURL']),
  },

  methods: {
    normalizeTextByLang(dontNormalItem, prefix = 'title' && 'text') {
      return {
        tm: dontNormalItem[`${prefix}_tm`],
        ru: dontNormalItem[`${prefix}_ru`],
        en: dontNormalItem[`${prefix}_en`],
      }
    },

    downloadFile(data) {
      const link = document.createElement('a')
      link.href = `${this.imgURL}laws/${data.img_path}`
      link.setAttribute('target', 'blank')
      document.body.appendChild(link)

      link.click()
      document.body.removeChild(link)
    },
  },
}
</script>

<style lang="scss" scoped>
.laws-column {
  padding: 20px;
  background-color: #fff;
  box-shadow: 0px 0px 10px #e7ecf8;
  border-radius: 16px;
  @media (max-width: 767px) {
    padding: 20px 14px;
  }
  &__row {
    display: grid;
    grid-template-columns: 120px 1fr;
    align-items: center;
    gap: 20px;
    @media (max-width: 767px) {
      grid-template-columns: 1fr;
    }
  }

  &__icon {
    width: 120px;
    img {
      width: 100%;
    }
    @media (max-width: 767px) {
      margin: 0 auto;
    }

    @media (max-width: 479px) {
      width: 87px;
    }
  }

  &__content {
  }

  &__date {
    font-weight: 600;
    font-size: 12px;
    line-height: calc(16 / 12) * 100%;
    color: var(--primary);
    margin-bottom: 6px;
  }

  &__title {
    font-weight: 700;
    font-size: 16px;
    line-height: calc(22 / 16) * 100%;
    color: var(--light-black);
    margin-bottom: 10px;
    @media (max-width: 767px) {
      font-size: 14px;
      line-height: calc(20 / 14) * 100%;
    }
    @media (max-width: 479px) {
      font-size: 12px;
      line-height: calc(16 / 12) * 100%;
    }
  }

  &__description {
    font-weight: 400;
    font-size: 16px;
    line-height: calc(22 / 16 * 100%);
    color: var(--light-black);
    margin-bottom: 14px;
    @media (max-width: 767px) {
      font-size: 14px;
      line-height: calc(20 / 14) * 100%;
    }
    @media (max-width: 479px) {
      font-size: 12px;
      line-height: calc(16 / 12) * 100%;
    }
  }
}
</style>
