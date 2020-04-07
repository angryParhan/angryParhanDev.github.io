import fb from 'firebase'

class User {
  constructor (id) {
    this.id = id
  }
}

export default {
  state: {
    user: 0
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    logout (state) {
      state.user = 0
    }
  },
  actions: {
    async registerUser ({ commit }, { email, password }) {
      commit('clearError')
      commit('setLoading', true)

      try {
        const user = await fb.auth().createUserWithEmailAndPassword(email, password)
        commit('setUser', new User(user.uid))
        commit('setLoading', false)
      } catch (error) {
        commit('setLoading', true)
        commit('setError', error.message)
        throw error
      }
    },
    async loginUser ({ commit }, { email, password }) {
      commit('clearError')
      commit('setLoading', true)

      try {
        const user = await fb.auth().signInWithEmailAndPassword(email, password)
        commit('setUser', new User(user.uid))
        commit('setLoading', false)
      } catch (error) {
        commit('setLoading', true)
        commit('setError', error.message)
        throw error
      }
    },
    autoLoginUser ({ commit }, payload) {
      commit('setUser', new User(payload.uid))
    },
    logOutUser ({ commit }) {
      fb.auth().signOut()
      commit('logout')
    }
  },
  getters: {
    user (state) {
      return state.user
    },
    isUserLogedIn (state) {
      return state.user !== 0
    }
  }
}
