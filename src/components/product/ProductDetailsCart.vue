<template>
  <div class="container">
      <div class="row" style="padding-top:10%">
        <div class="col-xs-2 col-lg-2 col-md-2">
                    <img class="image-fluid  img-thumbnail"   :src="product.image" />
        </div>

        <div class="col-xs-4 col-lg-4 col-md-4" style="border:0px solid gray">       
           <h3>{{product.name}}</h3>
         </div>

       <div class="col-xs-2 col-lg-2 col-md-2" style="border:0px solid gray">
          <h2 class="product-price">{{product.currency | currency}}{{parseFloat(product.price).toFixed(2)}}</h2>
        </div>
 
         <div class="col-xs-3 col-lg-3 col-md-3" style="border:0px solid gray">  
          <div class="section" style="padding-bottom:20px;">
            <product-button :product="product"></product-button>
          </div>                 
          </div>                    
                   
      </div>
      </div>




</template>

<script>
import ProductButton from './ProductButton'
export default {
  props: ['product'],
  components: {
    'product-button': ProductButton
  }
}
</script>

<style>
img {
    border: 1px solid #ddd; /* Gray border */
    border-radius: 4px;  /* Rounded border */
    padding: 5px; /* Some padding */
    width: 150px; /* Set a small width */
}

/* Add a hover effect (blue shadow) */
img:hover {
    box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
}
</style>