const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

app.listen(2345, () => {
    console.log("Server run on port 2345");
})


app.post("/convert/reamur", (req, res) => {
    let suhu = Number(req.body.suhu)
    let celsius = (5 / 4) * suhu
    let fahrenheit = ((9 / 4) * suhu) + 32
    let kelvin = ((5 / 4) * suhu) + 273

    let response = {
        reamur: suhu,
        result: {
            celcius: celsius,
            fahrenheit: fahrenheit,
            kelvin: kelvin
        }
    }

    res.json(response)
})
app.post("/convert/celcius", (req, res) => {
    let suhu = Number(req.body.suhu)
    let reamur = (4 / 5) * suhu
    let fahrenheit = ((9 / 5) * suhu) + 32
    let kelvin = suhu + 273

    let response = {
        celcius: suhu,
        result: {
            reamur: reamur,
            fahrenheit: fahrenheit,
            kelvin: kelvin
        }
    }

    res.json(response)
})
app.post("/convert/fahrenheit", (req, res) => {
    let suhu = Number(req.body.suhu)
    let reamur = (4 / 9) * (suhu - 32)
    let celcius = (5 / 9) * (suhu - 32)
    let kelvin = ((5 / 9) * (suhu - 32)) + 273

    let response = {
        fahrenheit: suhu,
        result: {
            reamur: reamur,
            celcius: celcius,
            kelvin: kelvin
        }
    }

    res.json(response)
})
app.post("/convert/kelvin", (req, res) => {
    let suhu = Number(req.body.suhu)
    let reamur = (4 / 5) * (suhu - 273)
    let celcius = suhu - 273
    let fahrenheit = ((9 / 5) * (suhu - 273)) + 32

    let response = {
        kelvin: suhu,
        result: {
            reamur: reamur,
            celcius: celcius,
            fahrenheit: fahrenheit,
        }
    }

    res.json(response)
})

