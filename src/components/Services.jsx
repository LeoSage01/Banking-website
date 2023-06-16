import { BsPeople, BsCreditCard } from "react-icons/bs"
// import { GiSpeedometer } from "react-icons/gi"
import { CiMoneyCheck1 } from "react-icons/ci"
import { HiOutlineCreditCard } from "react-icons/hi"

const Services = () => {
    return (
        <section className="p-4">
            <div className="h-80 bg-black p-8 text-white rounded-lg grid grid-cols-2 gap-4">
                <div className=" font-bold text-xl">
                    <h3>Browse our set of banking services and offerings</h3>
                </div>

                <div className="grid grid-cols-2 gap-10 p-3">
                    <div className="bg-primary rounded-lg text-xs font-bold h-30 flex flex-col text-center justify-center ">
                        <CiMoneyCheck1 className="mx-auto my-2 text-3xl" />
                        <p>Checking</p>
                    </div>
                    <div className="bg-primary rounded-lg text-xs font-bold h-30 flex flex-col text-center justify-center ">
                        <span className="material-symbols-outlined my-2">
                            speed
                        </span>
                        <p>Free credit store</p>
                    </div>
                    <div className="bg-primary rounded-lg text-xs font-bold h-30 flex flex-col text-center justify-center ">
                        <BsCreditCard className="mx-auto my-2 text-2xl" />
                        <p>Credit cards</p>
                    </div>
                    <div className="bg-primary rounded-lg text-xs font-bold h-30 flex flex-col text-center justify-center ">
                        <BsPeople className="mx-auto my-2 text-2xl" />
                        <p>Schedule a meeting</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;