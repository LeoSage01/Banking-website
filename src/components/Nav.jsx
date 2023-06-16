const Nav = () => {
    return (

        <nav>
            <div className="shadow-lg flex p-4 h-16 items-center justify-between">
                <div className="flex justify-center align-middle">
                    <div className="font-bold ml-12 mr-16 text-xl">
                        <img src="" alt="" /> 
                        LOGO
                    </div>

                    <div>
                        <ul className="flex space-x-8">
                            <li className="text-gray-600">Home</li>
                            <li className="text-gray-600">About us</li>
                            <li className="text-gray-600">Services</li>
                            <li className="text-gray-600">Features</li>
                        </ul>
                    </div>
                </div>

                <div>
                    <button className="text-primary font-bold py-2 px-4 bg-black-600">Sign in</button>
                    <button className="text-white ml-2 py-2 px-4 bg-primary rounded">Sign up</button>
                </div>
            </div>
        </nav>
    );
}

export default Nav;