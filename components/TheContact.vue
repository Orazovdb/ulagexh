<template>
  <div class="contact">
    <div class="contact__icon">
      <img src="@/assets/img/contact_call.png" alt="" />
    </div>
    <div class="contact__content">
      <h5>{{ $t(item.title) }}</h5>
      <div class="flex gap-10">
        <span v-if="item.text">{{ $t(item.text) }}</span>
        <span v-if="item.number">{{ item.number }}</span>
        <span v-if="item.email"> {{ item.email }}</span>
        <span>{{ item.number }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
.contact {
  display: flex;
  align-items: center;
  gap: 10px;
  @media (max-width: 767px) {
    gap: 4px;
  }
  &__icon {
    min-width: 64px;
    max-width: 64px;
    img {
      width: 100%;
      height: 100%;
    }
    @media (max-width: 767px) {
      min-width: 50px;
      max-width: 50px;
    }
    @media (max-width: 479px) {
      max-width: 40px;
      min-width: 40px;
    }
  }

  &__content {
    h5 {
      font-weight: 600;
      font-size: 18px;
      line-height: calc(34 / 18) * 100%;
      color: var(--primary);
      @media (max-width: 767px) {
        font-size: 1px;
        line-height: calc(30 / 16) * 100%;
      }
      @media (max-width: 479px) {
        font-size: 14px;
        line-height: calc(26 / 14) * 100%;
      }
    }
    span {
      font-weight: 400;
      font-size: 16px;
      line-height: calc(21 / 18) * 100%;
      color: var(--light-black);
      @media (max-width: 767px) {
        font-size: 14px;
        line-height: calc(30 / 16) * 100%;
      }
      @media (max-width: 479px) {
        font-size: 12px;
        line-height: calc(26 / 14) * 100%;
      }
    }
  }
}
</style>
