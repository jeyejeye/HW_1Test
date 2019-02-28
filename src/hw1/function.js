//  Функции
//
//  Задание 1
//  Получить строковое название дня недели по номеру дня. 


function dayOfWeek(x) {
    switch (x) {
        case 1:
            return 'Понедельник';
        case 2:
            return 'Вторник';
        case 3:
            return 'Среда';
        case 4:
            return 'Четверг';
        case 5:
            return 'Пятница';
        case 6:
            return 'Суббота';
        case 7:
            return 'Воскресенье';
        default:
            return void 0;
    }
}


//  Задание 2
//  Найти расстояние между двумя точками в двухмерном декартовом пространстве.

function findLength(A, B) {
    return Math.sqrt((A.x - B.x) * (A.x - B.x) + (A.y - B.y) * (A.y - B.y))
}


//  Задание 3
//  Отобразить число прописью 


function displayNumber(n) {
    var arrHundred = ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот',
        'восемьсот', 'девятьсот'];
    var arrTens = ['', 'десять', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят',
        'восемьдесят', 'девяносто'];
    var arrSingle = ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять',
        'одинадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятьнадцать', 'шестьнадцать',
        'семьнадцать', 'восемьнадцать', 'девятьнадцать'];
    var strX;
    if (n === 0) {
        return 'ноль';
    }
    var n0 = n % 10;
    var n1 = n % 100;
    var n2 = n % 1000;
    switch (true) {
        case n1 < 20:
            return arrHundred[(n2 - n1) / 100] + ' ' + arrSingle[n1];
        default:
            return arrHundred[(n2 - n1) / 100] + ' ' + arrTens[(n1 - n0) / 10] + ' ' + arrSingle[n0];
    }
}


//  Задание 4
//  Число прописью  [0; 9999999999999] отобразить цифрами

function createNumberLiteral() {
    var arr = [];
    arr[0] = 'ноль';
    arr[1] = 'один';
    arr[2] = 'два';
    arr[3] = 'три';
    arr[4] = 'четыре';
    arr[5] = 'пять';
    arr[6] = 'шесть';
    arr[7] = 'семь';
    arr[8] = 'восемь';
    arr[9] = 'девять';
    arr[10] = 'десять';
    arr[11] = 'одинадцать';
    arr[12] = 'двенадцать';
    arr[13] = 'тринадцать';
    arr[14] = 'четырнадцать';
    arr[15] = 'пятьнадцать';
    arr[16] = 'шестьнадцать';
    arr[17] = 'семьнадцать';
    arr[18] = 'восемьнадцать';
    arr[19] = 'девятьнадцать';
    arr[20] = 'двадцать';
    arr[30] = 'тридцать';
    arr[40] = 'сорок';
    arr[50] = 'пятьдесят';
    arr[60] = 'шестьдесят';
    arr[70] = 'семьдесят';
    arr[80] = 'восемьдесят';
    arr[90] = 'девяносто';
    arr[100] = 'сто';
    arr[200] = 'двести';
    arr[300] = 'триста';
    arr[400] = 'четыреста';
    arr[500] = 'пятьсот';
    arr[600] = 'шестьсот';
    arr[700] = 'семьсот';
    arr[800] = 'восемьсот';
    arr[900] = 'девятьсот';
    return arr;
}

function createRangLiteral() {
    let objRang = {
        '1': ['тысяча', 'тысяч', 'тысячи'],
        '2': ['миллион', 'миллиона', 'миллионов'],
        '3': ['миллиард', 'миллиарда', 'миллиардов'],
    }
    return objRang;
}

function displayOfStringNumber(strNumber) {
    var arr = createNumberLiteral();
    var obj = createRangLiteral();
    var arrStrNumber = strNumber.split(' ');
    var n = 0;

    for (var i = 0; i < arrStrNumber.length; i++) {
        var flag = false;
        for (var j = 0; j < arr.length; j++) {
            if (arrStrNumber[i] === arr[j]) {
                n += +j;
                flag = true;
                break;
            }
        }
        if (!flag) {
            for (var key in obj) {
                if (arrStrNumber[i] === obj[key][1] || arrStrNumber[i] === obj[key][2] || arrStrNumber[i] === obj[key][3]) {
                    n *= 1000;
                }
            }
        }
    }
    return n;
}

