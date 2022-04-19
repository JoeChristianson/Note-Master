const notesRouter = require("express").Router();
const {readFromFile,writeToFile,readAndAppend}=require("../helpers/fsUtils.js")
notesRouter.get("/",(req,res)=>{
    console.log(req.method + " request has been received")
    readFromFile("./db/db.json","utf-8").then((data)=>{
        res.send(JSON.parse(data))
    })
})

notesRouter.post("/", async (req,res)=>{
    console.log(req.method + " request has been received")
    readAndAppend(req.body,"./db/db.json")
    res.json(req.body)
})

notesRouter.delete("/", (req,res)=>{
    
})

module.exports = notesRouter;