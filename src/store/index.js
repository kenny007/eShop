import Vue from 'vue'
import Vuex from 'vuex'

// Import getters
import { productGetters } from './getters'
// Import mutations
import { productMutations, cartMutations } from './mutations'

Vue.use(Vuex)

// This initializes the app State and configures the store
export default new Vuex.Store({
  strict: true,
  state: {
    // bought items
    cart: [],
    // ajax loader
    showLoader: false,
    // selected product
    product: {},
    // all products
    products: [],
    // all manufacturers
    manufacturers: []
  },
  // GETTERS
  getters: Object.assign({}, productGetters),
  mutations: Object.assign({}, productMutations, cartMutations)
})
