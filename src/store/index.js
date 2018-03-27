import Vue from 'vue'
import Vuex from 'vuex'

// Import getters
import { productGetters } from './getters'
// Import mutations
import { productMutations, cartMutations } from './mutations'
// Import action that is being used for API calls
import { productActions } from './actions'

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
    loading: false
    // order: 1,

    // searchText: null,

    // ccn: null,

    // currentPage: 0,
    // itemsPerPage: 10,
    // resultCount: 0
  },
  // GETTERS
  getters: Object.assign({}, productGetters),
  mutations: Object.assign({}, productMutations, cartMutations),
  actions: Object.assign({}, productActions)
})
