import { Router } from 'express'
import { ReminderController } from '../controllers/reminderContoller.js'

const router = Router()

router.get('/', ReminderController.getAllReminders)

router.get('/:id', ReminderController.getAllReminderById)

router.post('/', ReminderController.createReminders)

router.patch('/:id', ReminderController.updateReminders)

router.delete('/:id', ReminderController.deleteReminder)

export default router
