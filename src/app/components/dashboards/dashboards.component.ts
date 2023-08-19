import { Component } from '@angular/core';

import { ChartType } from 'chart.js';


@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.css']
})
export class DashboardsComponent {

  public bubbleChartData = [
    {
      data: [
        { x: 10, y: 10, r: 10},
        { x: 15, y: 5, r: 15 },
        { x: 26, y: 12, r: 23 },
        { x: 7, y: 8, r: 8 },
      ],
      pointBackgroundColor: 'lightgreen',
      label: 'Prise Drop',
    },
    {
      data: [
        { x: 25, y: 25, r: 5 },
        { x: 10, y: 20, r: 15 },
        { x:7, y: 20, r: 15 },
        { x: 5, y: 20, r: 8 },
      ],
      pointBackgroundColor: 'red',
      label: 'Prise Rise',
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
}


