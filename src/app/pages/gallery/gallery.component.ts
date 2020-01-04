import { Component, OnInit, ɵConsole } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Service } from 'src/app/model/service.model';
import { AngularFireStorage } from '@angular/fire/storage';
import { Subscription } from 'rxjs';
import { ModelData } from 'src/app/model/modelData.model';
import { Metric } from 'src/app/model/metric.model';
import { PaginationService } from 'src/app/service/pagination.service';

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
    showServiceSpinner: boolean;
    showMetricSpinner: boolean;
    showModelSpinner: boolean;
    constructor(
        private apiService: ApiService,
        private paginationService: PaginationService
    ) {}

    ngOnInit() {
        this.showServiceSpinner = true;
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
    fetchServices(docId?) {
        console.log('fetchservice', docId);
        this.apiService.getServices(docId).subscribe(result => {
            if (result) {
                console.log('services', result);

                this.services = result;

                this.showServiceSpinner = false;
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
        this.showModelSpinner = true;
        this.apiService.getModelledData(serviceId).subscribe(result => {
            if (result) {
                this.modelData = result;
                console.log('modelled data', result);
                this.showModelSpinner = false;
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
        this.showMetricSpinner = true;
        this.apiService.getMetricData(serviceId).subscribe(result => {
            if (result) {
                this.metrics = result;
                this.showMetricSpinner = false;
                console.log('metrics', this.metrics);
            }
        });
    }

    moreContent() {
        console.log('from pagination', this.services[this.services.length - 1]);
        this.fetchServices(this.services[this.services.length - 1].serviceName);
    }
}
