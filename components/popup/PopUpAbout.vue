<template>
  <pop-up title="Title goşmak" class="pop-up-slider">
    <base-languages
      @selectLanguage="toggleLanguage"
      :activeLang="activeLang"
    ></base-languages>
    <base-row>
      <base-col cols="12">
        <base-textarea
          @updateValue="(val) => (main[`text_${activeLang}`] = val)"
          :value="main[`text_${activeLang}`]"
          label="Biz barada text"
          height="126"
        ></base-textarea>
      </base-col>
      <base-col cols="8"></base-col>
      <base-col cols="2">
        <base-button widthFull cancel>Ýatyrmak</base-button>
      </base-col>
      <base-col cols="2">
        <base-button @clickedButton="add" widthFull lowerCase
          >Goşmak</base-button
        >
      </base-col>
    </base-row>
  </pop-up>
</template>

<script>
import { addAbout } from '@/api/admin.api'
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
        text_tm: '',
        text_ru: '',
        text_en: '',
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

    async add() {
      try {
        const { data, status } = await addAbout({ data: this.main })
        if (!status) return
        this.$store.commit('openPopup', false)
      } catch (error) {
        console.log(error)
      }
    },

    close() {
      Object.keys(this.main).forEach((key) => (this.main[key] = null))
      this.$store.commit('openPopup', false)
    },
  },
}
</script>

<style lang="scss" scoped></style>
