<template>
    <div class="criterion-input radio flex">
        <div class="variant"
             v-for="(variant, i) in variants" :key="variant.id"
             :class="variantCols[name] ? variantCols[name] : 'calc-col-3 calc-col-4-sm'"

        >
            <label :class="{active : selectedValue === variant.value, 'with-img' : variant.image}">
                <img v-if="variant.image" :src="variant.image"/>
                <div class="criterion-value">
                    <input @change="selectCriterionValue(i)"
                           type="radio"
                           :name="name"
                           :value="variant.value"
                           :checked="selectedValue === variant.value"/>
                    <i class="checkmark"></i>
                    <span v-html="variant.value === 'additional-heating' ? generateHeatingText(variant.text) : variant.text"></span>
                </div>
            </label>

        </div>
    </div>
</template>

<script>
    export default{
        data : function () {
            return {
                variantCols : {
                    destination : 'calc-col-6 calc-col-6-sm'
                }
            }
        },
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
        /*max-width: 210px;*/
        font-size:16px;
    }
    label.with-img{max-width: 209px;}
    label .criterion-value{
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