describe('This is a global test for jest', () => {
    test('Should content a text', () => {
        const text = 'Hello World!';

        
        expect(text).toMatch(/World/)
    });

    test('Should content an array', () => {
        const fruits = ['apples', 'melon', 'banana'];

        expect(fruits).toContain('banana');
    });

    test('Should evaluate if a number is grant to other', () => {
        const TEN = 10;
        const NINE = 9;

        expect(TEN).toBeGreaterThan(NINE);
    });

    test('Should be a true value', () => {
        const trueValue = true;

        expect(trueValue).toBeTruthy();
    });

    test('Should reverse a string callback', () => {
        const resultExpected = "!dlroW olleH";
        const reverseString = (str, callback) => {
            callback(str.split("").reverse().join(""));
        };

        reverseString("Hello World!", (str) => {
            expect(str).toBe(resultExpected);
        });
    });



});