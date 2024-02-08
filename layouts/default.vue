<template>
  <div class="wrapper">
    <base-loader v-if="loading"></base-loader>
    <the-header></the-header>
    <main class="main">
      <nuxt />
    </main>
    <the-footer></the-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
    }
  },
  watch: {
    $route() {
      document.querySelector('.wrapper').scrollTop = 0
    },
  },
  head() {
    return this.$nuxtI18nHead()
  },
  // mounted() {
  //   this.loading = true
  //   window.addEventListener('load', () => {
  //     this.loading = false
  //   })
  // },
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-x: hidden;
  &._lock {
    overflow: hidden;
  }
}
.main {
  flex: 1 1 auto;
  margin-top: 105px;
  @media (max-width: 767px) {
    margin-top: 95px;
  }
  @media (max-width: 479px) {
    margin-top: 65px;
  }
}
</style>
