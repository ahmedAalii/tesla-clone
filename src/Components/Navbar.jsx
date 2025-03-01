import React, { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="flex justify-between px-12 p-4 items-center  fixed w-full top-0 left-0 z-50">
            <a href="https://tesla.com" target="_blank" rel="noopener noreferrer">
                <img className="h-4" src="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0idGRzLWljb24gdGRzLWljb24tbG9nby13b3JkbWFyayB0ZHMtc2l0ZS1sb2dvLWljb24iIHZpZXdCb3g9IjAgMCAzNDIgMzUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMCAuMWE5LjcgOS43IDAgMCAwIDcgN2gxMWwuNS4xdjI3LjZoNi44VjcuM0wyNiA3aDExYTkuOCA5LjggMCAwIDAgNy03SDB6bTIzOC42IDBoLTYuOHYzNC44SDI2M2E5LjcgOS43IDAgMCAwIDYtNi44aC0zMC4zVjB6bS01Mi4zIDYuOGMzLjYtMSA2LjYtMy44IDcuNC02LjlsLTM4LjEuMXYyMC42aDMxLjF2Ny4yaC0yNC40YTEzLjYgMTMuNiAwIDAgMC04LjcgN2gzOS45di0yMWgtMzEuMnYtN3ptMTE2LjIgMjhoNi43di0xNGgyNC42djE0aDYuN3YtMjFoLTM4ek04NS4zIDdoMjZhOS42IDkuNiAwIDAgMCA3LjEtN0g3OC4zYTkuNiA5LjYgMCAwIDAgNyA3bTAgMTMuOGgyNmE5LjYgOS42IDAgMCAwIDcuMS03SDc4LjNhOS42IDkuNiAwIDAgMCA3IDdtMCAxNC4xaDI2YTkuNiA5LjYgMCAwIDAgNy4xLTdINzguM2E5LjYgOS42IDAgMCAwIDcgN00zMDguNSA3aDI2YTkuNiA5LjYgMCAwIDAgNy03aC00MGE5LjYgOS42IDAgMCAwIDcgNyIvPjwvc3ZnPg==" alt="Tesla Logo" />
            </a>

            <ul className="hidden lg:flex space-x-6 text-black font-medium">
                <li><a href="https://tesla.com/models" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700">Model S</a></li>
                <li><a href="https://tesla.com/model3" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700">Model 3</a></li>
                <li><a href="https://tesla.com/modely" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700">Model Y</a></li>
                <li><a href="https://tesla.com/modelx" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700">Model X</a></li>
                <li><a href="https://tesla.com/solarroof" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700">Solar Roof</a></li>
                <li><a href="https://tesla.com/solarpanels" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700">Solar Panels</a></li>
            </ul>

            {/* Right Section */}
            <div className="hidden lg:flex space-x-6 text-black font-medium">
                <a href="https://tesla.com/help" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700">Help</a>
                <a href="https://tesla.com/contact" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700">Contact</a>
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="hover:text-gray-700 lg:hidden">Menu</button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden bg-black/10 p-2 rounded-md cursor-pointer">
                Menu
            </button>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-16 left-0 w-full bg-white shadow-md lg:hidden transition-transform duration-300">
                    <ul className="flex flex-col items-center py-4 space-y-3 text-gray-700 font-medium">
                        <li><a href="https://tesla.com/models" target="_blank" rel="noopener noreferrer">Model S</a></li>
                        <li><a href="https://tesla.com/model3" target="_blank" rel="noopener noreferrer">Model 3</a></li>
                        <li><a href="https://tesla.com/modely" target="_blank" rel="noopener noreferrer">Model Y</a></li>
                        <li><a href="https://tesla.com/modelx" target="_blank" rel="noopener noreferrer">Model X</a></li>
                        <li><a href="https://tesla.com/solarroof" target="_blank" rel="noopener noreferrer">Solar Roof</a></li>
                        <li><a href="https://tesla.com/solarpanels" target="_blank" rel="noopener noreferrer">Solar Panels</a></li>
                        <li><a href="https://tesla.com/help" target="_blank" rel="noopener noreferrer">Help</a></li>
                        <li><a href="https://tesla.com/contact" target="_blank" rel="noopener noreferrer">Contact</a></li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
