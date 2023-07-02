const Amount = () => {
    return (
        <div className="">

            <div className="mb-4">
                <p className="text-lg mb-1">Amount</p>
                <div className=" bg-white flex rounded-md shadow-sm px-4 space-x-4 text-sm">
                    <span className="text-slate-500 py-4">USD</span>
                    <input type="number" className="w-full outline-none py-4 pr-0" placeholder="Enter Amount" />
                </div>
            </div>

            <div className="">
                <div className="mb-1 flex justify-between">
                    <p className="text-lg">Remarks</p>
                    <p className="text-slate-500">(Optional)</p>
                </div>
                <input type="text" className="w-full bg-white text-sm outline-none p-4 rounded-md shadow-sm" placeholder="Enter your Remarks" />
            </div>

            <div className="w-full mt-4 text-white p-4 bg-primary rounded-md flex justify-center hover:cursor-pointer">
                <p>PROCEED</p>
            </div>
        </div>
    );
}

export default Amount;