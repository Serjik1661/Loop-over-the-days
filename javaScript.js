
const DAYRESULT = document.querySelector('.dayResult');
const DAYNEXT = document.querySelector('.dayNext');
const DAYBACK = document.querySelector('.dayBack');

const daysOfWeek = [
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье'
];

let currentDayIndex = 0;

function updateResult(){
    DAYRESULT.textContent = daysOfWeek[currentDayIndex];
}

DAYNEXT.onclick = function(){
    currentDayIndex = (currentDayIndex + 1) % daysOfWeek.length;

    updateResult();

}
DAYBACK.onclick = function(){
    currentDayIndex = (currentDayIndex - 1 + daysOfWeek.length) % daysOfWeek.length;
    updateResult();
}

// while(true){
//     const currentDay = daysOfWeek[currentDayIndex];
//     const userResponse = confirm(`${currentDay}. Хотите увидеть следующий день?`);

//     if(!userResponse){
//         break;
//     }

//     currentDayIndex = (currentDayIndex + 1) % daysOfWeek.length;
// }

console.log('Спасибо за просмотр дней недели!');
