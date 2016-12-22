var gulp = require('gulp');
var sass = require('gulp-sass');
var nodemon = require('gulp-nodemon');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
//docs use const instead of var

gulp.task('default',['babel','babel:watch','sass', 'sass:watch', 'affirm','start']);
//default to start sass with watch build

gulp.task('sass', function () {
  return gulp.src('./client/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./public'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./client/scss/**/*.scss', ['sass']);
});

gulp.task('affirm', function(){
  console.log('\nYou are a worthwhile and good person today\n');
  console.dir(arguments);
  console.dir(gulp.task);
});

gulp.task('start', function () {
  nodemon({
    script: './server/server.js'
  , ext: 'js html'
  , env: { 'NODE_ENV': 'development' }
  })
});

gulp.task('babel', () => {
    return gulp.src('./client/js/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015','react']
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('public'));
});

gulp.task('babel:watch',function(){
  gulp.watch('./client/js/**/*.js',['babel']);
});

// gulp.task('default', function() {
//   // place code for your default task here
//   console.log("this is the default gulp task");
// });
