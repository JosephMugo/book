// This is the Model in the MVC Framework
// Model
// handles data logic
// interacts with database
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
})

module.exports = router;