import express from 'express'
import routerTalks from './talks'
import routerSpeakers from './speackers'

var router = express.Router()

router.use('/talks',routerTalks)
router.use('/speakers',routerSpeakers)

export default router;