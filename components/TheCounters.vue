<template>
  <section ref="observe" class="counters">
    <div class="counters__container __container">
      <base-title class="counters__title" title="competitions" />
      <div class="counters__elements">
        <div class="counters__counter" v-for="item in items" :key="item.uuid">
          <p class="counter" :data-target="item.number">
            {{ item.number }}
          </p>
          <h4
            v-if="normalizeTextByLang(item, 'title')[$i18n.locale]"
            v-html="normalizeTextByLang(item, 'title')[$i18n.locale]"
          ></h4>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { getCounter } from '@/api/user.api'
export default {
  data() {
    return {
      items: [],
    }
  },

  async fetch() {
    await this.fetchCounter()
  },

  methods: {
    async fetchCounter() {
      try {
        const { data, status } = await getCounter()
        if (!status) return
        this.items = data.data
      } catch (error) {
        console.log(error)
      }
    },

    normalizeTextByLang(dontNormalItem, prefix = 'title') {
      return {
        tm: dontNormalItem[`${prefix}_tm`],
        ru: dontNormalItem[`${prefix}_ru`],
        en: dontNormalItem[`${prefix}_en`],
      }
    },

    // updateCount() {
    //   const counters = document.querySelectorAll('.counter')
    //   const speed = 100
    //   counters.forEach((number) => {
    //     const update = () => {
    //       let target = +number.getAttribute('data-target')
    //       let number = +number.innerText
    //       let inc = target / speed
    //       if (number < target) {
    //         number.innerText = Math.ceil(number + inc)
    //         setTimeout(update, 25)
    //       } else {
    //         number.innerText = target
    //       }
    //     }
    //     number.innerText = Number(0)
    //     update()
    //   })
    // },
  },

	 mounted() {
    // const options =
    //   {
    //     rootMargin: '0px',
    //     threshold: 1.0,
    //   } || {}
    // this.observer = new IntersectionObserver(([entry]) => {
    //   if (entry && entry.isIntersecting) {
    //     this.updateCount()
    //   }
    // }, options)
    // this.observer.observe(this.$refs.observe)
  },
  // destroyed() {
  //   this.observer.disconnect()
  // },
}
</script>

<style lang="scss" scoped>
.counters {
  margin-bottom: 100px;
  @media (max-width: 767px) {
    margin-bottom: 40px;
  }
  &__title {
    text-align: center;
    margin-bottom: 50px;
    @media (max-width: 767px) {
      margin-bottom: 30px;
    }
  }

  &__elements {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    margin: 0 70px;
    @media (max-width: 767px) {
      grid-template-columns: 1fr 1fr;
      margin: 0;
      gap: 20px;
    }
    @media (max-width: 479px) {
      grid-template-columns: 1fr;
      gap: 14px;
    }
  }

  &__counter {
    background: var(--light-blue);
    box-shadow: 0px 0px 6px rgba(92, 92, 92, 0.16);
    border-radius: 24px;
    padding: 43px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 767px) {
      padding: 30px 0;
    }
    @media (max-width: 479px) {
      padding: 20px;
    }

    p {
      font-weight: 600;
      font-size: 80px;
      line-height: calc(86 / 80) * 100%;
      color: var(--gray);
      margin-bottom: 10px;
      @media (max-width: 767px) {
        font-size: 60px;
      }
    }

    h4 {
      font-weight: 400;
      font-size: 20px;
      line-height: calc(26 / 20) * 100%;
      text-transform: uppercase;
      @media (max-width: 767px) {
        font-size: 16px;
      }
    }
  }
}
</style>
