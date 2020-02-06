<template>
    <div class="flex column-sm column-xs step-wrap">
        <div class="step col-9 col-12-sm col-12-xs">

            <h4><b class="step-number">{{ formatedStepNumber}}</b> {{step.title}}</h4>
            <div v-for="criterion in criteria" :key="criterion.id">

               <criterion :criterion="criterion"></criterion>

            </div>
            <slot name="product-list"></slot>
            <slot name="buttons"></slot>

        </div>
        <div class="col-3 col-12-sm col-12-xs">
            <div class="step-description">
                <img src="./../../src/assets/img/info_ico.png">
                <div v-html="step.description"></div>
            </div>
        </div>
    </div>


</template>

<script>

    import Criterion from './Criterion';
    export default {
        props : ['step', 'step-number', 'criteria'],
        components:{
            Criterion
        },
        computed : {
            formatedStepNumber(){
                return this.stepNumber.toString().padStart(2,'0')
            }
        }
    }
</script>

<style scoped>
    .step-description{
        border-left: 2px solid #5ec19d;
        padding-left: 14px;
        font-size: 14px;
        line-height: 22px;
        margin-top: 70px;
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