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
let buildFonts = () => {
  return gulp.src(conf.paths.fonts.src)
    .pipe(gulp.dest(conf.paths.fonts.dist))
    .pipe($.notify({
      title: 'Images task completed',
      message: 'All fonts are saved and minified.',
      sound: 'Submarine',
      icon: path.join(__dirname, 'help/check.png'),
      contentImage: path.join(__dirname, 'help/img.png'),
      time: 1000,
      onLast: true
    }));
};

gulp.task('fonts', () => {
  return buildFonts();
});

gulp.task('fonts-reload', () => {
  return buildFonts()
    .pipe(browserSync.stream());
});
