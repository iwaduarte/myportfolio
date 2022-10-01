const { XMLParser } = require("fast-xml-parser");
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

  console.log("dataaaa", xmlData);

  const javascriptObject = parser.parse(xmlData);
  console.log("JSOBject", javascriptObject);
  const item = javascriptObject?.rss?.channel?.item;
  console.log("item");

  response.body = JSON.stringify(item);

  console.log("jSON");
  return response;
};

exports.handler();
