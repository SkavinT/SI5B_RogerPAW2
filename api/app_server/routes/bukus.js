var express = require('express');
var router = express.Router();

const Bukucontroller = require('../controller/buku');

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond dari BUKU router');
// });

// router.post('/', (req,res)=>{
//     res.status(201).json({
//         message: 'Data Berhasil Disimpan',
//     });
// });

//insert data
router.post('/',Bukucontroller.createBuku);

//ambil data
router.get('/', Bukucontroller.readBuku);

//delete
router.delete('/:id', Bukucontroller.deleteBuku);

//update
router.put('/:id', Bukucontroller.updateBuku);


module.exports = router;
