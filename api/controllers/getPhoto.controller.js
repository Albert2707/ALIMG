"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Get = void 0;
const unplash_1 = require("../util/unplash");
const Get = (req, res) => {
    try {
        const key = req.headers.access_key;
        const uns = (0, unplash_1.unsplash)(key);
        uns.photos
            .get({ photoId: "" })
            .then((result) => {
            return res.json(result.response);
        })
            .catch((err) => {
            return res.status(500).json({ msg: err.message });
        });
    }
    catch (_a) {
        return res.status(500).json({ msg: "Something went wrong" });
    }
};
exports.Get = Get;
