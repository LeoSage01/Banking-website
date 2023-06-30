const Cards = () => {
    return (
        <div className="p-4">
            <h3>My Card</h3>

            <div className="p-2">
                <img src="" alt="" />

                <div className="bg-white rounded-lg p-4 px-6">
                    <p className="text-slate-500 mb-1">Your balance</p>

                    <div className="flex justify-between">
                        <p>$1020.01</p>
                        <div className="flex space-x-6">
                            <p>7.3%</p>
                            <p>10%</p>
                        </div>
                    </div>

                    <hr className="my-4" />

                    <div className="grid grid-cols-2 space-x-3">
                        <div className="col-span-1">
                            <p className="text-xs text-slate-500 mb-1">Currently</p>
                            <p>USD / US Dollar</p>
                        </div>
                        <div className="col-span-1">
                            <p className="text-xs text-slate-500 mb-1">Status</p>
                            <div className="flex">
                                <p>Active</p>
                                <div className="h-2 w-2 rounded-full bg-green-500 my-auto mx-2"></div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="py-3 mt-4 bg-primary rounded-md">
                    <p className="text-xs text-center">Get New Card</p>
                </div>
            </div>
        </div>
    );
}

export default Cards;