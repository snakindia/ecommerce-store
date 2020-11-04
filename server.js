const express = require('express');
const path = require('path');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const  redirects = require("./redirects");
app.use(express.static(path.join(__dirname, 'build')));
app.get("/*", redirects.redirects)
app.get('/*', function (req, res) {
   
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
 const apiport = process.env.EXPRESS_PORT;
app.listen(apiport, () => {
    console.log(`app statred on port=${apiport}`)
});