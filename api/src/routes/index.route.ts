import express from 'express'
import controller from './service.routes'


const router = express.Router()

router.get('/api/v1/services', controller)

export default router