<template>
  <div>
    <div class="container text-center">
<!--   
      <div class="row">
        <div class="col-md-6 mb-3">
          <input id="searchText" v-model="searchText" class="form-control py-2" type="text"  placeholder="Enter a product Name" autofocus />
        </div>

        <div class="col-md-3 mb-3">
          <select v-model="locationText" @change="executeSearch($event.target.value)" class="custom-select d-block py-2" >
            <option value="">Select to Filter</option>
            <option :value="storeL.text" v-for="storeL in storeLocations" v-bind:key="storeL.id">
              {{storeL.text}} 
            </option>
          </select>
        </div>

        <div class="col-md-3 mb-3">
          <label for="" class="custom-control-label"> Availability </label>
          <input type="checkbox" checked >
        </div>

      </div> -->
   
  <div v-show="!productsInit.length" class="text-center text-dark text-info"> Loading Products....</div>
  <Pagination v-model="page" :items="productsInit.length" :perPage="10" />
      <div class="row">
        <template v-for="product in productsInit">
          <product-item :product="product"  v-bind:key="product.id"></product-item>
        </template>

      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from './ProductItem.vue'
import Pagination from './Pagination'
import getArraySection from '@/utilities/get-array-section'

export default {
  name: "product-list",
  data: function() {
    return {
    searchTerm: 'br',
    storel: '',
    productsInit: [],
    page: 1
    }
  },
  created() {
    if (this.products.length === 0) {
      this.$store.dispatch("allProducts");
      // This is where the action gets called and this is asynchronous
    }
    var self = this;
    setTimeout(function(){
       self.filterProducts()
    }, 3000);
  },
  computed: {
    pageOfProducts: function() {
      return getArraySection(this.tutorials, this.page, 10)
    },
    storeLocations() {
      return [ 
      { text: 'Estonia', storeId: 1}, 
      { text: 'Finland', studId: 2 }
      ]
    },
    products() {
         return this.$store.getters.allProducts
    }
  },
   watch: {
    searchTerm: function() {
      this.filterProducts()
    },
    tech: function() {
      this.filterProducts()
    }
  },
  methods: {
    filterProducts: function() {
      const searchTerm = this.searchTerm.toLowerCase()
      const storel = this.storel
      let result = this.products

      if (searchTerm) {
        result = result.filter(product => {
          return (
            product.name.toLowerCase().search(searchTerm) >= 0 ||
            product.description.toLowerCase().search(searchTerm) >= 0
          )
        })
      }

      if (storel) {
        result = result.filter(product => product.store.indexOf(store) >= 0)
      }

      this.productsInit = result
      this.page = 1
    }
  },
  components: {
    "product-item": ProductItem, Pagination
  }
}
</script>

<style >

</style>
