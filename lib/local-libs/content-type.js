import mime_lite from 'mime/lite.js'
const {getType} = mime_lite

export default (type) => getType(type)