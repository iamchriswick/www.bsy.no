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
let buildVendor = () => {
  return gulp.src(conf.paths.vendor.src)
    .pipe(gulp.dest(conf.paths.vendor.dist))
    .pipe($.notify({
      title: 'Images task completed',
      message: 'All vendor are saved and minified.',
      sound: 'Submarine',
      icon: path.join(__dirname, 'help/check.png'),
      contentImage: path.join(__dirname, 'help/img.png'),
      time: 1000,
      onLast: true
    }));
};

gulp.task('vendor', () => {
  return buildVendor();
});

gulp.task('vendor-reload', () => {
  return buildVendor()
    .pipe(browserSync.stream());
});
