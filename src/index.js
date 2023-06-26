import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './App';
import Carousel from './Carousel';
import Games from './Games';
import Footer from './Footer';
import reportWebVitals from './reportWebVitals';

const navbar = ReactDOM.createRoot(document.getElementById('navbar'));
navbar.render(
  <React.StrictMode>
    <Navbar />
  </React.StrictMode>
);

const carousel = ReactDOM.createRoot(document.getElementById('carousel'));
carousel.render(
    <React.StrictMode>
        <Carousel />
    </React.StrictMode>
)

const games = ReactDOM.createRoot(document.getElementById('games'));
games.render(
    <React.StrictMode>
        <Games />
    </React.StrictMode>
)

const footer = ReactDOM.createRoot(document.getElementById('footer'));
footer.render(
    <React.StrictMode>
        <Footer />
    </React.StrictMode>
)

reportWebVitals();
