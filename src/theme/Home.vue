<template>
  <div>
    <div class="title">
      <p>{{check}}</p>
        <button v-on:click="goodLord">Change</button>
      <h1>{{msg}} -- {{check}}</h1>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App', 
        check: 'How are you?'
      }
    },
    methods:{
      goodLord(){
        this.check = "I changed it here"
      }
    }
  }
</script>