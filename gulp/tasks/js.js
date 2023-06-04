import webpack from "webpack-stream";

export const js = () => {
  return app.gulp
    .src(app.path.src.js)
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "JS",
          message: "Error: <%= error.message %>",
        }),
      ),
    )
    .pipe(
      webpack({
        mode: app.isDev ? "development" : "production",
        output: {
          filename: "app.min.js",
        },
      }),
    )
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(app.plugins.browserSync.stream());
};

export const jsThanks = () => {
  return app.gulp
    .src(app.path.src.jsThanks)
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "JS",
          message: "Error: <%= error.message %>",
        }),
      ),
    )
    .pipe(
      webpack({
        mode: app.isDev ? "development" : "production",
        output: {
          filename: "jsThanks.min.js",
        },
      }),
    )
    .pipe(app.gulp.dest(app.path.build.jsThanks))
    .pipe(app.plugins.browserSync.stream());
};
