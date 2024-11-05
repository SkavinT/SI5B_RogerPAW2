const Buku = require('../model/buku');

const createBuku=(req, res) => {
    const buku = new Buku({
        judul: req.body.judul,
        penulis: req.body.penulis,
        genre: req.body.genre,
    });
    
    
    //console.log(buku);
    buku.save()
    .then((result)=>{
        res.status(201).json({
            message: 'Data Buku berhasil diupdate',
            bookId:createdBuku._id,
        });
    })
    .catch((err)=>{
        res.status(500).json({
            message: 'Internal Server Error'
            
        });
    });
};
const readBuku=(req, res) => {
    Buku.find()
    .then((documents)=>{
        res.status(200).json({
            message: 'Get Data Buku',
            buku: documents,
        });

    })
    .catch((err)=>{
        res.status(500).json({
            message: 'Internal Server Error',
        });
    });
};

const deleteBuku = (req, res) => {
    Buku.deleteOne({_id: req.params.id})
    .then(()=>{
        res.status(200).json({
            message: 'Data Buku berhasil dihapus',
        });
    })
    .catch((err)=>{
        res.status(500).json({
            message: 'Internal Server Error',
        });
    });
};

const updateBuku = (req, res) => {
    const buku = new Buku({
        _id: req.params.id,
        judul: req.body.judul,
        penulis: req.body.penulis,
        genre: req.body.genre,
    });
    Buku.updateOne({_id: req.params.id}, buku)
    .then((hasil)=>{
        res.status(200).json({
            message: 'Update data berhasil',
            result: hasil
        });
    })
    .catch((err)=>{
        res.status(500).json({
            message: 'Internal Server Error',
        });
    });
};


module.exports = {createBuku,readBuku,deleteBuku,updateBuku}