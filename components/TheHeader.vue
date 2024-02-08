<template>
  <header class="header">
    <div class="header__container _container">
      <div class="header__top flex flex-sb flex-y-center">
        <nuxt-link to="/" class="header__top-left">
          <div class="header__top-left-logo">
            <img src="@/assets/img/logo.png" alt="logo" />
          </div>
          <h3 class="header__top-left-title">
            <p>{{ $t('title') }}</p>
            {{ $t('subtitle') }}
          </h3>
        </nuxt-link>
        <nuxt-link to="/" class="header__top-right">
          <div class="header__top-right-title">
            {{ $t('titleSecond') }} <br />
            {{ $t('subtitleSecond') }}
          </div>
          <div class="header__top-right-logo">
            <img src="@/assets/img/2024.jpg" alt="logo" />
          </div>
        </nuxt-link>
      </div>
      <nav :class="['header-menu', { active: isBodyActive }]">
        <div class="header-menu__body">
          <nuxt-link to="/" class="header-menu__logo">
            <img src="@/assets/img/logo.png" alt=""
          /></nuxt-link>
          <ul class="header-menu__list">
            <li class="header-menu__item" v-for="link in links" :key="link.id">
              <a
                @click.prevent="goPage(link)"
                :class="[
                  'header-menu__link',
                  {
                    active: activeId === link.id,
                  },
                ]"
              >
                {{ $t(link.name) }}
              </a>
            </li>
          </ul>
          <div :class="['languages', { active: isActive }]">
            <div>
              <div
                class="languages__lng-active flex flex-y-center gap-6"
                @click.stop="isActive = !isActive"
              >
                <nuxt-link
                  v-for="locale in selectedLocale"
                  :key="locale.code"
                  :to="switchLocalePath(locale.code)"
                  class="languages__name"
                >
                  {{ locale.name }}
                </nuxt-link>
                <base-icon icon="arrowDown" class="languages__icon"></base-icon>
                <ul class="languages__list">
                  <li class="languages__item">
                    <nuxt-link
                      v-for="locale in availableLocales"
                      :key="locale.code"
                      exact
                      :to="switchLocalePath(locale.code)"
                      class="languages__link"
                    >
                      {{ locale.name }}
                    </nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="languages-mobile">
            <div class="flex flex-y-center flex-x-end gap-14">
              <nuxt-link
                v-for="locale in availableLocales"
                :key="locale.code"
                exact
                :to="switchLocalePath(locale.code)"
                class="languages-mobile__link"
              >
                {{ locale.name }}
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="flex flex-x-end">
          <div class="burger-wrapper" @click="showBody">
            <button type="submit" :class="['burger', { active: isBodyActive }]">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          id: 1,
          to: '/',
          name: 'home',
        },
        {
          id: 2,
          to: '/about-us',
          name: 'about',
        },
        {
          id: 3,
          to: '/services',
          path: ['/services'],
          name: 'services',
        },
        {
          id: 4,
          to: '/news',
          path: ['/news', '/news/:id'],
          name: 'news',
        },
        {
          id: 5,
          to: '/laws',
          path: ['/laws'],
          name: 'normative',
        },
        {
          id: 6,
          to: '/orders',
          path: ['/orders', '/orders/:id'],
          name: 'orders',
        },
        {
          id: 7,
          to: '/contact-us',
          path: ['/contact-us'],
          name: 'contact',
        },
      ],
      activeId: null,
      isActive: false,
      isBurgerActive: false,
      isBodyActive: false,
    }
  },
  watch: {
    $route: function (val) {
      if (val.name === `news-id___${this.$i18n.locale}`) {
        this.activeId = 4
        this.$cookie.set('activeId', 4)
      }
    },
  },
  methods: {
    goPage(path) {
      this.activeId = path.id
      this.$cookie.set('activeId', path.id)
      this.isBodyActive = false
      this.$router.push(this.localeLocation(path.to))
      if (document.querySelector('.wrapper').classList.contains('_lock')) {
        document.querySelector('.wrapper').classList.remove('_lock')
      }
    },
    showBody() {
      if (document.querySelector('.wrapper').classList.contains('_lock')) {
        document.querySelector('.wrapper').classList.remove('_lock')
      } else {
        document.querySelector('.wrapper').classList.add('_lock')
      }
      this.isBodyActive = !this.isBodyActive
    },
    closeBody() {
      document.querySelector('.wrapper').classList.remove('_lock')
      this.isBodyActive = false
    },
  },

  mounted() {
    if (this.$cookie.get('activeId')) {
      this.activeId = Number(this.$cookie.get('activeId'))
    } else {
      this.activeId = 1
    }
    let className = 'scroll'
    let scrollTrigger = 1
    let wrapper = document.querySelector('.wrapper')
    wrapper.onscroll = function () {
      if (
        wrapper.scrollTop >= scrollTrigger ||
        window.pageYOffset >= scrollTrigger
      ) {
        document.querySelector('.header').classList.add(className)
      } else {
        document.querySelector('.header').classList.remove(className)
      }
    }
    wrapper.addEventListener('scroll', (e) => {
      if (e.target.scrollTop > 30) {
        this.header = true
      } else {
        this.header = false
      }
    })
  },

  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
    selectedLocale() {
      return this.$i18n.locales.filter((i) => i.code === this.$i18n.locale)
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 101;
  min-height: 115px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--white-opacity);
  border-bottom: 1px solid var(--border-header);
  box-shadow: 0px 3px 4px rgba(202, 213, 223, 0.75);
  backdrop-filter: blur(15px);
  transition: 0.5s;

  &.scroll {
    @media (min-width: 992px) {
      min-height: 70px;
      .header__top {
        position: absolute;
        top: -1000px;
        margin-bottom: 0;
      }
      .header-menu__logo {
        opacity: 1;
        min-width: 50px;
        height: 40px;
        visibility: visible;
        margin-right: 30px;
      }
    }
  }
  &__wrapper {
  }

  @media (max-width: 992px) {
    min-height: 120px;
  }
  @media (max-width: 767px) {
    min-height: 100px;
  }
  @media (max-width: 479px) {
    min-height: 70px;
  }
  // .header__container

  &__container {
    &::after {
      content: '';
      position: absolute;
      z-index: 101;
      width: 100%;
      left: 0;
      bottom: -2px;
      box-shadow: 0px 3px 4px rgba(202, 213, 223, 0.25);
      backdrop-filter: blur(15px);
      height: 3px;
    }
  }

  // .header__top

  &__top {
    margin-bottom: 8px;
    position: relative;
    z-index: 101;
    transform: 0.6s;
    @media (max-width: 992px) {
      margin-bottom: 8px;
    }
  }

  // .header__top-left

  &__top-left {
    display: flex;
    align-items: center;
    gap: 13px;
    @media (max-width: 479px) {
      gap: 10px;
    }
  }

  // .header__top-left-logo

  &__top-left-logo {
    width: 75px;
    height: 60px;
    img {
      width: 100%;
      height: 100%;
    }
    @media (max-width: 767px) {
      width: 50px;
      height: 35px;
    }
    @media (max-width: 479px) {
      width: 27.78px;
      height: 22px;
    }
  }

  // .header__top-left-title

  &__top-left-title {
    color: var(--primary);
    font-weight: 700;
    font-size: 17px;
    line-height: calc(22 / 17) * 100%;
    max-width: 400px;
    p {
      font-weight: 400;
    }
    @media (max-width: 767px) {
      font-size: 10px;
    }
    @media (max-width: 479px) {
      font-size: 8px;
    }
  }

  // .header__top-right

  &__top-right {
    display: flex;
    align-items: center;
    gap: 13px;
    @media (max-width: 479px) {
      gap: 10px;
    }
  }

  // .header__top-right-title

  &__top-right-title {
    font-weight: 700;
    font-size: 17px;
    line-height: calc(22 / 17) * 100%;
    text-transform: uppercase;
    text-align: right;
    color: var(--primary);
    @media (max-width: 767px) {
      font-size: 10px;
    }
    @media (max-width: 479px) {
      font-size: 8px;
    }
  }

  // .header__top-right-logo

  &__top-right-logo {
    width: 60px;
    height: 60px;
    img {
      width: 100%;
      height: 100%;
    }
    @media (max-width: 767px) {
      width: 50px;
      height: 50px;
    }
    @media (max-width: 479px) {
      width: 22px;
      height: 22px;
    }
  }
}
.header-menu {
  &.active {
    .header-menu__body {
      left: 0;
    }
  }
  // .header-menu__body

  &__body {
    display: flex;
    align-items: center;
    @media (max-width: 992px) {
      position: fixed;
      left: -100%;
      top: 0;
      width: 100%;
      height: 100vh;
      background-color: #fff;
      z-index: 100;
      display: block;
      transition: 0.3s ease 0s;
      overflow: hidden;
    }
  }

  &__logo {
    width: 0px;
    height: 0px;
    opacity: 0;
    visibility: hidden;
    transition: 0.3s;
    img {
      width: 100%;
      height: 100%;
    }
    @media (max-width: 767px) {
      display: none;
    }
  }

  // .header-menu__list

  &__list {
    display: flex;
    gap: 25px;
    flex: 1 1 auto;

    @media (max-width: 1100px) {
      gap: 20px;
    }
    @media (max-width: 992px) {
      flex-direction: column;
      padding: 150px 20px 0;
      height: calc(100% - 100px);
    }
    @media (max-width: 767px) {
      flex-direction: column;
      padding: 120px 20px 0;
    }
  }

  // .header-menu__item

  &__item {
  }

  // .header-menu__link

  &__link {
    font-weight: 600;
    font-size: 16px;
    line-height: 34px;
    color: var(--gray);
    white-space: nowrap;
    cursor: pointer;
    padding: 15px;
    position: relative;
    &.active {
      color: var(--primary);
      &::after {
        content: '';
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
        width: 80%;
        height: 2px;
        background-color: var(--primary);
      }
    }
    &:hover {
      color: var(--primary);
    }
  }
}
.languages {
  position: relative;
  @media (max-width: 992px) {
    display: none;
  }
  &.active {
    .languages__icon {
      rotate: 180deg;
    }
    .languages__list {
      transform: translateY(0);
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
    }
  }

  &.active {
    .languages__icon {
      rotate: 180deg;
      color: var(--primary);
    }
    .languages__list {
      transform: translateY(0);
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
    }
    .languages__name {
      color: var(--primary);
    }
  }

  &__lng-active {
    cursor: pointer;
    &:hover {
      transform: translateY(0);
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
    }
    &:hover {
      transform: translateY(0);
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
    }
  }

  &__name {
    font-weight: 600;
    font-size: 16px;
    line-height: 34px;
    color: var(--gray);
  }

  &__icon {
    transition: 0.3s;
  }

  &__list {
    position: absolute;
    top: 40px;
    left: -50%;
    padding: 8px;
    border: 1px solid var(--border);
    box-shadow: 0px 16px 20px -8px rgba(17, 12, 34, 0.1);
    border-radius: 8px;
    width: 100px;
    height: 100px;
    transform: translateY(-15px);
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transition: 0.3s;
    z-index: 100;
    background-color: #fff;
  }

  &__item {
    height: 40px;
  }

  &__link {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--gray-dark);
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    transition: 0.3s all;
    border-radius: 8px;
    cursor: pointer;
    &:hover {
      color: var(--primary);
      background-color: var(--hover);
    }
    &.nuxt-link-exact-active,
    &.nuxt-link-active {
      color: var(--primary);
      background-color: var(--hover);
    }
  }
}
.languages-mobile {
  padding-right: 20px;
  display: none;
  @media (max-width: 992px) {
    display: block;
  }
  &__link {
    font-weight: 600;
    font-size: 16px;
    line-height: calc(34 / 16) * 100%;
    color: var(--gray);
    &.nuxt-link-exact-active,
    &.nuxt-link-active {
      color: var(--primary);
    }
  }
}
.burger-wrapper {
  @media (max-width: 992px) {
    background-color: transparent;
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    position: relative;
    z-index: 101;
    margin-right: 15px;
  }
  @media (max-width: 767px) {
    margin-right: 10px;
  }
  @media (max-width: 479px) {
    margin: -1px;
  }
}
.burger {
  display: none;
  @media (max-width: 991px) {
    display: block;
    cursor: pointer;
    min-width: 18px;
    height: 14px;
    position: relative;
    z-index: 102;
    background-color: transparent;
    display: flex;
    justify-content: center;
  }
  span {
    transition: 0.3s;
    height: 3px;
    position: absolute;
    border-radius: 10px;
    background-color: var(--primary);
    transition: 0.1s;
    &:nth-child(1) {
      top: 0;
      width: 100%;
      transition: 0.1s;
    }
    &:nth-child(2) {
      top: calc(50% - 1px);
      width: 100%;
      transition: 0.1s;
    }
    &:nth-child(3) {
      top: calc(100% - 2px);
      width: 100%;
      transition: 0.1s;
    }
  }
  &.active {
    span {
      transition: 0.1s;
      &:nth-child(1) {
        top: 50%;
        transform: rotate(45deg);
      }
      &:nth-child(2) {
        display: none;
      }
      &:nth-child(3) {
        transform: rotate(-45deg);
        top: 50%;
      }
    }
  }
}
</style>
