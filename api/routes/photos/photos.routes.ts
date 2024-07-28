import {Router} from "express";
import { Get } from "../../controllers/getPhoto.controller";
import { accessKey } from "../../middleware/header.middleware";
const router  = Router();

router.get('/photos',accessKey,Get)


export default router;
