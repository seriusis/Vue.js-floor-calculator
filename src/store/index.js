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
        selectedCriteria: {
            destination : 'main-heating',
            floor_evalation_level : '1-2',
            flooring_type : 'tile',
            free_square : '',
            level : 'first',
            room_type : 'kitchen',
            thermoregulator_type : 'electromechanical'
        },
    },
    mutations,
    actions,
    getters,

})

