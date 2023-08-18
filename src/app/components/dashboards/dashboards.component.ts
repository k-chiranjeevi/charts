import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.css']
})
export class DashboardsComponent {

  Highcharts: typeof Highcharts = Highcharts;

  buubleseriesData: any = [{
    
    data: [
      { x: 95, y: 95, z: 13.8, name: 'BE', country: 'Belgium' },
      { x: 86.5, y: 102.9, z: 14.7, name: 'DE', country: 'Germany' },
    ],
    colorByPoint: true
  }]

  bubbleChartOptions = {
    chart: {
      type: 'bubble',
      plotBorderWidth: 1,
      zoomType: 'xy'
    },

    legend: {
      enabled: false
    },

    title: {
      text: 'Sugar and fat intake per country'
    },

    subtitle: {
      text: 'Source: <a href="http://www.euromonitor.com/">Euromonitor</a> and <a href="https://data.oecd.org/">OECD</a>'
    },

    accessibility: {
      point: {
        valueDescriptionFormat: '{index}. {point.name}, fat: {point.x}g, sugar: {point.y}g, obesity: {point.z}%.'
      }
    },

    xAxis: {
      gridLineWidth: 1,
      title: {
        text: 'Daily fat intake'
      },
      labels: {
        format: '{value} gr'
      },
      accessibility: {
        rangeDescription: 'Range: 60 to 100 grams.'
      }
    },

    yAxis: {
      startOnTick: false,
      endOnTick: false,
      title: {
        text: 'Daily sugar intake'
      },
      labels: {
        format: '{value} gr'
      },
      maxPadding: 0.2,
      accessibility: {
        rangeDescription: 'Range: 0 to 160 grams.'
      }
    },

    tooltip: {
      useHTML: true,
      headerFormat: '<table>',
      pointFormat: '<tr><th colspan="2"><h3>{point.country}</h3></th></tr>' +
        '<tr><th>Fat intake:</th><td>{point.x}g</td></tr>' +
        '<tr><th>Sugar intake:</th><td>{point.y}g</td></tr>' +
        '<tr><th>Obesity (adults):</th><td>{point.z}%</td></tr>',
      footerFormat: '</table>',
      followPointer: true
    },

    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
          format: '{point.name}'
        }
      }
    },

    series: this.buubleseriesData

  }

 
}


