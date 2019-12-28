import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Service } from '../model/service.model';
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
}
