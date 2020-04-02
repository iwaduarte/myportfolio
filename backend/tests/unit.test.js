const escapeHtml = require('../utils/escapeHtml');


describe("fn: escapeHtml", () => {

    test('Escaping html with xss injection', () => {

        const html = `<h1>Hello</h1><script>console.log('hi')</script>`;
        const htmlEscaped = `&lt;h1>Hello&lt;/h1>&lt;script>console.log(&#039;hi&#039;)&lt;/script>`;
        expect(escapeHtml(html)).toBe(htmlEscaped)

    });
    test('Escaping html with < (less than)', () => {
        const html = `<`;
        const htmlEscaped = `&lt;`;
        expect(escapeHtml(html)).toBe(htmlEscaped)
    });
    test('Escaping html with & (and)', () => {
        const html = `&`;
        const htmlEscaped = `&amp;`;
        expect(escapeHtml(html)).toBe(htmlEscaped)
    });
    test('Escaping html with " (double quotes)', () => {
        const html = `"`;
        const htmlEscaped = `&quot;`;
        expect(escapeHtml(html)).toBe(htmlEscaped)
    });
    test(`Escaping html with ' (single quotes)`, () => {
        const html = `'`;
        const htmlEscaped = `&#039;`;
        expect(escapeHtml(html)).toBe(htmlEscaped)
    });
    test(`Escaping non escapable string`, () => {
               const html = `This characters are not escapable @!_>.+()*^%$#?`
        expect(html).toBe(html);
    });

});

