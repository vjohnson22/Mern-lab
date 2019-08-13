const express = require('express')
const router = express.Router()
const episodeController = require('../controllers/episodes.js')

router.get('/', episodeController.index)
router.post('/', episodeController.create)
router.get('/:name', episodeController.show)
router.patch('/:name', episodeController.update)
router.delete('/:name', episodeController.delete)



module.exports = router