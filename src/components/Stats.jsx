import Button from "./Button";
import Man from "../assets/maninblack.jpg"

const Stats = () => {
    return (
        <section className="p-4">
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-6 space-x-6 text-xs">
                <div className="px-10 col-span-2 ">
                    <h3 className="text-2xl font-bold">Our impact in
                        numbers</h3>

                </div>

                <div className=" col-span-3 px-2">
                    <p className=" ">Lorem ipsum dolor sit amet consectetur adipisicing  a  sit amet consectetur adipisicing  a  sit amet consectetur adipisicing  sit amet consectetur adipisicing  amet consectetur adipisicing elit. Eaque similique laborum doloribus?</p>
                </div>

                <div className="col-span-2">
                    <img className="h-auto max-w-full rounded-xl" src={Man} alt="" />
                </div>

                <div className="col-span-3 grid grid-cols-5 gap-6 text-xs pl-2">
                    <div className="col-span-2">
                        <h4 className="font-bold text-lg">600K</h4>
                        <p>Customers</p>
                    </div>
                    <div className="col-span-3 ml-6">
                        <h4 className="font-bold text-lg">95%</h4>
                        <p>Customer satisfaction</p>
                    </div>
                    <div className="col-span-2 mt-8">
                        <h4 className="font-bold text-lg ">80%</h4>
                        <p>Very growth</p>
                    </div>
                    <div className="col-span-3 ml-6 mt-8">
                        <h4 className="font-bold text-lg">200B</h4>
                        <p>Current money </p>
                    </div>
                    <div>
                        <Button />
                    </div>
                </div>



            </div>
        </section>
    );
}

export default Stats;
