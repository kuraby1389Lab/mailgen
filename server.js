const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.use('/show', express.static('emailTemplates'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
