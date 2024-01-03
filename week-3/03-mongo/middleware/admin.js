// Middleware for handling auth
const mongoose = require('mongoose');
const { Admin } = require('../db');

function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

    const username = req.headers.username;
    const password = req.headers.password;


    Admin.findOne({ username: username })
        .then((admin) => {
            if (!admin || admin.password !== password) {
                res.status(404).send("Invalid admin details");
            } else {
                next();
            }
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send("Internal server error");
        });
}

module.exports = adminMiddleware;