import axios from 'axios'

import { API_BASE } from './config'

// const API_BASE = '<API-URL/api/vi>'

import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  PRODUCT_BY_ID,
  PRODUCT_BY_ID_SUCCESS,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_SUCCESS,
  REMOVE_PRODUCT,
  REMOVE_PRODUCT_SUCCESS,
  ALL_PRODUCTS,
  ALL_PRODUCTS_SUCCESS
} from './mutation-types'

export const productActions = {
  allProducts ({commit}) {
    commit(ALL_PRODUCTS)
    // Fetch actual products from the API
    axios.get(`${API_BASE}`).then(response => {
      commit(ALL_PRODUCTS_SUCCESS, response.data)
    // console.log(response.data)
    })
  },
  productById ({commit}, payload) {
    commit(PRODUCT_BY_ID)
    // Fetch product by ID from API
    axios.get(`${API_BASE}/${payload}`).then(response => {
      commit(PRODUCT_BY_ID_SUCCESS, response.data)
    })
  },
  addProduct ({commit}, payload) {
    commit(ADD_PRODUCT)
    // Create a new product via API
    axios.post(`${API_BASE}`, payload).then(response => {
      commit(ADD_PRODUCT_SUCCESS, response.data)
    })
  },
  updateProduct ({commit}, payload) {
    commit(UPDATE_PRODUCT)
    // Update product via API
    axios.put(`${API_BASE}/${payload.id}`, payload).then(response => {
      commit(UPDATE_PRODUCT_SUCCESS, response.data)
    })
  },
  removeProduct ({commit}, payload) {
    commit(REMOVE_PRODUCT)
    // Delete product via API
    axios.delete(`${API_BASE}/${payload}`, payload).then(response => {
      console.debug('response', response.data)
      commit(REMOVE_PRODUCT_SUCCESS, response.data)
    })
  }
}
