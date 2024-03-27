import { NavLink } from "react-router-dom";

const Navbar = () => {

    const links = <>
        <li><NavLink to="/" style={({ isActive, isTransitioning }) => {
            return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "#23BE0A" : "",
                backgroundColor: isActive ? "white" : "",
                border: isActive ? "solid #23BE0A" : "",
                viewTransitionName: isTransitioning ? "slide" : "",
            };
        }}>Home</NavLink></li>
        <li><NavLink to="/listedBooks" style={({ isActive, isTransitioning }) => {
            return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "#23BE0A" : "",
                backgroundColor: isActive ? "white" : "",
                border: isActive ? "solid #23BE0A" : "",
                viewTransitionName: isTransitioning ? "slide" : "",
            };
        }}>Listed Books</NavLink></li>
        <li><NavLink to="/pagesToRead" style={({ isActive, isTransitioning }) => {
            return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "#23BE0A" : "",
                backgroundColor: isActive ? "white" : "",
                border: isActive ? "solid #23BE0A" : "",
                viewTransitionName: isTransitioning ? "slide" : "",
            };
        }}>Pages to Read</NavLink></li>
        <li><NavLink to="/topGrossing" style={({ isActive, isTransitioning }) => {
            return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "#23BE0A" : "",
                backgroundColor: isActive ? "white" : "",
                border: isActive ? "solid #23BE0A" : "",
                viewTransitionName: isTransitioning ? "slide" : "",
            };
        }}>Top Grossing Books</NavLink></li>
        <li><NavLink to="/about" style={({ isActive, isTransitioning }) => {
            return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "#23BE0A" : "",
                backgroundColor: isActive ? "white" : "",
                border: isActive ? "solid #23BE0A" : "",
                viewTransitionName: isTransitioning ? "slide" : "",
            };
        }}>About Us</NavLink></li>
    </>


    return (
        <nav>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost sans font-bold text-3xl text-[#23BE0A]">Book Vibe</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end grid md:flex">
                    <a className="btn btn-success text-white bg-[#23BE0A]">Sign In</a>
                    <a className="btn btn-info text-white bg-[#59C6D2] ml-3">Sign Up</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;