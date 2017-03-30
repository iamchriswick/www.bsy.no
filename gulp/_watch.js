'use strict';

import gulp from 'gulp';
import * as conf from './_conf';

gulp.task('watch', ['build'], () => {
  gulp.watch(conf.paths.styles.src, ['styles']);
  gulp.watch(conf.paths.scripts.src, ['scripts']);
  gulp.watch(conf.paths.images.src, ['images']);
	gulp.watch(conf.paths.animations.src, ['animations']);
	gulp.watch(conf.paths.vendor.src, ['vendor']);
	gulp.watch(conf.paths.fonts.src, ['fonts']);
	gulp.watch(conf.paths.json.src, ['json']);
	gulp.watch(conf.paths.toolkits.src, ['toolkits']);
  gulp.watch(conf.paths.icons.src, ['icons']);
  gulp.watch(conf.paths.html.src, ['html']);
  gulp.watch(conf.paths.html.partials, ['html']);
});
