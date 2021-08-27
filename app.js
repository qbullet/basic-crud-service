import express from 'express'
import cors from 'cors'
import formRouter from './src/modules/form/form.route.js'

const app = express()
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.use('/form', formRouter)

app.get('/', (req, res) => {
  // console.log('this server is running...')
  res.send('this server is running...').status(200)
})

const PORT = process.env.PORT || 3030
app.listen(PORT, () => {
  console.log(`this server is running...[${PORT}]`)
})