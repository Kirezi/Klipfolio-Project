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

    it('should call getService and return  at least a service', () => {
        let response = null;
        apiService.getServices().subscribe(result => {
            response = result;
            expect(response.length).toBeGreaterThan(0);
        });
    });

    it('should call getModelledData and return  at least model', () => {
        let response = null;
        const id = 'qomGvAzU3Hpto0YCiBoG';
        apiService.getModelledData(id).subscribe(result => {
            response = result;
            expect(response.length).toBeGreaterThan(0);
        });
    });

    it('should call getMetricData and return  at least model', () => {
        let response = null;
        const id = 'qomGvAzU3Hpto0YCiBoG';
        apiService.getMetricData(id).subscribe(result => {
            if (result) {
                response = result;
                expect(response.length).toBeGreaterThan(0);
            }
        });
    });

    it('should  catch error for getMetricData() with undefined data', () => {
        const id = undefined;
        let service = apiService.getMetricData(id);
        expect(service).toBeUndefined();
    });

    it('should  catch error for getModelledData() with undefined data', () => {
        const id = '';
        let service = apiService.getModelledData(undefined);
        expect(service).toBeUndefined();
    });
});
