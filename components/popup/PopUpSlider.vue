<template>
  <pop-up title="Slider goşmak" class="pop-up-slider">
    <base-languages @selectLanguage="toggleLanguage" :activeLang="activeLang" />
    <base-row>
      <base-col cols="9">
        <base-textarea
          @updateValue="(val) => (main[`title_${activeLang}`] = val)"
          :value="main[`title_${activeLang}`]"
          label="Slider title"
          height="126"
        ></base-textarea>
      </base-col>
      <base-col cols="3" class="mt-3">
        <base-file-input @file="(event) => (this.main.file = event)" />
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
import { addSlider } from '@/api/admin.api'
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
        file: null,
      },
    }
  },

  mounted() {
    if (this.item.uuid) {
      this.main.uuid = this.item.uuid
      Object.keys(this.main).forEach((key) => (this.main[key] = this.item[key]))
      this.main.file = null
    }
  },

  methods: {
    toggleLanguage(key) {
      this.activeLang = key
    },

    async add() {
      try {
        const { data, status } = await addSlider({ data: this.main })
        if (!status) return
        this.close()
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
