<template>
  <div class="orders-legal">
    <base-page-map to="/orders" name="legalEntity"></base-page-map>
    <base-title class="orders-legal__title" title="orders"></base-title>
    <h3 class="orders-legal__subtitle">Ýuridiki şahs</h3>
    <div class="orders-legal__form-wrapper">
      <form class="orders-legal__form" action="#">
        <div class="orders-legal__row">
          <base-input
            label="Edaranyň ady"
            @updateValue="(val) => (main['name_office'] = val)"
            :value="main.name_office"
          ></base-input>
          <base-input
            label="Nireden"
            @updateValue="(val) => (main['from_where'] = val)"
            :value="main.from_where"
          ></base-input>
          <base-input
            label="Jogapkäriň familiýasy, ady"
            @updateValue="(val) => (main['name'] = val)"
            :value="main.name"
          ></base-input>
          <base-input
            label="Telefon belgiňiz"
            @updateValue="(val) => (main['number'] = val)"
            :value="main.number"
            type="number"
          >
          </base-input>
          <base-input
            label="Nirä"
            @updateValue="(val) => (main['to_where'] = val)"
            :value="main.to_where"
          >
          </base-input>
          <base-input
            label="E-mail"
            @updateValue="(val) => (main['email'] = val)"
            :value="main.email"
            type="email"
          >
          </base-input>
          <base-input
            label="Ýüküň görnüşi"
            @updateValue="(val) => (main['stuff_type'] = val)"
            :value="main.stuff_type"
          >
          </base-input>
          <base-input
            label="Ulagyň barmaly senesi"
            @updateValue="(val) => (main['car_date'] = val)"
            :value="main.car_date"
            type="date"
          >
          </base-input>
          <base-input
            label="Ýüküň agramy"
            @updateValue="(val) => (main['stuff_weight'] = val)"
            :value="main.stuff_weight"
            type="number"
          >
          </base-input>
        </div>
        <div class="orders-legal__textarea-wrapper">
          <base-textarea
            label="Bellik"
            @updateValue="(val) => (main['note'] = val)"
            :value="main.note"
            class="mb-2"
          ></base-textarea>
          <base-button
            widthFull
            @clickedButton="$store.commit('openPopup', true)"
            >Ugrat</base-button
          >
        </div>
      </form>
      <pop-up-agree @close="close" @send="add" v-if="isPopup"></pop-up-agree>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { addOrderPhysic } from '@/api/user.api'

export default {
  data() {
    return {
      main: {
        name: '',
        from_where: '',
        number: 0,
        to_where: '',
        email: '',
        stuff_type: '',
        car_date: '',
        stuff_weight: 0,
        note: '',
        name_office: '',
      },
    }
  },

  computed: {
    ...mapGetters(['isPopup']),
  },

  methods: {
    created() {
      this.$store.commit('setTextButton', 'Şotçik goşmak')
    },

    close() {
      Object.keys(this.main).forEach((key) => (this.main[key] = null))
      this.$store.commit('openPopup', false)
    },

    async add() {
      try {
        const { data, status } = await addOrderPhysic({ data: this.main })
        if (!status) return
        Object.keys(this.main).forEach((key) => (this.main[key] = null))
        this.$store.commit('openPopup', false)
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.orders-legal {
  &__title {
    text-align: center;
    @media (max-width: 767px) {
      margin-bottom: 4px;
    }
  }

  &__subtitle {
    font-weight: 400;
    font-size: 30px;
    line-height: calc(36 / 30) * 100%;
    color: var(--gray);
    text-align: center;
    @media (max-width: 767px) {
      font-size: 20px;
      line-height: calc(23 / 20) * 100%;
    }
    @media (max-width: 479px) {
      font-size: 14px;
      line-height: calc(17 / 14) * 100%;
    }
  }

  &__form-wrapper {
    margin-top: 20px;
    @media (max-width: 767px) {
      margin-top: 30px;
    }
  }

  &__form {
    width: 100%;
    flex-direction: column;
  }

  &__row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 30px;
    row-gap: 14px;
    @media (max-width: 600px) {
      grid-template-columns: 1fr;
    }
  }

  &__textarea-wrapper {
    max-width: 660px;
    margin: 0 auto;
    margin-top: 14px;
  }
}
</style>
