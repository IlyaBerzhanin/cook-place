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
    const USER = await this.$axios.$post('/api/auth/register', userData)
    commit('SET_USER', USER)
  },

  loginUser({ commit, state }, userData) {
    let isDataValid = false
    if (
      state.user.data.name === userData.name &&
      state.user.data.password === userData.password
    ) {
        isDataValid = true
        commit('AUTH_USER', isDataValid)
        return isDataValid
      }
      return isDataValid
  },
}
