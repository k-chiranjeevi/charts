export const PieData: any =

{
    apple: ['Apple', 65],
    mango: ['Mango', 46],
    banana: ['Banana', 34],
    grapes: ['Grapes', 30]
}


export function getSubtitle(key: any) {
    let color = 'lightBlue';
    if (key == 'apple') {
        color = 'lightBlue';
    } else if (key == 'mango') {
        color = 'Blue';

    } else if (key == 'banana') {
        color = 'lightGreen';
    } else {
        color = 'rgb(254, 106, 53)'
    }

    const totalNumber = PieData[key][1];
    return `<span style="font-size: 17px; color:${color}">${totalNumber}%</span></span>`;
}

export const fordOptions1 = {
    chart: {
        type: 'column'
    },
    title: {
        text: ''
    },
    xAxis: {
        labels: {
            enabled: false,
        },
        crosshair: true,
        accessibility: {
            description: 'Ford'
        }
    },
    yAxis: {
        min: 0,
        visible: false
    },
    tooltip: {
        valueSuffix: 'Price'
    },
    plotOptions: {
        series: {
            colorByPoint: true,
        },
        column: {
            dataLabels: {
                enabled: true,
            },
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [
        {
            name: 'Ford',
            data: [550, 430, 420, 410, 400, 399, 398, 397]
        }
    ]
}

export const fordOptions2 = {
    chart: {
        type: 'column'
    },
    title: {
        text: ''
    },
    xAxis: {
        categories: ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007'],
        crosshair: true,
        accessibility: {
            description: 'Countries'
        }
    },
    yAxis: {
        visible: false
    },
    tooltip: {
        valueSuffix: 'price'
    },
    plotOptions: {
        series: {
            colorByPoint: true,
        },
        column: {
            dataLabels: {
                enabled: true
            },
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [
        {
            name: 'Ford',
            data: [1352, 10, 10, 80, 60, 114, 20, 20]
        }
    ]
}

export const fordPieOptions = {
    chart: {
        type: 'pie'
    },
    title: {
        text: '',
    },

    accessibility: {
        announceNewData: {
            enabled: true
        },
        point: {
            valueSuffix: 'price'
        }
    },

    plotOptions: {
        series: {

            dataLabels: {
                enabled: true,
                format: '{point.y:.0f}'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.of}<br/>'
    },

    series: [
        {
            name: 'Ford',
            colorByPoint: true,
            data: [
                {
                    name: '2000',
                    y: 5767,
                    drilldown: '2000'
                },
                {
                    name: '2001',
                    y: 200.47,
                    drilldown: '2001'
                },
                {
                    name: '2002',
                    y: 199.32,
                    drilldown: '2002'
                },
                {
                    name: '2003',
                    y: 98.15,
                    drilldown: '2003'
                },
                {
                    name: '2004',
                    y: 111.02,
                    drilldown: '2004'
                },
                {
                    name: '2005',
                    y: 170.02,
                    drilldown: '2005'
                },
                {
                    name: '2006',
                    y: 180.02,
                    drilldown: '2006'
                },
                {
                    name: '2007',
                    y: 200.02,
                    drilldown: '2007'
                }
            ]
        }
    ],

}

export const totyotaOptions1 = {
    chart: {
        type: 'column'
    },
    title: {
        text: ''
    },
    xAxis: {
        labels: {
            enabled: false,
        },
        crosshair: true,
        accessibility: {
            description: 'Toyota'
        }
    },
    yAxis: {
        min: 0,
        visible: false
    },
    tooltip: {
        valueSuffix: 'Price'
    },
    plotOptions: {
        series: {
            colorByPoint: true,
        },
        column: {
            dataLabels: {
                enabled: true,
            },
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [
        {
            name: 'Toyota',
            data: [338, 272, 276, 277, 278, 278, 280, 281]
        }
    ]
}

export const totyotaOptions2 = {
    chart: {
        type: 'column'
    },
    title: {
        text: ''
    },
    xAxis: {
        labels: {
            enabled: false,
        },
        crosshair: true,
        accessibility: {
            description: 'Toyota'
        }
    },
    yAxis: {
        min: 0,
        visible: false
    },
    tooltip: {
        valueSuffix: 'Price'
    },
    plotOptions: {
        series: {
            colorByPoint: true,
        },
        column: {
            dataLabels: {
                enabled: true,
            },
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [
        {
            name: 'Toyota',
            data: [764, 32, 800, 32, 192, 64, 288, 208]
        }
    ]
}

export const toyotaPieOptions = {
    chart: {
        type: 'pie'
    },
    title: {
        text: '',
    },

    accessibility: {
        announceNewData: {
            enabled: true
        },
        point: {
            valueSuffix: 'price'
        }
    },

    plotOptions: {
        series: {
            borderRadius: 5,
            dataLabels: {
                enabled: true,
                format: '{point.y:.0f}'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.of}<br/>'
    },

    series: [
        {
            name: 'Toyota',
            colorByPoint: true,
            data: [
                {
                    name: '2000',
                    y: 2921,
                    drilldown: '2000'
                },
                {
                    name: '2001',
                    y: 87,
                    drilldown: '2001'
                },
                {
                    name: '2002',
                    y: 2558,
                    drilldown: '2002'
                },
                {
                    name: '2003',
                    y: 89,
                    drilldown: '2003'
                },
                {
                    name: '2004',
                    y: 534,
                    drilldown: 2004
                },
                {
                    name: '2005',
                    y: 178,
                    drilldown: 2005
                },
                {
                    name: '2006',
                    y: 805,
                    drilldown: 2006
                },
                {
                    name: '2007',
                    y: 584,
                    drilldown: 2007
                }
            ]
        }
    ],

}

export const hyundaiOptions1 = {
    chart: {
        type: 'column'
    },
    title: {
        text: ''
    },
    xAxis: {
        labels: {
            enabled: false,
        },
        crosshair: true,
        accessibility: {
            description: 'Hyundai'
        }
    },
    yAxis: {
        min: 0,
        visible: false
    },
    tooltip: {
        valueSuffix: 'Price'
    },
    plotOptions: {
        series: {
            colorByPoint: true,
        },
        column: {
            dataLabels: {
                enabled: true,
            },
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [
        {
            name: 'Hyundai',
            data: [164, 132, 139, 147, 148, 149, 159, 160]
        }
    ]
}

export const hyundaiOptions2 = {
    chart: {
        type: 'column'
    },
    title: {
        text: ''
    },
    xAxis: {
        labels: {
            enabled: false,
        },
        crosshair: true,
        accessibility: {
            description: 'Hyundai'
        }
    },
    yAxis: {
        min: 0,
        visible: false
    },
    tooltip: {
        valueSuffix: 'Price'
    },
    plotOptions: {
        series: {
            colorByPoint: true,
        },
        column: {
            dataLabels: {
                enabled: true,
            },
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [
        {
            name: 'Hyundai',
            data: [1680, 10, 16, 22, 10, 16, 64, 4]
        }
    ]
}

export const hyundaiPieOptions = {
    chart: {
        type: 'pie'
    },
    title: {
        text: '',
    },

    accessibility: {
        announceNewData: {
            enabled: true
        },
        point: {
            valueSuffix: 'price'
        }
    },

    plotOptions: {
        series: {
            borderRadius: 5,
            dataLabels: {
                enabled: true,
                format: '{point.y:.0f}'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.of}<br/>'
    },

    series: [
        {
            name: 'Hyundai',
            colorByPoint: true,
            data: [
                {
                    name: '2000',
                    y: 2756,
                    drilldown: '2000'
                },
                {
                    name: '2001',
                    y: 32,
                    drilldown: '2001'
                },
                {
                    name: '2002',
                    y: 24,
                    drilldown: '2002'
                },
                {
                    name: '2003',
                    y: 10,
                    drilldown: '2003'
                },
                {
                    name: '2004',
                    y: 9,
                    drilldown: 2004
                },
                {
                    name: '2005',
                    y: 11,
                    drilldown: 2005
                },
                {
                    name: '2006',
                    y: 7,
                    drilldown: 2006
                },
                {
                    name: '2007',
                    y: 6,
                    drilldown: 2007
                }
            ]
        }
    ],

}