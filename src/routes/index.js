import express from 'express'
import routerTalks from './talks'

var router = express.Router()
router.use('/talks',routerTalks)
//router.use('expositor',routerExpositor)

export default router;