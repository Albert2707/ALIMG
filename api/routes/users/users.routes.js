"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../../controllers/user.controller");
const header_middleware_1 = require("../../middleware/header.middleware");
const router = (0, express_1.Router)();
router.get('/users', header_middleware_1.accessKey, user_controller_1.Get);
exports.default = router;
