<template>
  <div class="admin-header">
    <div class="admin-header__row">
      <router-link to="/" class="admin-header__logo-wrapper">
        <div class="admin-header__logo">
          <img src="@/assets/img/logo.png" alt="" />
        </div>
        <h3>
          <span>"Türkmenawtoulaglary" agentligi</span>
          Aşgabatdaky awtoulag kärhanasy
        </h3>
      </router-link>
      <div class="admin-header__input-wrapper">
        <base-input
          adminBaseInput
          adminInput
          placeholder="Hemme zady shu yerden gozle"
        ></base-input>
        <base-button
          @clickedButton="$store.commit('openPopup', true)"
          v-if="adminButton"
          icon="adminAdd"
          adminButton
        >
          {{ buttonText }}
        </base-button>
      </div>
      <div class="admin-header__profile-wrapper">
        <div class="flex gap-10 flex-y-center">
          <base-icon icon="adminProfile" class="admin-header__icon"></base-icon>
          <span class="admin-header__profile-name">admin</span>
        </div>
        <base-icon
          @clicked="logOut"
          icon="adminLeft"
          class="admin-header__profile-left"
        ></base-icon>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    adminButton: {
      type: Boolean,
      default: () => false,
    },
  },
  computed: {
    ...mapGetters(['isButton', 'buttonText']),
  },
  methods: {
    logOut() {
      this.$router.push('/admin/login')
      localStorage?.remove('authorization')
    },
  },
}
</script>

<style lang="scss" scoped>
.admin-header {
  border-bottom: 1px solid var(--admin-input);
  &__row {
    display: grid;
    grid-template-columns: 250px 1fr 193px;
    gap: 30px;
    padding: 20px 25px;
    align-items: center;
    height: 90px;
  }

  &__logo-wrapper {
    display: flex;
    align-items: center;
    gap: 8px;
    h3 {
      font-weight: 700;
      font-size: 12.0924px;
      line-height: 14px;
      color: var(--primary);
      text-align: center;
      span {
        font-weight: 400;
      }
    }
  }

  &__logo {
    width: 80px;
    img {
      width: 100%;
      height: 100%;
    }
  }

  &__input-wrapper {
    display: flex;
    gap: 30px;
  }

  &__profile-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__icon {
  }

  &__profile-name {
    font-weight: 700;
    font-size: 14px;
    line-height: 120%;
    color: var(--admin-text);
  }

  &__profile-left {
    cursor: pointer;
    padding: 10px 0;
  }
}
</style>
