import Tiger from "../assets/tiger.jpeg"

const Testimonials = () => {
    return (
        <section className="p-4">
            <div className="px-6 py-12 bg-black rounded-xl">

                <h3 className="text-white text-xl font-bold mb-4">You are in a good a company</h3>

                <div className=" grid grid-cols-3 gap-6">

                    <div className="p-6 rounded-xl bg-white">
                        <div>
                            <p className="font-bold text-md mb-3">"This Bank is a truly great bank"</p>

                            <p className="text-sm ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga sequi autem harum earum voluptatibus magni totam saepe modi helsedh dgea Rerum?</p>
                        </div>

                        <div className="flex flex-row mt-3">
                            <div>
                                <img className="w-10 h-10 rounded-full" src={Tiger} alt="" />
                            </div>
                            <div className="ml-3">
                                <h4 className="font-bold text-sm">Henry Joe</h4>
                                <p className=" text-xs ">Head of sales at Chase</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl bg-white">
                        <div>
                            <p className="font-bold text-md mb-3">"This Bank is a truly great bank"</p>

                            <p className="text-sm ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga sequi autem harum earum voluptatibus magni totam saepe modi cash dgea Rerum?</p>
                        </div>

                        <div className="flex flex-row mt-3">
                            <div>
                                <img className="h-10 w-10 rounded-full" src={Tiger} alt="" />
                            </div>
                            <div className="ml-3">
                                <h4 className="font-bold text-sm">Henry Joe</h4>
                                <p className=" text-xs ">Account at Fin</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl bg-white">
                        <div>
                            <p className="font-bold text-md mb-3">"This Bank is a truly great bank"</p>

                            <p className="text-sm ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga sequi autem harum earum voluptatibus magni totam saepe modi helsedh dgea Rerum?</p>
                        </div>

                        <div className="flex flex-row mt-3">
                            <div>
                                <img className="h-10 w-10 rounded-full" src={Tiger} alt="" />
                            </div>
                            <div className="ml-3">
                                <h4 className="font-bold text-sm">Henry Joe</h4>
                                <p className=" text-xs ">CEO at Chase</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Testimonials;