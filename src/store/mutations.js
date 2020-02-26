import Vue from 'vue'

export default {

  setCriterionValue(state, {name, value}){
      Vue.set(state.selectedCriteria, name, value);
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


    addProductInCartByType(state, {id, type}){
        state.products.filter((product)=> product.type === type).forEach((product) => product.inCart = product.id === id);
    },


};


