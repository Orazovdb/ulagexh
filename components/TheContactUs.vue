<template>
  <div class="contact-us">
    <div class="contact-us__container __container">
      <base-title class="contact-us__title" title="contact" />
      <the-contact-items></the-contact-items>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.contact-us {
  padding: 60px 0 100px;
  background-color: var(--light-blue);
  @media (max-width: 767px) {
    padding: 60px 0;
  }

  &__title {
    margin-bottom: 40px;
    @media (max-width: 767px) {
      margin-bottom: 30px;
      text-align: center;
    }
  }
}
</style>
