export const state = () => ({
  isPopup: false,
  headerButtonText: '',
  imgURL: process.env.IMAGE_URL,
})

export const getters = {
  isPopup(state) {
    return state.isPopup
  },
  buttonText(state) {
    return state.headerButtonText
  },
  imgURL: (state) => {
    return state.imgURL
  },
}

export const mutations = {
  openPopup(state, status) {
    state.isPopup = status
  },
  setTextButton(state, text) {
    state.headerButtonText = text
  },
}
