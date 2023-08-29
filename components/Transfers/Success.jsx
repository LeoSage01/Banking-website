import IMG1 from "../../img/success.png"

const Success = ({reset}) => {


    return (
        <div className="h-full w-full backdrop-blur-sm absolute top-0 left-0 flex flex-col justify-center ">
            <div className="h-44 w-72 p-6 bg-white shadow-lg space-y-2 mx-auto  flex flex-col justify-center items-center rounded-md relative">
                <img className="h-8 mb-4" src={IMG1} alt="" />
                <h4>$1200</h4>
                <h4>Sucessfully sent to Jack O'wells</h4>

                <div className="absolute top-0 right-2 bg-primary rounded-full h-6 w-6 flex justify-center items-center" onClick={reset}>
                    <p className="text-white text-center cursor-pointer">X</p>
                </div>
            </div>
        </div>
    );
}

export default Success;