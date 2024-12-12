const express= require('express')
const app = express()
const port= 3000

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.get('/about', (req, res) => {
    res.send('Halaman Tentang Perusahaan');
});

app.get('/contact', (req, res) => {
    res.send("Halaman Contact");
});

//middleware
app.use('*', (req,res)   =>{
    res.status(404);
    res.send("404, Halaman tidak ditemukan");
});

app.listen(port, () => {
    console.log('Server started on port 3000');
});
