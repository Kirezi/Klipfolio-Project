import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceComponent } from './service.component';
import { LoadingSpinnerComponent } from 'src/app/shared/loading-spinner/loading-spinner.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ServiceComponent', () => {
    let component: ServiceComponent;
    let fixture: ComponentFixture<ServiceComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [SharedModule],
            declarations: [ServiceComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ServiceComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create service component', () => {
        expect(component).toBeTruthy();
    });

    it('should have the correct service object', () => {
        fixture.componentInstance.service = {
            id: 'service1',
            serviceName: 'youtube',
            imageUrl: 'youtubeLogo'
        };
        expect(fixture.componentInstance.service.serviceName).toEqual(
            'youtube'
        );
    });
});
