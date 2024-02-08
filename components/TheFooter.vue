<template>
  <footer class="footer">
    <div class="footer__wrapper">
      <div class="footer__row __container">
        <div class="footer__logo-wrapper">
          <div class="footer__logo">
            <img src="@/assets/img/logo.png" alt="" />
          </div>
          <h4 class="footer__title">
            <span>{{ $t('title') }} </span>
            {{ $t('subtitle') }}
          </h4>
        </div>
        <div class="footer__right">
          <nav class="footer__menu">
            <h4 class="footer__menu-title">{{ $t('pages') }}</h4>
            <ul class="footer__list">
              <li v-for="link in links" :key="link.id" class="footer__item">
                <a @click.prevent="goPage(link.to)" :class="['footer__link']">
                  {{ $t(link.name) }}
                </a>
              </li>
            </ul>
          </nav>
          <div class="footer__contact-us">
            <h4 class="footer__menu-title">{{ $t('contact') }}</h4>
            <ul class="footer__list-contact-us">
              <li class="footer__item-contact-us">
                <div class="footer__icon-contact-us">
                  <img src="@/assets/img/footer-contact_call.png" alt="" />
                </div>
                <div class="footer__content-contact-us">
                  <a href="tel:+99312760436">+99312760436</a>
                  <a href="tel:+99312760436">+99312760436</a>
                </div>
              </li>
              <li class="footer__item-contact-us">
                <div class="footer__icon-contact-us">
                  <img src="@/assets/img/footer-contact_email.png" alt="" />
                </div>
                <div class="footer__content-contact-us">
                  <a href="mailto:Awto@sanly.tm">
                    Awto@sanly.tm
                  </a>
                </div>
              </li>
              <li class="footer__item-contact-us">
                <div class="footer__icon-contact-us">
                  <img src="@/assets/img/footer-contact_adress.png" alt="" />
                </div>
                <div class="footer__content-contact-us">
                  <p>{{ $t('adress') }}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-sequrity">
        <div class="footer-sequrity__text">
          <div class="_container">
            <div class="flex flex-x-center gap-100">
              <p>{{ $t('footerText') }}</p>
              <p>{{ $t('footerText2') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
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
          name: 'services',
        },
        {
          id: 4,
          to: '/news',
          name: 'news',
        },
        {
          id: 5,
          to: '/laws',
          name: 'normative',
        },
        {
          id: 6,
          to: '/orders',
          name: 'orders',
        },
        {
          id: 7,
          to: '/contact-us',
          name: 'contact',
        },
      ],
    }
  },

  methods: {
    goPage(path) {
      this.isBodyActive = false
      this.localeLocation(this.$router.push(path))
    },
  },
}
</script>

<style lang="scss" scoped>
.gap-100 {
  gap: 20px;
}
.footer {
  background-color: var(--primary);

  &__container {
  }

  &__row {
    padding: 20px 20px;
    @media (max-width: 767px) {
      padding: 16px 20px;
    }
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    gap: 6px;
    @media (max-width: 767px) {
      grid-template-columns: 1fr;
    }
  }

  &__logo-wrapper {
    max-width: 370px;
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    @media (max-width: 767px) {
      max-width: 200px;
      margin: 0 auto;
      margin-bottom: 18px;
    }
  }

  &__logo {
    text-align: center;
    max-width: 117px;
    margin-bottom: 12px;
    img {
      width: 100%;
      height: 100%;
    }
    @media (max-width: 767px) {
      width: 80px;
      height: 68px;
      margin-bottom: 7px;
    }
    @media (max-width: 479px) {
      width: 60px;
      height: 48px;
      margin-bottom: 7px;
    }
  }

  &__title {
    font-weight: 600;
    font-size: 17px;
    line-height: calc(22 / 17) * 100%;
    color: #fff;
    text-align: center;
    span {
      font-weight: 200;
    }
    @media (max-width: 767px) {
      font-size: 14px;
    }
    @media (max-width: 767px) {
      font-size: 12px;
    }
  }

  &__right {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  &__menu {
  }

  &__menu-title {
    font-weight: 500;
    font-size: 20px;
    line-height: calc(27 / 20) * 100%;
    text-transform: uppercase;
    margin-bottom: 14px;
    color: #fff;
    @media (max-width: 767px) {
      font-size: 16px;
      line-height: calc(19 / 16) * 100%;
      margin-bottom: 10px;
    }
    @media (max-width: 479px) {
      font-size: 14px;
      line-height: calc(17 / 14) * 100%;
    }
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    @media (max-width: 767px) {
      gap: 10px;
    }
  }

  &__item {
  }

  &__link {
    font-weight: 500;
    font-size: 16px;
    line-height: calc(26 / 16) * 100%;
    color: #fff;
    cursor: pointer;
    @media (max-width: 767px) {
      font-size: 14px;
      line-height: calc(18 / 14) * 100%;
    }
    @media (max-width: 479px) {
      font-size: 12px;
      line-height: calc(16 / 12) * 100%;
    }
  }

  &__contact-us {
  }

  &__list-contact-us {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  &__item-contact-us {
    display: flex;
    align-items: center;
    gap: 12px;
    @media (max-width: 767px) {
      gap: 6px;
    }
  }

  &__icon-contact-us {
    min-width: 50px;
    height: 50px;
    img {
      width: 100%;
      height: 100%;
    }
    @media (max-width: 767px) {
      min-width: 40px;
      height: 40px;
    }
    @media (max-width: 479px) {
      min-width: 30px;
      height: 30px;
    }
  }

  &__content-contact-us {
    display: flex;
    flex-direction: column;
    gap: 10px;
    a,
    p {
      color: #fff;
      font-weight: 400;
      font-size: 16px;
      line-height: calc(22 / 16) * 100%;
    }
    @media (max-width: 767px) {
      gap: 4px;
      a,
      p {
        font-size: 14px;
        line-height: calc(18 / 14) * 100%;
      }
    }
    @media (max-width: 767px) {
      gap: 4px;
      a,
      p {
        font-size: 12px;
        line-height: calc(18 / 12) * 100%;
      }
    }
  }
}
.footer-sequrity {
  padding: 6px 0;
  background-color: var(--primary-dark);
  @media (max-width: 767px) {
    padding: 13px 0;
  }
  &__text {
    text-align: center;
    p {
      font-weight: 600;
      font-size: 14px;
      line-height: calc(34 / 16) * 100%;
      color: #fff;
    }
    @media (max-width: 767px) {
      p {
        font-size: 10px;
        line-height: calc(14 / 10) * 100%;
      }
    }
  }
}
</style>
