const User = require('../model/user');

const signUp = (req,res)=>{
    const user = new User({
        email: req.body.email,
        password: req.body.password,
    });
    user.save()
    .then((result)=>{
        res.status(201).json({
            message: 'User berhasil dibuat',
        });
    })
    .catch((err)=>{
        res.status(500).json({
            message: 'Internal Server Error',
        });
    });

};