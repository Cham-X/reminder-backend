import ERROR_MESSAGES from './../constants/errorMessages.js'
import { ReminderModel } from './../models/reminderModel.js'
import CustomError from './../utils/customError.js'

export const ReminderService = {
  async getAllReminders() {
    return ReminderModel.getAll()
  },

  async getReminderById(reminderId) {
    const reminder = await ReminderModel.findById(reminderId)
    if (!reminder) {
      throw new CustomError(ERROR_MESSAGES.ITEM_NOT_FOUND, 404)
    }
    return reminder
  },

  async createReminder(newReminder) {
    console.log('in service')

    const { reminder, note, userId } = newReminder

    const sanitizedReminder = {
      reminder: reminder?.trim(),
      note: note?.trim(),
      userId,
    }

    const createdReminder = await ReminderModel.create(sanitizedReminder)
    return createdReminder
  },

  async updateReminder(reminderId, newValues) {
    const fields = Object.keys(newValues)
    const setClause = fields.map((key, index) => `${key} = $${index + 1}`)
    const values = Object.values(newValues)
    values.push(reminderId)

    const query = `
      UPDATE reminders
      SET ${setClause.join(', ')}
      WHERE id = $${values.length}
      RETURNING *;
    `

    const updatedReminder = await ReminderModel.update(query, values)
    if (!updatedReminder) {
      throw new CustomError(ERROR_MESSAGES.ITEM_NOT_FOUND, 404)
    }
    return updatedReminder
  },

  async deleteReminder(reminderId) {
    const authenticatedUserId = 1

    const reminder = await ReminderModel.findById(reminderId)

    if (!reminder) {
      throw new CustomError(ERROR_MESSAGES.ITEM_NOT_FOUND, 404)
    }

    if (reminder.user_id !== authenticatedUserId) {
      throw new CustomError(ERROR_MESSAGES.FORBIDDEN, 403)
    }

    const rowCount = await ReminderModel.delete(reminderId)

    if (rowCount === 0) {
      throw new CustomError(ERROR_MESSAGES.INTERNAL_SERVER_ERROR, 500)
    }

    return { message: 'Reminder deleted successfully' }
  },
}
