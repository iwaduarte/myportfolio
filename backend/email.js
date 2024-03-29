"use strict";
//using only built-in libraries
const AWS = require("aws-sdk");
const escapeHtml = require("./utils/escapeHtml");
const deserialize = require("./utils/deserialize");

const ses = new AWS.SES({ apiVersion: "2010-12-01", region: "us-east-1" });
const sendTo = process.env.SEND_TO;

exports.handler = async (event) => {
  const body = deserialize(event);
  let { message, appSource, from, subject } = body;

  message = message && message.trim();
  appSource = appSource && appSource.trim();
  from = from && from.trim();
  subject = subject && subject.trim();

  const response = {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "https://iwaduarte.dev",
    },
    isBase64Encoded: false,
  };

  // the form does not contain message or source or appSource fields
  if (!message || !from || !appSource) {
    response.statusCode = 400;
    response.body = JSON.stringify(
      {
        message: `Malformed email form! Missing [message:${!!message}, from:${!!from}, appSource:${!!appSource}]`,
        errorType: "Malformed request",
      },
      null,
      2
    );
    return response;
  }
  const messageEscaped = escapeHtml(message);
  const fromEscaped = escapeHtml(from);
  const subjectEscaped = escapeHtml(subject);

  const params = {
    Destination: {
      ToAddresses: [sendTo],
    },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: `<h4> Sender: ${fromEscaped}</h4><div>${messageEscaped}</div>`,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: subjectEscaped || "Unknown",
      },
    },
    Source: appSource,
  };

  const [err, data] = await ses
    .sendEmail(params)
    .promise()
    .then((data) => [null, data])
    .catch((err) => [err, null]);

  const emailResponse = err
    ? { error: "Something happened. Try again later", message: err }
    : { success: "Your message has been delivered", message: data };

  response.body = JSON.stringify(emailResponse, null, 2);

  return response;
};
