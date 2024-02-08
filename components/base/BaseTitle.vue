<template>
  <h2 class="base-title">
    {{ $t(this.title) }}
  </h2>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: () => '',
    },
  },
}
</script>

<style lang="scss" scoped>
.base-title {
  font-weight: 700;
  font-size: 40px;
  line-height: calc(48 / 40) * 100%;
  color: var(--primary);
  @media (max-width: 992px) {
    font-size: 20px;
  }
}
</style>
