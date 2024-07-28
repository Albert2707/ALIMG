"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getPhoto_controller_1 = require("../../controllers/getPhoto.controller");
const header_middleware_1 = require("../../middleware/header.middleware");
const router = (0, express_1.Router)();
router.get('/photos', header_middleware_1.accessKey, getPhoto_controller_1.Get);
exports.default = router;
