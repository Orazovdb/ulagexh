a
<template>
  <div class="contact-items">
    <div class="contact-items__row">
      <form class="contact-items__left" @submit.prevent>
        <div class="contact-items__items">
          <base-input
            @updateValue="(val) => (main['name'] = val)"
            :value="main.name"
            labelTranslated="yourName"
          ></base-input>
          <a href="mailto:Awto@sanly.tm">
            <base-input
              @updateValue="(val) => (main['email'] = val)"
              :value="main.email"
              labelTranslated="yourEmail"
              type="email"
            />
          </a>
          <base-input
            @updateValue="(val) => (main['subject'] = val)"
            :value="main.subject"
            labelTranslated="subject"
          />
          <div class="contact-items__textarea-wrapper">
            <base-textarea
              @updateValue="(val) => (main['note'] = val)"
              :value="main.note"
              rows="6"
            ></base-textarea>
          </div>
        </div>
        <base-button style="height: 46px" widthFull @clickedButton="add">
          {{ $t('send') }}
        </base-button>
      </form>
      <div class="contact-items__right">
        <div class="contact-items__map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1088.6232529195179!2d58.42628417084384!3d37.94161536802351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f6ffd2691f25fa9%3A0x9b05765facb0117d!2z0JDRiNGF0LDQsdCw0LTRgdC60L7QtSDQsNCy0YLQvtGC0YDQsNC90YHQv9C-0YDRgtC90L7QtSDQv9GA0LXQtNC_0YDQuNGP0YLQuNC1!5e0!3m2!1sru!2s!4v1687280320685!5m2!1sru!2s"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { addContact } from '@/api/user.api'
export default {
  data() {
    return {
      main: {
        name: '',
        email: '',
        subject: '',
        note: '',
      },
    }
  },
  methods: {
    async add() {
      if (
        !this.main.name ||
        !this.main.email ||
        !this.main.subject ||
        !this.main.note
      ) {
        alert('Boş meydanlary dolduryň')
        return
      }
      try {
        const { data, status } = await addContact({ data: this.main })
        if (!status) return
        Object.keys(this.main).forEach((key) => (this.main[key] = null))
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.contact-items {
  &__row {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 60px;
    align-items: center;
    @media (max-width: 767px) {
      grid-template-columns: 1fr;
      gap: 20px;
    }
  }

  &__left {
    @media (max-width: 767px) {
      order: 2;
    }
  }

  &__items {
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin-bottom: 20px;
  }

  &__textarea-wrapper {
    border-radius: 16px;
    textarea {
      width: 100%;
      resize: none;
      padding: 12px;
      border: 1px solid var(--gray-light);
      color: var(--gray-light);
      transition: 0.3s ease 0s;
      border-radius: 16px;
      font-size: 16px;
      background: transparent;

      &:focus {
        border: 1px solid var(--light-black);
        color: var(--light-black);
        background: #fff;
      }
    }
  }

  &__right {
    height: 100%;
    @media (max-width: 767px) {
      order: 1;
      height: 325px;
    }
  }

  &__map {
    height: 100%;
    iframe {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
