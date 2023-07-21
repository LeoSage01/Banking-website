const Confirm = () => {
    return (
        <div className="h-96 my-auto py-4 px-6 w-96 bg-white flex flex-col justify-evenly rounded-md">
            <h3 className="text-primary text-center font-bold">Confirm</h3>

            <div className="grid grid-cols-2 space-y-3 p-4">
                <div className="">
                    <p className="text-slate-500">From</p>
                    <p className="font-bold">USD Balance</p>
                </div>

                <div className="float-right">
                    <p className="text-slate-500">Transaction Fee</p>
                    <p className="font-bold">$0.01</p>
                </div>

                <div className="">
                    <p className="text-slate-500">Reciepient</p>
                    <p className="font-bold">Jack O'wells</p>
                </div>

                <div className="">
                    <p className="text-slate-500">Amount</p>
                    <p className="font-bold">$1200</p>
                </div>

                <div className="">
                    <p className="text-slate-500">Description</p>
                    <p className="font-bold">For Sneakers</p>
                </div>
            </div>

            <span className=""> </span>

            <div className="flex flex-col">
                <h4 className="mx-auto text-xs">Please type transaction Pin</h4>

                <input type="text" />

                <div className="text-xs space-x-6 mx-auto">
                    <button className="py-2 px-5 text-primary bg-red-200 rounded-md">Cancel</button>
                    <button className="py-2 px-5 bg-primary text-white rounded-md">Proceed</button>
                </div>

            </div>
        </div>
    );
}

export default Confirm;