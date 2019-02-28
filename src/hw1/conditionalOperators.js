// Задание 1
// Если а – четное посчитать а*б, иначе а+б

function selectAction(a, b) {
    if (isEven(a)) {
        return a * b;
    } else {
        return a + b;
    }
}

function isEven(x) {
    if (x % 2 == 0) {
        return true;
    }
    return false;
}


// Задание 2
// Определить какой четверти принадлежит точка с координатами (х,у)

function getLocationPoint(x, y) {
    if (x === 0 && y === 0) {
        throw 'Point is the origin';
    }
    if (x === 0) {
        throw 'The point belongs to the axis Y';
    }
    if (y === 0) {
        throw 'The point belongs to the axis X';
    }
    if (isPositive(x)) {
        if (isPositive(y)) {
            return 1;
        } else {
            return 4;
        }
    } else {
        if (isPositive(y)) {
            return 2;
        } else {
            return 3;
        }
    }
    ;
}

function isPositive(z) {
    if (z >= 0) {
        return true;
    }
    return false;
}


// Задание 3
// Найти суммы только положительных из трех чисел

function getPositiveSum(a, b, c) {
    var sum = 0;
    if (isPositive(a)) {
        sum += a;
    }
    ;
    if (isPositive(b)) {
        sum += b;
    }
    ;
    if (isPositive(c)) {
        sum += c;
    }
    ;

    if (sum == 0) {
        return sum;
    } else {
        return sum;
    }
    ;
}

function isPositive(z) {
    if (z >= 0) {
        return true;
    }
    return false;
}


// Задание 4
// Посчитать выражение макс(а*б*с, а+б+с)+3

function selectSumOrMultiplication(a, b, c) {
    var sum = a + b + c;
    var multi = a * b * c;

    if (sum >= multi) {
        return sum + 3;
    } else {
        if (sum < multi) {
            return multi + 3;
        }
    }
}

// Задание 5
// Написать программу определения оценки студента по его рейтингу

function getMark(rating) {
    if (rating > 100 || rating < 0) {
        throw 'Rating does not match the range from 0 to 100';

    } else {
        if (rating >= 90) {
            return 'A';
        }
        if (rating >= 75) {
            return 'B';
        }
        if (rating >= 60) {
            return 'C';
        }
        if (rating >= 40) {
            return 'D';
        }
        if (rating >= 20) {
            return 'E';
        }
        return 'F';
    }

}
