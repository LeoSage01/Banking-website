import PIC from "../img/pic.png"
import IMG from "../img/mem.png"
import IMG1 from "../img/budget.png"
import Btn from "../img/bttn.png"
import Frame from "../img/headerframe.png"
import Cos from "../img/cos.png"
import Cus from "../img/cus.png"

const Header = () => {
    return (
        <header className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-6 space-x-11 mb-5">
            <div className="animate-fad p-6">
                <img className="bg-primary rounded-3xl" src={PIC} alt="" />
            </div>

            <div className=" flex flex-col sm:space-y-6 justify-evenly pr-8 space-y-5">
                <h3 className="font-bold text-lg lg:text-3xl">Meet the credit card of the future</h3>

                <p className="">We understand that your finances can be a difficult task, that is why we are commited to providing you with the guidelines</p>


                <img className="hover:animate-bounce" src={Btn} alt="" />
            </div>

            <div className="relative animate-fad">
                <div className=" md:absolute m-auto ">
                    <img className="absolute h-12 md:h-8 lg:h-12 top-0 right-0" src={IMG1} alt="" />
                    <img className="mx-auto h-46 md:mt-2 lg:mt-1" src={IMG} alt="" />

                    <div className="relative mt-6 lg:mt-10 h-44 flex justify-end">
                        <img className="h-40 right-0 mr-2" src={Frame} alt="" />
                        <img className="h-6 absolute top-11 right-8 mr-2" src={Cus} alt="" />
                        <img className="absolute bottom-0 h-24 right-0" src={Cos} alt="" />
                    </div>

                </div>
            </div>
        </header>
    );
}

export default Header;