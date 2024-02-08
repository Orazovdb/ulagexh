<template>
  <div :class="['base-input', { admin: adminBaseInput }]">
    <h4 class="base-input__label" v-if="label">
      {{ this.label }}
    </h4>
    <h4 class="base-input__label" v-if="labelTranslated">
      {{ $t(this.labelTranslated) }}
    </h4>
    <input
      :type="type"
      :class="classes"
      :placeholder="placeholder"
      :style="`height:${height}px`"
      @input="
        (e) =>
          $emit(
            'updateValue',
            type === 'number' ? Number(e.target.value) : e.target.value
          )
      "
      :value="value"
    />
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: () => 'text',
    },
    label: {
      type: String,
      default: () => '',
    },
    placeholder: {
      type: String,
      default: () => '',
    },
    adminBaseInput: {
      type: Boolean,
      default: () => false,
    },
    adminInput: {
      type: Boolean,
      default: () => false,
    },
    height: {
      type: String,
      default: () => '',
    },
    value: {
      type: String | Number,
    },
    labelTranslated: {
      type: String,
      default: () => '',
    },
  },
  computed: {
    classes: function () {
      return [
        'input',
        {
          'input--admin': this.adminInput,
        },
      ]
    },
  },
}
</script>

<style lang="scss" scoped>
.base-input {
  width: 100%;

  &.admin {
    width: auto !important;
  }

  &__label {
    font-weight: 400;
    font-size: 16px;
    line-height: 120%;
    color: var(--gray);
    margin-bottom: 10px;
    @media (max-width: 767px) {
      margin-bottom: 6px;
      font-size: 14px;
    }
  }

  &__icons {
    &.active {
      .base-input__icon {
        display: none;
      }
      .base-input__icon-close {
        display: flex;
      }
    }
  }

  &__icon {
    position: absolute;
    right: 4px;
    top: 50%;
    transform: translateY(-50%);
    width: 36px;
    height: 54px;
    background-color: #fff;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__icon-close {
    position: absolute;
    right: 4px;
    top: 50%;
    transform: translateY(-50%);
    width: 36px;
    height: 54px;
    background-color: #fff;
    border-radius: 12px;
    display: none;
    justify-content: center;
    align-items: center;
  }
}

.input {
  border: 1px solid var(--gray);
  border-radius: 16px;
  color: var(--gray);
  font-size: 16px;
  width: 100%;
  height: 56px;
  transition: 0.3s ease 0s;
  padding: 12px;
  background: transparent;
  position: relative;
  &:focus {
    border: 1px solid #333333;
    color: var(--light-black);
    background: #fff;
  }

  @media (max-width: 767px) {
    height: 44px;
  }

  &--admin {
    width: 420px !important;
    height: 50px !important;
    border-radius: 30px;
    font-size: 14px;
    border: 1px solid transparent;
    background-color: #fff !important;
    &:focus {
      background-color: #fff !important;
    }
  }
}
</style>
