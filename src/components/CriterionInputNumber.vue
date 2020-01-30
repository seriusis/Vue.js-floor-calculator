<template>
    <div class="criterion-input input-text">
        <input @change="setCriterion"
               type="number"
               :name="name"
               :placeholder="placeholder"
               v-model.number="value" />
        <span v-if="postfix" v-html="postfix" class="postfix"></span>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                value : ''
            }
        },
        props : ['name', 'selectedValue', 'postfix', 'placeholder'],
        computed : {

        },
        methods : {
            setCriterion(){
                this.$store.commit('setCriterionValue', {name:this.name, value : this.value})
            }
        },
        created(){
            this.$store.commit('setCriterionValue', {name:this.name, value : this.value})
        }
    }
</script>

<style>
.radio span{
    display: block;
}
</style>