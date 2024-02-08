<template>
  <pop-up title="Slider goşmak" class="pop-up-slider" width="750">
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
      <base-col cols="3"></base-col>

      <base-col cols="9" rows="1">
        <base-input
          @updateValue="(val) => (this.main.date = val)"
          :value="this.main.date"
          type="date"
          label="Time"
          height="46"
        ></base-input>
      </base-col>
      <base-col cols="3"></base-col>
      <base-col cols="9" rows="1">
        <base-files-input
          :label="`Документ`"
          placeholder="-----"
          :value="fileName"
          accept=".pdf"
          @changeFile="(files) => changeAcceptFile(files)"
        ></base-files-input>
      </base-col>

      <base-col cols="8"></base-col>
      <base-col cols="2">
        <base-button widthFull cancel>Ýatyrmak</base-button></base-col
      >
      <base-col cols="2">
        <base-button @clickedButton="add" widthFull lowerCase
          >Goşmak</base-button
        >
      </base-col>
    </base-row>
  </pop-up>
</template>

<script>
import { addLaw } from '@/api/admin.api'
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      activeLang: 'tm',
      fileName: '',
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

    changeAcceptFile(files) {
      this.main.file = files[0]
      this.fileName = files[0].name
    },

    async add() {
      try {
        const { data, status } = await addLaw({ data: this.main })
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
