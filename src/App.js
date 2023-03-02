import './App.css';
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import React from "react";

function App() {
    return (
        <div className='App'>
            <Home/>
            <div id={'about'}>
                <About/>
            </div>
            <div id={'testimonials'}>
                <Testimonials/>
            </div>
            <div id={'contact'}>
                <Contact/>
            </div>
            <div id={'work'}>
                <Work/>
            </div>
            <Footer/>
        </div>
    )
}

export default App;
