'use strict';

const AWS = require('aws-sdk');
const querystring = require('querystring');

const ses = new AWS.SES({apiVersion: "2010-12-01", region: "us-east-1"});
const sendTo = process.env.SEND_TO;


const htmlEscape = (text) => {
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/"/g, '&quot;') // it's not necessary to escape >
        .replace(/'/g, '&#039;');
};


exports.handler = async event => {

    const body = querystring.decode(event.body);
    const {message, appSource, from, subject} = body;
    const response = {
        statusCode: 200,
        isBase64Encoded: false
    };
    // the form does not contain message or source fields
    if (!message || !from) {
        response.statusCode = 400;
        response.body = JSON.stringify({
            message: 'Malformed email form!',
            errorType: "Malformed request"
        }, null, 2);
        return response;
    }
    const messageEscaped = htmlEscape(message);
    const fromEscaped = htmlEscape(from);
    const subjectEscaped = htmlEscape(subject);

    const params = {
        Destination: {
            ToAddresses: [sendTo]
        },
        Message: {
            Body: {
                Html: {
                    Charset: "UTF-8",
                    Data: `<h4> Sender: ${fromEscaped}</h4><div>${messageEscaped}</div>`
                }
            },
            Subject: {
                Charset: "UTF-8",
                Data: subjectEscaped || "Unknown",
            }

        },
        Source: appSource,
    };
    return await ses.sendEmail(params).promise()
        .then(data => {
            response.body = JSON.stringify({success: 'Your message has been delivered', message: data}, null, 2);
            return response;
        })
        .catch(err => {
            response.body = JSON.stringify({error: 'Something happened. Try again later', message: err}, null, 2);
            return response;
        });
};
