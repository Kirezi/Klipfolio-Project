import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Service } from '../model/service.model';
import { ModelData } from '../model/modelData.model';
import { Metric } from '../model/metric.model';
/**
 *
 *
 * @export
 *  ApiService class
 */
@Injectable({
    providedIn: 'root'
})
export class ApiService {
    constructor(private db: AngularFirestore) {}

    /**
     * retrieve all the services
     */
    getServices() {
        let serviceRef;
        try {
            serviceRef = this.db
                .collection<Service>(
                    'service',
                    qfn => qfn.orderBy('serviceName')
                    // .startAfter(docName) for pagination purpose
                    // .limit(6)
                )
                .valueChanges({ idField: 'id' });
            return serviceRef;
        } catch (err) {
            console.log('Error getting service documents', err);
        }
    }

    /**
     *
     * retrieve all the modelled data
     * that belong to a service
     * @param id
     */
    getModelledData(id: string) {
        try {
            return this.db
                .collection('modelled-data')
                .doc(id)
                .collection<ModelData>('data', qfn => qfn.orderBy('title'))
                .valueChanges();
        } catch (err) {
            console.log('Error getting Modelled Data documents', err);
        }
    }

    /**
     *
     * retrieve all metrics that
     * belong to a service
     * @param id
     */
    getMetricData(id: string) {
        try {
            return this.db
                .collection('metric')
                .doc(id)
                .collection<Metric>('metricData', qfn => qfn.orderBy('title'))
                .valueChanges();
        } catch (err) {
            console.log('Error getting Metric Data documents', err);
        }
    }

    // /**
    //  * post service on the db
    //  * @param service
    //  */
    // setServiceData(service: Service) {
    //     if (service.serviceName && service.imageUrl) {
    //         this.db
    //             .collection('service')
    //             .add(service)
    //             .catch(error => {
    //                 console.log('Error adding service document:', error);
    //             });
    //     } else {
    //         console.log('Please insert the right data');
    //     }
    // }

    // /**
    //  * post metric data
    //  * @param serviceId
    //  * @param metric
    //  */
    // setMetricData(serviceId: string, metric: Metric) {
    //     this.db
    //         .collection('metric')
    //         .doc(serviceId)
    //         .collection('metricData')
    //         .add(metric);
    // }

    // /**
    //  * Post Modelled Data
    //  * @param serviceId
    //  * @param modelData
    //  */
    // setModelledData(serviceId: string, modelData: ModelData) {
    //     this.db
    //         .collection('modelledData')
    //         .doc(serviceId)
    //         .collection('data')
    //         .add(modelData);
    // }
}
