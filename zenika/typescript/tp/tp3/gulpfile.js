const gulp = require('gulp'),
    typescript = require('gulp-typescript'),
    uglify = require('gulp-uglify'),
    tslint = require('gulp-tslint'),
    sourcemaps = require('gulp-sourcemaps'),
    tsProject = typescript.createProject('tsconfig.json');

gulp.task('build', ['lint'], function() {
    gulp.src(['src/**/*.ts'])
        .pipe(sourcemaps.init())
        .pipe(tsProject())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/'));
});

gulp.task('lint', function() {
    gulp.src(['src/**/*.ts'])
        .pipe(tslint({
          formatter: "verbose"
        }))
        .pipe(tslint.report())
});

gulp.task('default', ['build']);
