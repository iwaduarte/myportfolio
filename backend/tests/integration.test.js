const email = require('../email');
jest.mock('aws-sdk', () => ({
    SES: function () {
        return {
            sendEmail: params => ({params, promise: () => Promise.resolve({MessageId: "TEST-2020"})}),
        };
    }
}));
const AWS = require('aws-sdk');


describe('fn: email.js - Testing aws lambda function', () => {

    test('If returns Malformed email', () => {

        const event = {};
        const expected = {
            body: '{\n  "message": "Malformed email form! Missing [message:false, from:false, appSource:false]",\n  "errorType": "Malformed request"\n}',
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "https://iwaduarte.dev"
            },
            isBase64Encoded: false,
            statusCode: 400,

        };
        return email.handler(event)
            .then(result => {
                expect(result).toEqual(expected)
            })

    });
    test('Providing correctly data, 200 response is provided', () => {

        const event = {
            headers: {
                "content-type": "json",
            },
            body: '{"message":"Hello Iwa", "from":"yourself@testing", "to":"contact@contact", "appSource":"react@iwaduarte.dev"}',
        };
        const expected = {
            body: `{\n  "success": "Your message has been delivered",\n  "message": {\n    "MessageId": "TEST-2020"\n  }\n}`
            ,
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "https://iwaduarte.dev"
            },
            isBase64Encoded: false,
            statusCode: 200,

        };
        return email.handler(event)
            .then(result => {
                expect(result).toEqual(expected)
            })

    });


});