<template>
  <div id="app">
    <h1>{{title}}</h1>
    <calculator></calculator>
  </div>
</template>

<script>
import Calculator from './components/Calculator';


export default {
  data(){
    return {
        title : 'floor calculator'
    }
  },
  components: {
    Calculator,
  }
}
</script>

<style>

</style>
