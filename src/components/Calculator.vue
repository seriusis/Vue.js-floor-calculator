<template>
    <div class="wrap">
        <h4>Выбрано:</h4>
        <div  v-for="(criterion, k) in selectedCriteria" :key="k">
            {{k}} - {{selectedCriteria[k]}}
        </div>

        <calculator-step  v-for="(step, i) in steps"
                          :key="step.id"
                          :step="step"
                          :step-number="i+1"
                          :criteria="getStepCriteria(step.id)">
        </calculator-step>

        <br>
        <button v-if="prevStepIndex" @click="stepToggle('prev')">Назад</button>
        <button v-if="nextStepIndex" @click="stepToggle('next')">Далее</button>
        step : {{activeStepIndex+1}}

        <product-list></product-list>
        <cart></cart>
    </div>
</template>

<script>
    import CalculatorStep from './CalculatorStep';
    import ProductList from './ProductList';
    import Cart from './Cart';

    export default {
        components : {
            CalculatorStep,
            ProductList,
            Cart
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
            }
        },
        methods : {
          getStepCriteria(stepId){
              return this.criteria.filter((criterion) => criterion.stepId === stepId)
          },
            stepToggle(direction){
                if(direction === 'next'){
                    this.$store.commit('setActiveStepByIndex',this.activeStepIndex+1)
                }else{
                    this.$store.commit('setActiveStepByIndex',this.activeStepIndex-1)
                }
            }
        },
        created(){
            this.$store.dispatch('getSteps');
            this.$store.dispatch('getCriteria');
        }




    }
</script>

<style>

</style>