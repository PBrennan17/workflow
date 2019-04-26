let gulp = require('gulp'),
    gutil = require('gulp-util'),
    coffee = require('gulp-coffee');
    concat= require('gulp-concat');

let coffee_Sources = ['components/coffee/*.coffee'];
let jsSources= ['components/scripts/pixgrid.js',
                'components/scripts/rclick.js', 
                'components/scripts/tagline.js', 
                'components/scripts/template.js'];

gulp.task('coffee', done =>{

    gulp.src(coffee_Sources)
    .pipe(coffee({bare: true})
        .on('error', gutil.log)
    )
    .pipe(gulp.dest('components/scripts'))
    done();
});

gulp.task('js', done =>{

    gulp.src(jsSources)
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('builds/development/js'))
    done();
});