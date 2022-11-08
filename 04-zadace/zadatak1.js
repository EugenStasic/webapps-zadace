import express from "express"
import bodyParser from "body-parser"
import {v4 as uuidv4} from "uuid"

const app = express()
const port = 3000

app.use(bodyParser.json())
var tempArr = []

app.get("/vratiObavjesti", (req, res) =>{
   var obav = []
    tempArr.forEach(tempArr => {
        obav.push(
            {
                "naziv": tempArr.naziv,
                "datum": tempArr.datum
            }
        );
    });

     res.send(obav)
    })

app.get("/vratiObavjest/:id", (req, res) =>{
    var { id } = req.params
    var obavijest = tempArr.find((x) => x.id == id)
    res.send(obavijest)
})

app.post("/dodajObavjest", (req, res) => {
    var data = req.body
    console.log(data)

    data = {... data, "id":uuidv4(),"datum": new Date()}
    console.log(data)
    tempArr.push(data)
    res.send(tempArr)
})

app.patch("/izmjeniObavjest"), (res, req) => {
    var { id } = req.params
    var izmObav = tempArr.find((x) => x.id == id)
    var { sadrzaj } = req.body
    izmObav.sadrzaj = sadrzaj

    res.send(izmObav)



}


app.listen(port, () => console.log("Works on port ${port}"))