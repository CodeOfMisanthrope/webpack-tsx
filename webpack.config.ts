import * as path from "node:path";

const dirname = import.meta.dirname;
// undefined
console.log(dirname);

const config = {
    mode: "development",

    entry: path.resolve(dirname, "src", "index.js"),

    output: {
        path: path.resolve(dirname, "dist"),
        clean: true,
    }
};

export default config;
