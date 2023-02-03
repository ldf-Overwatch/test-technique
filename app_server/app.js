const cors = require('cors')
const express = require('express')
const app = express()

app.use(cors({
    origin: 'http://localhost:3003'
}));


app.get('/api', (req, res) => {
    res.json({ message: 'Hello Api' })
})

app.listen(1337, () => {
    console.log('Server started on port 1337')
})

