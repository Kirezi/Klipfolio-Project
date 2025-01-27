import { Component, OnInit, Input } from '@angular/core';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import * as moment from 'moment';
import { Metric } from 'src/app/model/metric.model';
@Component({
    selector: 'app-metric',
    templateUrl: './metric.component.html',
    styleUrls: ['./metric.component.scss']
})
export class MetricComponent implements OnInit {
    @Input() metric: Metric;
    indexOfLastElement: number;
    countArray: number[] = [];
    metricDate: string[] = [];
    lineChartData: ChartDataSets[];
    lineChartLabels: Label[];

    lineChartOptions = {
        responsive: true,
        scaleShowVerticalLines: false,
        scales: {
            xAxes: [
                {
                    ticks: {
                        display: false // this will remove only the label
                    }
                }
            ],

            yAxes: [
                {
                    ticks: {
                        display: false // this will remove only the label
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
        if (this.metric) {
            this.indexOfLastElement = this.metric.data.length - 1;
        }
        this.getChartData();
        this.initChart();
    }
    /**
     * retrieve data and
     * break them into two array
     * representing two axis
     */
    getChartData() {
        if (this.metric && this.metric.data) {
            for (let i = 0; i < this.metric.data.length; i++) {
                this.countArray[i] = this.metric.data[i].count;

                this.metricDate[i] = moment
                    .utc(this.metric.data[i].updatedAt.seconds * 1000)
                    .format('D MMMM YYYY');
            }
        } else {
            console.log('metric does not exist');
        }
    }

    /**
     * initialize our chart with
     * the array provided by
     * getchartData
     */
    initChart() {
        this.lineChartData = [{ data: this.countArray, label: 'metric' }];
        this.lineChartLabels = this.metricDate;
    }
}
