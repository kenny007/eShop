<template>
  <div id="app">

    <nav>
      <div class="container">
        <ul class="nav__left">
          <li><router-link to="/"><i class="fa fa-home"></i> Home</router-link></li>
          <li><router-link to="/admin"><i class="fa fa-user"></i> Admin</router-link></li>
        </ul>
        <ul class="nav__right">
          <li><router-link to="/cart"><i class="fa fa-shopping-cart"></i> Cart ({{cartItemsCount}})</router-link></li>
        </ul>
      </div>
    </nav>

     <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow fixed-top">
      <h5 class="my-0 mr-md-auto font-weight-normal">Company name</h5>
      <nav class="my-2 my-md-0 mr-md-3">
        <router-link class="p-2 text-dark" to="/"><i class="fa fa-home"></i> Home</router-link>
        <router-link class="p-2 text-dark" to="/admin"><i class="fa fa-user"></i> Admin</router-link>
        <router-link class="p-2 text-dark" to="/"><i class="fa fa-home"></i>Support</router-link>
        <router-link class="p-2 text-dark" to="/"><i class="fa fa-user"></i> Pricing</router-link>
        <router-link class="p-2 text-dark" to="/cart"><i class="fa fa-card"></i> Cart ({{cartItemsCount}})</router-link>
      </nav>
      <a class="btn btn-outline-primary" href="#">Sign up</a>
    </div>





    <router-view></router-view>
    <div class="overlay" v-show="showLoader">
      <div class="loading-spinner">
        <div class="dot dotOne"></div>
        <div class="dot dotTwo"></div>
        <div class="dot dotThree"></div>
      </div>
    </div>
  </div>
</template>

<script>
import toastr from 'toastr'

import {
  ADD_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_SUCCESS,
  REMOVE_PRODUCT_SUCCESS
} from './store/mutation-types'
export default {
  name: 'app',
  data () {
    return {
      cartItems: this.$store.state.cart
    }
  },
  created () {
    // Subscriptions for mutation
    this.$store.subscribe((mutation) => {
      if (mutation.payload) {
        switch (mutation.type) {
          case ADD_PRODUCT_SUCCESS:
            toastr.success('Product created.', 'Success!')
            break
          case UPDATE_PRODUCT_SUCCESS:
            toastr.success('Product updated.', 'Success!')
            break
          case REMOVE_PRODUCT_SUCCESS:
            toastr.warning('Product deleted.', 'Deleted!')
            break
        }
      }
    })
  },
  computed: {
    cartItemsCount () {
      // Cart count
      return this.cartItems.length
    },
    showLoader () {
      // Loading spinner
      return this.$store.state.showLoader
    }
  }
}
</script>
    <!-- Route Outlet -->
    <router-view>

    </router-view>
  </div>
</template>

<script>
// export default {
//   //...
// };
// </script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
@import url('http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.min.css');
.navbar-toggle {
     margin-left: 0px;
    border-color: transparent;
    padding: 2px;
    border: 1px none transparent;
}
.nav-toggle-left {
    float: left;
    margin-left: 15px;
}
</style>
