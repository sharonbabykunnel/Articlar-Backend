import express from "express"
import * as profileCon from './profile.controller.js'

const router = express.Router()

router.post("/changePassword", profileCon.changePassword);
router.post("/changeProfile", profileCon.changeProfile);
router.post("/changePreferences", profileCon.changePreferences);

export default router;