export default function ({ app }) {
  app.router.beforeEach((to, from, next) => {
      if (
        to.name !== 'login' &&
        to.name !== 'register' &&
        !app.store.getters.user.loggedIn
      ) {
        next({ name: 'login' })
      } else next()
  })
}
