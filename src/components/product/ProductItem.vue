<template>
  <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
    <div class="card-body">
      <router-link :to="'/details/'+product.id" class="">
        <div class="card-title pricing-card-title">
          <img
            class="img-fluid" :src="product.image" alt="">
        </div>
        <ul class="list-unstyled mt-3 mb-4">
              <li>{{product.productcode}}</li>
              <li>{{product.name}}</li>
              <li>{{product.description}}</li>
              <li v-if="!product.instock" class="text-danger" >Out of Stock</li>
              <li v-else>In Stock</li>
        </ul>
        <h4 class="card-title pricing-card-title">{{product.currency | currency}}{{parseFloat(product.price).toFixed(2)}}</h4> 
        <!-- // parseFloat(value).toFixed(2) -->
        
      </router-link>
      <div class="product__action">
        <product-button  :product="product" ></product-button>
      </div>
    </div>
  </div>

</template>

<script>
import ProductButton from './ProductButton.vue';
export default {
  name: 'product-item',
  props: ['product'],
  components: {
  'product-button': ProductButton
  }
};
</script>