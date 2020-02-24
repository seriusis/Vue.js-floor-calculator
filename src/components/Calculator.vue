<template>
    <div class="wrap container">

        <step-panel
            :steps="steps"
            :activeStepIndex="activeStepIndex"
            >

        </step-panel>

        <calculator-step v-show="step.active"  v-for="(step, i) in steps"
                          :key="step.id"
                          :step="step"
                          :step-number="i+1"
                          :criteria="getStepCriteria(step.id)"
                          :is-cart="cartStepId === step.id"
                          >
            <template v-slot:buttons>
                <step-buttons
                        :step-id="step.id"
                        :prev-step-index="prevStepIndex"
                        :next-step-index="nextStepIndex"
                        :active-step-index="activeStepIndex"
                        :cart-step-id = "cartStepId"
                ></step-buttons>
            </template>

            <template v-if="step.id===cartStepId" v-slot:product-list>
                <product-list v-for="type in productTypes" :key="type" :type="type" :cart-step-id="cartStepId" :selected-criteria="selectedCriteria"></product-list>
            </template>

        </calculator-step>
        <br>



    </div>
</template>

<script>
    import StepPanel from './StepPanel';
    import StepButtons from './StepButtons.vue';
    import CalculatorStep from './CalculatorStep';
    import ProductList from './ProductList'

    export default {
        data(){
            return {
                productTypes:['heating', 'reg'],
                cartStepId : 'product_list'
            }
        },
        components : {
            CalculatorStep,
            ProductList,
            StepPanel,
            StepButtons
        },
        computed : {
            steps(){
                return this.$store.getters.getSteps;
            },
            criteria(){
               return this.$store.getters.getCriteria;
            },
            activeStepIndex(){
                return  this.$store.getters.getActiveStepIndex;
            },
            nextStepIndex(){
                return this.steps[this.activeStepIndex+1];
            },
            prevStepIndex(){
                return this.steps[this.activeStepIndex-1];
            },
            selectedCriteria(){
                return this.$store.getters.getSelectedCriteria;
            },

        },
        methods : {
          getStepCriteria(stepId){
              return this.criteria.filter((criterion) => criterion.stepId === stepId)
          },

        },
        created(){
            this.$store.dispatch('getSteps');
            this.$store.dispatch('getCriteria');
        }




    }
</script>
<style>
    @font-face {
        font-family: 'Uni Sans Heavy CAPS';
        src: url('./../assets/fonts/UniSansHeavyCAPS.otf');
        font-weight: 600;
    }
    /*@font-face {
        font-family: 'Uni Sans Thin CAPS';
        src: url('./../assets/fonts/UniSansThinCAPS.otf');
        font-weight: 400;
    }*/
</style>
