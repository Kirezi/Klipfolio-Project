import { TestBed, inject } from '@angular/core/testing';

import { ApiService } from './api.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { of } from 'rxjs';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { Service } from '../model/service.model';

describe('ApiService', () => {
    let service: Service[];
    let apiService: ApiService;
    beforeEach(() =>
        TestBed.configureTestingModule({
            providers: [ApiService, AngularFirestore],
            imports: [AngularFireModule.initializeApp(environment.firebase)]
        })
    );

    beforeEach(() => {});

    it('should be created', () => {
        expect(ApiService).toBeTruthy();
    });
});
