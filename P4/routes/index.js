const express = require('express');
const router = express.Router();

router.use("/",(req, res)=>{
    //format data JSON
    const data ={
        caption: "Mahasiswa",
        layout : "layout/main-layout",
        data :[
            {
                npm : "2226240021",
                nama : "Budi"
            },
            {
                npm : "2226240031",
                nama : "Dewi"
            },
            {
                npm : "2226240051",
                nama : "Hendra"
            }

        ]
    };

    res.render("index" , data);
    //menuju ke views/index.ejs
});

module.exports = router;