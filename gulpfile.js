const { src, dest, series, watch } = require('gulp');
const babel = require('gulp-babel');
const copy = require('gulp-copy');
const browserSync = require('browser-sync').create();

function compileJS() {
  return src('src/*.js')
    .pipe(babel())
    .pipe(dest('output/'));
}

function copyPublicFiles() {
  return src('public/**')
    .pipe(copy('output/', { prefix: 1 }));
}

function startServer() {
  browserSync.init({
    server: {
      baseDir: 'output/'
    }
  });

  watch(['src/*.js', 'public/**'], series(compileJS, copyPublicFiles, browserSync.reload));
}

exports.default = series(compileJS, copyPublicFiles, startServer);