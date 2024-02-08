import axios from 'axios'
const baseURL = process.env.BASE_API

export const request = async ({
  url,
  method = 'post',
  headers = {},
  params = {},
  data = {},
  onUploadProgress = {},
  file = false,
}) => {
  if (file) {
    const formData = new FormData()
    headers['Accept'] = 'application/json'
    headers['Content-Type'] = 'multipart/form-data'
    if (data?.files?.length) {
      for (let i = 0; i < data.files.length; i++) {
        formData.append('file', data.files[i])
      }
    } else {
      for (let [key, value] of Object.entries(data)) {
        formData.append(key, value)
      }
    }

    data = formData
  }
  if (process.client) {
    localStorage.getItem('authorization') &&
      (headers['authorization'] = localStorage.getItem('authorization'))
  }

  return axios({
    url: `${baseURL}/${url}`,
    method,
    headers,
    ...onUploadProgress,
    params,
    data,
  })
}
