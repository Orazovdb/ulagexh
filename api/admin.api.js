import { request } from './generic.api'

//Login
export const login = ({ data }) => request({ url: 'admin/login', data })

// slider
export const getSlider = () => request({ url: 'admin/slider/get', method: 'get' })
export const addSlider = ({ data }) => request({ url: 'admin/slider/add', data, file: true })
export const deleteSlider = ({ data }) => request({ url: 'admin/slider/delete', data })

// about-us
export const getAbout = () => request({ url: 'admin/about/get', method: 'get' })
export const addAbout = ({ data }) => request({ url: 'admin/about/add', data, file: true })
export const deleteAbout = ({ data }) => request({ url: 'admin/about/delete', data })
//
export const getAboutGallery = () => request({ url: 'admin/about/get-gallery', method: 'get' })
export const addAboutGallery = ({ data }) => request({ url: 'admin/about/add-gallery', data, file: true })
export const deleteAboutGallery = ({ data }) => request({ url: 'admin/about/delete-gallery', data })

// counter
export const getCounter = () => request({ url: 'admin/counter/get', method: 'get' })
export const addCounter = ({ data }) => request({ url: 'admin/counter/add', data })
export const deleteCounter = ({ data }) => request({ url: 'admin/counter/delete', data })

// service
export const getService = () => request({ url: 'admin/service/get', method: 'get' })
export const addService = ({ data }) => request({ url: 'admin/service/add', data, file: true })
export const deleteService = ({ data }) => request({ url: 'admin/service/delete', data })

// news
export const getNews = ({ data }) => request({ url: `admin/news/get?l=${data.l}&p=${data.p}`, method: 'get' })
export const addNews = ({ data }) => request({ url: 'admin/news/add', data, file: true })
export const deleteNews = ({ data }) => request({ url: 'admin/news/delete', data })

// laws
export const getLaw = ({ data }) => request({ url: `admin/law/get?l=${data.l}&p=${data.p}`, method: 'get' })
export const addLaw = ({ data }) => request({ url: 'admin/law/add', data, file: true })
export const deleteLaw = ({ data }) => request({ url: 'admin/law/delete', data })

// orders
export const getOrderPhysic = () => request({ url: 'client/user/get-order', method: 'get' })
export const deleteOrder = ({ data }) => request({ url: 'admin/order/delete', data })

export const getOrderLaw = () => request({ url: 'admin/law/get', method: 'get' })
export const deleteOrderLaw = ({ data }) => request({ url: 'admin/law/delete', data })

// contact
export const getContact = () => request({ url: 'admin/contact/get', method: 'get' })
export const deleteContact = ({ data }) => request({ url: 'admin/contact/delete', data })

