<script>
export default {
  emits: ['clickedButton'],
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
    adminButton: {
      type: Boolean,
      default: () => false,
    },
    widthFull: {
      type: Boolean,
      default: () => false,
    },
    cancel: {
      type: Boolean,
      default: () => false,
    },
    lowerCase: {
      type: Boolean,
      default: () => false,
    },
  },
  computed: {
    classes: function () {
      return [
        'button',
        `button--${this.color}`,
        {
          'button--admin-button': this.adminButton,
          'button--widthfull': this.widthFull,
          'button--cancel': this.cancel,
          'button--lowercase': this.lowerCase,
        },
      ]
    },
  },
}
</script>

<template>
  <button :class="classes" @click="$emit('clickedButton')" type="submit">
    <div class="button-content">
      <slot></slot>
    </div>
    <base-icon v-if="icon" class="button-icon" :icon="icon"></base-icon>
  </button>
</template>

<style lang="scss" scoped>
.button {
  min-width: 150px;
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
  border-radius: 14px;
  gap: 14px;
  white-space: nowrap;
  text-transform: uppercase;
  @media (max-width: 767px) {
    width: 100px;
    height: 30px;
    font-size: 12px;
  }

  &-icon {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 767px) {
      width: 16px;
      height: 16px;
    }
  }

  &--admin-button {
    width: auto !important;
    height: 50px !important;
    font-size: 14px;
    border-radius: 30px;
  }

  &--widthfull {
    min-width: 100% !important;
  }

  &--cancel {
    background-color: transparent;
    border: 3px solid var(--border-color);
    color: var(--button-color);
    text-transform: none;
  }

  &--lowercase {
    text-transform: none;
  }
}
</style>
