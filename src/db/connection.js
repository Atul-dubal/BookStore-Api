//  yUFlWkIjrSIJlVLq

const express= require("express");
const db = require("mongoose");


db.connect("mongodb+srv://bookstore:k2nxgQRFyZZDcCMO@cluster0.mzpeacw.mongodb.net/bookstore?retryWrites=true&w=majority").then(console.log("Database Connected"));