export default async function (app) {
  let token = app.$cookie.get('authorization')

  if (!token) {
    return app.redirect('/admin/login')
  }
}
