<template>
    <div class="flex column-sm column-xs step-wrap">
        <div class="step calc-col-9 calc-col-12-sm calc-col-12-xs">

            <h4><b class="step-number">{{ formatedStepNumber}}</b> {{title}}</h4>
            <div v-for="criterion in criteria" :key="criterion.id">

               <criterion :criterion="criterion"></criterion>

            </div>
            <slot name="product-list"></slot>
            <slot name="buttons"></slot>

        </div>
        <div class="calc-col-3 calc-col-12-sm calc-col-12-xs">
            <div v-if="description" class="step-description">
                <img src="./../../src/assets/img/info_ico.png">
                <div v-html="description"></div>
            </div>
        </div>
    </div>

</template>

<script>

    import Criterion from './Criterion';
    export default {
        props : ['step', 'step-number', 'criteria', 'is-cart'],
        components:{
            Criterion
        },
        computed : {
            formatedStepNumber(){
                return this.stepNumber.toString().padStart(2,'0')
            },
            title(){
                return this.isCart ? this.step.title+' '+this.$text.heating_type_title[this.$store.getters.getProductsType] : this.step.title
            },
            description(){
                if(this.isCart && this.$store.getters.getCartProducts.length){
                    return this.$store.getters.getCartProducts.reduce((res, cur)=>{
                       return  `${res}
                            ${res ? '<hr class="divider">' : ''}
                            ${cur.description}`;
                    }, '').trim();
                }
                    return this.isCart ? this.step.description[this.$store.getters.getProductsType] : this.step.description;

            }
        },

    }
</script>

<style scoped>
    .step-description{
        border-left: 2px solid #5ec19d;
        padding-left: 14px;
        font-size: 16px;
        line-height: 22px;
    }
    h4{
        color:#000;
        margin-bottom: 20px;
        text-transform: uppercase;
        font: 600 18px 'Uni Sans Heavy CAPS', sans-serif;
    }
    .step-number{
        background: #5ec19d;
        color:#fff;
        font-size: 18px;
        width: 24px;height: 24px;
        border-radius: 4px;
        display: inline-block;
        text-align:center;
        margin-right: 5px
    }


</style>
<style>
    .divider{
        color: #5ec19d;
        border-top: 1px solid #5ec19d;
        margin: 35px 0;
    }
</style>