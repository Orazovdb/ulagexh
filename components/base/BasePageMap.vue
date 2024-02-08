<template>
  <div class="pages-map">
    <div class="pages-map__flex">
      <a @click.prevent="goHome" class="pages-map__link">
        {{ $t('home') }}
      </a>
      <p>/</p>
      <a @click.prevent="$emit('clickPageMap', linkTo)" class="pages-map__link">
        {{ $t(link) }}
      </a>
      <p>{{ $t(name) }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: () => '',
    },
    link: {
      type: String,
      default: () => '',
    },
    linkTo: {
      type: String,
      default: () => '',
    },
    name: {
      type: String,
      default: () => '',
    },
  },

  methods: {
    goHome() {
      const path = this.$i18n.locale === 'tm' ? `/` : `/${this.$i18n.locale}/`
      this.$router.push(path)
    },
  },
}
</script>

<style lang="scss" scoped>
.pages-map {
  padding: 24px 0 30px;
  @media (max-width: 767px) {
    padding: 14px 0 40px;
  }
  &__flex {
    display: flex;
    gap: 4px;
    @media (max-width: 767px) {
      gap: 2px;
    }
  }

  &__link {
    font-weight: 400;
    font-size: 14px;
    line-height: calc(17 / 14) * 100%;
    color: var(--primary);
    border-bottom: 1px solid var(--primary);
    cursor: pointer;
    @media (max-width: 767px) {
      font-size: 12px;
    }
  }

  P {
    font-weight: 400;
    font-size: 14px;
    line-height: calc(17 / 14) * 100%;
    color: var(--gray);
    @media (max-width: 767px) {
      font-size: 12px;
    }
  }
}
</style>
