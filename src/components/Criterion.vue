<template>
    <div class="criterion">
        <h4>{{criterion.title}}</h4>

            <div :is="inputComponent"
                 :name="criterion.name"
                 :variants="criterion.values"
                 :selectedValue="selectedCriterionValue"
                 :postfix ="criterion.postfix"
                 :placeholder ="criterion.placeholder"
            >
            </div>
    </div>
</template>

<script>
    import CriterionInputRadio from './CriterionInputRadio';
    import CriterionInputNumber from './CriterionInputNumber';

    export default {
        data(){
            return{
                radioComponent : 'criterion-input-radio',
                numberComponent : 'criterion-input-number'
            }
        },
        props:['criterion'],
        components:{
            CriterionInputRadio,
            CriterionInputNumber
        },
        computed: {
            inputComponent(){
                return this[this.criterion.inputType+'Component'] || this.numberComponent;
            },
            selectedCriterionValue(){
                return this.$store.getters.getSelectedCriteria[this.criterion.name]
            },

        }
    }
</script>

<style>

</style>