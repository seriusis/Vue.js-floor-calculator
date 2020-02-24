import api from '../api/calculator';

export default {
    getProducts({commit, state}){
        api.getProducts((products => {
           commit('setProducts', products)
        }), state.selectedCriteria)
    },
    getSteps(context){
        api.getSteps((steps => {
            context.commit('setSteps', steps)
        }))
    },

    getCriteria(context){
        api.getCriteria((criteria)=> {
            context.commit('setCriteria', criteria)
        })
    }
}