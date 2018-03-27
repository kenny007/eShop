<template>
  <div>
    <div class="container">
      <div class="row">
        <template v-for="product in products">
          <product-item :product="product"  v-bind:key="product.id"></product-item>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  import ProductItem from './ProductItem.vue'
  
  export default {
    name: 'product-list',
    created () {
      if (this.products.length === 0) {
        this.$store.dispatch('allProducts') //This is where the action gets called and this is asynchronous
      }
    },
    computed: {
      products () {
        return this.$store.getters.allProducts
      },
       totalPages: function() {
          console.log(Math.ceil(this.resultCount / this.itemsPerPage) + "totalPages");
          return Math.ceil(this.resultCount / this.itemsPerPage);

        }
    },
    components: {
      'product-item': ProductItem
    }
  }
</script>