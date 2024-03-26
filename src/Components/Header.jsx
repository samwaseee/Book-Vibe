import { Outlet } from "react-router-dom";

const Header = () => {
    return (
        <>
        <div className="hero py-16 bg-base-200 my-6 rounded-3xl">
            <div className="hero-content flex-col lg:flex-row-reverse gap-x-60">
                <img src="https://i.ibb.co/2yRYmyy/pngwing-1-1.png" className="" />
                <div>
                    <h1 className="text-6xl font-bold fair max-w-lg">Books to freshen up your bookshelf</h1>
                    <button className="btn btn-success text-white bg-[#23BE0A] mt-10">View The list</button>
                </div>
            </div>
        </div>
        </>
    );
};

export default Header;