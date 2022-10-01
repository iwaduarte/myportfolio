const { XMLParser, XMLBuilder, XMLValidator } = require("fast-xml-parser");
const axios = require("axios");

const parser = new XMLParser();
const response = {
  statusCode: 200,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "https://iwaduarte.dev",
  },
  isBase64Encoded: false,
};

exports.handler = async () => {
  const xmlData = await axios
    .get(`https://medium.com/feed/@iwaduarte`)
    .then(({ data }) => data);

  const javascriptObject = parser.parse(xmlData);
  const item = javascriptObject?.rss?.channel?.item;
  response.body = JSON.stringify(item);

  return response;
};

exports.handler();
