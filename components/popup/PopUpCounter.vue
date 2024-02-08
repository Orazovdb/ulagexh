<template>
  <pop-up title="Text goşmak" class="pop-up-slider">
    <base-languages
      @selectLanguage="toggleLanguage"
      :activeLang="activeLang"
    ></base-languages>
    <base-row>
      <base-col cols="12" class="mb-2">
        <base-input
          label="Number"
          height="46"
          @updateValue="(val) => (main['number'] = val)"
          :value="main.number"
          type="number"
        ></base-input>
      </base-col>
      <base-col cols="12">
        <base-textarea
          label="Text"
          height="46"
          @updateValue="(val) => (main[`title_${activeLang}`] = val)"
          :value="main[`title_${activeLang}`]"
        ></base-textarea>
      </base-col>
      <base-col cols="8"></base-col>
      <base-col cols="2">
        <base-button @clickedButton="close" widthFull cancel>
          Ýatyrmak
        </base-button>
      </base-col>
      <base-col cols="2">
        <base-button @clickedButton="add" widthFull lowerCase>
          Goşmak
        </base-button>
      </base-col>
    </base-row>
  </pop-up>
</template>

<script>
import { addCounter } from '@/api/admin.api'
export default {
  props: {
    item: {
      type: Object,
      default: () => null,
    },
  },
  data() {
    return {
      activeLang: 'tm',
      main: {
        title_tm: '',
        title_ru: '',
        title_en: '',
        number: 0,
      },
    }
  },

  mounted() {
    if (this.item.uuid) {
      this.main.uuid = this.item.uuid
      Object.keys(this.main).forEach((key) => (this.main[key] = this.item[key]))
    }
  },

  methods: {
    toggleLanguage(key) {
      this.activeLang = key
    },

    close() {
      Object.keys(this.main).forEach((key) => (this.main[key] = null))
      this.$store.commit('openPopup', false)
    },

    async add() {
      try {
        const { data, status } = await addCounter({ data: this.main })
        if (!status) return
        this.$store.commit('openPopup', false)
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
