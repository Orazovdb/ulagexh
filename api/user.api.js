import { request } from './generic.api'

//Slider
export const getSlider = () => request({ url: 'client/user/get-slider', method: 'get' })

//about-us
export const getAbout = () => request({ url: 'client/user/get-about-us', method: 'get' })
export const getAboutGallery = () => request({ url: 'client/user/get-gallery', method: 'get' })

// counter
export const getCounter = () => request({ url: 'client/user/get-counter', method: 'get'})

// service
export const getService = () => request({ url: 'client/user/get-service', method: 'get'})

//news
export const getNews = ({params}) => request({ url: 'client/user/get-news', method: 'get', params:params})

export const getNewsId = ({ data }) => request({ url: `client/user/get-news-id/${data.id}`, method: 'get',  })

// laws
export const getLaws = ({params}) => request({ url: 'client/user/get-laws', method: 'get', params:params})

// orders 
export const addOrderPhysic = ({ data }) => request({ url: 'admin/order/add', data })

// contact
export const addContact = ({ data }) => request({ url: 'admin/contact/add', data })


