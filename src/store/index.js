import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations';
import actions from './actions';
import getters from './gettets';


Vue.use(Vuex);

export default new Vuex.Store({
    strict : process.env.NODE_ENV !== 'production',
    state: {
        products: [],
        steps: [],
        criteria: [],
        selectedCriteria: {},
        cartProducts:[],

    },
    mutations,
    actions,
    getters,

})

