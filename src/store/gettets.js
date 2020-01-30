
export default {

    getSteps(state){
        return state.steps;
    },
    getCriteria(state){
        return state.criteria;
    },
    getActiveStep(state){
        return state.steps.find((step)=> step.active)
    },
    getActiveStepIndex(state){
        return state.steps.findIndex((step)=> step.active)
    },
    getProducts(state){
        return state.products;
    },
    getSelectedCriteria(state){
      return state.selectedCriteria;
    },
    getCartTotal(state){
        if(!state.products.length) return 0;
        return Math.round(state.products.reduce((res, cur) => cur.inCart ? (res + cur.price) : res, 0));

    }
}