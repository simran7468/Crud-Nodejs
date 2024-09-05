const express = require('express');
const app = express();

const Product = require("./database");

app.set("view engine", "ejs")


app.get('/', (req,res)=>{
    res.render("add")
})

app.post('/add', async(req,res)=>{
    const {id,name,price} = req.body;
    const newproduct = new Product({id, name, price});
    const  productsave = await newproduct.save();
    res.redirect("/");
})

app.get('/add', (req,res)=>{
    res.render('add')
})

app.get("/edit/:id",async(req,res)=>{
    const {id} =req.params;
    const product = await Product.findById({_id:id});
    if(product==null){
        res.redirect("/");
    }else{
        res.render("edit",{
            product:product
        })
    }
})

app.post("/update/:id",async(req,res)=>{
    const {id} =req.params;
    const {name,price}=req.body;
    const updateproduct = await Product.findByIdAndUpdate({_id:id},
        {id,name,price},
        {new:true})
    res.redirect("/");
})

app.get("/delete/:id",async(req,res)=>{
    const {id} =req.params;
const deleteproduct =await Product.findByIdAndDelete({_id:id});
res.redirect("/");
})
app.listen(5050,()=>{
    console.log("Server listening on port no:5050")
})

