<template>
  <div>
    <div class="container text-center">
      <div class="row">
        <div class="col-md-6 mb-3">
          <input id="searchText" v-model="searchTerm" class="form-control py-2" type="text"  placeholder="Enter Product Name or Description" autofocus />
        </div>

        <div class="col-md-3 mb-3">
          <select v-model="storeLoc" @change="filterProducts($event.target.value)" class="custom-select d-block py-2" >
            <option value="">Select to Filter</option>
            <option :value="storeL.text" v-for="storeL in storeLocations" v-bind:key="storeL.id">
              {{storeL.text}} 
            </option>
          </select>
        </div>
        <div class="col-md-2 mb-2">
          <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" :value="stockAvail" v-model="stockAvail" checked />
        <label class="form-check-label" for="inlineCheckbox1">Availability</label>
        </div>
          
        </div>

      </div> 
   
  <div v-show="!productsInit.length" class="text-center text-dark text-info"> Loading Products....</div>
  <pagination v-model="page" :items="productsInit.length" :perPage="10" />
      <div class="row">
        <template v-for="product in productsInit">
          <product-item  :product="product"  :key="product.id"></product-item>
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
    searchTerm: '',
    storeLoc: 'Estonia',
    stockAvail: true,
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
    }, 2000);
  },
  computed: {
    pageOfProducts: function() {
      return getArraySection(this.productsInit, this.page, 10)
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
    storeLoc: function() {
      this.filterProducts()
    },
    stockAvail: function(){
      this.filterProducts()
    }
  },
  methods: {
    filterProducts: function() {
      const searchTerm = this.searchTerm.toLowerCase()
      const storeLoc = this.storeLoc
      const stockAvail = this.stockAvail
      let result = this.products

      if (searchTerm) {
        result = result.filter(product => {
          return (
            product.name.toLowerCase().search(searchTerm) >= 0 ||
            product.description.toLowerCase().search(searchTerm) >= 0
          )
        })
      }

      if (storeLoc) {
        result = result.filter(product => product.store.search(storeLoc) >= 0)
      }

      if (stockAvail) {
        result = result.filter(product => 
        product.instock.toString().search(stockAvail) >= 0)
      }
   
      this.productsInit = result
      this.page = 1
    }
  },
  components: {
    "product-item": ProductItem, "pagination": Pagination
  }
}
</script>

<style >

</style>
