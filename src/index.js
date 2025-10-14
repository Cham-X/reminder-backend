import express from 'express'
import reminderRoutes from './routes/reminderRoute.js'

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.use('/reminders', reminderRoutes)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
