import api from '../api/calculator';

export default {
    getProducts(context){
        api.getProducts((products => {
            context.commit('setProducts', products)
        }))
    },
    getSteps(context){
        api.getSteps((steps => {
            context.commit('setSteps', steps)
        }))
    }
}