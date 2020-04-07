import fb from 'firebase'

class Add {
  constructor (title, description, ownerId, imageSrc = '', promo = false, id = null) {
    this.title = title
    this.description = description
    this.ownerId = ownerId
    this.imageSrc = imageSrc
    this.promo = promo
    this.id = id
  }
}

export default {
  state: {
    ads: [
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        title: 'First ad',
        description: 'hello i am description',
        promo: true,
        id: '1'
      },
      {
        src: 'https://picsum.photos/1240/1595?random',
        title: 'Second ad',
        description: 'hello i am description',
        promo: true,
        id: '2'
      },
      {
        src: 'https://picsum.photos/1250/1565?random',
        title: 'Third ad',
        description: 'hello i am description',
        promo: true,
        id: '3'
      }
    ]
  },
  mutations: {
    createAd (state, payload) {
      state.ads.push(payload)
    }
  },
  actions: {
    async createAd ({ commit, getters }, payload) {
      commit('clearError')
      commit('setLoading', true)

      try {
        const newAdd = new Add(
          payload.title,
          payload.description,
          getters.user.id,
          payload.src,
          payload.promo
        )
        const fbValue = await fb.database().ref('ads').push(newAdd)
        console.log(fbValue)
      } catch (error) {
        commit('setError', error.message)
        commit('setLoading', false)
        throw error
      }
    }
  },
  getters: {
    ads (state) {
      return state.ads
    },
    promoAds (state) {
      return state.ads.filter(ad => {
        return ad.promo === true
      })
    },
    myAds (state) {
      return state.ads
    },
    addById (state) {
      return addId => {
        return state.ads.find(curAd => curAd.id === addId)
      }
    }
  }
}
