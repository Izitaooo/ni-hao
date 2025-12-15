const apiKey = "4ZYW7KX5VZ3LJ7HV3U3QYGTGJ";


let t1 = document.getElementById("1");
let t2 = document.getElementById("2");
let t3 = document.getElementById("3");
let t4 = document.getElementById("4");
let t5 = document.getElementById("5");
let t6 = document.getElementById("6");
let t7 = document.getElementById("7");

let button1 = document.getElementById("but");
let buttonText = document.getElementById("button_top")

let picHold = document.getElementById("picHold");
let gifHold = document.querySelectorAll(".rightTing");
let pic = "https://nekos.best/api/v2/husbando"
let pic2 = "https://nekos.best/api/v2/neko"
let picGif = "https://nekos.best/api/v2/hug?amount=15"

let pictureData;

fetch(picGif)
    .then(res => {
        if (!res.ok){
            console.log("pic wong");
            throw new Error(`HTTP error ${res.status} pic wonger`);
        }
        return res.json();
    })
    .then(data => {

        let picture;

        gifHold.forEach((gif, i) => {
            picture = data.results[i].url;
            console.log(picture);
            gif.src = picture;
            console.log(gifHold.src);
        })

    })
    .catch(err => console.error("API error:", err));

picHold.addEventListener("click", () => {
    if(pictureData == null) {
        return;
    }
    window.open(pictureData,'_blank');
})

button1.addEventListener("click", (event) => {
    let dateDay = document.getElementById('date').value
    let location = document.getElementById('location').value
    console.log(dateDay + " " + location);

    const url2 =  `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${dateDay}?key=${apiKey}&unitGroup=metric`;

  fetch(url2)
    .then(res => {
        if (!res.ok){
            buttonText.style.color = "red";
            buttonText.textContent = "Try again";
            console.log("yeah");
            throw new Error(`HTTP error ${res.status} MEOWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW`);
        }

        fetch(type)
            .then(res => {
                if (!res.ok){
                    console.log("pic wong");
                    throw new Error(`HTTP error ${res.status} pic wonger`);
                }
                return res.json();
            })
            .then(data => {
                picHold.style.display = "initial";

                const picture = data.results[0].url;
                pictureData = data.results[0].source_url;

                console.log(picture);
                picHold.src = picture;

            })
            .catch(err => console.error("API error:", err));

        return res.json();
    })
    .then(data => {
        const day = data.days[0];
            buttonText.style.color = "#48A9EC";
            buttonText.textContent = "Search";

            console.log("Max temp:", day.tempmax);
            t1.textContent = "Maximum temperature: " +  day.tempmax + " C"
            console.log("Minimum temperature:", day.tempmin);
            t2.textContent = "Minimum temperature: " +  day.tempmin + " C"
            console.log("Conditions:", day.conditions);
            t3.textContent = "Conditions: " +  day.conditions
            console.log("Humidity:", day.humidity);
            t4.textContent = "Humidity: " +  day.humidity + " %RH"
            console.log("Wind speed:", day.windspeed);
            t5.textContent = "Wind speed: " +  day.windspeed + " km/h"
            console.log("Sunrise at: ", day.sunrise);
            t6.textContent = "Sunrise at: " +  day.sunrise
            console.log("Sunset:", day.sunset);
            t7.textContent = "Sunset at: " + day.sunset
        // např. datumy: data.days, nebo aktuální podmínky: data.currentConditions
    })
    .catch(err => console.error("API error:", err));

    let picker = Math.floor(Math.random() * 2);
    console.log(picker);

    let type = pic

    if(picker === 1){
        type = pic2
    }
});

