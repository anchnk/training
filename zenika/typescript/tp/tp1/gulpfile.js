const gulp = require('gulp'),
      typescript = require('gulp-typescript'),
      tslint = require('gulp-tslint'),
      sourcemaps = require('gulp-sourcemaps'),
      uglify = require('gulp-uglify');

gulp.task('typescript', function() {
  gulp.src('./app.ts')
      .pipe(sourcemaps.init())
	.pipe(typescript())
	.pipe(uglify())
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('dist/'));
});

gulp.task('tslint', function() {
  gulp.src('./app.ts')
      .pipe(tslint({
	formatter: "verbose"
      }))
      .pipe(tslint.report())
});

gulp.task('default', ['tslint', 'typescript']);
