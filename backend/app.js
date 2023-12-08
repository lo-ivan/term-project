const { default: axios } = require("axios");
const express = require("express")
const app = express();
const cors = require("cors");
app.use(cors())

app.get("/cocktail", async (req, res)=>{
    const result = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
    res.status(200).json(result.data.drinks)
})

app.get("/cocktail/search", async (req, res)=>{
    const result = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${req.query.name}`)
    res.status(200).json(result.data.drinks)
})

app.get("/cocktail/:id", async (req, res)=>{
    const result = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${req.params.id}`)
    res.status(200).json(result.data.drinks[0])
})
app.listen(5001, function(){
    console.log("Server started");
})