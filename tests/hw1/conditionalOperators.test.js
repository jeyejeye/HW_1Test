describe('selectAction', function () {
    it('should return a + b', function () {
        const a = 1;
        const b = 2;
        const expected = 3;

        const actual = selectAction(a, b);

        assert.equal(actual, expected);
    });

    it('should return a * b', function () {
        const a = 2;
        const b = 3;
        const expected = 6;

        const actual = selectAction(a, b);

        assert.equal(actual, expected);
    });
});

describe('isEven', function () {
    it('should return true if a is even', function () {
        const a = 2;

        assert.isTrue(isEven(a));
    });
    it('should return false if a is not even', function () {
        const a = 1;

        assert.isFalse(isEven(a));
    });
});

describe('isPositive', function () {
    it('should return true if a is positive', function () {
        const a = 2;

        assert.isTrue(isPositive(a));
    });
    it('should return false if a is not positive', function () {
        const a = -1;

        assert.isFalse(isPositive(a));
    });
});


describe('getPositiveSum', function () {

    const testData = [
        {a: 1, b: -1, c: 0, expected: 1},
        {a: -1, b: -1, c: -10, expected: 0},
    ];

    testData.forEach(function (data) {
        const {a, b, c, expected} = data;
        it(`should return sum of positive numbers ${expected}   when   a = ${a}, b = ${b}, c = ${c}`, function () {
            const actual = getPositiveSum(a, b, c);

            assert.equal(actual, expected);
        });
    });

});


describe('getLocationPoint', function () {

    describe('should return quarter by coordinates', function () {
        const testData = [
            {x: 1, y: 2, expected: 1},
            {x: -1, y: 2, expected: 2},
            {x: -1, y: -2, expected: 3},
            {x: 1, y: -2, expected: 4},
        ]
        testData.forEach(function (data) {
            const {x, y, expected} = data;
            it(`should return ${expected}   when  x = ${x}, y = ${y}`, function () {
                const actual = getLocationPoint(x, y);

                assert.equal(actual, expected);
            });
        });

    });

    describe('should rise exception if point is the origin', function () {
        const x = 0;
        const y = 0;
        it(`should rise exception  when  x = ${x}, y = ${y}`, function () {

            assert.throw(() => getLocationPoint(x, y), 'Point is the origin');
        });
    });

    describe('should rise exception if point belongs to the axis Y', function () {
        const x = 0;
        const y = 5;
        it(`should rise exception  when  x = ${x}, y = ${y}`, function () {

            assert.throw(() => getLocationPoint(x, y), 'The point belongs to the axis Y');
        });
    });

    describe('should rise exception if point belongs to the axis X', function () {
        const x = 5;
        const y = 0;
        it(`should rise exception  when  x = ${x}, y = ${y}`, function () {

            assert.throw(() => getLocationPoint(x, y), 'The point belongs to the axis X');
        });
    });
});

describe('selectSumOrMultiplication', function () {

    const testData = [
        {a: 1, b: -1, c: 0, expected: 3},
        {a: -1, b: -1, c: -10, expected: -7},
        {a: 3, b: 2, c: 3, expected: 21}
    ];

    testData.forEach(function (data) {
        const {a, b, c, expected} = data;
        it(`should return max(а*б*с, а+б+с)+3' ${expected}   when  a = ${a}, b = ${b}, c = ${c}`, function () {
            const actual = selectSumOrMultiplication(a, b, c);

            assert.equal(actual, expected);
        });
    });
});

describe('getMark', function () {
    describe('should return mark of student by rating', function () {
        const testData = [
            {rating: 0, expected: 'F'},
            {rating: 1, expected: 'F'},
            {rating: 19, expected: 'F'},
            {rating: 20, expected: 'E'},
            {rating: 30, expected: 'E'},
            {rating: 39, expected: 'E'},
            {rating: 40, expected: 'D'},
            {rating: 50, expected: 'D'},
            {rating: 59, expected: 'D'},
            {rating: 60, expected: 'C'},
            {rating: 70, expected: 'C'},
            {rating: 74, expected: 'C'},
            {rating: 75, expected: 'B'},
            {rating: 80, expected: 'B'},
            {rating: 89, expected: 'B'},
            {rating: 90, expected: 'A'},
            {rating: 95, expected: 'A'},
            {rating: 100, expected: 'A'}
        ];

        testData.forEach(function (data) {
            const {rating, expected} = data;
            it(`should return   ${expected}   when  rating = ${rating}`, function () {
                const actual = getMark(rating);

                assert.equal(actual, expected);
            });
        });
    });
    describe('should  rise exception if rating < 0 or rating >100', function () {
        const testData = [
            {rating: -1},
            {rating: 101}
        ];

        testData.forEach(function (data) {
            const {rating, expected} = data;
            it(`should rise exception when rating = ${rating}`, function () {

                assert.throw(() => getMark(rating), 'Rating does not match the range from 0 to 100');
            });
        });
    });
});
