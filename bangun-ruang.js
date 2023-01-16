const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

app.listen(1234, () => {
    console.log("Server run on port 1234");
})


app.post("/kubus", (req, res) => {
    let sisi = Number(req.body.sisi)
    let luas_permukaan = 6 * sisi * sisi
    let volume = sisi * sisi * sisi

    let response = {
        sisi: sisi,
        luas_permukaan: luas_permukaan,
        volume: volume
    }

    res.json(response)
})
app.post("/tabung", (req, res) => {
    let tinggi = Number(req.body.tinggi)
    let diameter = Number(req.body.diameter)
    let jari_jari = diameter / 2
    let luas_permukaan = (Math.PI * jari_jari * jari_jari * 2) + (Math.PI * diameter * tinggi)
    let volume = Math.PI * jari_jari * jari_jari * tinggi

    let response = {
        diameter: diameter,
        jari_jari: jari_jari,
        tinggi: tinggi,
        luas_permukaan: luas_permukaan,
        volume: volume
    }

    res.json(response)
})
app.post("/bola", (req, res) => {
    let diameter = Number(req.body.diameter)
    let jari_jari = diameter / 2
    let luas_permukaan = 4 * Math.PI * jari_jari * jari_jari
    let volume = 4 / 3 * Math.PI * jari_jari * jari_jari * jari_jari

    let response = {
        diameter: diameter,
        jari_jari: jari_jari,
        luas_permukaan: luas_permukaan,
        volume: volume
    }

    res.json(response)
})
app.post("/balok", (req, res) => {
    let panjang = Number(req.body.panjang)
    let lebar = Number(req.body.lebar)
    let tinggi = Number(req.body.tinggi)
    let luas_permukaan = 2 * ((panjang * lebar) + (panjang * tinggi) + (lebar * tinggi))
    let volume = panjang * lebar * tinggi

    let response = {
        panjang: panjang,
        lebar: lebar,
        tinggi: tinggi,
        luas_permukaan: luas_permukaan,
        volume: volume
    }

    res.json(response)
})