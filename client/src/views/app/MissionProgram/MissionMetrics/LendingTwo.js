import React, { PureComponent } from "react";
import Highcharts from "highcharts";


export default class LendingTwo extends PureComponent {
  instance;
  options = {
    chart: {
        type: 'bar',
        height:120,
        backgroundColor:'transparent'
    },
    title: {
        text:undefined
    }, 
    xAxis: {
                categories: ['Unplanned','Planned'],
        title: {
            text: undefined
        },
    },
    yAxis: {
      enabled:false,
        labels: {
            enabled:false
        }
    },
    tooltip: {
        valueSuffix: ''
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
      enabled: false
    },
    credits: {
        enabled: false
    },
    series: [{
        name: '',
        color:'#9ACFF9',
        data: [652,434],
    },
  ]

}
  componentDidMount() {
    this.instance = Highcharts.chart("LendingTwo", this.options);
  }

  render() {
    return (
      <div className="LendingTwo">
        <div id="LendingTwo" />
      </div>
    );
  }
}


