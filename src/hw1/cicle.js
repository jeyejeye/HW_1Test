// Задание 1
// Сумма четных чисел в интервале от 1 до 99 равна
//

function getSumEvenEndQuantity() {
    var sum_even = 0;
    var quantity_even = 0;

    for(var i = 2; i < 99; i+=2) {
        sum_even+=i;
        quantity_even++;
    }
    return { sum: sum_even, quantity: quantity_even };
}

// Задание 2
// Определить является ли число простым

function isPrime(x){
    for(var i = 2; i<x; i++){
        if(x%i == 0){
            return false;
        }
    }
    return true;
}

// Задание 4
// Факториал числа


function getFactorial(n){
    var f = 1;

    if(n > 1) {
    f = getFactorial(n-1)*n;
    }
    return f;
}


// Задание 5
// Сумма цифр числа

function getSumSingle(n) {
    var str = ''+ n;
    var sum = 0;
    for(var i = 0; i < str.length; i++) {
        sum += +str[i];
    }
    return sum;
}


// Задание 6
// Реверс числа

function reversNumber(n) {
    var str = '' + n;
    var strR = '';
    for(var i = str.length-1; i >= 0; i--){
    strR += str[i];
}
return +strR;
}
