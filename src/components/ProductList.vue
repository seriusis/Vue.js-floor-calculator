<template>
    <div>
        <div class="products flex column-xs">
            <template v-if="!products.length">
                {{noProducts[type]}}
            </template>

            <div v-for="product in products" :key="product['id']" class="item calc-col-4 calc-col-12-xs" :class="{active:product.inCart}">
                <div class="inner flex column space-between">
                    <div class="caption-top">
                        <div class="image">
                            <a class="name" :href="product.link" target="_blank"><img :src="product.image" :alt="product.title" :title="product.title"/></a>
                        </div>
                    </div>

                    <div class="caption-bottom">
                        <label>
                            <div class="checkbox">
                                <input @change="toggleProduct(product.id)" type="checkbox" name="product" :checked="product.inCart">
                                <i class="checkmark"></i>
                            </div>
                            <h3>{{product.title}}</h3>
                        </label>
                        <div v-if="product.options" class="product-option">
                            <div v-for="(option, i) in product.options" :key="option.valueId">
                          {{option.name}}<br>
                                {{option.value}} <span class="quantity">x {{option.quantity}} шт.</span><br>
                                <span v-if="i != Object.keys(product.options)[Object.keys(product.options).length-1]" class="plus">+</span>
                            </div>
                        </div>

                        <span class="price">{{product.price + ' ' + currency}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        data : function () {
          return {
              currency : this.$text.currency,
              noProducts : this.$text.noProducts
          }
        },
        props:['type', 'cart-step-id', 'selected-criteria'],
        computed: {
            products(){
                return this.$store.getters.getProducts.filter((product) => product.type === this.type);
            },
        },

        methods: {
            toggleProduct(id){
                this.$store.commit('addProductInCartByType', {id : id, type : this.type});
            }
        }
    }
</script>

<style scoped>
    .item{
        padding: 5px;
        margin-bottom: 10px;

    }
    .inner{
        border-radius: 9px;
        height: 100%;
    }
    .item .image{

        padding: 10px 15px 0 15px;

    }
    .item .caption-top{
        text-align: center;
    }
    .item .checkbox{float:left}
    .item .caption-top .image{
        border: 1px solid #e6e6e6;
        border-bottom:0;
        border-radius: 6px 6px 0 0;
    }
    .item .caption-bottom{
        min-height: 140px;
        box-shadow: 10px 10px 20px rgba(0, 4, 2, 0.08);
        padding: 0 6px 25px 45px;
        border-radius: 6px;
        position: relative;

    }
    .item.active .caption-bottom{
        box-shadow: 10px 10px 20px rgba(94, 193, 157, 0.2);
    }
    .item h3{
        font-weight: bold;
        font-size:16px;
        color:#000;
        margin: 5px 0;
        font-family: "PT Sans";
        text-transform: initial;
        min-height: 50px;
        line-height: 22px;
    }
    .item .product-option{
        font-size: 14px;
    }
    .price{
        margin-top: 15px;
        font-weight: bold;
        display: block;
        font-size:24px;
        color:#5ec19d;
    }
    .checkbox{
        position: absolute;
        left: 10px;
        top:5px;
        cursor: pointer;
    }
    .checkbox input{opacity: 0}
    .checkmark{
        position: absolute;
        display: block;
        box-shadow: inset 0 0 5px #dbdbdbbd;
        top: 0;
        left: 0;
        height: 25px;
        width: 25px;
        background-color: #eee;
    }

    .checkmark:after {
        content: "";
        position: absolute;
        left: 9px;
        top: 5px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
        box-sizing: content-box;
    }
    .active .checkmark{
        background: #5ec19d;
    }
    .active .checkmark:after {
        display: block;
        border-color: #fff;
    }
    .plus{
        display:block;
        text-align: center;
        color:#5ec19d;
        font-weight: bold;
        font-size:19px;
    }
    .quantity{
        color: #eb1616;

    }

</style>