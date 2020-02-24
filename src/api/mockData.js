export const products = [
    {
        "id": 1,
        "title": "iPad 4 Mini",
        "price": 500.01,
        image : 'https://leto.net.ua/catalog/view/theme/default/template/calculation/img/product.jpg',
        description : `iPad 4 Mini description
        <p><b>Нагревательный мат</b> - двужильный
        нагревательный кабель, диаметром
        3.5 - 4.5 мм, уложенный витками на
        армирующей сетке с определенным
        шагом укладки. Укладывается на готовую
        стяжку и утапливается в слой плиточного
        клея, не поднимая уровень пола.
        </p>
        <p>
        Преимущества:
        1) Нагрев плитки за 30 мин
        2) Армирует плиточный клей
        3) Простой и быстрый монтаж.
        </p>
        `,
        options : [
            {
                text : '- длина/площадь/мощность: ',
                optionId : 113,
                valueId : 211,
            }
        ],
        type : 'heating',
        inCart : true,
    },
    {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, image:'https://leto.net.ua/catalog/view/theme/default/template/calculation/img/product.jpg', inCart : false,
        description : `H&M T-Shirt White`,

        options : [
            {
                name : '- длина/площадь/мощность: ',
                value : '180 м / 15 м² - 18 м² / 2250 Вт',
                optionId : 113,
                valueId : 211,
                quantity : 1,
            },
            {
                name : '- длина/площадь/мощность: ',
                value : '180 м / 15 м² - 18 м² / 2250 Вт',
                optionId : 113,
                valueId : 212,
                quantity : 1,
            }
        ],
        type : 'heating',
        link:'#'},
    {"id": 3, "title": "Тонкий нагревательный кабель Hemstedt 12.5 Вт (Германия)", "price": 19.99, image: 'https://leto.net.ua/catalog/view/theme/default/template/calculation/img/product.jpg',
        description: `Тонкий нагревательный кабель Hemstedt description`,
        inCart : false,
        options : [
            {
                name : '- длина/площадь/мощность: ',
                value : '180 м / 15 м² - 18 м² / 2250 Вт',
                optionId : 113,
                valueId : 211,
                quantity : 1,
            }
        ],
        type : 'heating',
    },
    {"id": 4, "title": "Charli XCX1 - Sucker CD", "price": 19.99, image: 'https://leto.net.ua/catalog/view/theme/default/template/calculation/img/product2.jpg',
        description: `Charli XCX1 - Sucker CD Hemstedt description`,
        inCart : true, type:'reg'},
    {"id": 5, "title": "Charli XCX2 - Sucker CD", "price": 8.99, image: 'https://leto.net.ua/catalog/view/theme/default/template/calculation/img/product2.jpg',
        description: `Charli XCX2 - Sucker CD Hemstedt description`,

        inCart : false, type:'reg'},
    {"id": 6, "title": "Charli XCX3 - Sucker CD", "price": 24.99, image: 'https://leto.net.ua/catalog/view/theme/default/template/calculation/img/product2.jpg',
        description: `Charli XCX3 - Sucker CD Hemstedt description`,

        inCart : false, type:'reg'},
];

