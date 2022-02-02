import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "@material-ui/core";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';

const App = () => {
    return (
        <BrowserRouter>
            <Container maxWidth="lg">
                <Navbar />
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/login' element={<Login />} />
                    <Route exact path='/products' element={<Products />} />
                </Routes>
            </Container>
        </BrowserRouter>
    );
}

export default App;

