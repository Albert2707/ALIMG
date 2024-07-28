"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accessKey = void 0;
const accessKey = (req, res, next) => {
    try {
        const { access_key } = req.headers;
        if (!access_key) {
            return res.status(403).json({ msg: "You must provide an access key" });
        }
        else if (access_key.length < 40) {
            return res
                .status(400)
                .json({ msg: "You must provide a valid access key" });
        }
        next();
    }
    catch (_a) {
        res.status(500).json({ msg: "Something went wrong" });
    }
};
exports.accessKey = accessKey;
