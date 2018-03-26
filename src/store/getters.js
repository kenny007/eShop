// This creates a getter that can be exposed to all components

export const productGetters = {
  // All products
  allProducts: (state, getters) => {
    return state.products
  },
  // Get Product by ID
  productById: (state, getters) => id => {
    if (getters.allProducts.length > 0) {
      return getters.allProducts.filter(p => p._id === id)[0]
    } else {
      return state.product
    }
  }
}