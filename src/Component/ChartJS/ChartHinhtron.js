import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Doughnut } from "react-chartjs-2";

class ChartHinhtron extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: ["Công ty - Công ty",],
                datasets: [
                            {
                                label: "Population (millions)",
                                backgroundColor: ["#3e95cd",],
                                data: [100]
                            }
                        ]
                }
            }
        }

    render() {
        return (
                <Doughnut
                    data={this.state.chartData}
                    option={{
                        title: {
                        display: true,
                        }
                    }}
                />
        )
    }
}

export default ChartHinhtron;