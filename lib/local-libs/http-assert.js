import createError from 'http-errors'
import { equals } from 'pepka'

/**
 * Fork from github.com/jshttp/http-assert
 * Rewritten and got deps switched by Michael Akiliev @ 2023
 */

export default class HTTPAssert {
  static fail = (status, msg, opts) => new HTTPAssert(false, status, msg, opts)
  static equal = (a, b, status, msg, opts) => new HTTPAssert(a == b, status, msg, opts)
  static notEqual = (a, b, status, msg, opts) => new HTTPAssert(a != b, status, msg, opts)
  static ok = (value, status, msg, opts) => new HTTPAssert(value, status, msg, opts)
  static strictEqual = (a, b, status, msg, opts) => new HTTPAssert(a === b, status, msg, opts)
  static notStrictEqual = (a, b, status, msg, opts) => new HTTPAssert(a !== b, status, msg, opts)
  static deepEqual = (a, b, status, msg, opts) => new HTTPAssert(equals(a, b), status, msg, opts)
  static notDeepEqual = (a, b, status, msg, opts) => new HTTPAssert(!equals(a, b), status, msg, opts)
  constructor(value, status, msg, opts) {
    if (!value) throw createError(status, msg, opts)
  }
}