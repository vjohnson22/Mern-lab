const express = require('express')
const app = express()


app.use('/', require('./routes/episodes.js'))


app.set("port", process.env.PORT || 7000);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});