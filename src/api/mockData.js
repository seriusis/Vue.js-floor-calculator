export const products = [
    {"id": 1, "title": "iPad 4 Mini", "price": 500.01,  image : 'https://picsum.photos/280/155', inCart : true,},
    {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, image:'https://picsum.photos/280/155', inCart : false,
        option:{name:'- длина/площадь/мощность:', value:'180 м / 15 м² - 18 м² / 2250 Вт'},link:'#'},
    {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, image: 'https://picsum.photos/280/155', inCart : true,}
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
        description : ``
    },
    {
        id : 3,
        title: 'Тип напольного покрытия',
        active:false,
        description :''
    },
    {
        id : 4,
        title: 'Для чего будет использоваться',
        active:false,
        description :''
    },
    {
        id : 5,
        title : 'На какую высоту можно поднять уровень пола?',
        active:false,
        description :''
    },
    {
        id : 6,
        title : 'Свободная площадь под теплый пол',
        active:false,
        description :''
    },
    {
        id : 7,
        title: 'Выберите терморегулятор',
        active:false,
        description :''
    },
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
                image : 'https://picsum.photos/id/1/210/110',
            },
            {
                id : 2,
                value: 'second',
                text : 'Второй и выше',
                image : 'https://picsum.photos/id/1/210/110',
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
                image : 'https://picsum.photos/id/99/210/110',
            },
            {
                id : 2,
                value: 'bedroom',
                text : 'Спальня',
                image : 'https://picsum.photos/id/99/210/110',
            },
            {
                id : 3,
                value: 'bathroom',
                text : 'Ванная',
                image : 'https://picsum.photos/id/99/210/110',
            },
            {
                id : 4,
                value: 'restroom',
                text : 'Санузел',
                image : 'https://picsum.photos/id/99/210/110',
            },
            {
                id : 5,
                value: '',
                text : 'living-room',
                image : 'https://picsum.photos/id/99/210/110',
                selected : false,
            },
            {
                id : 6,
                value: 'corridor',
                text : 'Коридор',
                image : 'https://picsum.photos/id/99/210/110',
            },
            {
                id : 7,
                value: 'balcony',
                text : 'Балкон',
                image : 'https://picsum.photos/id/99/210/110',
            },
            {
                id : 8,
                value: 'other',
                text : 'Другое',
                image : 'https://picsum.photos/id/99/210/110',
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
                image : 'https://picsum.photos/id/100/210/110',
            },
            {
                id : 2,
                value: 'laminate',
                text : 'Ламинат',
                image : 'https://picsum.photos/id/100/210/110',
            },
            {
                id : 3,
                value: 'linoleum',
                text : 'Линолеум',
                image : 'https://picsum.photos/id/100/210/110',
            },
            {
                id : 4,
                value: 'parquet-board',
                text : 'Паркетная доска',
                image : 'https://picsum.photos/id/100/210/110',
            },
            {
                id : 5,
                value: 'carpeting',
                text : 'Ковролин',
                image : 'https://picsum.photos/id/100/210/110',
            },
            {
                id : 6,
                value: 'quartz-vinil-tiles',
                text : 'Кварцвиниловая плитка',
                image : 'https://picsum.photos/id/100/210/110',
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
                value: 'tile-heating',
                text : 'Подогрев плитки до комфортной температуры',
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
                image : 'https://picsum.photos/id/202/210/110',
            },
            {
                id : 2,
                value: 'programmable',
                text : 'Программируемый',
                image : 'https://picsum.photos/id/202/210/110',
            },
            {
                id : 3,
                value: 'wifi',
                text : 'Wi-Fi терморегулятор',
                image : 'https://picsum.photos/id/202/210/110',
            },

        ],
    },

];