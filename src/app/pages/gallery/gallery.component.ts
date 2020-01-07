import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Service } from 'src/app/model/service.model';
import { Subscription } from 'rxjs';
import { ModelData } from 'src/app/model/modelData.model';
import { Metric } from 'src/app/model/metric.model';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, OnDestroy {
    services: Service[];
    modelData: ModelData[];
    metrics: Metric[];
    sub: Subscription;
    servicePageSize = 6; // to be used for pagination later
    showServiceSpinner: boolean;
    showMetricSpinner: boolean;
    showModelSpinner: boolean;
    errorServiceMessage: string;
    errorModelMessage: string;
    errorMetricMessage: string;
    constructor(private apiService: ApiService) {}

    ngOnInit() {
        this.showServiceSpinner = true;
        this.fetchServices();
    }

    /**
     * unsubscribe to the api
     */
    ngOnDestroy() {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }

    /**
     * retrieve all services
     */
    fetchServices() {
        this.sub = this.apiService.getServices().subscribe(
            result => {
                if (result) {
                    console.log('services', result);
                    this.services = result;
                    this.defaultCallData(this.services[0].id);
                    this.showServiceSpinner = false;
                } else {
                    this.showServiceSpinner = false;
                    this.errorServiceMessage = 'No SERVICE EXIST';
                    console.log(this.errorServiceMessage);
                }
            },
            error => {
                this.showServiceSpinner = false;
                this.errorServiceMessage = 'Something went wrong: ' + error;
                console.log(this.errorServiceMessage);
            }
        );
    }

    /**
     * retrieve modelled data
     * based on the service id
     * @param serviceId
     */
    fetchModelledDatas(serviceId: string) {
        this.showModelSpinner = true;
        this.sub = this.apiService.getModelledData(serviceId).subscribe(
            result => {
                if (result) {
                    this.modelData = result;
                    console.log('modelled data', result);
                    this.showModelSpinner = false;
                } else {
                    this.errorModelMessage = 'NO MODELLED DATA EXIST';
                    this.showModelSpinner = false;
                }
            },
            error => {
                this.showModelSpinner = false;
                this.errorModelMessage = 'Something went wrong: ' + error;
            }
        );
    }

    /**
     * retrieve Metric data
     * based on the service id
     * @param serviceId
     */
    fetchMetricData(serviceId: string) {
        this.showMetricSpinner = true;

        this.sub = this.apiService.getMetricData(serviceId).subscribe(
            result => {
                if (result) {
                    this.metrics = result;
                    this.showMetricSpinner = false;
                    console.log('metrics', this.metrics);
                } else {
                    this.showMetricSpinner = false;
                    this.errorMetricMessage = 'NO METRIC EXIST';
                }
            },
            error => {
                this.showMetricSpinner = false;
                this.errorMetricMessage = 'Something went wrong: ' + error;
            }
        );
    }

    /**
     * retrieve metric and modelled data
     * by the 1st service
     * @param serviceId
     */
    defaultCallData(serviceId: string) {
        this.fetchMetricData(serviceId);
        this.fetchModelledDatas(serviceId);
    }

    // the following section is for adding the service
    // createService(service: Service) {
    //     if (service.imageUrl && service.serviceName) {
    //         this.apiService.setServiceData(service);
    //     } else {
    //         console.log('one of the properties is missing from the service');
    //     }
    // }
}
