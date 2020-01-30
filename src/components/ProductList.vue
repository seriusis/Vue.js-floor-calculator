<template>
    <div class="product-list-step flex">
        <div class="products flex col-9">
            <div v-for="product in products" :key="product['id']" class="col-4 col-12-xs">
                <input @change="toggleProduct(product['id'])" type="checkbox" :checked="product.inCart">
                <img :src="product.image" :alt="product.title" :title="product.title"/>
                <h3><a :href="product.link" target="_blank">{{product.title}}</a></h3>
                <div v-if="product.option" class="product-option">
                    {{product.option.name}}<br>
                    {{product.option.value}}
                </div>
               <span>{{product.price}}</span>

                <p>В коризне? {{product.inCart}}</p>

            </div>
        </div>
        <div class="step-description col-3">
            <p>edfsfsdf sd32</p>
            <p>edfsfsdf sdfdffdsf</p>
            <p>edfsfsdf sdasd fds </p>
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

        methods: {
            toggleProduct(id){
                this.$store.commit('toggleProductInCart',id);
            }
        },

        created(){
            this.$store.dispatch('getProducts');
        }
    }
</script>

<style>

</style>