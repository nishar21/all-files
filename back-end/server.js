const express = require("express")
const mongoose =  require("mongoose")
const cors = require("cors")
const UserModel = require("./models/User")
//const bcrypt = require("bcrypt")
//const cookieParser = require("cookie-parser") 
//const jwt = require("jsonwebtoken")

const app = express()
app.use(cors())
app.use(express.json())
//app.use(cookieParser())

mongoose.connect("mongodb://127.0.0.1:27017/crud")

app.post("/login", (req,res) => {
  const {email,password} = req.body
    UserModel.findOne({email:email})
    .then(user => res.json(user.password))
      /*{
        if(user.password === password)
          {res.json("Success")}
          
          else{
            req.json("the password is incorrect")
          } 
    })*/
    .catch(err => res.json(err))
})

app.post("/signup", (req,res) =>{
    const {name,email,password} = req.body
    UserModel.create(req.body)
    .then(data => res.json(data))
    .catch(err => res.json(err))
})

app.get("/get/:id", (req,res) => {
    const i = req.params.id
    UserModel.find({id:i})
    .then(data => res.json(data))
    .catch(err => res.json(err))
})

app.put("/update/:id", (req,res) => {
    const i = req.params.id
    console.log(i)
    UserModel.findByIdAndUpdate({id:i}, {
        id : req.body.id,
        name : req.body.name, 
        address : req.body.address, 
        age : req.body.age, 
        dept : req.body.dept, 
        status : req.body.status})
    .then(data => res.json(data))
    .catch(err => res.json(err))
})

app.listen(8080, () =>{
    console.log("server running")
})

