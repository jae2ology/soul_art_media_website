import React from 'react';
import Home from "./Home.jsx";
import Navbar from "./NavBar.jsx";
import './App.css';
import About from "./About.jsx";
import Pieces from "./Pieces.jsx";
import Prints from "./Prints.jsx";
import Books from "./Books.jsx";
import Contact from "./Contact.jsx";
import Home_Living from "./Home_Living.jsx";
import Accessories from "./Accessories.jsx";
import Male_Wear from "./Male_Wear.jsx";
import Female_Wear from "./Female_Wear.jsx";


import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

export default function App(){
    return (
        <div className={"border-20 border-[#e2e1bf] rounded-lg"}>
            <div className="border-20 border-[#a3dccb] rounded-lg">
            <Router>
                <Navbar />
                <Routes>
                    <Route path={"/"} element={<Home />} />
                    <Route path={"/about"} element={<About />} />
                    <Route path={"/pieces"} element={<Pieces />} />
                    <Route path={'/prints'} element={<Prints />} />
                    <Route path={'/books'} element={<Books />} />
                    <Route path={'/contact'} element={<Contact />} />
                    <Route path={'/prints/home'} element={<Home_Living />} />
                    <Route path={'prints/malewear'} element={<Male_Wear />} />
                    <Route path={'/prints/femwear'} element={<Female_Wear />} />
                    <Route path={'/prints/accessories'} element={<Accessories />} />
                </Routes>
            </Router>
            </div>
        </div>
    )
}