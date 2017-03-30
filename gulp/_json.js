'use strict';

import path from 'path';
import gulp from 'gulp';
import browserSync from 'browser-sync';
import * as conf from './_conf';

import gulpLoadPlugins from 'gulp-load-plugins';
const $ = gulpLoadPlugins();

/**
 * Minify the image files and place them in dist.
 */
let buildJson = () => {
  return gulp.src(conf.paths.json.src)
    .pipe(gulp.dest(conf.paths.json.dist))
    .pipe($.notify({
      title: 'Images task completed',
      message: 'All json are saved and minified.',
      sound: 'Submarine',
      icon: path.join(__dirname, 'help/check.png'),
      contentImage: path.join(__dirname, 'help/img.png'),
      time: 1000,
      onLast: true
    }));
};

gulp.task('json', () => {
  return buildJson();
});

gulp.task('json-reload', () => {
  return buildJson()
    .pipe(browserSync.stream());
});
