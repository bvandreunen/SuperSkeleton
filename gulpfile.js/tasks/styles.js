var
  gulp                = require('gulp'),
  plugins             = require('gulp-load-plugins')(),
  config              = require('../config/styles'),
  errorHandler        = require('../lib/errorHandler');

// Styles
gulp.task('styles', function() {
  return gulp.src(config.source)

    // Specify output style
    .pipe(plugins.sass(config.settings))

    // Catch errors
    .on('error', errorHandler)

    // Autoprefixer
    .pipe(plugins.autoprefixer(config.autoprefixer))

    // Add a .min version
    .pipe(plugins.rename({suffix: '.min'}))

    // Minify .min version
    .pipe(plugins.minifyCss())

    // Distribute to build path
    .pipe(gulp.dest(config.dest))

    // Show notification
    .pipe(plugins.notify({ message: 'Styles task complete' }));
});
