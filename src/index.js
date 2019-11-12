import express from 'express'
import bodyParser from 'body-parser'
import routes from './routes'
import cors from 'cors'

const app = express()
const port = 3000
//middleware
app.use(bodyParser.json())
app.use(cors({
    origin: '*'
  }))
app.use('/api',routes)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => console.log(`Example app listening on port ${port}! http://localhost:${port}/`))