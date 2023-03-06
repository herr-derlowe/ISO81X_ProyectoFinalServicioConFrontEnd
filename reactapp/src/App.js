import './App.css'
import React, { Component } from 'react';
import { Home } from './Pages/Home';
import { GestionDeducciones } from './Pages/GestionDeducciones';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/header';
import Footer from './Components/footer';

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <div className="page-container">
                <div className="content-wrap">
                    <BrowserRouter>
                        <Header />
                        <Routes>
                            <Route path='/' element={<Home />}></Route>
                            <Route path='/home' element={<Home />}></Route>
                            <Route path='/gestiondeducciones' element={<GestionDeducciones />}></Route>
                        </Routes>
                    </BrowserRouter>
                </div>

                <Footer />
            </div>

        );
    }

    //async populateWeatherData() {
    //    const response = await fetch('weatherforecast');
    //    const data = await response.json();
    //    this.setState({ forecasts: data, loading: false });
    //}
}