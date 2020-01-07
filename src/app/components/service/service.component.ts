import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter,
    OnChanges
} from '@angular/core';
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

    /**
     * provide the service id to the parrent component
     */
    onServiceClicked() {
        this.serviceClicked.emit(this.service.id);
    }
}
