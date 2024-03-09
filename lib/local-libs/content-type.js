import mime_lite from 'mime/lite'

export default (type) => mime_lite.getType(type)