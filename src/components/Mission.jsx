import Button from "./button";
import Tom from "../assets/manisolated.jpg"

const Mission = () => {
    return (
        <section className="p-4">
            <div className="rounded-lg grid grid-cols-2 gap-6 bg-purple-600 p-6 ">
                <div className="">
                    <img className="h-auto rounded-lg max-w-full" src={Tom} alt="" />
                </div>

                <div className="px-8 py-2 text-white mr-2 flex flex-col justify-between space-y-3 ">
                    <h3 className=" text-xl font-bold w-34">Discover the mission & story behind our company</h3>

                    <p className="text-xs">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus turpis vitae ex vestibulum efficitur. Donec euismod diam eu turpis curshonct dolor tortor. Duis lacinia
                    </p>

                    <Button />
                   
                </div>
            </div>
        </section>
    );
}

export default Mission; 