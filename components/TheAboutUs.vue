<template>
  <section class="about-us">
    <div class="about-us__container __container">
      <div class="about-us__row">
        <base-title class="about-us__title-mobile" title="about" />
        <div class="about-us__image">
          <img src="@/assets/img/about-us.png" alt="" />
        </div>
        <div class="about-us__content">
          <base-title class="about-us__title" title="about" />
          <p class="about-us__text">
            {{ $t('aboutText') }}
          </p>
          <div class="about-us__contact flex flex-y-center gap-10">
            <div class="about-us__contact-image">
              <img src="@/assets/img/contact_call.png" alt="" />
            </div>
            <div class="about-us__contact-content">
              <h3 class="about-us__contact-title">{{ $t('contact') }}</h3>
              <span class="about-us__contact-phone">+99312760436</span>
              <span class="about-us__contact-phone">+99312760486</span>
            </div>
          </div>
          <div class="about-us__button-wrapper">
            <base-button @clickedButton="navigateToAboutUs">
              {{ $t('more') }}
            </base-button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    navigateToAboutUs() {
      const path =
        this.$i18n.locale === 'tm'
          ? '/about-us'
          : `/${this.$i18n.locale}/about-us`
      this.$router.push(path)
    },
  },
}
</script>

<style lang="scss" scoped>
.about-us {
  margin-bottom: 100px;
  @media (max-width: 767px) {
    margin-bottom: 60px;
  }

  &__container {
  }

  &__row {
    display: grid;
    align-items: center;

    grid-template-columns: 500px 1fr;
    justify-content: space-between;
    gap: 50px;
    @media (max-width: 992px) {
      grid-template-columns: 400px 1fr;
      gap: 30px;
    }
    @media (max-width: 767px) {
      grid-template-columns: 1fr;
      gap: 14px;
    }
  }

  &__title-mobile {
    display: none;
    @media (max-width: 767px) {
      display: block;
      margin-bottom: 6px;
      text-align: center;
    }
  }

  &__image {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      border-radius: 26px;
    }
  }

  &__content {
  }

  &__title {
    margin-bottom: 30px;
    @media (max-width: 767px) {
      display: none;
    }
  }

  &__text {
    font-weight: 400;
    font-size: 20px;
    line-height: calc(40 / 24) * 100%;
    color: var(--light-gray);
    margin-bottom: 40px;
    @media (max-width: 767px) {
      font-size: 14px;
      margin-bottom: 14px;
    }
  }

  &__contact {
    margin-bottom: 30px;
    @media (max-width: 767px) {
      margin-bottom: 20px;
    }
  }

  &__contact-image {
    width: 64px;
    height: 64px;
    img {
      width: 100%;
      height: 100%;
    }
    @media (max-width: 767px) {
      width: 50px;
      height: 50px;
    }
    @media (max-width: 479px) {
      width: 40px;
      height: 40px;
    }
  }

  &__contact-content {
  }

  &__contact-title {
    font-weight: 600;
    font-size: 14px;
    line-height: 100%;
    color: var(--primary-dark);
    margin-bottom: 12px;
    @media (max-width: 767px) {
      margin-bottom: 6px;
    }
  }

  &__contact-phone {
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    color: (--light-black);
  }

  &__button-wrapper {
    @media (max-width: 767px) {
      display: flex;
      justify-content: center;
    }
  }
}
</style>
