const express = require('express')
const app = express()
const parser = require('body-parser')
const cors = require('cors')

app.use(cors())
app.use(parser.json())


app.use('/', require('./routes/episodes'))


app.set("port", process.env.PORT || 7000);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});


