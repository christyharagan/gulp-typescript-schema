import * as through2 from 'through2'
import File = require('vinyl')
import {generateSchema as _generateSchema, Files} from 'typescript-schema'
import * as path from 'path'

export interface Options {
  base?: string
  path: string
}

export function generateSchema(options: Options) {
  let files: Files = {}
  let base = options.base

  return through2.obj(function(file:File, enc: string, callback: () => void) {
    base = base || file.base

    files[path.relative(base, file.path)] = file.contents.toString()

    callback()
  }, function() {
    this.push(new File({
      base: base,
      path: path.join(base, options.path),
      contents: new Buffer(JSON.stringify(_generateSchema(files), null, '  '))
    }))
  })
}
