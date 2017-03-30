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
let buildIcons = () => {
  return gulp.src(conf.paths.icons.src)
    .pipe(gulp.dest(conf.paths.icons.dist))
    .pipe($.notify({
      title: 'Images task completed',
      message: 'All icons are saved and minified.',
      sound: 'Submarine',
      icon: path.join(__dirname, 'help/check.png'),
      contentImage: path.join(__dirname, 'help/img.png'),
      time: 1000,
      onLast: true
    }));
};

gulp.task('icons', () => {
  return buildIcons();
});

gulp.task('icons-reload', () => {
  return buildIcons()
    .pipe(browserSync.stream());
});
