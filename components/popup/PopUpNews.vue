<template>
  <pop-up title="Slider goşmak" class="pop-up-slider">
    <base-languages
      @selectLanguage="toggleLanguage"
      :activeLang="activeLang"
    ></base-languages>
    <base-row>
      <base-col cols="9">
        <base-textarea
          @updateValue="(val) => (main[`title_${activeLang}`] = val)"
          :value="main[`title_${activeLang}`]"
          label="Title"
          height="46"
        ></base-textarea>
      </base-col>
      <base-col cols="3"></base-col>
      <base-col cols="9" rows="4">
        <base-textarea
          @updateValue="(val) => (main[`text_${activeLang}`] = val)"
          :value="main[`text_${activeLang}`]"
          label="Text"
          height="126"
        ></base-textarea>
      </base-col>
      <base-col cols="3" rows="5" class="mt-3">
        <base-file-input
          @file="(event) => (this.main.file = event)"
        ></base-file-input>
      </base-col>
      <base-col cols="9" rows="1">
        <base-input
          @updateValue="(val) => (this.main.date = val)"
          :value="this.main.date"
          type="date"
          label="Time"
          height="46"
        />
      </base-col>
      <base-col cols="8"></base-col>
      <base-col cols="2">
        <base-button @clickedButton="close" widthFull cancel>
          Ýatyrmak
        </base-button>
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
import { addNews } from '@/api/admin.api'
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
        text_tm: '',
        text_ru: '',
        text_en: '',
        date: '',
        file: null,
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
        const { data, status } = await addNews({ data: this.main })
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
