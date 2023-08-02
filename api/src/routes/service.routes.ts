import express from 'express'
import { getUserData, patchService } from '../controllers/services.controller'


const router = express.Router()

router.route('/api/v1/services').get(getUserData)
router.route('/api/v1/services/:id').patch(patchService)



export default router

