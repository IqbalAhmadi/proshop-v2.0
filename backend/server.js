import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import connectDB from './config/db.js'

import productRoutes from './routes/productRoutes.js'
const port = process.env.PORT || 5000

connectDB() // Connect to MongoDB

const app = express()

app.get('/', (req, res) => {
  res.send('API is running...🔥')
})
// app.get('/api/products', (req, res) => {
//   res.json(products)
// })

// app.get('/api/products/:id', (req, res) => {
//   const product = products.find((p) => p._id === req.params.id)
//   res.json(product)
// })

app.use('/api/products', productRoutes)

app.listen(port, () => console.log(`Server is running on port ${port} 🔥`))
