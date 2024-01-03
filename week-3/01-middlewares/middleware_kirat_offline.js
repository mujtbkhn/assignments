const express = require('express')
const app = express()

function ticketCheckerMiddleware(req, res, next) {

    const age = req.query.age
    if (age > 14) {
        next();
    } else {
        res.json({ msg: "not of age yet" })
    }
}

app.get('/ride1', ticketCheckerMiddleware, function (req, res) {
    res.json({
        msg: "riden the ride 1"
    })

})
app.get('/ride2', ticketCheckerMiddleware, function (req, res) {
    res.json({
        msg: "riden the ride 2"
    })

})
// app.get('/', function(){

// })
app.listen(3000, () => {
    console.log('running');
})