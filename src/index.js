import express from 'express'
import reminderRoutes from './routes/reminderRoute.js'
import errorHandler from './middlewares/errorHandlingMiddleware.js'

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.use('/reminders', reminderRoutes)

app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
