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
        <span class="step-stat">{{activeStepIndex+1}}{{textStat}} {{steps.length}}</span>
    </div>
</template>


<script>
 export default{
     data : function () {
       return {
           textStat : this.$text.stepStat
       }
     },
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
    .step-stat{
        font-size: 13px;
        vertical-align: top;
        display: inline-block;
        position: relative;top:-3px;
        width: 8%;
        text-align: right;
    }
    ul{
        padding: 0;
        margin: 0;
        width: 92%;
        display: inline-block;
        border-radius: 12px;
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
    li.passed-steps{
        background: #59b795;
    }
    li:hover, li.active{
        cursor: pointer;
        position: relative;
        background:  linear-gradient(-45deg,
        rgba(255, 255, 255, 0.15) 25%,transparent 25%,
        transparent 50%, rgba(255, 255, 255, 0.15) 50%,
        rgba(255, 255, 255, 0.15) 75%,transparent 75%)
        left/30px 30px repeat-x,
        linear-gradient(to right, #00d302 0%, #35d334 50%, #cfd3d2 100%) left/var(--p,100%) fixed,
        #dadfdd;
    }

    li span{
        display: none;
        position: absolute;
        top: -30px;
        left: 50%;
        margin-left: -15px;
        background: #2ad32a;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        color:#fff;
        text-align: center;
        font:600 14px/25px sans serif;
    }
    li:hover span, li.active span{
        display: block;
    }

    @media (max-width: 1100px) {
        .step-stat, ul{width: 100%;text-align: center}
    }

</style>