
export const locale = {
    'ru-ru' : {
        stepInfo : {
            chose_level : {
                title : 'Выберите этаж',
                description : ` <p>Если это частный дом, первый этаж или
                                выносной балкон необходимо -
                                обязательно наличие утеплителя 
                                (5 см и больше).</p>
                                <p>Если это второй и выше этаж - утепление
                                желательно, но не обязательно (2 см).</p>`,
            },
            room_type : {
                title : 'Тип помещения',
                description:`<p>Рекомендуемая мощность:</p>
                            <p>
                            Кухня, спальня, гостиная, коридор
                            <b>- 130 - 160 Вт/м.кв</b>
                            </p>
                            <p>Ванная, санузел - <b>150 - 180 Вт/м.к</b></p>
                            <p>Балкон <b>- 160-200 Вт/м.кв</b></p>`,
            },
            flooring_type : {
                title : 'Тип напольного покрытия',
                description : `<p>От выбора напольного покрытия зависит
                                тип теплого пола, который Вам подойдет.</p>`
            },
            destination : {
                title : 'Для чего будет использоваться',
                description : ` <p>
                                Для основного отопления необходимо
                                закрыть теплым полом примерно 70%
                                от общей площади помещения.
                                </p>`
            },
            floor_evalation_level : {
                title : 'На какую высоту можно поднять уровень пола?',
                description : `<p>Если есть возможность поднять уровень
                                пола, желательно положить утеплитель
                                (экструдированный пенополистерол)
                                Частный дом, первый этаж или выносной
                                балкон - 5 см и больше). Второй и выше
                                этаж - 2 см</p>`
            },
            free_square : {
                title : 'Свободная площадь под теплый пол',
                description : `<p> Необходимо указывать только
                                свободную площадь для каждого 
                                помещения отдельно, без учета 
                                низкостоящей мебели.
                                 </p><p><img src="https://leto.net.ua/catalog/view/theme/default/template/calculation/img/square.jpg"> </p>`
            },
            thermoregulator_type : {
                title : 'Выберите терморегулятор',
                description : `<p>
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
                                </p>`
            },
            product_list : {
                title : 'Вам подойдут товары:',
                description : `<p><b>Нагревательный мат</b> - двужильный
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
                                </p>`
            }
        },
        criteriaValues : {
            level_first: 'Первый',
            level_second: 'Второй и выше',
            room_type_kitchen: 'Кухня',
            room_type_bedroom: 'Спальня',
            room_type_bathroom: 'Ванная',
            room_type_restroom: 'Санузел',
            room_type_living_room: 'Гостинная',
            room_type_corridor: 'Коридор',
            room_type_balcony: 'Балкон',
            room_type_other: 'Другое',
            flooring_type_tile: 'Плитка',
            flooring_type_tile_whom: 'плитки',
            flooring_type_laminate: 'Ламинат',
            flooring_type_laminate_whom: 'ламината',
            flooring_type_linoleum: 'Линолеум',
            flooring_type_linoleum_whom: 'линолеума',
            flooring_type_parquet_board: 'Паркетная доска',
            flooring_type_parquet_board_whom: 'паркетной доски',
            flooring_type_carpeting: 'Ковролин',
            flooring_type_carpeting_whom: 'ковролина',
            flooring_type_quartz_vinil_tile: 'Кварцвиниловая плитка',
            flooring_type_quartz_vinil_tile_whom: 'кварцвинила',
            destination_main_heating : 'Основное отопление или доп. обогрев',
            destination_additiona_heating : 'подогрев [floor_type] до комфортной температуры',
            floor_evalation_level_1_2 : '1-2 см',
            floor_evalation_level_3 : '3 см и выше',
            free_square_placeholder : 'Пример: 8.6',
            thermoregulator_type_electromechanical : 'Электромеханический',
            thermoregulator_type_programmable : 'Программируемый',
            thermoregulator_type_wifi : 'Wi-Fi терморегулятор',

        },
        stepStat : 'й вопрос из',
        buttons : {
            prev : 'Назад',
            next : 'Дальше',
            addToCart : 'Добавить в корзину',
            getPromo : 'Получить промокод',
        },
        currency : 'грн'
    },
    'ua-uk' : {
        stepInfo : {
            chose_level : {
                title : 'Виберіть поверх',
                description : `<p>Якщо це приватний будинок, перший поверх абовиносної балкон необхідно -обов'язкова наявність утеплювача
                                (5 см і більше).</p>
                                <p>Якщо це другий і вище поверх - утеплення бажано, але не обов'язково (2 см).</p>`,
            },
            room_type : {
                title : 'Тип приміщення',
                description:`<p>Рекомендована потужність:</p>
                            <p>
                            Кухня, спальня, вітальня, коридор
                            <b>- 130 - 160 Вт/м.кв</b>
                            </p>
                            <p>Ванна, санвузол - <b>150 - 180 Вт/м.к</b></p>
                            <p>Балкон <b>- 160-200 Вт/м.кв</b></p>`,
            },
            flooring_type : {
                title : 'Тип напольного покриття',
                description : `<p>Від вибору підлогового покриття залежить
                                тип теплої підлоги, який Вам підійде.</p>`
            },
            destination : {
                title : 'Для чого буде використовуватись',
                description : ` <p>
                                Для основного опалення необхідно
                                закрити теплою підлогою приблизно 70%
                                від загальної площі приміщення.
                                </p>`
            },
            floor_evalation_level : {
                title : 'На яку висоту можна підняти рівень підлоги?',
                description : `<p>Якщо є можливість підняти рівень підлоги, бажано покласти утеплювач (екструдований пінополістирол)
                               Приватний будинок, перший поверх або виноснойбалкон - 5 см і більше). Другий і вище поверх - 2 см</p>`
            },
            free_square : {
                title : 'Вільна площа під теплу підлогу',
                description : `<p> Необхідно вказувати тільки вільну площу для кожного приміщення окремо, без урахування меблів.
                                 </p><p><img src="https://leto.net.ua/catalog/view/theme/default/template/calculation/img/square.jpg"> </p>`
            },
            thermoregulator_type : {
                title : 'Виберіть терморегулятор',
                description : `<p>
                                <strong>Електромеханічний </strong> - простий і бюджетний варіант. Є кнопка вкл / викл і коліщатко накрутки температури:
                                </p>
                                <p>
                                <strong>Програмований</strong> - є ЖК дисплей, на якому показана температура та + можна програмувати (задавати, коли теплій підлозі включитися / вимкнутися)
                                </p>
                                <p>
                                <strong>Wi-Fi терморегулятори</strong>- можливість керувати віддалено (з телефону), в будь-який момент часу.
                                </p>`
            },
            product_list : {
                title : 'Вам підійдуть товари:',
                description: `<p>
                                <b>Нагрівальний мат </b> - двожильний нагрівальний кабель, діаметром 3. 5 - 4. 5 мм, покладений витками на армуючої сітки з певним кроком укладання. Укладається на готову стяжку і топиться в шар плиткового клею, не піднімаючи рівень підлоги.
                               </p>
                                <p>
                                Переваги:
                                1) Нагрівання плитки за 30 хв
                                2) Армує плитковий клей
                                3) Простий і швидкий монтаж.
                                </p>`
            }
        },
        criteriaValues : {
            level_first: 'Перший',
            level_second: 'Другий і вище',
            room_type_kitchen: 'Кухня',
            room_type_bedroom: 'Спальня',
            room_type_bathroom: 'Ванна',
            room_type_restroom: 'Санвузол',
            room_type_living_room: 'Вітальня',
            room_type_corridor: 'Коридор',
            room_type_balcony: 'Балкон',
            room_type_other: 'Інше',
            flooring_type_tile: 'Плитка',
            flooring_type_tile_whom: 'плитки',
            flooring_type_laminate: 'Ламінат',
            flooring_type_laminate_whom: 'ламінату',
            flooring_type_linoleum: 'Лінолеум',
            flooring_type_linoleum_whom: 'лінолеума',
            flooring_type_parquet_board: 'Паркетна дошка',
            flooring_type_parquet_board_whom: 'паркетної дошки',
            flooring_type_carpeting: 'Ковролін',
            flooring_type_carpeting_whom: 'ковроліну',
            flooring_type_quartz_vinil_tile: 'Кварцвінілова плитка',
            flooring_type_quartz_vinil_tile_whom: 'кварцвінілу',
            destination_main_heating : 'Основне опалення або дод. обігрів',
            destination_additiona_heating : 'підігрів [floor_type] до комфортої температури',
            floor_evalation_level_1_2 : '1-2 см',
            floor_evalation_level_3 : '3 см і вище',
            free_square_placeholder : 'Приклад: 8.6',
            thermoregulator_type_electromechanical : 'Електромеханічний',
            thermoregulator_type_programmable : 'Програмований',
            thermoregulator_type_wifi : 'Wi-Fi терморегулятор',

        },
        stepStat : 'е питання з',
        buttons : {
            prev : 'Назад',
            next : 'Далі',
            addToCart : 'Додати в кошик',
            getPromo : 'Отримати промокод',
        },
        currency : 'грн'
    },
};