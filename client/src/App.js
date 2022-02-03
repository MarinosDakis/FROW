import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "@material-ui/core";
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import ContactForm from './components/ContactForm/ContactForm';
import Designers from './components/Designers/Designers';
import Success from './components/Payments/Success';
import Payments from './components/Payments/Payments';

const theme = createTheme({
    typography: {
        fontFamily: [
            'Montserrat',
            'Roboto',
        ].join(','),
    }
});

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Container maxWidth="lg">
                    <Navbar />
                    <Routes>
                        <Route exact path='/' element={<Home />} />
                        <Route exact path='/login' element={<Login />} />
                        <Route exact path='/products' element={<Products />} />
                        <Route exact path='/designers' element={<Designers />} />
                        <Route exact path='/payment' element={<Payments />} />
                        <Route exact path='/contactform' element={<ContactForm />} />
                        <Route exact path='/success' element={<Success />} />
                    </Routes>
                </Container>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;

