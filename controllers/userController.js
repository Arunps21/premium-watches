const userModel = require("../models/userModel")
const {tokenCreation} = require("../utils/generateToken")
const bcrypt = require("bcrypt")
let salt = 10;

const userRegister = async(req,res)=>{
    try{
    const {fullname, email, password} = req.body
    let user = await userModel.findOne({email})
    if(user){
        req.flash("error","You alredy have a account.Pls LogIn!")
        res.redirect("/")
    }
    else{
        bcrypt.hash(password,salt,async(err,hash)=>{
            if(err){
                console.log(err.message)
            }
            else{
                let user = await userModel.create({
                    fullname,
                    email,
                    password : hash
                })
                let token = tokenCreation(user)
                res.cookie("token",token)
                req.flash("success","User Registered Successfully")
                res.redirect("/shop")
            }
        })
    }
    }
    catch(err){
        console.log(err.message)
    }
}

const userLogin = async(req,res)=>{
    try{
        const { email, password } = req.body
        let user = await userModel.findOne({email})
        if(!user){
            req.flash("error","User doesn't exists. Pls signUp!")
            res.redirect("/")
        }
        else{
            let result = await bcrypt.compare(password,user.password)
            if(result){
                let token = tokenCreation(user)
                res.cookie("token",token)
                req.flash("success","Login Success")
                res.redirect("/shop")
            }
            else{
                req.flash("error","Incorect Password")
                res.redirect("/")
            }
        }
    }
    catch(err){
        console.log(err.message)
    }
}

const userLogout=(req,res)=>{
    res.cookie("token","")
    res.redirect("/")
}

module.exports = { userRegister, userLogin, userLogout }