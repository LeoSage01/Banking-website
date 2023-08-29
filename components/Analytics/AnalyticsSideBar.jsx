import SplineChart from "./SplineChart"

const AnalyticsSideBar = () => {
  return (
    <div className='w-full bg-[#ebf2fb] px-4'>

            <div className="mx-auto pt-8 pb-4">
                <div className="text-center mb-6">
                    <h3 className="text-primary font-bold mb-2">Analytics</h3>
                    <p className="text-gray-500">Chart Analytics for Expenditure</p>
                </div>

            </div>


            <div className=" h-[480px] w-full md:w-[770px] mx-auto  flex flex-col py-4 pl-4 overflow-scroll bg-white shadow-md rounded-lg">
            <SplineChart/>
            </div>

        </div>
  )
}

export default AnalyticsSideBar