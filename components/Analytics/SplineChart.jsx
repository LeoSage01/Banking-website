import {Line} from 'react-chartjs-2';
import {Chart as ChartJS, LineElement,CategoryScale,LinearScale,PointElement} from 'chart.js'

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
)

const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28];

const options = {
    plugins: {
        legend:false
    },
    scales: {
        x: {
            grid: {
                display:false,
               
                // drawOnChartArea: false,
            }
        },

        y: {
            min: 0,
            max: 1000,
            ticks:{
                stepSize: 150,
                callback: (value) => {
                    if (value >= 1000) return `$${value / 1000}k - Unlimited`;
                    if (value >= 800 ) return `$${value}`;
                    if (value >= 400) return `${value} - $800 `;
                    if (value >= 200) return `${value}k - $400`;
                    if (value >= 100) return `${value} - $200`;
                    if (value >= 50  ) return `${value} - $100 `
                    if (value >= 0) return `${value} - $50 `;
                    return `$${value}`;
                    
                  },
            },
            grid: {
                borderDash: [10],
                
                
            }
        }
    }

};

const data = {
    labels,
    datasets: [
    {
        label: 'Dataset 1',
        data: [100, 400, 400, 430, 490, 750,100, 100, 130, 600, 490, 750, 100, 100, 130, 600, 490, 750,  100, 100, 130, 600, 490, 750, 700,800,800],
        backgroundColor: "#2596be",
        borderColor: "#2596be",
        pointBorderColor:"transparent",
        pointBackgroundColor:"transparent", 
        pointStyle:"rect",
        pointBorderWidth: 1,
        tension: 0.6,
        fill: true,
        showLine: true,
    },
    {
        label: 'Dataset 2',
        data: [ 50, 300, 370, 200, 250, 650,650, 500, 170, 200, 50, 650,650, 500, 170, 177, 50, 650,650, 500, 170, 100, 50, 650,600,1000,1000,940],
        backgroundColor: "#FF5555",
        borderColor: "#FF5555",
        pointBorderColor:"transparent",
        pointBackgroundColor:"transparent",
        pointStyle:"rect",
        pointBorderWidth: 1,
        tension: 0.5,
        fill: true,
        showLine: true,
    }
    ]
}

const SplineChart = () => {

  return (
    <>
    <div className="h-[63px] w-[100%] flex gap-[2rem] pl-3 mt-3 px-4">
             <div className="mt-2">
              <h2 className="text-25px leading-[30px] font-semi-bold " >Analytics</h2>
             </div>
             <div className=" flex  gap-5 ml-[3rem] mt-2 ">
              <div className=" flex gap-2 ">
                <div className="w-[11px] h-[11px] rounded-[50px] bg-primary mt-1 "></div>
                <p className="text-xs leading-[17px] font-normal ">Income</p>
              </div>
              <div className=" flex gap-2 ">
                <div className="w-[11px] h-[11px] rounded-[50px] bg-out mt-1"></div>
                <p className="text-xs leading-[17px] font-normal ">Outcome</p>
              </div>
             </div>

             <div className=" flex gap-6 ml-[3rem]">
              <button className="px-4 py-2 bg-gray-200 rounded-[11px] text-ash  text-sm">Weekly</button>
              <button className="px-4 py-2 bg-primary  rounded-[11px] text-fair  text-sm">Monthly</button>
              <button className="px-4 py-2 bg-gray-200 rounded-[11px] text-ash  text-sm">Yearly</button>
             </div>

            </div>
    <div style={{width:"700px", height:"600px", paddingTop:".5rem", marginLeft:".9em", marginTop:".8em" }}>
          <Line data={data} options={options}>
    </Line>
    
    </div>
    </>
    
  )
}

export default SplineChart
