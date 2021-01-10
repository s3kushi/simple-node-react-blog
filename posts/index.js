const express = require('express');
const { randomBytes } = require('crypto')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 4000
const posts = {}

app.use(express.json())
app.use(cors())

app.get('posts', (req, res) => {
    res.send(posts)
})

app.post('posts', (req, res) => {
    const id = randomBytes(4).toString('hex')
    const { title } = req.body

    posts[id] = {
        id, title
    }

    res.status(201).send(posts[id])
})

app.listen(port, () => {
    console.log('listening on port ' + port)
})