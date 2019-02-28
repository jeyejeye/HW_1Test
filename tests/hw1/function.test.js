dayOfWeek
describe('dayOfWeek', function () {

    let testData = [
        {n: 0, expected: undefined},
        {n: 50, expected: undefined}

    ];

    testData.forEach(function (data) {
        const {n, expected} = data;
        it(`should return undefine if n < 1 || n > 7 :   ${expected}    if  n =  ${n}`, function () {
            const actual = dayOfWeek(n);

            assert.deepEqual(actual, expected);
        });
    });

     testData = [
        {n: 1, expected: 'Понедельник'},
        {n: 2, expected: 'Вторник'},
        {n: 3, expected: 'Среда'},
        {n: 4, expected: 'Четверг'},
        {n: 5, expected: 'Пятница'},
        {n: 6, expected: 'Суббота'},
        {n: 7, expected: 'Воскресенье'},
    ];

    testData.forEach(function (data) {
        const {n, expected} = data;
        it(`should return day of week ${expected}    if  n = ${n}`, function () {
            const actual = dayOfWeek(n);

            assert.deepEqual(actual, expected);
        });
    });
});

describe('findLength', function () {

    let testData = [
        {A:{x: 0, y: 0}, B:{x: 0, y:0}, expected: 0},
        {A:{x: 6, y: 8}, B:{x: 0, y:0}, expected: 10},
        {A:{x: -2, y: -2}, B:{x: -5, y: -6}, expected:5}
    ];

    testData.forEach(function (data) {
        const {A,B, expected} = data;
        it(`should return distance between points A and B  ${expected} 
         if  A =  \(${A.x}, ${A.y}\),  B =  \(${A.x}, ${A.y}\)`, function () {
            const actual = findLength(A,B);

            assert.deepEqual(actual, expected);
        });
    });
});

describe('displayNumber', function () {

    let testData = [
        {n:0, expected: 'ноль'},
        {n:613, expected: 'шестьсот тринадцать'},
        {n:976, expected: 'девятьсот семьдесят шесть'},
        {n:970, expected: 'девятьсот семьдесят '},
    ];

    testData.forEach(function (data) {
        const {n, expected} = data;
        it(`should return display number ${expected}    if  n =  ${n}`, function () {
            const actual = displayNumber(n);

            assert.deepEqual(actual, expected);
        });
    });
});

describe('displayOfStringNumber', function () {

    let testData = [
        {str:'ноль', expected:0 },
        {str:'семь', expected: 7},
        {str:'семьдесят', expected: 70},
        {str:'шестьсот тринадцать', expected: 613},
        {str:'девятьсот семьдесят шесть тысяч шестьсот тринадцать', expected: 976613},
        {str:'девятьсот семьдесят шесть миллиардов девятьсот семьдесят шесть миллионов девятьсот семьдесят шесть тысяч шестьсот тринадцать', expected: 976976976613},
    ];

    testData.forEach(function (data) {
        const {str, expected} = data;
        it(`should return display number = ${expected}    if  str =  \'${str}\' `, function () {
            const actual = displayOfStringNumber(str);

            assert.deepEqual(actual, expected);
        });
    });
});
