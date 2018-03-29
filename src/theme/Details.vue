<template>
  <div class="row">
    <product-details :product="product" :isAdding="true"></product-details>
  </div>
</template>

<script>
import ProductDetails from "../components/product/ProductDetails";
export default {
  // created () {
  //   if (!this.product.name) {
  //      return this.$store.getters.allProducts[this.$route.params['id']]
  //     // return this.$store.getters.productById(this.$route.params['id'])
  //    // this.$store.dispatch('productById', this.$route.params['id'])
  //   }
  // },
  computed: {
    product () {
      // console.log("Route params: " + this.$route.params['id']);
      return this.$store.getters.allProducts[this.$route.params['id']]
      // this.$store.product[this.$route.params['id']]
      // .getters.productById(this.$route.params['id'])
    }
  },
  data () {
    return {
      // product:  this.$store.getters.allProducts[this.$route.params['id']]
      // product: this.$store.getters.productById(this.$route.params['id'])
    }
  },
  components: {
    'product-details': ProductDetails
  }
}
</script>