import { Button, Card, CardActionArea, CardContent, CardMedia, Grid, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";

const backendURL = "http://localhost:5001"


const CocktailList = ()=>{
    const [cocktails, setCocktails] = useState([])
    const [search, setSearch] = useState(undefined)
    useEffect(()=>{
        axios.get(backendURL + "/cocktail")
        .then(({data}) => setCocktails(data))
    }, []);

    const searchCocktail = ()=> {
        if(search){
            axios.get(backendURL + `/cocktail/search?name=${search}`)
            .then(({data}) => setCocktails(data))
        }else{
            axios.get(backendURL + "/cocktail")
            .then(({data}) => setCocktails(data))
        }
    }

    return (
    <Grid container spacing={2}>
        <Grid item xs={12}>
            <TextField value={search} onChange={(event)=>setSearch(event.target.value)} size="small"></TextField>&nbsp;
            <Button onClick={searchCocktail} variant="outlined">Search</Button>
        </Grid>
        {cocktails && cocktails.map(c=>(
            <Grid item key={c.idDrink} sm={3}>
                <Card>
                    <CardActionArea component={Link} to={`/cocktail/${c.idDrink}`}>
                        <CardMedia component="img" image={c.strDrinkThumb}/>
                        <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            {c.strDrink}
                        </Typography>
                        
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        ))}
    </Grid>)
    
}

export default CocktailList;