import { ReminderService } from '../services/reminderService.js'

export const ReminderController = {
  async getAllReminders(req, res) {
    try {
      const reminders = ReminderService.getAllReminders()
      res.status(200).json(reminders)
    } catch (error) {
      res.status(500).send({ message: 'Internal Server Error' })
    }
  },
  async getAllReminderById(req, res) {
    try {
      const reminderId = parseInt(req.params.id)
      const reminder = ReminderService.getAllReminderById(reminderId)
      res.status(200).json(reminder)
      res.send(`get reminder by id: ${reminderId}`)
    } catch (error) {
      res.status(500).send({ message: 'Internal Server Error' })
    }
  },
  async createReminders(req, res) {
    try {
      const reminder = ReminderService.getAllReminderById(req.body)
      res.status(200).json(reminder)

      res.send('create new reminder')
    } catch (error) {}
  },
  async updateReminders(req, res) {
    const reminderId = parseInt(req.params.id)
    res.send(`update old reminder:${reminderId}`)
  },
  async deleteReminder(req, res) {
    const reminderId = parseInt(req.params.id)
    res.send(`delete old reminder : ${reminderId}`)
  },
}
