
// import { priceList } from './price';
const priceList = [{"id":"1", "type": "correction","name": "Корекція фігури 'Експрес' ","duration": "60","price": "650"},
{"id":"2","type": "correction","name":"Корекція фігури 'Основна'","duration": "60" ,"price":"640" },
{"id":"3","type": "correction","name":"Корекція фігури 'Індивідуальна'" ,"duration":"60" ,"price":"700" },
{"id":"4","type": "correction","name": "Антицелюлітний","duration":"60", "price": "550"},
{"id":"5","type": "correction","name": "Профілактичний масаж","duration":"60" ,"price": "550"},
{"id":"6","type": "correction","name": "Корекція рук (додаток до корекції фігури)","duration": "30","price": "350"},
{"id":"7","type": "correction","name": "Збільшення часу сеансу","duration": "30","price":"300" },
{"id":"8","type": "correction","name": "Накачаємо сідниці","duration": "30","price": "420"},
{"id":"9","type": "correction","name": "Корекція талії","duration": "30","price":"400" },
{"id":"10","type": "correction","name":"Сідниці + талія","duration":"60","price": "650"},
{"id":"12","type": "estetic","name":"Зволожуючий масаж кремом (dr. Spiller)","duration":"60","price": "730"},
{"id":"11","type": "estetic","name":"Лімфодренажний масаж","duration":"60","price": "700"},
{"id":"13","type": "estetic","name":"Медове тонізування шкіри","duration":"60","price": "700"},
{"id":"14","type": "estetic","name":"Медовий на одну зону","duration":"30","price": "500"},
{"id":"15","type": "estetic","name":"Доглядовий масаж обличчя","duration":"30","price": "400"},
{"id":"16","type": "estetic","name":"Збільшення часу сеансу","duration":"30","price": "300"},
{"id":"17","type": "estetic","name":"Глибока дегідратація","duration":"150","price": "1500"},
{"id":"18","type": "estetic","name":"Лімфодренажне обгортання","duration":"90","price": "1000"},
{"id":"19","type": "estetic","name":"Спортивний + ефект залу","duration":"60","price": "700"},
{"id":"20","type": "estetic","name":"Масаж для втомлених ніг","duration":"40","price": "500"},
{"id":"21","type": "estetic","name":"Масажний крем dr. Spiller на все тіло","duration":"--","price": "100"},
{"id":"22","type": "estetic","name":"Масажний крем dr. Spiller на одну зону","duration":"--","price": "50"},
{"id":"23","type": "health","name":"Шийно-комірцева зона","duration":"30","price": "375"},
{"id":"24","type": "health","name":"Лікувальний масаж спини","duration":"45","price": "475"},
{"id":"25","type": "health","name":"Загальний оздоровчий масаж","duration":"60","price": "675"},
{"id":"26","type": "health","name":"Масаж м'язове відновлення","duration":"60","price": "650"},
{"id":"27","type": "health","name":"Лікувальний стегна","duration":"30","price": "375"},
{"id":"28","type": "health","name":"Лікувальний рук","duration":"30","price": "375"},
{"id":"29","type": "health","name":"Вакуумний лікувальний спини","duration":"45","price": "500"},
{"id":"30","type": "health","name":"Оздоровчий комплекс","duration":"60","price": "700"},
{"id":"31","type": "health","name":"Оздоровчий масаж спини","duration":"40","price": "440"},
{"id":"32","type": "relax","name":"Масаж аромасвічками","duration":"60","price": "900"},
{"id":"33","type": "relax","name":"Аромамасаж","duration":"60","price": "1000"},
{"id":"34","type": "relax","name":"Розслабляючий масаж + ароматерапія","duration":"60","price": "900"},
{"id":"35","type": "relax","name":"Розслабляючий масаж","duration":"75","price": "700"},
{"id":"36","type": "relax","name":"Масаж гарячим камінням","duration":"60","price": "1200"},
{"id":"37","type": "relax","name":"Пілінг тіла 'Гідратація'","duration":"50","price": "650"},
{"id":"38","type": "relax","name":"Молочний пілінг тіла","duration":"50","price": "600"},
{"id":"39","type": "relax","name":"Ароматерапія","duration":"--","price": "150"},
{"id":"40","type": "relax","name":"Ефірні масла","duration":"--","price": "100"},
{"id":"41","type": "relax","name":"Розслабляючий комплекс","duration":"85","price": "1000"}
]

const arrayTypes = [document.getElementById("correction"), document.getElementById("estetic"),document.getElementById("health"), document.getElementById("relax")]

function findItemsById(id) {

    return priceList.filter(item => item.type === id)
}

function createMarkupById(id) {
   const array = findItemsById(id)
    return array.map(({name, duration,price}) => {return ` <tr>
                <td class="table_first_column">${name}</td>
                <td class="table_second_column">${duration}</td>
                <td class="table_third_column">${price}</td>
            </tr>`}).join("")
}

function makeAllMarkup(array) {
    array.forEach(element => {
        const priceListMarkup = createMarkupById(element.id);
        element.insertAdjacentHTML('beforeend', priceListMarkup);
    });
}

makeAllMarkup(arrayTypes)


