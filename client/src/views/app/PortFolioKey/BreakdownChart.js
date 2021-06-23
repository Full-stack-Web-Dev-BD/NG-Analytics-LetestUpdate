import Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import HighchartsReact from 'highcharts-react-official';
import React, { useEffect, useRef, useState } from 'react';

HC_exporting(Highcharts);

const BreakDownChart = () => {
  const chartRef = useRef(null);

  const option = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie',
    },
    legend: {
      enabled: true,
    },
    title: {
      text: undefined,
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
    },
    accessibility: {
      point: {
        valueSuffix: '%',
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %',
        },
      },
    },
    series: [
      {
        name: 'Brands',
        colorByPoint: true,
        data: [
          {
            name: 'Chrome',
            y: 61.41,
            sliced: true,
            selected: true,
          },
          {
            name: 'Others',
            y: 11.84,
          },
          {
            name: 'AGTF',
            y: 1.6,
          },
          {
            name: 'ADF',
            y: 1.2,
          },
        ],
      },
    ],
  };

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={option}
        ref={chartRef}
      />
    </div>
  );
};

export default BreakDownChart;
