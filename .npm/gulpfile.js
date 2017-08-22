var gulp   = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var coffee = require('gulp-coffee');
var sass   = require('gulp-ruby-sass');
var rename = require('gulp-rename');
var es     = require('event-stream');
var shell  = require('gulp-shell');
var notify = require('gulp-notify');

// Error handling.
function onError(err) {
  console.log(err.toString());
  this.emit('end');
};


/**
 * Config settings.
 */
var config = {
  sass: '../styleguide/assets/src/sass/**/*.scss',
  sassStyle: 'compressed',
  cssDest: '../styleguide/assets/css',
  js: '../styleguide/assets/src/js/**/*.js',
  jsDest: '../styleguide/assets/js',
  siteAlias: ''
};


/**
 * Allows us to just run gulp within our project.
 */
gulp.task('default', ['styles', 'scripts'], function() {
  // Watch for updates
  gulp.watch(config.js, ['scripts']);
  gulp.watch('../styleguide/assets/src/sass/**/*.scss', ['styles']);
  // Shall commands - clear drupal cache.
  gulp.watch('**/*.{php,inc,info}',['drush']);
});


/**
 * Compile SASS :)
 */
gulp.task('styles', function() {
  return gulp.src(config.sass)
    .pipe(sass({
      'sourcemap=none': true,
      noCache: true,
      compass: true,
      style: 'compact'
    }).on('error', onError))
    .pipe(gulp.dest(config.cssDest))
    .pipe(gulp.dest(config.cssDest2))
    .pipe(sass({
      'sourcemap=none': true,
      noCache: true,
      compass: true,
      style: config.sassStyle
    }).on('error', onError))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(config.cssDest))
    .pipe(gulp.dest(config.cssDest2))
    .pipe(notify({message: 'SCSS compiled'}));
});


/**
 * Minify JS
 */
gulp.task('scripts',function() {
  return gulp.src(config.js)
    .pipe(concat('site.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(config.jsDest))
    .pipe(gulp.dest(config.jsDest2))
    .pipe(notify({message: 'JS compiled'}));
});

gulp.task('drush', function() {
  return gulp.src('*.js', {read: false})
    .pipe(shell([
      'echo <%= f(file.path) %>',
      'ls -l <%= file.path %>',
      'drush'
    ], {
      templateData: {
        f: function (s) {
          return s.replace(/$/, '.bak')
        }
      }
    }))
});
