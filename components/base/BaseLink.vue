<template>
  <nuxt-link :to="to" :class="classes">
    <div class="button-content">
      <!-- {{ $t(this.title) }} -->
      <slot></slot>
    </div>
    <base-icon class="button-icon" :icon="icon"></base-icon>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: () => '',
    },
    color: {
      type: String,
      default: () => '',
    },
    background: {
      type: String,
      default: () => '',
    },
    to: {
      type: String,
      default: () => '',
    },
    widthFull: {
      type: Boolean,
      default: () => false,
    },
    title: {
      type: String,
      default: () => '',
    },
  },
  computed: {
    classes: function () {
      return [
        'button',
        `button--${this.color}`,
        {
          'button--background': this.background,
          'button--widthfull': this.widthFull,
        },
      ]
    },
  },
}
</script>

<style lang="scss" scoped>
.button {
  width: 150px;
  height: 40px;
  padding: 6.5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary);
  color: #fff;
  border: 1px solid transparent;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
  border-radius: 14px;
  gap: 14px;
  white-space: nowrap;
  @media (max-width: 767px) {
    width: 100px;
    height: 30px;
    font-size: 12px;
  }

  &-icon {
    svg {
      width: 20px !important;
      height: 20px !important;
    }
  }

  &--background {
  }

  &--widthfull {
    width: 100% !important;
  }
}
</style>
