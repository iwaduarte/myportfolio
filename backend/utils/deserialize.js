const querystring = require('querystring');

module.exports = object => {

    if (!object || !object.headers || !object.body) return {};

    const contentType = object.headers && (object.headers['content-type'] || object.headers['Content-Type']);

    if (contentType && contentType.includes('x-www-form-urlencoded')) {
        return querystring.decode(object.body);

    } else if (contentType && contentType.includes('json'))
        return JSON.parse(object.body);

    return {};

};