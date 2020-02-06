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

<style scoped>
    .criterion-input{
        margin-bottom: 15px;
    }
input{
    padding: 15px 8px;
    text-align: center;
    border-radius: 12px;
    border:1px solid #d7d7d7;
    max-width: 128px;
}
    .postfix{
        margin-left: 15px;
    }
</style>