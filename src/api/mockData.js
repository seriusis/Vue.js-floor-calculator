export const products = [
    {"id": 1, "title": "iPad 4 Mini", "price": 500.01,  image : 'https://leto.net.ua/catalog/view/theme/default/template/calculation/img/product.jpg',
        inCart : false,
        options : [
            {
                text : '- длина/площадь/мощность: ',
                optionId : 113,
                valueId : 211,
            }
        ],
    },
    {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, image:'https://leto.net.ua/catalog/view/theme/default/template/calculation/img/product.jpg', inCart : false,
        options : [
            {
                name : '- длина/площадь/мощность: ',
                value : '180 м / 15 м² - 18 м² / 2250 Вт',
                optionId : 113,
                valueId : 211,
            },
            {
                name : '- длина/площадь/мощность: ',
                value : '180 м / 15 м² - 18 м² / 2250 Вт',
                optionId : 113,
                valueId : 212,
            }
        ],
        link:'#'},
    {"id": 3, "title": "Тонкий нагревательный кабель Hemstedt 12.5 Вт (Германия)", "price": 19.99, image: 'https://leto.net.ua/catalog/view/theme/default/template/calculation/img/product.jpg',
        inCart : false,
        options : [
            {
                name : '- длина/площадь/мощность: ',
                value : '180 м / 15 м² - 18 м² / 2250 Вт',
                optionId : 113,
                valueId : 211,
            }
        ],
    },
    {"id": 4, "title": "Charli XCX2 - Sucker CD", "price": 19.99, image: 'https://leto.net.ua/catalog/view/theme/default/template/calculation/img/product.jpg', inCart : false,},
    {"id": 5, "title": "Charli XCX3 - Sucker CD", "price": 19.99, image: 'https://leto.net.ua/catalog/view/theme/default/template/calculation/img/product.jpg', inCart : false,},
];

export const steps = [
    {
        id : 1,
        title: 'Выберите этаж',
        active : true,
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
        id : 2,
        title: 'Тип помещения',
        active:false,
        description : `<p>Рекомендуемая мощность:</p>
        <p>
        Кухня, спальня, гостиная, коридор
        <b>- 130 - 160 Вт/м.кв</b>
        </p>
        <p>Ванная, санузел - <b>150 - 180 Вт/м.к</b></p>
        <p>Балкон <b>- 160-200 Вт/м.кв</b></p>
`
    },
    {
        id : 3,
        title: 'Тип напольного покрытия',
        active:false,
        description :`
        <p>От выбора напольного покрытия зависит
        тип теплого пола, который Вам подойдет.</p>
        `
    },
    {
        id : 4,
        title: 'Для чего будет использоваться',
        active:false,
        description :`
        <p>
        Для основного отопления необходимо
        закрыть теплым полом примерно 70%
        от общей площади помещения.
        </p>
        `
    },
    {
        id : 5,
        title : 'На какую высоту можно поднять уровень пола?',
        active:false,
        description :`
        <p>Если есть возможность поднять уровень
        пола, желательно положить утеплитель
        (экструдированный пенополистерол)
        Частный дом, первый этаж или выносной
        балкон - 5 см и больше). Второй и выше
        этаж - 2 см</p>
        `
    },
    {
        id : 6,
        title : 'Свободная площадь под теплый пол',
        active:false,
        description :`
        <p>
        Необходимо указывать только
        свободную площадь для каждого 
        помещения отдельно, без учета 
        низкостоящей мебели.
         </p><p><img src="https://leto.net.ua/catalog/view/theme/default/template/calculation/img/square.jpg"> </p>
        `
    },
    {
        id : 7,
        title: 'Выберите терморегулятор',
        active:false,
        description :`
        <p>
        <strong>Электромеханический</strong> - простой и 
        бюджетный вариант. Есть кнопка 
        вкл/выкл и колесико накрутки т
        емпературы:
        </p>
        <p>
        <strong>Программируемый</strong> - есть ЖК дисплей,
        на котором показана температура и 
        + можно программировать (задавать, 
        когда теплому полу включиться/
        выключиться)
        </p>
        <p>
        <strong>Wi-Fi терморегуляторы</strong> - возможность 
        управлять удаленно (с телефона), 
        в любой момент времени.
        </p>
        `
    },
    {
        id: 'product_list',
        title : 'Вам подойдут товары:',
        active : false,
        description : `
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
        `
    }
];

export const criteria = [
    {
        id : 1,
        name : 'level',
        inputType : 'radio',
        stepId : 1,
        values : [
            {
                id : 1,
                value: 'first',
                text : 'Первый',
                image : 'https://leto.net.ua/catalog/view/theme/default/template/calculation/img/level_1.png',
            },
            {
                id : 2,
                value: 'second',
                text : 'Второй и выше',
                image : 'https://leto.net.ua/catalog/view/theme/default/template/calculation/img/level_2.png',
            }
        ],

    },

    {
        id : 2,
        name : 'room_type',
        inputType : 'radio',
        stepId : 2,
        values : [
            {
                id : 1,
                value: 'kitchen',
                text : 'Кухня',
                image : 'https://leto.net.ua/catalog/view/theme/default/template/calculation/img/room_type_kitchen.png',
            },
            {
                id : 2,
                value: 'bedroom',
                text : 'Спальня',
                image : 'https://leto.net.ua/catalog/view/theme/default/template/calculation/img/room_type_bedroom.png',
            },
            {
                id : 3,
                value: 'bathroom',
                text : 'Ванная',
                image : 'https://leto.net.ua/catalog/view/theme/default/template/calculation/img/room_type_bathroom.png',
            },
            {
                id : 4,
                value: 'restroom',
                text : 'Санузел',
                image : 'https://leto.net.ua/catalog/view/theme/default/template/calculation/img/room_type_restroom.png',
            },
            {
                id : 5,
                value: 'living-room',
                text : 'Гостинная',
                image : 'https://leto.net.ua/catalog/view/theme/default/template/calculation/img/room_type_living_room.png',
                selected : false,
            },
            {
                id : 6,
                value: 'corridor',
                text : 'Коридор',
                image : 'https://leto.net.ua/catalog/view/theme/default/template/calculation/img/room_type_corridor.png',
            },
            {
                id : 7,
                value: 'balcony',
                text : 'Балкон',
                image : 'https://leto.net.ua/catalog/view/theme/default/template/calculation/img/room_type_balcony.png',
            },
            {
                id : 8,
                value: 'other',
                text : 'Другое',
                image : 'https://leto.net.ua/catalog/view/theme/default/template/calculation/img/room_type_other.png',
            },
        ],

    },

    {
        id : 3,
        name : 'flooring_type',
        inputType : 'radio',
        stepId : 3,
        values : [
            {
                id : 1,
                value: 'tile',
                text : 'Плитка',
                image : 'https://leto.net.ua/catalog/view/theme/default/template/calculation/img/flooring_type_tile.png',
            },
            {
                id : 2,
                value: 'laminate',
                text : 'Ламинат',
                image : 'https://leto.net.ua/catalog/view/theme/default/template/calculation/img/flooring_type_laminate.png',
            },
            {
                id : 3,
                value: 'linoleum',
                text : 'Линолеум',
                image : 'https://leto.net.ua/catalog/view/theme/default/template/calculation/img/flooring_linoleum.png',
            },
            {
                id : 4,
                value: 'parquet-board',
                text : 'Паркетная доска',
                image : 'https://leto.net.ua/catalog/view/theme/default/template/calculation/img/flooring_type_parquet_board.png',
            },
            {
                id : 5,
                value: 'carpeting',
                text : 'Ковролин',
                image : 'https://leto.net.ua/catalog/view/theme/default/template/calculation/img/flooring_type_carpeting.png',
            },
            {
                id : 6,
                value: 'quartz-vinil-tiles',
                text : 'Кварцвиниловая плитка',
                image : 'https://leto.net.ua/catalog/view/theme/default/template/calculation/img/flooring_type_quartz_vinil_tiles.png',
            }
        ],

    },


    {
        id : 4,
        name : 'destination',
        inputType : 'radio',
        stepId : 4,
        values : [
            {
                id : 1,
                value: 'main-heating',
                text : 'Основное отопление или доп. обогрев',
            },
            {
                id : 2,
                value: 'additional-heating',
                text : 'подогрев ламината/линолеума/кварц винила/ковролина до комфортной температуры',
            },
        ],

    },

    {
        id : 5,
        name : 'floor_evalation_level',
        inputType : 'radio',
        stepId : 5,
        values : [
            {
                id : 1,
                value: '1-2',
                text : '1-2 см',
            },
            {
                id : 2,
                value: '3',
                text : '3 см и выше',
            },
        ],
    },

    {
        id : 6,
        name : 'free_square',
        inputType : 'number',
        stepId : 6,
        values : [],
        placeholder : 'Пример: 8.6',
        postfix : 'м<sup>2</sup>'
    },

    {
        id : 7,
        name : 'thermoregulator_type',
        inputType : 'radio',
        stepId : 7,
        values : [
            {
                id : 1,
                value: 'electromechanical',
                text : 'Электромеханический',
                image : 'https://leto.net.ua/catalog/view/theme/default/template/calculation/img/thermoregulator_type_electromechanical.png',
            },
            {
                id : 2,
                value: 'programmable',
                text : 'Программируемый',
                image : 'https://leto.net.ua/catalog/view/theme/default/template/calculation/img/thermoregulator_type_programmable.png',
            },
            {
                id : 3,
                value: 'wifi',
                text : 'Wi-Fi терморегулятор',
                image : 'https://leto.net.ua/catalog/view/theme/default/template/calculation/img/thermoregulator_type_wifi.png',
            },

        ],
    },

];