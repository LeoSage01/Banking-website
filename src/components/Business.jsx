// import Carousel from "./Carousel";
import Lady from "../assets/bluecar.jpg"

const Business = () => {
    return (
        <section className="p-4">

            <h3 className="text-lg text-center font-bold mb-4 ">Our services are designed for <br /> business of all sizes</h3>

            <div className="grid grid-cols-3 gap-6">              

                <figure class="relative max-w-sm cursor-pointer">
                    <a href="#">
                        <img className="rounded-lg" src={Lady} alt="image description" />
                    </a>
                    <figcaption class="absolute font-bold text-white bg-translucent bottom-0 rounded-b-lg flex justify-between p-2 w-full">
                        <h5>text goes here</h5>

                        <span className="icon bg-primary text-lg font-bold text-white material-symbols-outlined">
                            chevron_right
                        </span>
                    </figcaption>
                </figure>

                <figure class="relative max-w-sm cursor-pointer">
                    <a href="#">
                        <img className="rounded-lg" src={Lady} alt="image description" />
                    </a>
                    <figcaption class="absolute font-bold text-white bg-translucent bottom-0 rounded-b-lg flex justify-between p-2 w-full">
                        <h5>text goes here</h5>

                        <span className="icon bg-primary text-lg font-bold text-white material-symbols-outlined">
                            chevron_right
                        </span>
                    </figcaption>
                </figure>

                <figure class="relative max-w-sm cursor-pointer">
                    <a href="#">
                        <img className="rounded-lg" src={Lady} alt="image description" />
                    </a>
                    <figcaption class="absolute font-bold text-white bg-translucent bottom-0 rounded-b-lg flex justify-between p-2 w-full">
                        <h5>text goes here</h5>

                        <span className="icon bg-primary text-lg font-bold text-white material-symbols-outlined">
                            chevron_right
                        </span>
                    </figcaption>
                </figure> 

            </div>



            {/* <Carousel /> */}

        </section>
    );
}

export default Business;