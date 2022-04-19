const notesRouter = require("express").Router();
const {readFromFile,writeToFile,readAndAppend}=require("../helpers/fsUtils.js")

notesRouter.get("/",(req,res)=>{
    console.log(req.method + " request has been received")
    readFromFile("./db/db.json","utf-8").then((data)=>{
        console.log(data)
        res.send(JSON.parse(data))
    })
})

module.exports = notesRouter;