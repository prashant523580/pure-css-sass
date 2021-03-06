const { dest } = require("gulp");
const gulp = require("gulp");

const gulpSass = require("gulp-sass");

gulp.task("sass", () => {
    return gulp.src("./src/sass/style.scss")
    .pipe(gulpSass())
    .pipe(dest("./dist/css"));
});

gulp.task("watch", () => {
    gulp.watch("src/sass/*.scss",gulp.series(["sass"]));
})
gulp.task("default", gulp.series(['sass']))