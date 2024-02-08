<template>
  <div class="pop-up">
    <div class="pop-up__wrapper">
      <div class="pop-up__box" :style="`width:${width}px`">
        <div class="pop-up__header">
          <h4 class="pop-up__header-title">
            {{ title }}
          </h4>
          <base-icon
            @clicked="$store.commit('openPopup', false)"
            icon="adminClose"
          />
        </div>
        <div class="pop-up__body"><slot /></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: () => '700',
    },
    title: {
      type: String,
      default: () => '',
    },
  },
}
</script>

<style lang="scss" scoped>
.pop-up {
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(2px);
  padding: 20px;

  &__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  &__box {
    background-color: #fff;
    width: 700px;
    border-radius: 10px;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 54px;
    padding: 18.5px 20px;
    border-bottom: 1px solid #e5e5e7;
  }

  &__header-title {
    font-weight: 700;
    font-size: 16px;
    line-height: 120%;
  }

  &__body {
    padding: 20px;
  }
}
</style>
