import fileInclude from "gulp-file-include";
import versionNumber from "gulp-version-number";
import htmlmin from "gulp-htmlmin";

export const html = () => {
  return app.gulp
    .src(app.path.src.html)
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "HTML",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(fileInclude())
    .pipe(app.plugins.replace(/@images\//g, "images/"))
    .pipe(
      htmlmin({
        // collapseWhitespace: true, // удаляем все переносы
        removeComments: true, // удаляем все комментарии
      })
    )
    .pipe(
      versionNumber({
        value: "%DT%",
        append: {
          key: "_v",
          cover: 0,
          to: ["css", "js"],
        },
        output: {
          file: "gulp/version.json",
        },
      })
    )
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.plugins.browserSync.stream());
};

export const htmlPages = () => {
  return app.gulp
    .src(app.path.src.htmlPages)
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "HTML",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(fileInclude())
    .pipe(app.plugins.replace(/@images\//g, "../images/"))
    .pipe(
      htmlmin({
        // collapseWhitespace: true, // удаляем все переносы
        removeComments: true, // удаляем все комментарии
      })
    )
    .pipe(
      versionNumber({
        value: "%DT%",
        append: {
          key: "_v",
          cover: 0,
          to: ["css", "js"],
        },
        output: {
          file: "gulp/version.json",
        },
      })
    )
    .pipe(app.gulp.dest(app.path.build.htmlPages))
    .pipe(app.plugins.browserSync.stream());
};
