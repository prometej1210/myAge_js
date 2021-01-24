function MyAge() {
    var date = new Date();

    //Переменные текущей даты
    var currentyear = date.getYear() + 1900;
    var currentmounth = date.getMonth() + 1;
    var currentday = date.getDate();
    
    //Переменные даты рождения
    var myday = document.form.days.value;
    var mymounth = document.getElementById("mounths").value;
    var myyear = document.form.years.value;

    //Переменные прошедшего времени, вычислить которые предстоит
    var year, mounth, day;//


// сама программка 
year = currentyear - myyear;//Выяисляется сколько лет прошло

//Вычисляем условие если текущий месяц меенее месяца рождения
if (currentmounth >= mymounth){
    mounth = currentmounth - mymounth;
}
else {mounth = 12 + currentmounth - mymounth; year -=1;}

//Вычисляем условие если текущий день меенее дня рождения
if (currentday >= myday){
    day = currentday - myday;
}
else {day = 30 + currentday - myday; mounth -=1;}

//Условия вывода

if (year >= 0){

document.form.result.value = "Вам " + parseInt (year) + " лет " + parseInt (mounth)   + " месяцев " + parseInt (day) + " дней";

if (year == 0){
    document.form.text.value = "Вы младенец";
}
else if (year >= 1 && year <= 3){
    document.form.text.value = "У вас раннее детство";
}
else if (year > 3 && year <= 6){
    document.form.text.value = "Вы дошкольник";
}
else if (year > 6 && year <= 13){
    document.form.text.value = "У вас школьный возраст";
}
else if (year > 13 && year <= 17){
    document.form.text.value = "Вы подросток";
}
else if (year > 17 && year <= 21){
    document.form.text.value = "Вы юноша";
}
else if (year > 21 && year <= 27){
    document.form.text.value = "Вы очень молоды";
}
else if (year > 27 && year <= 35){
    document.form.text.value = "Вы зрелый человек";
}
else if (year > 35 && year <= 50){
    document.form.text.value = "Вы во второй половине жизни";
}
else if (year > 50 && year <= 60){
    document.form.text.value = "Вы немного стареете";
}
else if (year > 60 && year <= 72){
    document.form.text.value = "Вы подилой человек";
}
else if (year > 72 && year <= 80){
    document.form.text.value = "Вы стары";
}
else if (year > 80 && year <= 90){
    document.form.text.value = "Вы глубокий старик";
}
else if (year > 90 && year <= 120){
    document.form.text.value = "Вы долгожитель";
}
else if (year > 120 && year <= 240){
    document.form.text.value = "Рекорд долгожительства?";
}
else if (year > 240){
    document.form.text.value = "Кто ты и почему столько живешь?";
}

}

else {
    year = -year;
    document.form.result.value = "До вашего рождения осталось: ";
    document.form.text.value = parseInt (year) + " лет " + parseInt (mounth)   + " месяцев " + parseInt (day) + " дней";
}



//Условия правильного ввода

if (myday<=0||myday>31){
    alert("Укажите корректный день рождения");
    document.form.result.value = "";
    document.form.text.value = "";
}

if (mymounth == 0){
    alert("Укажите корректный месяц рождения");
    document.form.result.value = "";
    document.form.text.value = "";
}

document.form.years.value = "";
document.form.mounths.value = 0;
document.form.days.value = "";



}
