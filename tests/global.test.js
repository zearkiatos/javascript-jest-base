describe('This is a global test for jest', () => {
    test('Should content a text', () => {
        const text = 'Hello World!';

        
        expect(text).toMatch(/World/)
    });
});