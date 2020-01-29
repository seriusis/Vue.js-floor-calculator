<template>
    <div class="products">
        Product List component

        <div v-for="product in products" :key="product['id']">
            <p>{{product.title}}</p>
        </div>
    </div>
</template>

<script>

    export default {
        data(){
            return {
            };
        },

        computed: {
          products(){
                return this.$store.state.products
          }
        },

        created(){
            this.$store.dispatch('getProducts');
        }
    }
</script>

<style>

</style>