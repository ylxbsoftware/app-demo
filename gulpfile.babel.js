'use strict';
import gulp from 'gulp';
import connect from 'gulp-connect';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'gulp-autoprefixer';
import sass from 'gulp-sass';

gulp.task('server',() => {
  connect.server({
    livereload: true,
    port:80
  });
});

gulp.task('html', () => {
  gulp.src('./app/*.html')
  .pipe(connect.reload());
});

gulp.task('sass',() => {
  gulp.src('./scss/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer())
    .pipe(sourcemaps.write())
  .pipe(gulp.dest('./css'))
  .pipe(connect.reload());
});

gulp.task('watch',() => {
  gulp.watch(['./app/*.html'],['html']);
  gulp.watch(['./scss/*.scss'],['sass']);
});

gulp.task('default',['server','watch']);
