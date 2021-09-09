export const state = () => ({
  user: {
    loggedIn: false,
    data: null,
  },
})

export const getters = {
  user(state) {
    return state.user
  },
}

export const mutations = {
  SET_USER(state, newValue) {
    state.user.data = newValue
  },

  AUTH_USER(state, newValue) {
    state.user.loggedIn = newValue
  },
}

export const actions = {
  async checkUser({ commit }, userEmail) {
    const USER = await this.$axios.$post('/api/auth/user', {
      email: userEmail,
    })

    if (USER) return true
    return false
  },

  async registerUser({ commit }, userData) {
    const SUCCESS = await this.$axios.$post('/api/auth/register', userData)
    if (!SUCCESS) return false
    return true
  },

  async loginUser({ commit, state }, userData) {
    const USER = await this.$axios.$post('/api/auth/login', userData)

    if (USER) {
      commit('AUTH_USER', true)
      commit('SET_USER', USER)
      return true
    }

    return false
  },

  logoutUser({ commit }) {
    commit('AUTH_USER', false)
  },
}
