const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

app.listen(4567, () => {
    console.log("Server run on port 4567");
})


app.post("/bmi", (req, res) => {
    let berat = Number(req.body.berat)
    let tinggi = Number(req.body.tinggi)
    let bmi = berat / (tinggi * tinggi)
    let status

    if (bmi < 18.5){
        status = "Kekurangan berat badan"
    } else if (bmi >= 18.5 && bmi <= 24.9){
        status = "Normal (Ideal)"
    } else if (bmi >= 25 && bmi <= 29.9){
        status = "Kelebihan berat badan"
    } else {
        status = "Kegemukan (Obesitas)"
    }

    let response = {
        tinggi: tinggi,
        berat: berat,
        bmi: bmi,
        status: status
    }

    res.json(response)
})