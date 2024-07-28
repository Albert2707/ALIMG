"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const photos_routes_1 = __importDefault(require("./routes/photos/photos.routes"));
const users_routes_1 = __importDefault(require("./routes/users/users.routes"));
const morgan_1 = __importDefault(require("morgan"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)("dev"));
app.use(photos_routes_1.default);
app.use(users_routes_1.default);
app.use("/", (req, res) => {
    return res.status(404).json({ msg: "not found" });
});
app.set("port", 8001);
app.listen(app.get("port"), () => {
    console.log(`Listening on port ${app.get("port")}`);
});
