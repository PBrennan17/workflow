let gulp = require('gulp'),
    gutil = require('gulp-util'),
    gulp_coffee = require('gulp-coffee');

let coffee_Scripts = ['components/coffee/*.coffee'];


gulp.task('log', done => {
    gutil.log('Workflows are awesome');
    done();
});

gulp.task('coffee', done =>{

    gulp.src(coffee_Scripts)
    .pipe(gulp_coffee({bare: true})
        .on('error', gutil.log)
    )
    .pipe(gulp.dest('components/scripts'))
    done();
});