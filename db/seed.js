const Episode = require('../models/episodes')
const data = require('./data')

console.log(data)

Episode.remove({}).then(() => {
    Episode.create(data).then(episodes => console,log(episodes))
})