import mime_lite from 'mime/lite'
const {getType} = mime_lite

export default (type) => getType(type)