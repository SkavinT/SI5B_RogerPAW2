const User = require('../model/user');
const bcrypt = require('bcrypt');

const signUp = (req, res) => {
    bcrypt.hash(req.body.password, 10)
        .then((hash) => {
            const user = new User({
                email: req.body.email,
                password: hash,
            });
            user.save()
                .then((result) => {
                    res.status(201).json({
                        message: 'User berhasil dibuat',
                        // result: result,
                    });
                })
                .catch((err) => {
                    res.status(500).json({
                        message: 'Internal Server Error',
                        // error: err,
                    });
                });
        });

};
const login = (req, res) => {
    let fetchedUser;
    User.findOne({ 
        email : req.body.email,
    })
    .then((user) => {
        if(!user){
            return res.status(401).json({
                message: 'Autentikasi gagal',
            });
        }
        fetchedUser = user;
        return bcrypt.compare(req.body.password, user.password);
        
    });
};
module.exports = { signUp, login };