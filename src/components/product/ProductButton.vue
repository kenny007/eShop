<template>
  <div>
    <button v-if="isAdding" :disabled="!product.instock" class="btn btn-lg btn-info" @click="addToCart"><i class="fa fa-cart-plus"></i> Add to Cart</button>
    <button v-else class="btn btn-lg btn-danger" @click="removeFromCart(product.id)">
      <i class="fa fa-trash"></i> Remove from Cart</button>
  </div>
</template>

<script>
import { ADD_TO_CART, REMOVE_FROM_CART } from '../../store/mutation-types'

export default {
  props: ['product'],
  data () {
    return {
      cart: this.$store.state.cart
    }
  },
  computed: {
    isAdding () {
      return this.cart.indexOf(this.product) < 0
    }
  },
  methods: {
    addToCart () {
      this.$store.commit(ADD_TO_CART, this.product)
    },
    removeFromCart (id) {
      this.$store.commit(REMOVE_FROM_CART, id)
    }
  }
}
</script>
