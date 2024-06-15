const express = require('express');
const router = express.Router();
const users = require('./users');
// router.get("/", (req, res) =>{
//     res.send("Hello World!");
// })

router.use('/users', users);

// Route to serve the index.html file
router.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
    res.send('This is our Node API');
});


module.exports = router;