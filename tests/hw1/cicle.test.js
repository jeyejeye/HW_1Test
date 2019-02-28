describe('getSumEvenEndQuantity', function () {
    it('should return sum even end quantity for  rang [1,99]', function () {
        const expected = {sum: 2450, quantity: 49};

        const actual = getSumEvenEndQuantity();

        assert.deepEqual(actual, expected);
    });
});


describe('isPrime', function () {
    it('should return true if a is prime', function () {
        const a = 43;

        assert.isTrue(isPrime(a));
    });
    it('should return false if a is not prime', function () {
        const a = 6;

        assert.isFalse(isPrime(a));
    });
});


describe('getFactorial', function () {
    const testData = [
        {n: 1, expected: 1},
        {n: 5, expected: 120},
    ]
    testData.forEach(function (data) {
        const {n, expected} = data;
        it(`should return factorial  ${expected}   when  n = ${n}`, function () {
            const actual = getFactorial(n);

            assert.equal(actual, expected);
        });
    });
});


describe('getSumSingle', function () {
    const testData = [
        {n: 1000, expected: 1},
        {n: 5413, expected: 13},
    ]
    testData.forEach(function (data) {
        const {n, expected} = data;
        it(`should return sum single  ${expected}   when  n = ${n}`, function () {
            const actual = getSumSingle(n);

            assert.equal(actual, expected);
        });
    });
});


describe('reversNumber', function () {
    const testData = [
        {n: 1000, expected: 1},
        {n: 5413, expected: 3145},
    ]
    testData.forEach(function (data) {
        const {n, expected} = data;
        it(`should return revers single  ${expected}   when  n = ${n}`, function () {
            const actual = reversNumber(n);

            assert.equal(actual, expected);
        });
    });
});
