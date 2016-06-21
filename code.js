function randomInt(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

var first = ["Twoja stara", "Mariolka", "Sasiad z pietra nizej", "Frencha"];
var second = ["ma smierdzace stopy", "sie nie myje", "skrobie plesn lyzka", "nie zda z matmy xD"];
var space = " ";

window.onload = function() {
    $('#tutaj').html(first[randomInt(0,3)]+space+second[randomInt(0,3)]);    
}

window.addEventListener("click", function() {
    $('#tutaj').html(first[randomInt(0,3)]+space+second[randomInt(0,3)]);     
},false);

