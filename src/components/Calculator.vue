<template>
    <div class="wrap">



        <calculator-step v-for="step in steps" :key="step.id" :step="step"></calculator-step>

        <product-list></product-list>
        <cart></cart>
    </div>
</template>

<script>
    import CalculatorStep from './CalculatorStep';
    import ProductList from './ProductList';
    import Cart from './Cart';

    export default {
        data(){
            return {

            };
        },
        components : {
            CalculatorStep,
            ProductList,
            Cart
        },
        computed : {
            steps(){
                return this.$store.state.steps
            }
        },
        created(){
            this.$store.dispatch('getSteps')
        }




    }
</script>

<style>

</style>