import express from 'express'
import formController from './controllers/form.controller.js'
import fromController from './controllers/form.controller.js'

const router = express.Router()

router.post('/', fromController.createForm)
router.get('/', formController.getAllForms)

export default router