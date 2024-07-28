"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unsplash = void 0;
const unsplash_js_1 = require("unsplash-js");
const unsplash = (key) => {
    return (0, unsplash_js_1.createApi)({
        accessKey: key,
    });
};
exports.unsplash = unsplash;
