import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-modelled-data',
    templateUrl: './modelled-data.component.html',
    styleUrls: ['./modelled-data.component.scss']
})
export class ModelledDataComponent implements OnInit {
    @Input() title: string;
    constructor() {}

    ngOnInit() {
        console.log(this.title);
    }
}
