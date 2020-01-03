import { Component, OnInit, Input } from '@angular/core';
import { Metric } from 'src/app/model/service.model';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
    selector: 'app-metric',
    templateUrl: './metric.component.html',
    styleUrls: ['./metric.component.scss']
})
export class MetricComponent implements OnInit {
    @Input() metric: Metric;
    indexOfLastElement: number;
   
    initChart(){
      for(int i =0; i<metric.data.length; i++){
        
      }
    }
    lineChartData: ChartDataSets[] = [
        { data: [85, 72, 78, 75, 77, 75], label: 'metric' }
    ];

    lineChartLabels: Label[] = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June'
    ];

    lineChartOptions = {
        responsive: true,
        scaleShowVerticalLines: false,
        scales: {
            xAxes: [
                {
                    ticks: {
                        display: false //this will remove only the label
                    }
                }
            ],

            yAxes: [
                {
                    ticks: {
                        display: false //this will remove only the label
                    }
                }
            ]
        }
    };

    lineChartColors: Color[] = [
        {
            borderColor: '#08C1FF',
            backgroundColor: '#E3F7FE',
            pointBackgroundColor: 'rgb(103, 58, 183)',
            pointBorderColor: '#fff'
        }
    ];

    lineChartLegend = false;
    lineChartPlugins = [];
    lineChartType = 'line';

    constructor() {}

    ngOnInit() {
        this.indexOfLastElement = this.metric.data.length - 1;
    }
}
