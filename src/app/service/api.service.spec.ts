import { TestBed, inject, ComponentFixture } from '@angular/core/testing';

import { ApiService } from './api.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { of } from 'rxjs';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { Service } from '../model/service.model';

describe('ApiService', () => {
    let apiService;
    let db: AngularFirestore;
    let mockupService;
    beforeEach(() =>
        TestBed.configureTestingModule({
            providers: [ApiService, AngularFirestore],
            imports: [AngularFireModule.initializeApp(environment.firebase)]
        })
    );

    beforeEach(() => {
        apiService = TestBed.get(ApiService);
    });

    it('should be created', () => {
        expect(apiService).toBeTruthy();
    });

    it('should call getService and return  at least a service', (done: DoneFn) => {
        // inject([ApiService], apiService => {
        let response = null;
        apiService.getServices().subscribe(result => {
            response = result;
            expect(response.length).toBeGreaterThan(0);
            done();
        });
        //})();
    });

    it('should call getModelledData and return  at least model', (done: DoneFn) => {
        let response = null;
        const id = 'qomGvAzU3Hpto0YCiBoG';
        apiService.getModelledData(id).subscribe(
            result => {
                response = result;
                expect(response.length).toBeGreaterThan(0);
                done();
            },
            error => {
                expect(error).toContain(
                    'Error getting Modelled Data documents'
                );
            }
        );
    });

    it('should call getMetricData and return  at least model', (done: DoneFn) => {
        let response = null;
        const id = 'qomGvAzU3Hpto0YCiBoG';
        apiService.getMetricData(id).subscribe(result => {
            if (result) {
                response = result;
                expect(response.length).toBeGreaterThan(0);
                done();
            }
        });
    });

    // it('should  catch error for getMetricData() with an empty id', (done: DoneFn) => {
    //     const id = '';
    //     let service = apiService.getMetricData(id);
    //     expect(service).toBeUndefined();
    //     done();
    // });

    // it('should  catch error for getModelledData() with an empty id', (done: DoneFn) => {
    //     const id = '';
    //     let service = apiService.getModelledData(id);
    //     expect(service).toBeUndefined();
    //     done();
    // });
});
