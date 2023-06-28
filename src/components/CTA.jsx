// import IMG from "../img/sd.png"
import IMG from "../img/mem.png"
// import IMG1 from "../img/caaa.png"
import IMG1 from "../img/budget.png"
import IMG2 from "../img/ctaframe.png"

const CTA = () => {
    return (
        <section className="animate-fad p-4">
            <div className="flex flex-col sm:flex-row w-full md:shadow-lg">
                <div className="w-full p-8 md:p-12">
                    <div className="">
                        <h3 className="font-bold mb-10 pr-6">Open your bank today and experience the next-gen banking</h3>
                    </div>

                    <div className="flex flex-row text-xs font-bold">
                        <div className="btn bg-primary w-32 hover:animate-bounce hover:shadow-xl">
                            <p className="py-3 pl-3">Call us now</p>
                            <div className="icon text-sm bg-white mr-1">
                                <span className="text-primary  material-symbols-outlined">
                                    chevron_right
                                </span>
                            </div>
                        </div> 
                        <div className="btn ml-6 hover:animate-bounce">
                            <p className="text-black hover:text-primary">Get started</p>
                        </div> 
                    </div>

                </div>



                <div className="relative flex justify-center align-middle w-full h-50">
                    <img className="h-48 w-full md:h-64" src={IMG2} alt="" />
                    
                    <div className=" absolute m-auto mt-2 md:mt-8 py-4 w-80">
                        <img className="absolute h-10 top-0 right-4 md:h-12" src={IMG1} alt="" />
                        <img className="mx-auto h-36 md:h-44" src={IMG} alt="" />
                    </div>
                </div>


            </div>
        </section>
    );
}

export default CTA;



