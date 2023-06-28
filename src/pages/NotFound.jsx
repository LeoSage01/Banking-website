import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="absolute h-full w-screen bg-slate-800">
            <h1 className="text-white  mt-56 text-center font-extrabold text-2xl">404 - Page not found</h1>

            <h2 className="text-center mt-8 text-primary hover:animate-bounce"><Link to="/">Go back to Homepage</Link></h2>

        </div>
    );
}

export default NotFound;