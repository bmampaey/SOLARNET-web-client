var gulp = require('gulp')
var concat = require('gulp-concat')
var ngAnnotate = require('gulp-ng-annotate')

gulp.task('test', function () {
  gulp.src(['test/module.js', 'test/*.js'])
    .pipe(concat('test/app.js'))
    .pipe(ngAnnotate())
    .pipe(gulp.dest('.'))
})

gulp.task('watch', ['test'], function () {
  gulp.watch('test/*..js', ['test'])
})
