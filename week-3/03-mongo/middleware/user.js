const mongoose = require('mongoose');
const { User } = require('../db');


const userMiddleware = async (req, res, next) => {
    try {
        const username = req.headers.username;
        const password = req.headers.password;

        const user = await User.findOne({
            username: username,
            password: password
        });

        if (!user || user.password !== password) {
            return res.status(404).send("Invalid user details");
        }

        next();
    } catch (error) {
        console.error('Error in userMiddleware:', error);
        res.status(500).send("Internal server error");
    }
};

module.exports = userMiddleware;

module.exports = userMiddleware;