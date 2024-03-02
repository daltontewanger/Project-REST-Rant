const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('this is for places')
})

module.exports = router