import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { AngularFirestore } from '@angular/fire/firestore';

describe('ApiService', () => {
    let service: ApiService;
    beforeEach(() =>
        TestBed.configureTestingModule({
            providers: [ApiService, { provide: AngularFirestore }]
        })
    );

    it('should be created', () => {
        service = TestBed.get(ApiService);
        expect(service).toBeTruthy();
    });
});
