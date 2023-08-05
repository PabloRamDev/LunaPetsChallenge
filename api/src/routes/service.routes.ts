import express from 'express'
import { getUserData, patchService,getServiceById } from '../controllers/services.controller'


const router = express.Router()

router.route('/api/v1/services').get(getUserData)
router.route('/api/v1/services/:id').get(getServiceById).patch(patchService)



export default router

