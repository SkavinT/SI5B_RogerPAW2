const express = require('express');

const router = express.Router();
const mhsRouter = require("./mahasiswa");

router.use("/mahasiswa",mhsRouter);

router.use('*', (req,res)   =>{
    res.status(404);
    res.send("404, Halaman tidak ditemukan");
});

//error 404 /url tidak ditemukan 
module.exports = router;