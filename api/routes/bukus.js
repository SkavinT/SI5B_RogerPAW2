var express = require('express');
var router = express.Router();
const Buku = require('../model/buku');

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond dari BUKU router');
// });

// router.post('/', (req,res)=>{
//     res.status(201).json({
//         message: 'Data Berhasil Disimpan',
//     });
// });

router.post('/postbuku', (req, res) => {
    const buku = new Buku({
        judul: req.body.judul,
        penulis: req.body.penulis,
        genre: req.body.genre,
    });
    
    
    //console.log(buku);
    buku.save().then((createdBuku)=>{
        res.status(200).json({
            message: 'Data Berhasil Disimpan',
            bukuId: createdBuku._id,
        });
    });
});
router.get('/getbuku', (req, res) => {
    Buku.find()
    .then((documents)=>{
        res.status(200).json({
            message: 'Get Data Buku',
            buku: documents,
        });

    });
});
router.delete('/deletebuku', (req, res) => {
    Buku.deleteOne({_id: req.params.id})
    .then(()=>{
        res.status(200).json({
            message: 'Data Buku berhasil dihapus',
        });
    });
});


module.exports = router;
