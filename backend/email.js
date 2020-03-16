'use strict';
const AWS = require('aws-sdk');
const ses = new AWS.SES({ apiVersion: "2010-12-01", region: "us-east-1"});
const sendTo = process.env.SEND_TO;

exports.handler = async event => {


    const subject = "Test email"
    const message = "My message to iwa. Please enter in contact I want to hire you!"
    const source = "contact@iwaduarte.dev";

    // const {subject, message, source} = event.body;

    const params = {
        Destination: {
            ToAddresses: [sendTo]
        },
        Message: {
            Body: {
                Text: {
                    Charset: "UTF-8",
                    Data: message
                }
            },
            Subject: {
                Charset: "UTF-8",
                Data: subject
            }
        },
        Source: source,
    };


    return await ses.sendEmail(params).promise().then(data => data).catch(err => {
        console.log('function error'+err)
        return { err: err, message: "sorry not possible"}

    });

    //     , function (err, data) {
    //   if (err) console.log(err, err.stack); // an error occurred
    //   else console.log(data);           // successful response
    //   /*
    //   data = {
    //    MessageId: "EXAMPLE78603177f-7a5433e7-8edb-42ae-af10-f0181f34d6ee-000000"
    //   }
    //   */
    // });


    // return {
    //     statusCode: 200,
    //     body: JSON.stringify(
    //         {
    //             message: 'Go Serverless v1.0! Your function executed successfully!',
    //             input: event,
    //         },
    //         null,
    //         2
    //     ),
    // };

    // Use this code if you don't use the http event with the LAMBDA-PROXY integration
    // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
