export const jsPlugins = () => {
  return app.gulp
    .src(app.path.src.jsPlugins)
    .pipe(app.gulp.dest(app.path.build.jsPlugins));
};
