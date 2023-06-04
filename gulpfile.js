import gulp from "gulp";
import {path} from "./gulp/config/path.js";
import {plugins} from "./gulp/config/plugins.js";

global.app = {
  isBuild: process.argv.includes("--build"),
  isDev: !process.argv.includes("--build"),
  path,
  gulp,
  plugins,
};

import {copy, copyfavicon, copyBX, copyPopupData} from "./gulp/tasks/copy.js";
import {formprocessor} from "./gulp/tasks/formprocessor.js";
import {reset} from "./gulp/tasks/reset.js";
import {html, htmlPages} from "./gulp/tasks/html.js";
import {server} from "./gulp/tasks/server.js";
import {style, stylePages} from "./gulp/tasks/style.js";
import {js, jsThanks} from "./gulp/tasks/js.js";
import {images} from "./gulp/tasks/images.js";
import {copyFonts} from "./gulp/tasks/fonts.js";
import {jsPlugins} from "./gulp/tasks/jsPlugins.js";
import {stylePlugins} from "./gulp/tasks/stylePlugins.js";

function watcher() {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.html, htmlPages);
  gulp.watch(path.watch.style, style);
  gulp.watch(path.watch.style, stylePages);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.jsPlugins, jsPlugins);
  gulp.watch(path.watch.images, images);
  gulp.watch(path.watch.formprocessor, formprocessor);
}
// const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

const mainTasks = gulp.series(
  copyFonts,
  jsPlugins,
  jsThanks,
  stylePlugins,
  formprocessor,
  gulp.parallel(
    copy,
    copyfavicon,
    copyBX,
    copyPopupData,
    html,
    htmlPages,
    style,
    stylePages,
    js,
    images,
  ),
);
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);

export {dev};
export {build};

gulp.task("default", dev);
