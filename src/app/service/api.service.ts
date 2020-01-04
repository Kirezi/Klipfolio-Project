import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Service } from '../model/service.model';
import { ModelData } from '../model/modelData.model';
import { Metric } from '../model/metric.model';
/**
 *
 *
 * @export
 * @class ApiService
 */
@Injectable({
    providedIn: 'root'
})
export class ApiService {
    constructor(private db: AngularFirestore) {}

    getServices(docId = null) {
        let serviceRef;
        serviceRef = this.db
            .collection('service', qfn =>
                qfn
                    .orderBy('serviceName')
                    .startAfter(docId)
                    .limit(6)
            )
            .valueChanges({ idField: 'id' });

        return serviceRef;
    }

    getModelledData(id: string) {
        return this.db
            .collection('modelled-data')
            .doc(id)
            .collection<ModelData>('data')
            .valueChanges();
    }

    getMetricData(id: string) {
        return this.db
            .collection('metric')
            .doc(id)
            .collection<Metric>('metricData')
            .valueChanges();
    }
}
