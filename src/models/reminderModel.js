import db from './../config/db.js'

export const ReminderModel = {
  async getAll() {
    try {
      const result = await db.query(
        'SELECT * FROM reminders ORDER BY created_at DESC'
      )
      return result.rows
    } catch (error) {
      console.log('Error fetching reminders:', error)
    }
  },

  async findById(id) {
    const result = await db.query('SELECT * FROM reminders WHERE id = $1', [id])
    return result.rows[0]
  },

  async create({ reminder, note, userId }) {
    const result = await db.query(
      `
      INSERT INTO reminders (reminder, note, user_id)
      VALUES ($1, $2, $3)
      RETURNING *`,
      [reminder, note, userId]
    )
    return result.rows[0]
  },

  async update(query, values) {
    const result = await db.query(query, values)
    return result.rows[0]
  },

  async delete(reminderId) {
    const result = await db.query('DELETE FROM reminders WHERE id = $1', [
      reminderId,
    ])
    return result.rowCount
  },
}
