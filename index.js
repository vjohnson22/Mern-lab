const express = require('express')
const app = express()
const parser = require('body-parser')
const cors = require('cors')
const passport = require('./config/passport')()
const userController = require('./controllers/users.js')


app.use(cors())
app.use(parser.json())


app.use('/', require('./routes/episodes'))
app.use(passport.initialize())
app.use('/users', userController)

app.set("port", process.env.PORT || 7000);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});


