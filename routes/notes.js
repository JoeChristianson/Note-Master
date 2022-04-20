const notesRouter = require("express").Router();
const {readFromFile,writeToFile,readAndAppend,readAndDelete}=require("../helpers/fsUtils.js")
const { v4:uuidv4 } = require('uuid');

notesRouter.get("/",(req,res)=>{
    console.log(req.method + " request has been received")
    readFromFile("./db/db.json","utf-8").then((data)=>{
        res.send(JSON.parse(data))
    })
})

notesRouter.post("/", async (req,res)=>{
    console.log(req.method + " request has been received");
    req.body.id = uuidv4();
    readAndAppend(req.body,"./db/db.json")
    res.json(req.body)
})

notesRouter.delete("/:id",async (req,res)=>{
    console.log(req.params);
    const data = await readAndDelete(req.params.id,"./db/db.json")
    await readFromFile("./db/db.json","utf-8").then((data)=>{
        res.send(JSON.parse(data))
    })
})


// notesRouter.delete("/:id", (req,res)=>{
//     console.log(req.params)
//     await readAndDelete(req.body.id,"./db/db.json")
//     const newNotes = await readFromFile("./db/db.json","utf-8")
//     res.json(newNotes)
    
// })

module.exports = notesRouter;