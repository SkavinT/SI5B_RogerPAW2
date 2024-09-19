const express = require('express');
const router = express.Router();

router.use("/", (req, res) => {
    //format data json
    const data = {
        caption: "Mahasiswa",
        layout: "layout/main-layout",
        data: [
            {
                npm: "2226240123", 
                nama: "Andi"
            },
            {
                npm: "2226240124", 
                nama: "Budi"
            },
            {
                npm: "2226240125", 
                nama: "Caca"
            }
        ]
    };
    res.render("index", data);
    //menuju ke views/index.ejs
});
module.exports = router;