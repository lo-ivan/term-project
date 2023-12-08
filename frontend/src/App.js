import { Divider, Typography } from '@mui/material';
import './App.css';
import CocktailList from './CocktailList';
import Container from '@mui/material/Container'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Detail from './Detail';
function App() {
  return (
    <Container maxWidth="lg">
        
        <Typography variant='h3' gutterBottom>Drinks today?</Typography>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<CocktailList/>}/>
            <Route path="/cocktail/:id" element={<Detail/>}/>
          </Routes>
        </BrowserRouter>
    </Container>
   
  );
}

export default App;
