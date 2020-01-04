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

    getServices() {
        return this.db
            .collection<Service>('service')
            .valueChanges({ idField: 'id' });
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
