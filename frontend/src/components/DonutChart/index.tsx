import axios from 'axios';
import Chart from 'react-apexcharts';
import { BASE_URL } from '../../utils/request';
import { SalesSum } from '../../types/sales';

type ChartData = {
    labels: string[];
    series: number[];
}

const DonutChart = () => {

    //Forma errada
    let chartData: ChartData = {labels: [],series:[]};
    //Fazendo a requisição ao banco
    //Forma errada
    axios.get(`${BASE_URL}/sales/amount-by-seller`)
        .then(response =>{
            const data = response.data as unknown as SalesSum[];
            const myLabals = data.map(x=> x.sellerName);
            const mySeries = data.map(x=> x.sum);

            chartData = {labels: myLabals ,series: mySeries};
            console.log(chartData)
        })

    // const mockData = {
    //     series: [477138, 499928, 444867, 220426, 473088],
    //     labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    // }
    
    const options = {
        legend: {
            show: true
        }
    }
    return (
       <Chart 
            options={{...options, labels:chartData.labels}}
            series={chartData.series}
            type="donut"
            height={240}
       />
    );
}

export default DonutChart;