const express = require('express')
const app = express()
const cors = require('cors');
const port = process.env.PORT || 5000;

require('./DB/db')
app.use(express.json())
app.use(cors())

app.use(require('./Router/router'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})