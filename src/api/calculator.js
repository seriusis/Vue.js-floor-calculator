const _products = [
    {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2},
    {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10},
    {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5}
];

const _steps = [
    {
        id : 'level',
        name : 'Выберите этаж',
        description : `
            <p>Если это частный дом, первый этаж или
выносной балкон необходимо -
обязательно наличие утеплителя 
(5 см и больше).</p>

<p>Если это второй и выше этаж - утепление
желательно, но не обязательно (2 см).</p>
        `
    },
    {
        id : 'room-type',
        name : 'Тип помещения',
        description : `
            <p></p>
        `
    }
];


export default {
    getProducts (cb) {
        setTimeout(() => cb(_products), 300)
    },
    getSteps(cb){
        setTimeout(() => cb(_steps), 300)
    }
}

