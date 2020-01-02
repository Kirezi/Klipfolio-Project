import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Service } from 'src/app/model/service.model';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-service',
    templateUrl: './service.component.html',
    styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
    @Input() service: Service;
    @Output() serviceClicked = new EventEmitter();

    constructor() {}

    ngOnInit() {}

    onServiceClicked() {
        this.serviceClicked.emit(this.service.id);
    }
}
