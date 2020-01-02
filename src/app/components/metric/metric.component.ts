import { Component, OnInit, Input } from '@angular/core';
import { Metric } from 'src/app/model/service.model';

@Component({
    selector: 'app-metric',
    templateUrl: './metric.component.html',
    styleUrls: ['./metric.component.scss']
})
export class MetricComponent implements OnInit {
    @Input() metric: Metric;
    constructor() {}

    ngOnInit() {}
}
