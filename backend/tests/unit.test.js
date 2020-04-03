const escapeHtml = require('../utils/escapeHtml');
const deserialize = require('../utils/deserialize');


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

describe("fn: deserialize", () => {

    test('If object is parsed (JSON.parse) when header "json" is provided', () => {

        const event = {
            headers: {
                "content-type": "json",
            },
            body: '{"message":"Hello Iwa", "from":"yourself@testing", "to":"contact@contact"}',
        };
        const bodyObj = {
            message: "Hello Iwa",
            from: "yourself@testing",
            to: "contact@contact"
        };
        expect(deserialize(event)).toStrictEqual(bodyObj)

    });
    test('If object is decoded (querystring.decode) when header "x-www-form-urlencoded" is provided', () => {

        const event = {
            headers: {
                "content-type": "x-www-form-urlencoded",
            },
            body: "message=Hello%20Iwa&from=yourself%40testing&to=contact%40contact",
        };
        const bodyObj = {
            message: "Hello Iwa",
            from: "yourself@testing",
            to: "contact@contact"
        };

        expect(deserialize(event)).toEqual(bodyObj)

    });


});
