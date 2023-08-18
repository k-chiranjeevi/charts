import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.css']
})

export class TrendsComponent {

  Highcharts: typeof Highcharts = Highcharts;

  barChartseriesData = [
    {
      name: '',
      data: [20, 30, 9, 40],
    }
  ]

  lineChartseriesData = [{
    name: 'Tokyo',
    marker: {
      symbol: 'square'
    },
    data: [50, 200, 450, 200, 250, 290, 310, 350, 400, 450, 370, 200]

  }, {
    name: 'Bergen',
    marker: {
      symbol: 'point'
    },
    data: [200, 350, 450, 500, 650, 490, 410, 450, 600, 650, 570, 300]
  }]

  barChartoptions = {
    chart: {
      type: "bar",
    },
    title: {
      text: "Employee performance this quarter",
    },
    legend: {
      enabled: false
    },
    xAxis: {
      categories: [
        "sue",
        "Robert",
        "Eric",
        "Annie"
      ],
    },
    yAxis: {
      tickPixelInterval: 200,
      title: {
        text: "Revenue vs quota",
      },
      labels: {
        format: '${value}.00k',
      }
    },
    tooltip: {
      valueSuffix: "K",
    },
    series: this.barChartseriesData as Highcharts.SeriesOptionsType[],
    plotOptions: {
      series: {
        zones: [
          {
            value: 10,
            color: 'red'
          },
          {
            color: 'green'
          }
        ]
      }
    },
  };

  lineChartOptions = {
    chart: {
      type: 'line'
    },
    title: {
      text: 'Monthly Revenue'
    },
    xAxis: {
      title: {
        text: 'Month Order'
      },
      categories: ['Jan 15', 'Feb 15', 'Mar 15', 'Apr 15', 'May 15', 'Jun 15', 'Jul 15', 'Aug 15', 'Sep 15', 'Oct 15', 'Nov 15', 'Dec 15'],
    },
    yAxis: {
      title: {
        text: 'Revenue'
      },
      labels: {
        format: '${value}.00k'
      }
    },
    series: this.lineChartseriesData as Highcharts.SeriesOptionsType[]
  } 

bubbledata = [{
  data:[
    {
      x: 95,
      y: 95,
      z: 13.8,
      name: 'BE',
    },
]

}]
 
  bubbleChartOptions: Highcharts.Options = {
    chart: {
      type: 'bubble',
      plotBorderWidth: 1,
    },
    legend: {
      bubbleLegend: {
          enabled: true
      }
  },

    title: {
      text: 'Sugar and fat intake per country'
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

    series: this.bubbledata as any
  
}
}
