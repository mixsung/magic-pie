const path = require("path");

const PATHS = {
    output: path.resolve(__dirname, "../dist"),

}

module.exports = {
    mode: "production",
    output: {
        path: PATHS.output,
        filename: "[name].js"
    }
};