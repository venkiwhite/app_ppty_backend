const crypto = require('crypto');

module.exports = {

    encryptPassword: (password) => {
        return crypto.createHash('md5').update(password).digest('hex');
    },
}