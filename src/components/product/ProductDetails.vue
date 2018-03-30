<template>
   <div class="container">
      <div class="row" style="padding-top:10%">
        <div class="col-xs-4 col-lg-5 col-md-5">
                    <img class="image-fluid float-right"   :src="product.image" />
        </div>

        <div class="col-xs-4 col-lg-5 col-md-5" style="border:0px solid gray">
          <div class="row">
             <div class="col-md-12">
           <h3>{{product.name}}</h3>
          </div>
         </div>
         <div class="row">
          <div class="col-md-12 col-xs-12 col-lg-12">
            <span class="label label-primary">Product Code: </span>
            <span class="monospaced">{{product.productcode}}</span>
          </div>
        </div><!-- end row -->

        <div class="row">
          <div class="col-md-12">
            <h4 class="label label-primary">Description: </h4>
            <p class="description">
            {{product.description}}
            </p>
          </div>
        </div><!-- end row -->
        <div class="row">
        <div class="col-xs-12 col-lg-12 col-md-12">
          <span class="label label-primary"> <strong> Price: </strong> </span>
          <h2 class="product-price">{{product.currency | currency}}{{parseFloat(product.price).toFixed(2)}}</h2>
        </div>
        </div>

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
.monospaced { font-family: 'Ubuntu Mono', monospaced ; }
</style>
