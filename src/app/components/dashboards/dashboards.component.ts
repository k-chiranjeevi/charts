import { Component, ElementRef, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ChartType } from 'chart.js';
import { PieData, getSubtitle } from 'src/app/tesdata';



@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.css']
})
export class DashboardsComponent {

  @ViewChild('table') table!: ElementRef
  Highcharts: typeof Highcharts = Highcharts;
  mangoPieChartOptions: any;
  public bubbleChartData = [
    {
      data: [
        { x: 10, y: 10, r: 10 },
        { x: 15, y: 5, r: 15 },
        { x: 26, y: 12, r: 23 },
        { x: 7, y: 8, r: 8 },
      ],
      pointBackgroundColor: 'lightgreen',
      label: 'Price Drop',
    },
    {
      data: [
        { x: 25, y: 25, r: 5 },
        { x: 10, y: 20, r: 15 },
        { x: 7, y: 20, r: 15 },
        { x: 5, y: 20, r: 8 },
      ],
      pointBackgroundColor: 'red',
      label: 'Price Rise',
    },
    {
      data: [],
      pointBackgroundColor: 'lightblue',
      label: 'No change',
    },
  ];
  public bubbleChartLegend = true;

  chartTypes: { [key: string]: ChartType } = {
    bubble: 'bubble',
  };

  areaData = [{
    name: 'Apple',
    data:
      [500, 440, 470, 550, 650, 600, 500, 670, 690, 650]
  }, {
    name: 'Mango',
    data:
      [50, 100, 110, 170, 200, 210, 300, 150, 100, 200]
  },
  {
    name: 'Banana',
    data:
      [60, 90, 160, 110, 200, 210, 310, 140, 120, 210]
  },
  {
    name: 'Grapes',
    data:
      [70, 80, 140, 100, 190, 250, 290, 160, 130, 240]
  }]

  areaOptions: Highcharts.Options = {
    chart: {
      type: "areaspline",
    },
    title: {
      text: 'Fruit Sales',
      align: 'center'
    },
    legend: {
      layout: 'vertical',
      align: 'center',
      verticalAlign: 'bottom',
    },
    yAxis: {
      tickPixelInterval: 50,
      title: {
        text: 'value'
      }
    },
    tooltip: {
      shared: true,
      headerFormat: '<b>Fruits selling at {point.x}</b><br>'
    },
    credits: {
      enabled: false
    },
    plotOptions: {
      series: {
        pointStart: 2000,
        pointInterval: 1,
      },
      areaspline: {
        fillOpacity: 0.5
      }
    },
    series: this.areaData as any
  }


  pieOptions = {
    chart: {
      type: "pie",
    },
    title: {
      text: ' Apple',
      align: 'center'
    },
    subtitle: {
      useHTML: true,
      text: getSubtitle('apple'),
      floating: true,
      verticalAlign: 'middle',
      y: 30
    },
    legend: {
      enabled: true
    },
    tooltip: {
      valueDecimals: 2,
      valueSuffix: '%'
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        colorByPoint: true,
        type: 'pie',
        size: '100%',
        innerSize: '80%',
        dataLabels: {
          enabled: false,
          distance: '-10%',
          style: {
            fontWeight: 'bold',
            fontSize: '16px'
          },
          connectorWidth: 0
        }
      }
    },
    colors: ['lightblue'],
    series: [{
      type: 'pie',
      name: 'Apple',
      data: PieData.apple
    }]
  }

  mangoPieOptions = {
    chart: {
      type: "pie",
    },
    title: {
      text: 'Mango',
      align: 'center'
    },
    subtitle: {
      useHTML: true,
      text: getSubtitle('mango'),
      floating: true,
      verticalAlign: 'middle',
      y: 30
    },
    legend: {
      enabled: true
    },
    tooltip: {
      valueDecimals: 2,
      valueSuffix: '%'
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        colorByPoint: true,
        type: 'pie',
        size: '100%',
        innerSize: '80%',
        dataLabels: {
          enabled: false,
          distance: '-10%',
          style: {
            fontWeight: 'bold',
            fontSize: '16px'
          },
          connectorWidth: 0
        }
      }
    },
    colors: ['blue'],
    series: [{
      type: 'pie',
      name: 'Mango',
      data: PieData.mango
    }]
  }

  bananaPieOptions = {
    chart: {
      type: "pie",
    },
    title: {
      text: 'Banana',
      align: 'center'
    },
    subtitle: {
      useHTML: true,
      text: getSubtitle('banana'),
      floating: true,
      verticalAlign: 'middle',
      y: 30
    },
    legend: {
      enabled: true
    },
    tooltip: {
      valueDecimals: 2,
      valueSuffix: '%'
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        colorByPoint: true,
        type: 'pie',
        size: '100%',
        innerSize: '80%',
        dataLabels: {
          enabled: false,
          distance: '-10%',
          style: {
            fontWeight: 'bold',
            fontSize: '16px'
          },
          connectorWidth: 0
        }
      }
    },
    colors: ['lightGreen'],
    series: [{
      type: 'pie',
      name: 'Banana',
      data: PieData.banana
    }]
  }

  grapesPieOptions = {
    chart: {
      type: "pie",
    },
    title: {
      text: 'Grapes',
      align: 'center'
    },
    subtitle: {
      useHTML: true,
      text: getSubtitle('grapes'),
      floating: true,
      verticalAlign: 'middle',
      y: 30
    },
    legend: {
      enabled: true
    },
    tooltip: {
      valueDecimals: 2,
      valueSuffix: '%'
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        colorByPoint: true,
        type: 'pie',
        size: '100%',
        innerSize: '80%',
        dataLabels: {
          enabled: false,
          distance: '-10%',
          style: {
            fontWeight: 'bold',
            fontSize: '16px'
          },
          connectorWidth: 0
        }
      }
    },
    colors: ['rgb(254, 106, 53)'],
    series: [{
      type: 'pie',
      name: 'Grapes',
      data: PieData.banana
    }]
  }

}


