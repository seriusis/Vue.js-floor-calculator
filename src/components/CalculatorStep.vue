<template>
    <div class="step">
        <hr>
        Step <b>{{step.name}}</b>
        <br>
        <p v-html="step.description"></p>
        <hr>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                name: '',
                status: '',
                criteria: [],
                description: ''
            };
        },
        props : ['step']
    }
</script>

<style>

</style>