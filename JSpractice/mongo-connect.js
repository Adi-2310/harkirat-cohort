const mongoose = require("mongoose");
const express = require("express");

const app =express();
mongoose.connect() ; //link

const User = mongoose.model('Users', {name: String, email: String, password: String});

app.post("/signup", async function(req, res){
  
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    const existingUser = await User.findOne({ email: email});
    if(existingUser){
        return res.status(400).send("Username already exists");
    }

    const user = new User({
        name: username,
        email: email,
        password: password
    });

    user.save();

    res.json({
        msg: "User saved succesfully"
    })
})
