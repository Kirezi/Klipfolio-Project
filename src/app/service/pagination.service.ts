import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Service } from '../model/service.model';
import { ModelData } from '../model/modelData.model';
import { Metric } from '../model/metric.model';
import { ApiService } from './api.service';
/**
 *
 *
 * @export
 * @class PaginationService
 */
@Injectable({
    providedIn: 'root'
})
export class PaginationService {
    constructor(private db: AngularFirestore, private apiService: ApiService) {}

    getLastdoc() {
        // let lastdoc: any;
        // this.apiService.getServices().subscribe(result => {
        //     if (result) {
        //         lastdoc = result[result.length - 1];
        //         console.log('last doc', lastdoc);
        //     }
        //     // Get the last visible document
        //     // get the next 6 documents
        // });
        // return lastdoc;
    }
}
