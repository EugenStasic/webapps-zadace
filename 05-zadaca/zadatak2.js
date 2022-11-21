import express from "express"
import bodyParser from "body-parser"
import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = "mongodb+srv://EugenStasic:1234@cluster0.cguhw00.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const database = client.db("webapps-zadace")
const autordb = database.collection("zadatak2")


const app = express()
const port = 5000

app.use(bodyParser.json())

const cursor = autordb.find()
const foo = await cursor.toArray()

app.get("/vratiAutore", async(req, res) => {

    let filtriraniAutor = []

    foo.forEach(autor => {
        filtriraniAutor.push({
                "naziv": autor.naziv,
                "djela": autor.djela
            })
    })

    res.send(filtriraniAutor)
})

app.post("/dodajAutora", async (req, res) => {
    let error = false
    let autor = req.body

    if (!autor.naziv || !autor.djela || Object.keys(autor).length != 2) {
        res.send({ "Error": "Krivi kljucevi" })
        error = true
    }


    for (let _i in autor.djela){
        if (autor.djela.length > 20) {
            res.send({ "Error": `Djelo ${autor.djela} ima vise od 20 znakova` })
            error = true
        }
    }

    if (!error) {
        let datum = new Date

        autordb
        .insertOne(autor)
        .then(result => {
            res.status(201).json(result)
        })
        .catch(error => {
            res.send(500).json({error: "error"})
        })
 
    }
});

app.delete("/izbrisiDjeloAutora/:djela", async (req, res) => {
    autordb
    .updateMany({ djela: req.params.djela }, { $pull: { djela: req.params.djela } })
    .then(result => {
        res.status(201).json(result)
    })
    .catch(error => {
        res.send(500).json({error: "error"})
    })
});

app.listen(port, () => console.log(`Works on port ${port}`))