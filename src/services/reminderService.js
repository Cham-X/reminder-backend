import { ReminderModel } from './../models/reminderModel.js'

export const ReminderService = {
  async getAllReminders() {
    console.log('reaching the service')
    return await ReminderModel.getAll()
    console.log('after the service')
  },

  async getAllReminderById(reminderId) {
    const reminder = await ReminderModel.findById(reminderId)
    if (!reminder) {
      throw new Error('Reminder not found')
    }
    return reminder
  },

  async createReminders(newReminder) {
    const { reminder, notes, userId } = newReminder
    console.log(reminder, 'create reminder service')

    const sanitizedReminder = {
      reminder: reminder?.trim(),
      notes: notes?.trim(),
      userId,
    }

    const createdReminder = await ReminderModel.create(sanitizedReminder)
    return createdReminder
  },

  async updateReminders(reminderId, newValue) {
    const existingReminder = await ReminderModel.findById(reminderId)
    if (!existingReminder) {
      throw new Error('Reminder not found')
    }
    return existingReminder
  },

  async deleteReminder(reminderId) {
    const existingReminder = await ReminderModel.findById(reminderId)
    if (!existingReminder) {
      throw new Error('Reminder not found')
    }
    await ReminderModel.delete(reminderId)
    return { message: 'Reminder deleted successfully' }
  },
}
