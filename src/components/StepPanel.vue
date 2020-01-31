<template>
    <div class="step-panel">

        <ul>
            <li
                :key="step.id"
                v-for="(step, i) in steps"
                :style="{ width: barPieseWidth}"
                :class="[{'passed-steps' : i <= activeStepIndex},{'active' : i === activeStepIndex}]"
                @click="goToStep(i)"
            >
                <span>{{i+1}}</span>
            </li>
        </ul>
    </div>
</template>


<script>
 export default{
     props : ['steps', 'activeStepIndex'],
     computed : {
         barPieseWidth(){
             return 100 / this.steps.length + '%'
         }
     },
     methods:{
         goToStep(i){
             this.$store.commit('setActiveStepByIndex',i)
         }
     }
 }
</script>


<style scoped>
    ul{
        padding: 0;
        margin: 0;
        width: 100%;
        display: block;
        border-radius: 12px;
        /*overflow-x: hidden;*/
    }
    li{
        display: inline-block;
        height: 12px;
        vertical-align: top;
        background:  linear-gradient(-45deg,
        rgba(255, 255, 255, 0.15) 25%,transparent 25%,
        transparent 50%, rgba(255, 255, 255, 0.15) 50%,
        rgba(255, 255, 255, 0.15) 75%,transparent 75%)
        left/30px 30px repeat-x,
        linear-gradient(to right, #cfd3d2 0%, #cfd3d2 50%, #cfd3d2 100%) left/var(--p,100%) fixed,
        #dadfdd;
        margin-bottom: 6px;
        text-align: center;
    }
    li:first-of-type{
        border-radius: 9px 0 0 9px;
    }
    li:last-of-type{
        border-radius: 0 9px 9px 0;
    }
    li:hover, li.active{
        cursor: pointer;
        height: 18px;
        border-radius: 0 0 9px 9px;
        margin-bottom: 0;
    }
    li.passed-steps{
        background: #59b795;
    }
    li span{
        display: none;
        font-size: 14px;
        line-height: 21px;
        font-weight: bold;
        text-align: center;
        color:#fff
    }
    li:hover span, li.active span{
        display: inline;
    }
</style>