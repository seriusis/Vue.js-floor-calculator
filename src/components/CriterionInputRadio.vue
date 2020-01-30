<template>
    <div class="criterion-input radio flex">
        <div class="variant col-3" v-for="(variant, i) in variants" :key="variant.id">
            <label>
                <img v-if="variant.image" :src="variant.image"/>
                <span>
                    <input @change="selectCriterionValue(i)"
                           type="radio"
                           :name="name"
                           :value="variant.value"
                           :checked="selectedValue === variant.value"/>
                    {{variant.text}}
                </span>
            </label>

        </div>
    </div>
</template>

<script>
    export default{
        props : ['name', 'variants', 'selectedValue'],
        methods : {
            selectCriterionValue(i){
                this.$store.commit('setCriterionValue', {name:this.name, value : this.variants[i].value})
            }
        },
        created(){
            !this.variants.length || this.$store.commit('setCriterionValue', {name:this.name, value : this.variants[0].value})
        }
    }
</script>

<style>
.radio span{
    display: block;
}
</style>