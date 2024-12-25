import express, {Application} from 'express'
import { route } from './routes/router'

const app:Application = express()

app.use(express.json())
app.use("/api", route)

export default app