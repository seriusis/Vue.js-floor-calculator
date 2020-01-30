<template>
    <div v-show="step.active" class="flex step-wrap">
        <div class="step col-9">

            <h4>{{stepNumber}} {{step.title}}</h4>
            <div v-for="criterion in criteria" :key="criterion.id">

               <criterion :criterion="criterion"></criterion>

            </div>

        </div>
        <div class="col-3 step-description" v-html="step.description"></div>
    </div>


</template>

<script>

    import Criterion from './Criterion';
    export default {
        props : ['step', 'step-number', 'criteria'],
        components:{
            Criterion
        }
    }
</script>

<style>

</style>