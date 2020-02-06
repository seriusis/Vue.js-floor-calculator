<template>
    <div class="flex cart-panel">
        <span class="cart-total">
            {{total}} <i>грн</i>
        </span>
            <slot name="prev-btn"></slot>

            <button class="add-to-cart" @click="addToCart">Добавить в корзину</button>
            <button class="get-promo" @click="getPromo">Получить промокод</button>
    </div>
</template>

<script>


    export default {
        data(){
            return {
//                productsData : []
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
                window.console.log(this.products);
            },
            getPromo(){
                alert('get promo modal')
            }
        }

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
    .get-promo{
        background: #fff;
        border:1px solid #5ec19d;
        color:#5ec19d
    }

</style>