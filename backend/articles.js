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

  const javascriptObject = parser.parse(xmlData);
  const items = javascriptObject?.rss?.channel?.item;

  const newItems = items.map((item, index) => {
    const {
      category: categories,
      guid,
      title,
      "dc:creator": author,
      "content:encoded": content,
    } = item;

    const description = content.substring(0, 300);
    const partialContent = content.substring(
      content.indexOf(`<figure>`),
      content.indexOf(`<figcaption>`)
    );
    const thumbnail = partialContent.replace(/.*src="(.+)".*/, "$1");

    return { categories, guid, title, author, description, thumbnail };
  });

  response.body = JSON.stringify(newItems);

  return response;
};
