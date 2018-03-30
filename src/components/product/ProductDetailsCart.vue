<template>
   <div>
      <div class="row" style="padding-top:10%">
        <div class="col-xs-4 col-lg-4 col-md-4 item-photo">
                    <img :src="product.image" class="img-thumbnail" />
        </div>

        <div class="col-xs-4 col-lg-6 cold-md-6" style="border:0px solid gray">
          <h3>{{product.description}}}</h3>  
          <!-- Precios -->
          <h6 class="title-price"><small>{{product.code}}</small></h6>
          <h3 style="margin-top:0px;">{{product.currency | currency}}{{parseFloat(product.price).toFixed(2)}}</h3>

          <!-- Detalles especificos del producto -->
          <div class="section">
              <h6 class="title-attr" style="margin-top:15px;" ><small>COLOR</small></h6>                    
              <div>
                  <div class="attr" style="width:25px;background:#5a5a5a;"></div>
                  <div class="attr" style="width:25px;background:white;"></div>
              </div>
          </div>
          
          <!-- Botones de compra -->
          <div class="section" style="padding-bottom:20px;">
              <div class="product-details__price-cart">
            <h3>{{product.currency | currency}}{{parseFloat(product.price).toFixed(2)}}</h3>
            <product-button :product="product" ></product-button>
          </div>
          
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