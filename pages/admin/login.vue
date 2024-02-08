<template>
  <div class="login">
    <div class="login__wrapper">
      <div class="login__box">
        <div class="login__logo">
          <img src="@/assets/img/logo.png" alt="" />
        </div>
        <h4 class="login__title">
          <span>"Türkmenawtoulaglary" agentligi</span> Aşgabatdaky awtoulag
          kärhanasy
        </h4>
        <form @submit.prevent="logIn" class="login__form">
          <base-input
            @updateValue="(val) => (form.email = val)"
            :value="form.email"
            class="mb-3"
            label="User Name"
          ></base-input>
          <div class="login__input-wrapper">
            <base-input
              label="Password"
              :type="showPass ? 'text' : 'password'"
              @updateValue="(val) => (form.password = val)"
              :value="form.password"
            >
            </base-input>
            <div class="login__icons" @click.stop="showPass = !showPass">
              <base-icon
                v-if="showPass"
                icon="eye"
                class="login__icon"
              ></base-icon>
              <base-icon v-else icon="eyeClose" class="login__icon"></base-icon>
            </div>
          </div>
          <div class="flex flex-x-end mb-3">
            <router-link to="/" class="login__forgot-password">
              Forgot password?
            </router-link>
          </div>
          <base-button widthFull>Login</base-button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { login } from '@/api/admin.api.js'
export default {
  layout: 'empty',
  middleware: ['auth-admin'],
  data() {
    return {
      showPass: false,
      form: { email: '', password: '' },
    }
  },
  mounted() {
    this.$cookie.remove('authorization')
  },
  methods: {
    async logIn() {
      if (!this.form.email || !this.form.password) {
        alert('Meydanlary dolduryn')
      } else {
        try {
          const { data, status } = await login({ data: this.form })
          if (status) {
            localStorage?.setItem('authorization', data.data.token)
            this.$cookie.set('authorization', data.data.token)
            this.$router.push('/ashauk-admin/')
          } else {
            this.$router.push('/ashauk-admin/login')
          }
        } catch (err) {
          console.log(err)
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f7f8fa;
  &__wrapper {
  }

  &__box {
    width: 460px;
    background-color: #fff;
    padding: 30px;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
  }

  &__logo {
    width: 75px;
    margin: 0 auto;
    padding-bottom: 13px;
    img {
      width: 100%;
      height: 100%;
    }
  }

  &__title {
    max-width: 273px;
    font-weight: 700;
    font-size: 17px;
    line-height: 22px;
    color: var(--primary);
    margin: 0 auto;
    padding-bottom: 30px;
    text-align: center;
    span {
      font-weight: 400;
    }
  }

  &__form {
  }

  &__forgot-password {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #377dff;
    border-bottom: 1px solid transparent;
    &:hover {
      border-bottom: 1px solid #377dff;
    }
  }

  &__input-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
  }

  &__icon {
    position: absolute;
    right: 4px;
    bottom: 2px;
    width: 36px;
    height: 52px;
    background-color: #fff;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
