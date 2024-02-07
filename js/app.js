let yearOfBirth = parseInt(prompt("Введите год рождения"));
let city = prompt("В каком городе живёте?");
let hobby = prompt("Любимый вид спорта (настольный теннис, велоспорт, бокс или др?");

let age;
let messageCity = "";
let messageSport = "";

age = (yearOfBirth === null || isNaN(yearOfBirth)) ? "Вы не ввели свой год рождения :(" : 2024 - yearOfBirth;

if (city === null) {
    messageCity += `Вы не ввели свой город :(`;
} else if (city === "Харьков") {
    messageCity += `Вы живёте в первой столице Украины - в городе ${city}.`;
} else if (city === "Киев") {
    messageCity += `Вы живёте в Украине, столицей которой - город ${city}.`;
} else if (city === "Лондон") {
    messageCity += `Вы живёте в Англии, столицей которой - город ${city}.`;
} else if (city === "Вашингтон") {
    messageCity += `Вы живёте в США, столицей которой - город ${city}.`;
} else {
    messageCity += `Вы живёте в городе ${city}. `;
}

if (hobby === null) {
    messageSport += "Не круто...Вы не ввели свой любимый вид спорта:( ";
} else if (hobby === "настольный теннис") {
    messageSport += `${hobby} ? Круто! Хотите стать Ефимовым В.С. ? (Чемпион Украины в 2023 году)`;
} else if (hobby === "бокс") {
    messageSport += `${hobby} ? Круто! Хотите стать Александром Усиком? :) `;
} else if (hobby === "велоспорт") {
    messageSport += `${hobby} ? Круто! Хотите стать Тодоренко Валентином (многократный чемпион Украины по велоспорту) ?`;
} else {
    messageSport += `${hobby} ? Круто! Но я ещё не выучил такой вид спорта, к сожалению `;
}

alert
(`${age}
${messageCity} 
${messageSport}
`);

