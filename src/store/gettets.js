
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
    getSelectedFlooringTypeText(state){
        const selectedName = state.selectedCriteria.flooring_type;
        const criterionData = state.criteria.find(i => i.name === 'flooring_type').values.find(i => i.value === selectedName);
        return criterionData['textWhom'] ? criterionData['textWhom'] : ''
    },
    getCartTotal(state){
        if(!state.products.length) return 0;
        return Math.round(state.products.reduce((res, cur) => cur.inCart ? (res + cur.price) : res, 0));

    },
    getCartProducts(state){
        return state.products.filter((product) => product.inCart);
    }
}