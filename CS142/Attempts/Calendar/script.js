const date = new Date();

const render = () =>{
    const monthDays = document.querySelector('.days');

const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

const firstDayIndex = date.getDay();
const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

const lastDayIndex = new Date(date.getFullYear(), date.getMonth()+1, 0).getDay();
const nextDays = 7 - lastDayIndex;
console.log(new Date(date.getFullYear(), date.getMonth() + 1, 0));
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

document.querySelector('.date h1').innerHTML = months[date.getMonth()];
document.querySelector(".date p").innerHTML = date.toDateString();

let days = "";

for(let x = firstDayIndex; x >= 0; x--){
    days += `<div class="prev-date">${prevLastDay + 1 - x}</div>`;
}

for(let i = 1; i <= lastDay; i++){
    if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()){
        days += `<div class="today">${i}</div>`;
    } else {
        days += `<div>${i}</div>`;
        monthDays.innerHTML = days;
    }
}

for(let y = 1; y <= nextDays; y++){
    days += `<div class="next-date">${y}</div>`;
    monthDays.innerHTML = days;
}
}



document.querySelector('.prev').addEventListener('click', () =>{
    date.setMonth(date.getMonth()-1);
    render();
})

document.querySelector('.next').addEventListener('click', () =>{
    date.setMonth(date.getMonth()+1);
    render();
})

render();

