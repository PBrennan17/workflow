var gulp = require('gulp');
var gutil = require('gulp-util');
gulp.task('log', done => {
    gutil.log('Workflows are awesome');
    done();
});