const Button = () => {
    return (
        <div className="btn bg-black w-36 hover:animate-bounce hover:shadow-2xl">
            <p className="py-3 pl-3 font-bold">Get Started</p>
            <div className="icon bg-primary mr-1">
                <span className="text-white material-symbols-outlined">
                    chevron_right
                </span>
            </div>
        </div>
    );
}

export default Button;