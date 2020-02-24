import {products} from './mockData';
import {criteria, steps} from './calcData';
const mock = false;
const productsUrl = 'http://leto.loc/index.php?route=calculation/page/getProducts';

export default {
    getProducts(cb, criteria){
        if(mock){
            cb(products);
            return;
        }

        fetch(productsUrl,
            {
                method : 'POST',
                cache : 'no-cache',
                headers : {
                    'Content-Type': 'application/json'
                },
                body : JSON.stringify({criteria})
            }
        )
            .then(response => response.json())
            .then(json => {
                    cb(json['products'] ? json['products'] : [])
            }).catch((error)=> {
                window.console.log(error)
        })

    },
    getSteps(cb){
        cb(steps)
    },
    getCriteria(cb){
        cb(criteria)
    }
}

