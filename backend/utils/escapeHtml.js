module.exports = (text) => {
    if (!text) return '';
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/"/g, '&quot;') // it's not necessary to escape > (greater than)
        .replace(/'/g, '&#039;');
};


