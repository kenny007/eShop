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
          <select id="" class="custom-select d-block py-2" >
            <option value="">Select to Filter</option>
           <option value="" v-for="str in storeLocations" v-bind:key="str">
              {{str}}
            </option>
          </select>
        </div>

        <div class="col-md-3 mb-3">
          <label for="" class="custom-control-label" >In Stock </label>
          <input type="checkbox" checked >
        </div>

      </div>
    </div>
   </div>

  <div v-show="!products.length" class="text-center text-dark text-info"> Loading Products....</div>

      <div class="row">
        <template v-for="product in products">
          <product-item :product="product"  v-bind:key="product.id"></product-item>
        </template>
        
      <nav aria-label="..." v-if="totalPages > 1" >
  <ul class="pagination">
    <li class="page-item"  v-for="pageNumber in totalPages" v-bind:key="pageNumber">
       <a class="page-link" href="#" @click="setPage(pageNumber)" >{{ pageNumber+1 }}</a>
    </li>
    <!-- <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active">
      <span class="page-link">
        2
        <span class="sr-only">(current)</span>
      </span>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li> -->
  </ul>
</nav>
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
    currentPage: 0,
    itemsPerPage: 10,
    resultCount: 0
    }
  },
  created() {
    //var initialQuery = this.getQueryStringParameterValue('q');
    var self = this
    if (this.products.length === 0) {
      this.$store.dispatch("allProducts");
      // This is where the action gets called and this is asynchronous
    }
  },
  computed: {
    storeLocations() {
      return ["Estonia", "Finland"];
    },
    products() {
      return this.$store.getters.allProducts;
    },
    productCount(){
      if(this.products.length){
        this.resultCount = this.products.length;
       return (this.products.length)
      }
    },
    totalPages () {
      if(this.resultCount){
       return Math.ceil( this.resultCount / this.itemsPerPage );
      }
    },
    paginate: function(){      
      // this.$store.state.resultCount = this.products.length;
      
      console.log( this.resultCount + " Result count");
      console.log( this.currentPage + " current page");
      console.log( this.itemsPerPage + " items per page");
      console.log( this.totalPages + " Total pages 10");
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
    }
  },

  components: {
    "product-item": ProductItem
  }
  
};
</script>