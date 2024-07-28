import {Router} from "express";
import { Get } from "../../controllers/user.controller";
import { accessKey } from "../../middleware/header.middleware";
const router  = Router();

router.get('/users',accessKey,Get)


export default router;
