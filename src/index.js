import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './App';
import Carousel from './Carousel';
import Video from "./Video";
import Characters from './Characters';
import MainMonsters from "./MainMonsters";
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

const video = ReactDOM.createRoot(document.getElementById('video'));
video.render(
    <React.StrictMode>
        <Video />
    </React.StrictMode>
)

const characters = ReactDOM.createRoot(document.getElementById('characters'));
characters.render(
    <React.StrictMode>
        <Characters />
    </React.StrictMode>
)

const mainMonsters = ReactDOM.createRoot(document.getElementById('mainMonsters'));
mainMonsters.render(
    <React.StrictMode>
        <MainMonsters />
    </React.StrictMode>
)

const footer = ReactDOM.createRoot(document.getElementById('footer'));
footer.render(
    <React.StrictMode>
        <Footer />
    </React.StrictMode>
)

reportWebVitals();
