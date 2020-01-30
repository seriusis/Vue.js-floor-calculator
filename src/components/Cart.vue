<template>
    <div class="cart">
        <hr>
        Cart {{total}} грн
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
                return this.$store.state.products;
            },
            total(){
                return this.$store.getters.getCartTotal;
            }
        },


    }
</script>

<style>

</style>