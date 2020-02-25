<template>
    <div class="criterion-input radio flex">
        <div class="variant calc-col-3 calc-col-6-xs" v-for="(variant, i) in variants" :key="variant.id">
            <label :class="{active : selectedValue === variant.value}">
                <img v-if="variant.image" :src="variant.image"/>
                <span>
                    <input @change="selectCriterionValue(i)"
                           type="radio"
                           :name="name"
                           :value="variant.value"
                           :checked="selectedValue === variant.value"/>
                    <i class="checkmark"></i>
                    {{variant.value === 'additional-heating' ? generateHeatingText(variant.text) : variant.text}}
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
            },
            generateHeatingText(text){
                return text.replace('[floor_type]', this.$store.getters.getSelectedFlooringTypeText);
            }
        },
        created(){
            !this.variants.length || this.$store.commit('setCriterionValue', {name:this.name, value : this.variants[0].value})
        }
    }
</script>

<style scoped>
    .variant{margin-bottom: 15px}
    label{
        display: block;
        cursor: pointer;
        padding: 0 5px;
        max-width: 210px;
    }
    label span{
        display: block;
        background: #fff;
        border-radius: 9px;
        padding: 15px 5px 15px 40px;
        position: relative;
        top:-12px;
        box-shadow: 17px 17px 29px rgba(0, 4, 2, 0.1);
    }
    label img{opacity: 0.4}
    label.active img{opacity: 1}
    label.active span{
        box-shadow: 17px 17px 29px rgba(94, 193, 157, 0.1);

    }
    label input{
        display: none;
    }
    .checkmark{
        position: absolute;
        top: 15px;
        left: 12px;
        height: 20px;
        width: 20px;
        background-color: #eee;
        border-radius: 50%;
        display: block;
        box-shadow: inset 0 0 5px #dbdbdbbd;
    }

    .checkmark:after {
        content: "";
        position: absolute;
        display: none;
        top: 6px;
        left: 6px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #5ec19d;
    }
    label.active .checkmark:after {
        display: block;
        background: #5ec19d;
    }

</style>