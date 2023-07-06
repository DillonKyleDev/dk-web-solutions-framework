const { src, dest } = require('gulp');
const jsonTransform = require('gulp-json-transform');
const rename = require('gulp-rename');
const fs = require('fs');

function defaultTask() {
  return src('./src/dist/base.module/fields.js')
    .pipe(
      rename(function (path) {
        // Updates the object in-place        
        path.extname = '.json';
      })
    )
    .pipe(dest('./src/dist/base.module/'));
}

exports.default = defaultTask;
