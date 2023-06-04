import concatCss from "gulp-concat-css";
import rename from "gulp-rename";
import cleanCss from "gulp-clean-css";
import autoprefixer from "gulp-autoprefixer";
import groupCssMediaQueries from "gulp-group-css-media-queries";

export const style = () => {
  return app.gulp
    .src(app.path.src.styleMain)
    .pipe(concatCss("style.css", {rebaseUrls: false}))
    .pipe(app.plugins.replace(/@images\//g, "images/"))
    .pipe(app.plugins.replace(/@fonts\//g, "fonts/"))
    .pipe(groupCssMediaQueries())
    .pipe(
      autoprefixer({
        grid: true,
        overrideBrowserslist: ["last 3 version"],
        cascade: true,
      }),
    )
    .pipe(cleanCss())
    .pipe(
      rename({
        extname: ".min.css",
      }),
    )
    .pipe(app.gulp.dest(app.path.build.styleMain), {sourcemaps: true})
    .pipe(app.plugins.browserSync.stream());
};

export const stylePages = () => {
  return app.gulp
    .src(app.path.src.stylePages)
    .pipe(concatCss("style.css", {rebaseUrls: false}))
    .pipe(app.plugins.replace(/@images\//g, "../images/"))
    .pipe(app.plugins.replace(/@fonts\//g, "../fonts/"))
    .pipe(groupCssMediaQueries())
    .pipe(
      autoprefixer({
        grid: true,
        overrideBrowserslist: ["last 3 version"],
        cascade: true,
      }),
    )
    .pipe(cleanCss())
    .pipe(
      rename({
        extname: ".min.css",
      }),
    )

    .pipe(app.gulp.dest(app.path.build.stylePages))
    .pipe(app.plugins.browserSync.stream());
};

//  чтобы sourcemaps заработал, ты забыл добавить {sourcemaps: true}
// в.pipe(app.gulp.dest(app.path.build.css) 41 строка(scss.js)
