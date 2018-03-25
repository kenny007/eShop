import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router'
import Home from '@/theme/Home'
import Cart from '@/theme/Cart'
// import Admin from '@/theme/Admin'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Admin Components
import Index from '@/theme/admin/Index'
import New from '@/theme/admin/New'
import Products from '@/theme/admin/Products'
import Edit from '@/theme/admin/Edit'

Vue.use(BootstrapVue)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/admin',
      name: 'Admin',
      // Parent routes still has a component
      component: Index,

      // Child routes
      children: [
        {
          path: 'new',
          name: 'New',
          component: New
        },
        {
          path: 'list',
          name: 'Products',
          component: Products
        },
        {
          path: 'edit/:id',
          name: 'Edit',
          component: Edit
        }
      ]
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    }
  ]
})
