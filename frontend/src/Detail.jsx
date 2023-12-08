import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios"
import { Button, Grid, Typography } from "@mui/material";


const backendURL = "http://localhost:5001"


const Detail = ()=>{
    const { id } = useParams(); 
    const [detail, setDetail] = useState({})
    useEffect(()=>{
        axios.get(`${backendURL}/cocktail/${id}`)
        .then(({data})=> setDetail(data))
    }, [id])
    return (<Grid container spacing={2}>
        <Grid item sm={8}>
            <Typography variant="h5" gutterBottom>{detail.strDrink}</Typography>
            <br/><br/>
            <strong>Served with</strong>
            <Typography variant="h6" gutterBottom>{detail.strGlass}</Typography>
            <br/><br/>
            <strong>Ingredients</strong>
            <Typography variant="body1" gutterBottom>{detail.strIngredient1}</Typography>
            <Typography variant="body1" gutterBottom>{detail.strIngredient2}</Typography>
            <Typography variant="body1" gutterBottom>{detail.strIngredient3}</Typography>
            <Typography variant="body1" gutterBottom>{detail.strIngredient4}</Typography>
            <Typography variant="body1" gutterBottom>{detail.strIngredient5}</Typography>
            <Typography variant="body1" gutterBottom>{detail.strIngredient6}</Typography>
            <Typography variant="body1" gutterBottom>{detail.strIngredient7}</Typography>
            <Typography variant="body1" gutterBottom>{detail.strIngredient8}</Typography>
            <Typography variant="body1" gutterBottom>{detail.strIngredient9}</Typography>
            <Typography variant="body1" gutterBottom>{detail.strIngredient10}</Typography>
            <Typography variant="body1" gutterBottom>{detail.strIngredient11}</Typography>
            <Typography variant="body1" gutterBottom>{detail.strIngredient12}</Typography>
            <Typography variant="body1" gutterBottom>{detail.strIngredient13}</Typography>
            <Typography variant="body1" gutterBottom>{detail.strIngredient14}</Typography>
            <Typography variant="body1" gutterBottom>{detail.strIngredient15}</Typography>
            <br/><br/>
            <strong>Preparation</strong>
            <Typography variant="body1" gutterBottom>{detail.strInstructions}</Typography>
        </Grid>
        <Grid item sm={4}>
            <img src={detail.strDrinkThumb} width="100%"/>
        </Grid>
        <Grid item>
            <Button variant="outlined" component={Link} to="/">Back</Button>
        </Grid>
    </Grid>
    )
}

export default Detail;