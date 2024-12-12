const express = require('express');
const app = express();
const port =3000;

const route= require("./routes/index");

app.get('/', (req, res) => {
    res.send('Hallo Dunia!');
});

app.use(route);
// app.get('/mahasiswa', (req, res) => {
//     res.send("Get Data Mahasiswa");
// });

// app.post('/mahasiswa', (req, res) => {
//     res.send("Post Mahasiswa");
// });

// app.put('/mahasiswa/:npm', (req, res) => {
//     res.send("Put Mahasiswa " + req.params.npm);
// });

// app.delete('/mahasiswa/:npm', (req, res) => {
//     res.send("Delete mahasiswa " + req.params.npm);
// });

app.listen(port, () => {
    console.log('Example app listening on port ' + port);
});

//Run app, then load http://localhost:port in a browser to see the output.