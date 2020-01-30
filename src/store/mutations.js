import Vue from 'vue'

export default {

  setCriterionValue(state, {name, value}){
      Vue.set(state.selectedCriteria, name, value);
  },
  setActiveStepById(state, id){
      let current = state.steps.findIndex((step) => step.active);
      state.steps[current].active = false;
      let next = state.steps.findIndex((step) => step.id === id);
      state.steps[next].active = true;
    },

    setActiveStepByIndex(state, next){
        let current = state.steps.findIndex((step) => step.active);
        state.steps[current].active = false;
        state.steps[next].active = true;
    },
  setProducts(state, products){
    state.products = products;
  },

   setSteps(state, steps){
    state.steps = steps;
   },

    setCriteria( state, criteria){
      state.criteria = criteria;
    },
    toggleProductInCart(state, id){
       let index = state.products.findIndex((product) => product.id === id);
       state.products[index].inCart =  !state.products[index].inCart;
    }



};


