import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Service } from 'src/app/model/service.model';
import { AngularFireStorage } from '@angular/fire/storage';
import { Subscription } from 'rxjs';
import { ModelData } from 'src/app/model/modelData.model';
import { Metric } from 'src/app/model/metric.model';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
    services: Service[];
    modelData: ModelData[];
    metrics: Metric[];
    sub: Subscription;
    servicePageSize = 6;
    constructor(private apiService: ApiService) {}

    ngOnInit() {
        this.fetchServices();
    }

    /**
     * unsubscribe to the api
     */
    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    /**
     * retrieve all services
     */
    fetchServices(pageSize?) {
        this.apiService.getServices(pageSize).subscribe(result => {
            if (result) {
                console.log('services', result);
                this.services = result;
            } else {
                console.log('the data you are tring to access dont exist');
            }
        });
    }

    /**
     * retrieve modelled data
     * based on the service id
     * @param serviceId
     */
    fetchModelledDatas(serviceId: string) {
        this.apiService.getModelledData(serviceId).subscribe(result => {
            if (result) {
                this.modelData = result;
                console.log('modelled data', result);
            }
        });
        console.log(serviceId);
    }

    /**
     * retrieve Metric data
     * based on the service id
     * @param serviceId
     */
    fetchMetricData(serviceId: string) {
        this.apiService.getMetricData(serviceId).subscribe(result => {
            if (result) {
                this.metrics = result;
                console.log('metrics', this.metrics);
            }
        });
    }

    moreContent() {
        this.servicePageSize = this.servicePageSize + 6;

        console.log(this.servicePageSize);

        this.fetchServices(this.servicePageSize);
    }
}
