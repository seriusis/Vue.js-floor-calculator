<template>
    <div>
        <cart v-if="stepId === cartStepId">
            <template v-slot:prev-btn>
                <button class="calc-btn prev" v-if="prevStepIndex" @click="stepToggle('prev')">&#8592; Назад</button>
            </template>
        </cart>


        <template v-if="stepId === cartStepId">

        </template>
        <template v-else>
            <button class="calc-btn prev" v-if="prevStepIndex" @click="stepToggle('prev')">&#8592; {{textPrev}}</button>
            <button class="calc-btn next" v-if="nextStepIndex" @click="stepToggle('next')">{{textNext}} &#8594;</button>
        </template>
    </div>
</template>

<script>
    import Cart from './Cart';
    export default {
        data : function(){
          return  {
              textNext : this.$text.buttons.next,
              textPrev : this.$text.buttons.prev,
          }
        },
        components : {
          Cart
        },
        props : ['stepId', 'prevStepIndex', 'nextStepIndex', 'activeStepIndex', 'cartStepId'],
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
