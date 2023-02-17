const mimelib = require('mime/lite')

module.exports = (type) => mimelib.getType(type)