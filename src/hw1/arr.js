var n = 10;
var arr = new Array(n);
console.log('Исходный массив чисел \n' + createArray(n));

function createArray(n) {
    var i;
    for (i = 0; i < n; i++) {
        arr[i] = Math.floor(Math.random() * 100);
    }
    return arr;
}

// Задание 1.
// Минимальный элемент массива

function findMinElem(a) {
    if (a.length === 0) {
        return null;
    }
    var aMin = a[0];
    for (var i = 1; i < a.length; i++) {
        if (a[i] < aMin) {
            aMin = a[i];
        }
    }
    return aMin;
}

// Задание 2.
// Максимальный элемент массива

function findMaxElem(a) {
    if (a.length === 0) {
        return null;
    }
    var aMax = a[0];
    for (var i = 1; i < a.length; i++) {
        if (a[i] > aMax) {
            aMax = a[i];
        }
    }
    return aMax;
}


// Задание 3.
// Индекс минимального элемента массива

function findIndexMinElem(a, nBegin, nEnd) {
    if (a.length === 0) {
        return null;
    }
    if (nBegin === undefined) nBegin = 0;
    if (nEnd === undefined || nEnd > a.length - 1) nEnd = a.length - 1;
    var aMin = a[nBegin];
    var index_aMin = nBegin;
    for (i = nBegin + 1; i <= nEnd; i++) {
        if (a[i] < aMin) {
            aMin = a[i];
            index_aMin = i;
        }
    }
    return index_aMin;
}

// Задание 4.
// Индекс максимального элемента массива

function findIndexMaxElem(a) {
    if (a.length === 0) {
        return null;
    }
    var aMax = a[0];
    var index_aMax = 0;
    for (var i = 1; i < a.length; i++) {
        if (a[i] > aMax) {
            aMax = a[i];
            index_aMax = i;
        }
    }
    return index_aMax;
}

// Задание 5
// Сумма элементов с нечетными индексами

function sumUnevenIndex(a) {
    if (a.length === 0) {
        return null;
    }
    var sum = 0;
    for (var i = 0; i < a.length; i++) {
        if (i % 2 !== 0) {
            sum += a[i];
        }
    }
    return sum;
}

// Задание 7
// Количество  нечетных элементов равно

function countUnevenElement(a) {
    if (a.length === 0) {
        return null;
    }
    var count = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] % 2 !== 0) {
            count++;
        }
    }
    return count;
}

// Задание 6.
// Реверс исходного массива чисел

function reversArray(a) {
    var b = new Array(a.length);
    for (var i = 0; i < a.length; i++) {
        b[i] = a[a.length - 1 - i];
    }
    return b;
}

// Задание 8
// Меняем местами первую и вторую половину массива

function shiftHalf(a) {
    var n = a.length;
    var n2 = Math.floor(n / 2);
    var b = new Array(n);
    for (var i = 0; i < n2; i++) {
        b[n2 - 1 - i] = a[n - 1 - i];
        b[n - 1 - i] = a[n2 - 1 - i]
    }
    if (n % 2 !== 0) {
        b[n2] = a[n2]
    }
    return b;
}


// Сортировка массива "пузырьковым" методом

function sortBubble(arrA) {
    if (arrA.length === 0) {
        return [];
    }
    var x;

    for (var i = 0; i < arrA.length; i++) {
        var flag = true;

        for (var j = arrA.length - 1; j > i; j--) {
            if (arrA[j] < arrA[j - 1]) {
                x = arrA[j];
                arrA[j] = arrA[j - 1];
                arrA[j - 1] = x;
                flag = false;
            }
        }
        if (flag) break;
    }
    return arrA
}

// Сортировка массива методом вставок

function sortInsert(arrA) {
    if (arrA.length === 0) {
        return [];
    }
    var x = arrA[0];
    var i = findIndexMinElem(arrA);
    arrA[0] = arrA[i];
    arrA[i] = x;

    for (i = 2; i < arrA.length; i++) {
        x = arrA[i];
        j = i;
        while (x < arrA[j - 1]) {
            arrA[j] = arrA[j - 1];
            j--;
        }
        arrA[j] = x;
    }
    return arrA;
}

// Сортировка массива методом выбора

function sortSelection(arrA) {
    if (arrA.length === 0) {
        return [];
    }
    for (var i = 0; i < arrA.length - 1; i++) {

        for (var j = i; j < arrA.length; j++) {
            var indexMin = findIndexMinElem(arrA, i);
            var x = arrA[i];
            arrA[i] = arrA[indexMin];
            arrA[indexMin] = x;
        }
    }
    return arrA;
}
