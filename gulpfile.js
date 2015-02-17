var gulp = require('gulp');
var browserify = require('gulp-browserify');

gulp.task('scripts', function() {
  gulp.src('lib/bayes-classifier.js')
  .pipe(browserify({
    insertGlobals : true,
    debug : !gulp.env.production
  }))
  .pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['scripts']);
