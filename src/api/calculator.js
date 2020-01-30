import {criteria, steps, products} from './mockData';

export default {
    getProducts (cb) {
        setTimeout(() => cb(products), 300)
    },
    getSteps(cb){
        setTimeout(() => cb(steps), 300)
    },
    getCriteria(cb){
        setTimeout(()=>cb(criteria),300)
    }
}

