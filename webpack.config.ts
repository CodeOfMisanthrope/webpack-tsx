import * as path from "node:path";

const dirname = import.meta.dirname;
// тут undefined
console.log(dirname);

const config = {
    mode: "development",

    // если раскомментить, то будет ошибка
    // entry: path.resolve(dirname, "src", "index.js"),
    //
    // output: {
    //     path: path.resolve(dirname, "dist"),
    //     clean: true,
    // }
};

export default config;
