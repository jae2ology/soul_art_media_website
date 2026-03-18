import React from 'react';
import logo from './assets/logo.png';

export default function NavBar() {
    return (
        <div className="navbar bg-[#D6BCC8] shadow-md mx-auto">
            <div className="navbar-start">
                <div className={"dropdown"}>
                    <div tabIndex={"0"} role={"button"} class={"btn btn-ghost btn-circle"}>
                        <svg xmlns={"http://www.w3.org/2000/svg"} class={"h-5 w-5"} fill="none" viewBox={"0 0 24 24"} stroke={"currentColor"}>
                            <path stroke-linecap={"round"} stroke-linejoin={"round"} stroke-width={"2"} d={"M4 6h16M4 12h16M4 18h7"} />
                        </svg>
                    </div>
                    <ul tabIndex="-1"
                        className={"menu menu-sm dropdown-content font-mono bg-primary rounded-box z-1 mt-3 w-52 p-2 shadow text-info"}>
                        <li><a href={'/about'}>About</a></li>
                        <li><a href={'/prints'}>Prints and Customs</a></li>
                        <li><a href={'/pieces'}>Original Pieces</a></li>
                        <li><a href={'/books'}>Books</a></li>
                        <li><a href={'/contact'}>Contact</a></li>
                    </ul>
                </div>
            </div>
        <div className="navbar-center">
            <a className="shadow" href={'/'}>
                <img src={logo} alt={"S.O.U.L"}
                className={"w-50 h-20 rounded-2xl"}
                />
            </a>
        </div>
            <div className="navbar-end"></div>
        </div>
    )


}