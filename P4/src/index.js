const express = require('express');
const app = express();
const port = 3000;

const routes = require('../routes/index');
app.use(routes);
//ejs
app.set("view engine", "ejs");
app.set("views", "./views");

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

app.listen(port, () => {
    console.log('Example app listening on port ' + port + "!");
});

//Run app, then load http://localhost:port in a browser to see the output.