import createError from 'http-errors'
import { equals } from 'pepka'

export default class HTTPAssert {
  static fail = (status, msg, opts) => assert(false, status, msg, opts)
  static equal = (a, b, status, msg, opts) => assert(a == b, status, msg, opts)
  static notEqual = (a, b, status, msg, opts) => assert(a != b, status, msg, opts)
  static ok = (value, status, msg, opts) => assert(value, status, msg, opts)
  static strictEqual = (a, b, status, msg, opts) => assert(a === b, status, msg, opts)
  static notStrictEqual = (a, b, status, msg, opts) => assert(a !== b, status, msg, opts)
  static deepEqual = (a, b, status, msg, opts) => assert(equals(a, b), status, msg, opts)
  static notDeepEqual = (a, b, status, msg, opts) => assert(!equals(a, b), status, msg, opts)
  constructor(value, status, msg, opts) {
    if (value) return
    throw createError(status, msg, opts)
  }
}