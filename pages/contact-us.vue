<template>
  <div class="contact-us-page">
    <div class="contact-us-page__container">
      <base-title title="contact" class="contact-us-page__title" />
      <div class="contact-us-page__contacts">
        <div class="contact-us-page__row">
          <the-contact v-for="item in contacts" :key="item.id" :item="item" />
        </div>
      </div>
      <div class="contact-us-page__form">
        <the-contact-items />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contacts: [
        {
          id: 1,
          title: 'phoneNumber',
          number: '+99312760436;',
          number: '+99312760486;',
        },
        {
          id: 2,
          title: 'ourEmail',
          email: 'Awto@sanly.tm',
        },
        {
          id: 3,
          title: 'ourAddress',
          text: 'adress',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.contact-us-page {
  padding: 70px 0 120px;
  @media (max-width: 767px) {
    padding: 40px 0 100px;
  }
  &__title {
    margin-bottom: 40px;
    text-align: center;
    @media (max-width: 767px) {
      margin-bottom: 40px;
    }
  }

  &__contacts {
    max-width: 1200px;
    margin: 0 auto;
    @media (max-width: 479px) {
      max-width: 400px;
    }
  }

  &__row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-content: center;
    gap: 15px;
    @media (max-width: 992px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 767px) {
      gap: 10px;
    }
    @media (max-width: 479px) {
      grid-template-columns: 1fr;
    }
  }

  &__form {
    margin-top: 40px;
    @media (max-width: 767px) {
      margin-top: 30px;
    }
  }
}
</style>
