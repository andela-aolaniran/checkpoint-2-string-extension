// load dependencies
const gulp = require('gulp');
const mocha = require('gulp-mocha');

/* gulp task to refresh the tests
  whenever the src or test files changes
*/
gulp.task('test', () => {
  gulp.watch(['./src/*.js', './test/*.js'], ['mocha']);
});

// gulp task to run tests using mocha
gulp.task('mocha', () => {
  gulp.src(['test/*.js'])
  .pipe(mocha({ reporter: 'spec' }));
});
