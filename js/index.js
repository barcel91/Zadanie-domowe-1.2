let result = prompt("Podaj liczbę");

if (Number.isInteger(Number(result))){
    if (( result >= -35 && result < 2 ) || ( result > 11 && result <= 27 )) {
        alert("mieści się");
    } else {
        alert("nie mieści się");
    }
} else {
    alert("Te nie liczba");
}