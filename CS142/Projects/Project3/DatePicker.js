'use strict';

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

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

class DatePicker{
    constructor(id, callback){
        this.id = id;
        this.date = null;
        this.callback = callback;
        this.root = document.querySelector('#'+id);
        this.createCalender();
    }

    render(date){
        this.date = date;       
        this.$render();

        document.querySelector(`#${this.id} .fa-angle-left`).addEventListener('click', () =>{
            this.date.setMonth(this.date.getMonth()-1);
            this.$render();
        })

        document.querySelector(`#${this.id} .fa-angle-right`).addEventListener('click', () =>{
            date.setMonth(date.getMonth()+1);
            this.$render();
        })

        
    }

    createCalender(){
        this.root.innerHTML = 
        '<div class="container">\
            <div class="calendar">\
                <div class="month">\
                    <span class="fa-angle-left"><</span>\
                    <div class="date">\
                        <h1></h1>\
                        <p></p>\
                    </div>\
                    <span class="fa-angle-right">></span>\
                </div>\
                <div class="weekdays">\
                </div>\
                <div class="days">\
                </div>\
            </div>\
        </div>';
        let Weekdays = "";
        for(let eachDay of weekdays){
            Weekdays += `<div>${eachDay}</div>`;
        }
        document.querySelector(`#${this.id} .weekdays`).innerHTML = Weekdays;
    }

    $render(){
        const monthDays = document.querySelector(`#${this.id} .days`);

        const lastDay = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate();

        const firstDayIndex = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay();
        // console.log(new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay())
        const prevLastDay = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate();

        const lastDayIndex = new Date(this.date.getFullYear(), this.date.getMonth()+1, 0).getDay();
        const nextDays = 7 - lastDayIndex;
        

        document.querySelector(`#${this.id} .date h1`).innerHTML = months[this.date.getMonth()];
        document.querySelector(`#${this.id} .date p`).innerHTML = this.date.toDateString();

        let days = "";

        for(let x = firstDayIndex; x > 0; x--){
            days += `<div class="prev-date">${prevLastDay + 1 - x}</div>`;
        }

        for(let i = 1; i <= lastDay; i++){
            days += `<div class="curr-date"">${i}</div>`;
            monthDays.innerHTML = days;
        }

        for(let y = 1; y < nextDays; y++){
            days += `<div class="next-date">${y}</div>`;
            monthDays.innerHTML = days;
        }

        let currDays = document.querySelectorAll(`#${this.id} .curr-date`);

        for(let day of currDays){
            day.addEventListener('click', (event)=>{
                this.callback(this.id, {
                    year: this.date.getFullYear(),
                    month: this.date.getMonth() + 1,
                    day: event.target.textContent
                });
            });
        }

    }

    

    
}