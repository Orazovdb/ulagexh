<template>
  <div class="orders-page">
    <div class="__container">
      <div v-if="Number($route.params.id) === 1">
        <the-orders-physic></the-orders-physic>
      </div>
      <div v-else>
        <the-orders-legal></the-orders-legal>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.orders-page {
  margin-bottom: 100px;
}
</style>
