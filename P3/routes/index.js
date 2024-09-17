const express = require('express');
const router = express.Router();
const mhsRouter = require('./mahasiswa');

router.use('/mahasiswa', mhsRouter);

router.use((req, res, next) => {
    res.status(404).send('404 Not Found');
});

module.exports = router;