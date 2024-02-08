<template>
  <div class="base-textare">
    <h4 class="base-textare__label">{{ label }}</h4>
    <textarea
      type=""
      class="base-textare__textarea"
      :placeholder="placeholder"
      rows="6"
      :style="`height:${height}px`"
      @input="(e) => $emit('updateValue', e.target.value)"
      :value="value"
    />
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: () => '',
    },
    placeholder: {
      type: String,
      default: () => '',
    },
    height: {
      type: String,
      default: () => '',
    },
    value: {
      type: String,
      default: () => '',
    },
  },
}
</script>

<style lang="scss" scoped>
.base-textare {
  width: 100%;

  &__label {
    font-weight: 400;
    font-size: 16px;
    line-height: 120%;
    color: #344051;
    margin-bottom: 10px;
    @media (max-width: 767px) {
      margin-bottom: 6px;
      font-size: 14px;
    }
  }

  &__textarea {
    border: 1px solid var(--gray-light);
    border-radius: 16px;
    color: var(--gray-light);
    font-size: 16px;
    width: 100%;
    transition: 0.3s ease 0s;
    padding: 12px 12px 0px;
    background: transparent;
    resize: none;
    &:focus {
      border: 1px solid var(--light-black);
      color: var(--light-black);
      background: #fff;
    }
  }
}
</style>
