const { randomString } = require('../src');
describe('Unit test suites for index', () => {
    test('Should return a random city', () => {
        const string = randomString();

        expect(typeof string).toBe('string');
    });

    test('Should check if the city not exist', () => {
        const string = randomString();

        expect(string).not.toMatch(/Cordoba/);
    });
});