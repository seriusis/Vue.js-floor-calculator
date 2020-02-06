<template>
    <div>
        <cart v-if="stepId === cartStepId">
            <template v-slot:prev-btn>
                <button class="prev" v-if="prevStepIndex" @click="stepToggle('prev')">&#8592; Назад</button>
            </template>
        </cart>


        <template v-if="stepId === cartStepId">

        </template>
        <template v-else>
            <button class="prev" v-if="prevStepIndex" @click="stepToggle('prev')">&#8592; Назад</button>
            <button class="next" v-if="nextStepIndex" @click="stepToggle('next')">Далее &#8594;</button>
        </template>
    </div>
</template>

<script>
    import Cart from './Cart';
    export default {
        components : {
          Cart
        },
        props : ['stepId', 'prevStepIndex', 'nextStepIndex', 'activeStepIndex', 'cartStepId'],
        computed : {

        },
        methods : {
            stepToggle(direction){
                if(direction === 'next'){
                    this.$store.commit('setActiveStepByIndex',this.activeStepIndex+1)
                }else{
                    this.$store.commit('setActiveStepByIndex',this.activeStepIndex-1)
                }

            },
        }
    }
</script>

<style>
    button{
        display: inline-block;
        font-size: 16px;
        color:#fff;
        padding: 15px 8px;
        text-align: center;
        border-radius: 12px;
        border:none;
        box-shadow: none;
        margin-right: 10px;
    }
    .next{
        background: #5ec19e;
    }
    .prev{
        background: #c0c0c0;
    }
</style>