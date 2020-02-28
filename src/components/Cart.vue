<template>
    <div class="flex cart-panel">
        <span class="cart-total">
            {{total}} <i>{{currency}}</i>
        </span>
            <slot name="prev-btn"></slot>

            <button :disabled="!products.length" class="add-to-cart" @click="addToCart">{{textAddToCart}}</button>
            <button class="get-promo" @click="getPromo">{{textGetPromo}}</button>
    </div>
</template>

<script>

    export default {
        data : function () {
          return {
              textAddToCart : this.$text.buttons.addToCart,
              textGetPromo : this.$text.buttons.getPromo,
              currency : this.$text.currency,
          }
        },
        computed: {
            products(){
                return this.$store.getters.getCartProducts;
            },
            total(){
                return this.$store.getters.getCartTotal;
            },

        },
        methods : {
            addToCart(){
                window.addToCartInCalculator ? window.addToCartInCalculator(this.products) : window.console.log(this.products);
            },
            getPromo(){
                window.getPromoInCalculator ? window.getPromoInCalculator() : alert('get promo modal');
            }
        },
    }
</script>

<style scoped>
    .cart-panel{
        margin: 40px 0 25px;
    }
    .cart-total{
        color:#eb1616;
        margin-right: 15px;
        font: 600 48px 'Uni Sans', sans-serif;
        min-width: 150px;
    }
    .cart-total i{
        font: 600 normal 18px 'Uni Sans Heavy CAPS';
    }


    button{
        display: inline-block;
        font-size: 16px;
        color:#fff;
        padding: 15px 8px;
        text-align: center;
        border-radius: 12px;
        border:none;
        box-shadow: none;
        margin-right: 10px;
    }
    .add-to-cart{
        background: #5ec19e;
    }
    .add-to-cart[disabled]{
        cursor: not-allowed;
        filter: alpha(opacity=65);
        opacity: .65;
    }
    .get-promo{
        background: #fff;
        border:1px solid #5ec19d;
        color:#5ec19d
    }


</style>