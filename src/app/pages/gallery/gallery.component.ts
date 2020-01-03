import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Service, ModelData, Metric } from 'src/app/model/service.model';
import { AngularFireStorage } from '@angular/fire/storage';
import { Subscription } from 'rxjs';

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
    fetchServices() {
        this.apiService.getServices().subscribe(result => {
            if (result) {
                console.log('services', result);
                this.services = result;
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
}
