import React, { Component, useState } from "react";
import Chart from "react-apexcharts";

const Charts = () => {
    const [state, setState] = useState({
        options: {
            stroke: {
                curve: 'smooth',
            },
            color: ['#E91E63', '#FF9800'],
            chart: {
                id: "basic-bar444"
            },
            xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
            }
        },
        series: [
            {
                name: "People born",
                data: [30, 40, 45, 50, 49, 60, 70, 91]
            },
            {
                name: "People dead",
                data: [60, 30, 55, 20, 43, 40, 80, 101]
            }
        ]
    })

    return (
        <div className="px-6 py-1">
            <div className="flex">
                <p>Analytics</p>
            </div>

            <div className="row flex justify-center">
                <div className="mixed-chart mx-auto">
                    <Chart
                        options={state.options}
                        series={state.series}
                        type="line"
                        width="600"
                        height="200"
                    />
                </div>
            </div>
        </div>
    );
}

export default Charts;