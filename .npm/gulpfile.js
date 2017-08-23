var gulp = require('gulp');
var coffee = require('gulp-coffee');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');
// var sass = require('node-sass');
var scsslint   = require('gulp-scss-lint');
var minifyCss  = require('gulp-minify-css');
var sass       = require('gulp-sass');

var paths = {
  scripts: ['../styleguide/assets/src/js/**/*.coffee.js', '../styleguide/assets/js/**/*.coffee.js'],
  // js: ['../assets/src/js/**/*.js', '../assets/js/**/*.js'],
  images: ['../styleguide/assets/src/images/**/*', '../styleguide/assets/images'],
  // sass: ['../styleguide/assets/src/sass/**/*', '../styleguide/assets/css']
};
var scssSrc    = '../styleguide/assets/src/sass/**/*',
    cssDst     = '../styleguide/assets/css';
 
// Not all tasks need to use streams 
// A gulpfile is just another node program and you can use any package available on npm 
gulp.task('clean', function() {
  // You can use multiple globbing patterns as you would with `gulp.src` 
  return del(['build']);
});

/* Lint SCSS (For Ordering CSS property) */
gulp.task('scss-lint', function() {
  return gulp.src(scssSrc)
    .pipe(scsslint({
      'config': 'scss-lint.yml'
    }));
});

/* Generate css & minify it */
gulp.task('sass', function () {
  return gulp.src('../styleguide/assets/src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest(cssDst));
});
/*gulp.task('sass', ['clean'], function() {
  return gulp.src(paths.sass)
    .pipe(sourcemaps.init())
      .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('../styleguide/assets/css'));
});*/

gulp.task('scripts', ['clean'], function() {
  // Minify and copy all JavaScript (except vendor scripts) 
  // with sourcemaps all the way down 
  return gulp.src(paths.scripts)
    .pipe(sourcemaps.init())
      .pipe(coffee())
      .pipe(uglify())
      .pipe(concat('all.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('../styleguide/assets/js'));
});
 
// Copy all static images 
gulp.task('images', ['clean'], function() {
  return gulp.src(paths.images)
    // Pass in options to the task 
    .pipe(imagemin({optimizationLevel: 10}))
    .pipe(gulp.dest('../styleguide/assets/images'));
});
 
// Rerun the task when a file changes 
gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']);
  // gulp.watch(paths.js, ['js']);
  gulp.watch(paths.images, ['images']);
  // gulp.watch(paths.sass, ['sass']);
  gulp.watch(scssSrc, ['sass']);
  gulp.watch(scssSrc, ['scss-lint']);
});
 
// The default task (called when you run `gulp` from cli) 
gulp.task('default', ['watch', 'scripts', 'sass', 'scss-lint']); // , 'images'
