const express = require('express')
const port = process.env.PORT || 4000;

const app = express()

app.use(express.static('views'))

app.listen(port, () => console.log('server started at' + port))