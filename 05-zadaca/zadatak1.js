import express from "express"
import bodyParser from "body-parser"
import { MongoClient, ObjectId, ServerApiVersion } from 'mongodb';

const uri = "mongodb+srv://EugenStasic:1234@cluster0.cguhw00.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const database = client.db("webapps-zadace")
const ob = database.collection("zadatak1")

const app = express()
const port = 3000

app.use(bodyParser.json())

const cursor = ob.find()
const foo = await cursor.toArray()

app.get("/vratiObavjesti",async (req, res) =>{
    let temp = []
    foo.forEach(x => {
        temp.push({
                naziv: x.naziv,
                date: x.date
            });
    });

     res.send(temp)
    })

app.get("/vratiObavjest/:id", async (req, res) =>{
    var temp = []
    var { _id } = req.params

    var filt = foo.find((x) => x.id === _id)
    
    temp.push(filt.naziv, filt.sadrzaj, filt.date)
    res.send(temp)
})

app.post("/dodajObavjest", async (req, res) => {
    let novaob = req.body
    novaob.date = new Date()

    ob
    .insertOne(novaob)
    .then(result => {
        res.status(201).json(result)
    })
    .catch(error => {
        res.send(500).json({error: "error"})
    })

})


app.patch("/izmjeniObavjest/:id", async (req, response) => {
    let izmjena = req.body

    ob.updateOne({ _id: (req.params.id) }, { $set: izmjena })
    .then(result => {
        response.send(200).json(result);
    }).catch(err => {
       response.send(500).json({ error: "Error" });
    })


});

app.listen(port, () => console.log(`Works on port ${port}`))