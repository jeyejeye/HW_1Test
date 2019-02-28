describe('findMinElem', function () {

    const testData = [
        {arr: [], expected: null},
        {arr: [5], expected: 5},
        {arr: [56, -10, 90, -1], expected: -10},
        {arr: [6, 80, 990, 1, 7], expected: 1}
    ];

    testData.forEach(function (data) {
        const {arr, expected} = data;
        it(`should return min value of array ${expected}   if array is \[${arr}\]`, function () {
            const actual = findMinElem(arr);

            assert.deepEqual(actual, expected);
        });
    });
});

describe('findMaxElem', function () {

    const testData = [
        {arr: [], expected: null},
        {arr: [5], expected: 5},
        {arr: [56, -10, 90, -1], expected: 90},
        {arr: [6, 80, 990, 1, 7], expected: 990}
    ];

    testData.forEach(function (data) {
        const {arr, expected} = data;
        it(`should return max value of array ${expected}   if array is \[${arr}\]`, function () {
            const actual = findMaxElem(arr);

            assert.deepEqual(actual, expected);
        });
    });
});


describe('findIndexMinElem', function () {

    const testData = [
        {arr: [], nBegin: 0, nEnd: 4, expected: null},
        {arr: [5], nBegin: 0, nEnd: 4, expected: 0},
        {arr: [56, -10, 90, -1], nBegin: 0, nEnd: 4, expected: 1},
        {arr: [6, 80, 990, 1, 7], nBegin: 0, nEnd: 2, expected: 0},
        {arr: [6, 80, 990, 1, 7], nBegin: 2, nEnd: 4, expected: 3},
    ];

    testData.forEach(function (data) {
        const {arr, nBegin, nEnd, expected} = data;
        it(`should return index min value of array ${expected}   if array is \[${arr}\] for  nBegin = ${nBegin}, nEnd = ${nEnd}  `, function () {
            const actual = findIndexMinElem(arr, nBegin, nEnd);

            assert.deepEqual(actual, expected);
        });
    });
});


describe('findIndexMaxElem', function () {

    const testData = [
        {arr: [], expected: null},
        {arr: [5], expected: 0},
        {arr: [56, -10, 90, -1], expected: 2},
        {arr: [6, 80, 990, 1, 7], expected: 2},
    ];

    testData.forEach(function (data) {
        const {arr, expected} = data;
        it(`should return ${expected}   if array is \[${arr}\] `, function () {
            const actual = findIndexMaxElem(arr);

            assert.deepEqual(actual, expected);
        });
    });
});


describe('sumUnevenIndex', function () {

    const testData = [
        {arr: [], expected: null},
        {arr: [5], expected: 0},
        {arr: [56, -10, 90, -1, 12], expected: -11},
        {arr: [6, 80, 990, 1, 7, 0], expected: 81},
    ];

    testData.forEach(function (data) {
        const {arr, expected} = data;
        it(`should return ${expected}   if array is \[${arr}\] `, function () {
            const actual = sumUnevenIndex(arr);

            assert.deepEqual(actual, expected);
        });
    });
});


describe('countUnevenElement', function () {

    const testData = [
        {arr: [], expected: null},
        {arr: [5], expected: 1},
        {arr: [56, -10, 90, -1, 12], expected: 1},
        {arr: [6, 80, 990, 1, 7, 0], expected: 2},
    ];

    testData.forEach(function (data) {
        const {arr, expected} = data;
        it(`should return ${expected}   if array is \[${arr}\] `, function () {
            const actual = countUnevenElement(arr);

            assert.deepEqual(actual, expected);
        });
    });
});


describe('reversArray', function () {

    const testData = [
        {arr: [], expected: []},
        {arr: [5], expected: [5]},
        {arr: [56, -10, 90, -1, 12], expected: [12, -1, 90, -10, 56]},
        {arr: [6, 80, 990, 1, 7, 0], expected: [0, 7, 1, 990, 80, 6]},
    ];

    testData.forEach(function (data) {
        const {arr, expected} = data;
        it(`should return \[ ${expected} \]  if array is \[${arr}\] `, function () {
            const actual = reversArray(arr);

            assert.deepEqual(actual, expected);
        });
    });
});


describe('shiftHalf', function () {

    const testData = [
        {arr: [], expected: []},
        {arr: [5], expected: [5]},
        {arr: [56, -10, 90, -1, 12], expected: [-1, 12, 90, 56, -10]},
        {arr: [6, 80, 990, 1, 7, 0], expected: [1, 7, 0, 6, 80, 990]},
    ];

    testData.forEach(function (data) {
        const {arr, expected} = data;
        it(`should return \[ ${expected} \]  if array is \[${arr}\] `, function () {
            const actual = shiftHalf(arr);

            assert.deepEqual(actual, expected);
        });
    });
});


describe('sortInsert', function () {

    const testData = [
        {arr: [], expected: []},
        {arr: [5], expected: [5]},
        {arr: [56, -10, 90, -1, 12], expected: [-10, -1, 12, 56, 90]},
        {arr: [6, 80, 990, 1, 7, 0], expected: [0, 1, 6, 7, 80, 990]},
    ];

    testData.forEach(function (data) {
        const {arr, expected} = data;
        it(`should return \[ ${expected} \]  if array is \[${arr}\] `, function () {
            const actual = sortInsert(arr);

            assert.deepEqual(actual, expected);
        });
    });
});


describe('sortBubble', function () {
    const testData = [
        {arr: [], expected: []},
        {arr: [5], expected: [5]},
        {arr: [56, -10, 90, -1, 12], expected: [-10, -1, 12, 56, 90]},
        {arr: [6, 80, 990, 1, 7, 0], expected: [0, 1, 6, 7, 80, 990]},
    ];

    testData.forEach(function (data) {
        const {arr, expected} = data;
        it(`should return \[ ${expected} \]  if array is \[${arr}\] `, function () {
            const actual = sortBubble(arr);

            assert.deepEqual(actual, expected);
        });
    });
});

describe('sortSelection', function () {

    const testData = [
        {arr: [], expected: []},
        {arr: [5], expected: [5]},
        {arr: [56, -10, 90, -1, 12], expected: [-10, -1, 12, 56, 90]},
        {arr: [6, 80, 990, 1, 7, 0], expected: [0, 1, 6, 7, 80, 990]},
    ];

    testData.forEach(function (data) {
        const {arr, expected} = data;
        it(`should return \[ ${expected} \]  if array is \[${arr}\] `, function () {
            const actual = sortSelection(arr);

            assert.deepEqual(actual, expected);
        });
    });
});
