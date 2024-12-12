const express = require('express');
const mahasiswaRouter = express.Router();

mahasiswaRouter
.route("/")
.get((req, res) => {
    res.send("Get Data Mahasiswa");
})
.post((req, res) => {
    res.send("Post Mahasiswa");
});

//localhost:3000/mahasiswa/2226240082
mahasiswaRouter
.route("/:npm")
.put((req, res) => {
    res.send("Put Mahasiswa " + req.params.npm);
})
.delete((req, res) => {
    res.send("Delete mahasiswa " + req.params.npm);
});

// localhost:3000/mahasiswa/kelas?idkelas=SI5B
mahasiswaRouter.route("/kelas")
.get((req, res)=>{
    const kelas = req.query.idkelas;
    res.send("Kelasnya adalah " + kelas);
});
module.exports = mahasiswaRouter
