import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// This initializes the app State
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
  }
})
