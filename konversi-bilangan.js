const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

app.listen(3456, () => {
    console.log("Server run on port 3456");
})


app.post("/decimal", (req, res) => {
    let bilangan = Number(req.body.bilangan)
    let binary = bilangan.toString(2)
    let octal = bilangan.toString(8)
    let hexadecimal = bilangan.toString(16)

    let response = {
        decimal: bilangan,
        result: {
            binary: binary,
            octal: octal,
            hexadecimal: hexadecimal
        }
    }

    res.json(response)
})
app.post("/binary", (req, res) => {
    let bilangan = req.body.bilangan
    let decimal = parseInt(bilangan, 2)
    let octal = decimal.toString(8)
    let hexadecimal = decimal.toString(16)

    let response = {
        binary: bilangan,
        result: {
            decimal: decimal,
            octal: octal,
            hexadecimal: hexadecimal
        }
    }

    res.json(response)
})
app.post("/octal", (req, res) => {
    let bilangan = req.body.bilangan
    let decimal = parseInt(bilangan, 8)
    let binary = decimal.toString(2)
    let hexadecimal = decimal.toString(16)

    let response = {
        octal: bilangan,
        result: {
            decimal: decimal,
            binary: binary,
            hexadecimal: hexadecimal
        }
    }

    res.json(response)
})
app.post("/hexadecimal", (req, res) => {
    let bilangan = req.body.bilangan
    let decimal = parseInt(bilangan, 16)
    let binary = decimal.toString(2)
    let octal = decimal.toString(8)

    let response = {
        hexadecimal: bilangan,
        result: {
            decimal: decimal,
            binary: binary,
            octal: octal
        }
    }

    res.json(response)
})