<template>
  <div class="orders-page">
    <div class="orders-page__container">
      <base-title title="orders" class="orders-page__title" />
      <div class="orders-page__wrapper">
        <div class="orders-page__box">
          <div class="orders-page__items">
            <div
              v-for="item in items"
              :key="item.id"
              @click="selectedId = item.id"
              :class="['orders-page-item', { active: selectedId === item.id }]"
            >
              <div class="orders-page-item__icon">
                <img :src="require(`@/assets/img/${item.img}`)" alt="" />
              </div>
              <div class="orders-page-item__icon orders-page-item__icon-1">
                <img :src="require(`@/assets/img/${item.image}`)" alt="" />
              </div>
              <h4 class="orders-page-item__title">
                {{ $t(item.title) }}
              </h4>
            </div>
          </div>
          <div class="flex flex-x-center">
            <base-button
              icon="send"
              @clickedButton="$router.push(`/orders/${selectedId}`)"
            >
              {{$t('send')}}
            </base-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedId: 1,
      items: [
        {
          id: 1,
          img: 'profile-icon.png',
          title: 'naturalEntity',
          image: 'profile-icon.png',
        },
        {
          id: 2,
          img: 'hammer.png',
          title: 'legalEntity',
          image: 'hammer_1.png',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.orders-page {
  padding: 100px;
  @media (max-width: 767px) {
    padding: 40px 0 70px;
  }
  &__title {
    margin-bottom: 60px;
    text-align: center;
    @media (max-width: 767px) {
      margin-bottom: 40px;
    }
  }

  &__wrapper {
    display: flex;
    justify-content: center;
    align-content: center;
  }

  &__box {
  }

  &__items {
    display: flex;
    gap: 50px;
    margin-bottom: 60px;
    @media (max-width: 767px) {
      margin-bottom: 30px;
    }
  }
}
.orders-page-item {
  min-width: 160px;
  padding: 40px 30px;
  border: 1px solid #079c34;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  &.active {
    background-color: var(--primary);
    .orders-page-item__title {
      color: #fff;
    }
    .orders-page-item__icon {
      display: none;
    }
    .orders-page-item__icon-1 {
      display: block;
    }
  }
  &__icon {
    width: 64px;
    margin-bottom: 30px;
    img {
      width: 100%;
      height: 100%;
    }
    &-1 {
      display: none;
    }
  }

  &__title {
    font-weight: 600;
    font-size: 16px;
    line-height: 160%;
    color: var(--light-black);
    white-space: nowrap;
  }
}
</style>
