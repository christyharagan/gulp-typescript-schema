gulp-typescript-schema
==

Overview
--

Gulp bindings for typescript-schema. Allows schema generation as a gulp task.

Usage
--

Install:
```
npm install gulp-typescript-schema
```

Basic Usage:

```TypeScript
var gulp = require('gulp')
var generateSchema = require('gulp-typescript-schema').generateSchema

gulp.task('generateSchema', function(){
  gulp.src('lib/**/*.ts').pipe(generateSchema({
    path: './schema.json'
  })).pipe(gulp.dest('schemas'))
})
```
