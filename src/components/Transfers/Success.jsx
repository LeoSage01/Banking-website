import IMG1 from "../../img/success.png"

const Success = () => {
    return (
        <div className="h-full w-full bg-[#fcfcfcba] absolute top-0 flex justify-center items-center">
            <div className="p-6 bg-white shadow-lg space-y-2 flex flex-col justify-center items-center rounded-md">
                <img className="h-8 mb-4" src={IMG1} alt="" />
                <h4>$1200</h4>
                <h4>Sucessfully sent to Jack O'wells</h4>
            </div>
        </div>
    );
}

export default Success;