<template>
  <div class="laws-page">
    <div class="laws-page__container">
      <base-title title="normative" class="laws-page__title"/>
      <div class="laws-page__items">
        <the-laws-columns> </the-laws-columns>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.laws-page {
  padding: 70px 0 140px;
  @media (max-width: 767px) {
    padding: 40px 0 100px;
  }
  &__container {
  }

  &__title {
    text-align: center;
    margin-bottom: 60px;
    @media (max-width: 767px) {
      margin-bottom: 40px;
    }
  }
}
</style>
