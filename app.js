const Moralis = require("moralis").default;
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const express = require('express')
const app = express();
var cors = require('cors')
app.use(cors())
const router = require('./routes/getNftsroutes')
app.use(express.json())
app.use('/', router)
console.log(process.env.PORT)

Moralis.start({
    apiKey: process.env.API
}).then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Example app listening on port ${process.env.PORT}`)
    })
})









