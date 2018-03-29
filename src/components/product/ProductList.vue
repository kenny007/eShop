<template>
  <div>
    <div class="container text-center">
  
  <div class="row">
    <div class="col-md-8">
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

      </div>
    </div>
   </div>

  <div v-show="!products.length" class="text-center text-dark text-info"> Loading Products....</div>
      <div class="row">
        <template v-for="product in filteredProducts">
          <product-item :product="product"  v-bind:key="product.id"></product-item>
        </template>
        
      <nav aria-label="..." v-if="totalPages > 1" >
  <ul class="pagination">
    <li class="page-item"  v-for="pageNumber in totalPages" v-bind:key="pageNumber">
       <a class="page-link" href="#" @click="setPage(pageNumber)" >{{ pageNumber+1 }}</a>
    </li>
   
  </ul>
</nav>

<ul>
    <li v-bind:key="pageNumber" v-for="pageNumber in totalPages" v-if="Math.abs(pageNumber - currentPage) < 3 || pageNumber == totalPages - 1 || pageNumber == 0">
    <a href="#" @click="setPage(pageNumber)"  :class="{current: currentPage === pageNumber, last: (pageNumber == totalPages - 1 && Math.abs(pageNumber - currentPage) > 3), first:(pageNumber == 0 && Math.abs(pageNumber - currentPage) > 3)}">{{ pageNumber+1 }}</a>
    </li>
</ul>

      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from "./ProductItem.vue";

export default {
  name: "product-list",
  data: function() {
    return {
    searchText: null,
    locationText:'',
    currentPage: 0,
    itemsPerPage: 10,
    resultCount: 0,
    storeLocations: []
    }
  },
  created() {
    //var initialQuery = this.getQueryStringParameterValue('q');
    const vm = this
    if (this.products.length === 0) {
      this.$store.dispatch("allProducts");
      // This is where the action gets called and this is asynchronous
    }
    setTimeout(function () { 
      vm.storeLocations = [ 
      { text: 'Estonia', storeId: 1}, 
      { text: 'Finland', studId: 2 },];
     }, 2000)
  },
  computed: {
    filteredProducts(){
       if(!this.searchText){
         return this.products.slice(this.currentPage, this.itemsPerPage)
       }    
       else if(this.searchText){
          return this.products.filter((product) => {
          return product.name.match(this.searchText)
        })
      }
    },
    products() {
      return this.$store.getters.allProducts
    },
    productCount(){
      if(this.products.length){
        this.resultCount = this.products.length
       return (this.products.length)
      }
    },
    totalPages () {
      if(this.resultCount){
       return Math.ceil( this.resultCount / this.itemsPerPage );
      }
    },
    paginate: function(){      
      if (this.currentPage >= this.totalPages) {
        this.currentPage = Math.max(0, this.totalPages - 1);
      }
      var index =  this.currentPage * this.itemsPerPage;
      console.log(index + " index");
      console.log(this.products.slice(index, this.itemsPerPage));
      return this.products.slice(index, index + this.itemsPerPage);
      }
  },
  methods: {
    setPage: function(pageNumber) {
      this.currentPage = pageNumber;
      console.log(pageNumber);
    },
    executeSearch: function(searchVal) {
     this.locationText = searchVal 
     return this.filteredProducts.filter((product)=>{
        return product.name.match(this.locationText);
     }) 
  }
  },
  components: {
    "product-item": ProductItem
  }
}
</script>
<style scoped>
a.first::after {
  content:'...'
}

a.last::before {
  content:'...'
}
</style>
