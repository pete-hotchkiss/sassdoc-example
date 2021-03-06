import gulp from 'gulp';
// var jade = require('gulp-jade');
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import {stream as wiredep} from 'wiredep';

const reload = browserSync.reload;
const $ = gulpLoadPlugins(
      { pattern: '*' }
      );

/*

Task: styles
Initiated as a pre-task to the minify-css task, this takes all the .scss SASS files and creates the sites css file, applying appropriate browserpre-fixes as needed. Assumes that sourcemaps are required, unless the --production flag is passed.
*/
// var sass = require('gulp-sass');
gulp.task('styles', () => {
  return gulp.src(['src/sass/main.scss'])
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    // .pipe($.sass.sync({
    //   outputStyle: 'expanded',
    //   precision: 10,
    //   includePaths: ['.']
    // }).on('error', $.sass.logError) )
    .pipe($.sass({
      outputStyle: 'expanded',
      precision: 10,
      includePaths: ['.']
    }).on('error', $.sass.logError) )
    .pipe(gulp.dest('.tmp/css'))
    .pipe(reload({stream: true}));
});


gulp.task('sassdoc', function () {
  var options = {
    dest: 'docs',
    verbose: true,
    theme: 'neat'
  };

  return gulp.src('src/sass/**/*.scss')
    .pipe($.sassdoc(options));
});
