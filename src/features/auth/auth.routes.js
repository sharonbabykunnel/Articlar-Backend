import express from 'express'
import * as auth from './auth.controller.js'

const router = express.Router()

router.post('/signup', auth.signup);
router.post('/signin', auth.signin);
router.post('/setPreferences/:id', auth.setPreferences);

export default router;