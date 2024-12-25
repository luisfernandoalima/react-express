import express, {Application} from 'express'
import cors from 'cors'
import { route } from './routes/router'

const app:Application = express()

app.use(express.json())
app.use(cors())

app.use("/api", route)

export default app