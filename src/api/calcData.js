import {locale} from './locale.js';
import Vue from 'vue'
import VueCookies from 'vue-cookies';
Vue.use(VueCookies);

const lang = (locale[Vue.$cookies.get('language')] && Vue.$cookies.get('language')) || 'ru-ru';
const text = locale[lang];
export const steps = [
    {
        id : 1,
        title: text.stepInfo.chose_level.title,
        active : true,
        description : text.stepInfo.chose_level.description
    },
    {
        id : 2,
        title: text.stepInfo.room_type.title,
        active:false,
        description : text.stepInfo.room_type.description
    },
    {
        id : 3,
        title: text.stepInfo.flooring_type.title,
        active:false,
        description :text.stepInfo.flooring_type.description
    },
    {
        id : 4,
        title: text.stepInfo.destination.title,
        active:false,
        description :text.stepInfo.destination.description
    },
    {
        id : 5,
        title : text.stepInfo.floor_evalation_level.title,
        active:false,
        description :text.stepInfo.floor_evalation_level.description
    },
    {
        id : 6,
        title : text.stepInfo.free_square.title,
        active:false,
        description : text.stepInfo.free_square.description
    },
    {
        id : 7,
        title: text.stepInfo.thermoregulator_type.title,
        active:false,
        description :text.stepInfo.thermoregulator_type.description
    },
    {
        id: 'product_list',
        title : text.stepInfo.product_list.title,
        active : false,
        description : text.stepInfo.product_list.description
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
                text : text.criteriaValues.level_first,
                image : 'https://leto.net.ua/catalog/view/theme/default/template/calculation/img/level_1.png',
            },
            {
                id : 2,
                value: 'second',
                text : text.criteriaValues.level_second,
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
                text : text.criteriaValues.room_type_kitchen,
                image : 'https://leto.net.ua/catalog/view/theme/default/template/calculation/img/room_type_kitchen.png',
            },
            {
                id : 2,
                value: 'bedroom',
                text : text.criteriaValues.room_type_bedroom,
                image : 'https://leto.net.ua/catalog/view/theme/default/template/calculation/img/room_type_bedroom.png',
            },
            {
                id : 3,
                value: 'bathroom',
                text : text.criteriaValues.room_type_bathroom,
                image : 'https://leto.net.ua/catalog/view/theme/default/template/calculation/img/room_type_bathroom.png',
            },
            {
                id : 4,
                value: 'restroom',
                text : text.criteriaValues.room_type_restroom,
                image : 'https://leto.net.ua/catalog/view/theme/default/template/calculation/img/room_type_restroom.png',
            },
            {
                id : 5,
                value: 'living-room',
                text : text.criteriaValues.room_type_living_room,
                image : 'https://leto.net.ua/catalog/view/theme/default/template/calculation/img/room_type_living_room.png',
                selected : false,
            },
            {
                id : 6,
                value: 'corridor',
                text : text.criteriaValues.room_type_corridor,
                image : 'https://leto.net.ua/catalog/view/theme/default/template/calculation/img/room_type_corridor.png',
            },
            {
                id : 7,
                value: 'balcony',
                text : text.criteriaValues.room_type_balcony,
                image : 'https://leto.net.ua/catalog/view/theme/default/template/calculation/img/room_type_balcony.png',
            },
            {
                id : 8,
                value: 'other',
                text : text.criteriaValues.room_type_other,
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
                text : text.criteriaValues.flooring_type_tile,
                textWhom : text.criteriaValues.flooring_type_tile_whom,
                image : 'https://leto.net.ua/catalog/view/theme/default/template/calculation/img/flooring_type_tile.png',
            },
            {
                id : 2,
                value: 'laminate',
                text : text.criteriaValues.flooring_type_laminate,
                textWhom :text.criteriaValues.flooring_type_laminate_whom,
                image : 'https://leto.net.ua/catalog/view/theme/default/template/calculation/img/flooring_type_laminate.png',
            },
            {
                id : 3,
                value: 'linoleum',
                text : text.criteriaValues.flooring_type_linoleum,
                textWhom : text.criteriaValues.flooring_type_linoleum_whom,
                image : 'https://leto.net.ua/catalog/view/theme/default/template/calculation/img/flooring_linoleum.png',
            },
            {
                id : 4,
                value: 'parquet-board',
                text : text.criteriaValues.flooring_type_parquet_board,
                textWhom :text.criteriaValues.flooring_type_parquet_board_whom,
                image : 'https://leto.net.ua/catalog/view/theme/default/template/calculation/img/flooring_type_parquet_board.png',
            },
            {
                id : 5,
                value: 'carpeting',
                text : text.criteriaValues.flooring_type_carpeting,
                textWhom :text.criteriaValues.flooring_type_carpeting_whom,
                image : 'https://leto.net.ua/catalog/view/theme/default/template/calculation/img/flooring_type_carpeting.png',
            },
            {
                id : 6,
                value: 'quartz-vinil-tile',
                text : text.criteriaValues.flooring_type_quartz_vinil_tile,
                textWhom :text.criteriaValues.flooring_type_quartz_vinil_tile_whom,
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
                text : text.criteriaValues.destination_main_heating,
            },
            {
                id : 2,
                value: 'additional-heating',
                text : text.criteriaValues.destination_additiona_heating,
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
                text : text.criteriaValues.floor_evalation_level_1_2,
            },
            {
                id : 2,
                value: '3',
                text : text.criteriaValues.floor_evalation_level_3,
            },
        ],
    },

    {
        id : 6,
        name : 'free_square',
        inputType : 'number',
        stepId : 6,
        values : [],
        placeholder : text.criteriaValues.free_square_placeholder,
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
                text : text.criteriaValues.thermoregulator_type_electromechanical,
                image : 'https://leto.net.ua/catalog/view/theme/default/template/calculation/img/thermoregulator_type_electromechanical.png',
            },
            {
                id : 2,
                value: 'programmable',
                text : text.criteriaValues.thermoregulator_type_programmable,
                image : 'https://leto.net.ua/catalog/view/theme/default/template/calculation/img/thermoregulator_type_programmable.png',
            },
            {
                id : 3,
                value: 'wifi',
                text : text.criteriaValues.thermoregulator_type_wifi,
                image : 'https://leto.net.ua/catalog/view/theme/default/template/calculation/img/thermoregulator_type_wifi.png',
            },

        ],
    },

];