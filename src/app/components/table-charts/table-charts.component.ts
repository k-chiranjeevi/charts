import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import { fordOptions1, fordOptions2, fordPieOptions, hyundaiOptions1, hyundaiOptions2, hyundaiPieOptions, totyotaOptions1, totyotaOptions2, toyotaPieOptions } from 'src/app/tesdata';


@Component({
    selector: 'app-table-charts',
    templateUrl: './table-charts.component.html',
    styleUrls: ['./table-charts.component.css']
})



export class TableChartsComponent {
    Highcharts: typeof Highcharts = Highcharts;
    color = '#F5F5F6'
    data = [
        { type: "Ford", price: 1768 },
        { type: "Toyota", price: 574 },
        { type: "Hyundai", price: 534 },
    ]
    displayedColumns: string[] = ['type', 'price', 'AvgPrice', 'Value'];
    fordOptions = [
        fordOptions1,
        fordOptions2
    ];

    totyotaOptions = [
        totyotaOptions1,
        totyotaOptions2
    ];

    hyundaiOptions = [
        hyundaiOptions1,
        hyundaiOptions2
    ]

    fordPieOptions = fordPieOptions;
    toyotaPieOptions = toyotaPieOptions;
    hyundaiPieOptions = hyundaiPieOptions;
} 
