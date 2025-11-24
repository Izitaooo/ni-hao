const apiKey = "6MQAPTW42PXTWCMLRY58KUGQS";

const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Prague,CZ?key=${apiKey}&unitGroup=metric&include=days,hours,current`;
const url2 =  `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Prague,CZ/2025-12-01?key=${apiKey}&unitGroup=metric`;

let t1 = document.getElementById("1");
let t2 = document.getElementById("2");
let t3 = document.getElementById("3");
let t4 = document.getElementById("4");
let t5 = document.getElementById("5");
let t6 = document.getElementById("6");
let t7 = document.getElementById("7");

let button1 = document.getElementById("but");

fetch(url2)
    .then(res => {
        if (!res.ok) throw new Error(`HTTP error ${res.status}`);
        return res.json();
    })
    .then(data => {
        const day = data.days[0];

        button1.addEventListener("click", (event) => {
            console.log("Max temp:", day.tempmax);
            t1.textContent = day.tempmax
            console.log("Minimum temperature:", day.tempmin);
            t2.textContent = day.tempmin
            console.log("Conditions:", day.conditions);
            t3.textContent = day.conditions
            console.log("Humidity:", day.humidity);
            t4.textContent = day.humidity
            console.log("Wind speed:", day.windspeed);
            t5.textContent = day.windspeed
            console.log("Sunrise:", day.sunrise);
            t6.textContent = day.sunrise
            console.log("Sunset:", day.sunset);
            t7.textContent = day.sunset
        });


        // např. datumy: data.days, nebo aktuální podmínky: data.currentConditions
    })
    .catch(err => console.error("API error:", err));

