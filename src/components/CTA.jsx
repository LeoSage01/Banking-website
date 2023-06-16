import Button from "./button";

const CTA = () => {
    return (
        <section className="p-4">
            <div className="flex w-full shadow-lg">
                <div className="w-full p-12">
                    <div className="">
                        <h3 className="font-bold mb-12 pr-6">Open your bank today and experience the next-gen banking</h3>
                    </div>

                    <div className="flex flex-row text-xs font-bold">
                        <div className="btn bg-primary w-32">
                            <p className="py-3 pl-3">Call us now</p>
                            <div className="icon text-sm bg-white mr-1">
                                <span className="text-primary  material-symbols-outlined">
                                    chevron_right
                                </span>
                            </div>
                        </div>
                        <div className="btn ml-6 ">
                            <p className="text-black">Get started</p>
                        </div>
                    </div>

                </div>

                <div className="bg-primary w-full h-50">
                    <img src="" alt="" />
                    <p className=""></p>
                    {/* <div className="btn">
                        <div></div>
                    
                        <p>Set a Budget</p>
                    </div> */}
                </div>
            </div>
        </section>
    );
}

export default CTA;