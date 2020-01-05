import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceComponent } from './service.component';
import { LoadingSpinnerComponent } from 'src/app/shared/loading-spinner/loading-spinner.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ServiceComponent', () => {
    let component: ServiceComponent;
    let fixture: ComponentFixture<ServiceComponent>;
    let imageTest =
        'https://lh3.googleusercontent.com/z6Sl4j9zQ88oUKNy0G3PAMiVwy8DzQLh_ygyvBXv0zVNUZ_wQPN_n7EAR2By3dhoUpX7kTpaHjRPni1MHwKpaBJbpNqdEsHZsH4q';
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
            // tslint:disable-next-line: max-line-length
            imageUrl: imageTest
        };
        expect(fixture.componentInstance.service).toBeDefined();
    });

    it('should render the service name in the label tag ', async(() => {
        fixture.componentInstance.service = {
            id: 'service1',
            serviceName: 'youtube',
            // tslint:disable-next-line: max-line-length
            imageUrl: imageTest
        };

        fixture.detectChanges();
        expect(
            fixture.nativeElement.querySelector('label').textContent
        ).toContain('Youtube');
    }));

    it('should render the image  in the img tag ', async(() => {
        fixture.componentInstance.service = {
            id: 'service1',
            serviceName: 'youtube',
            imageUrl: 'youtubelogo'
        };

        fixture.detectChanges();
        let de = fixture.debugElement.query(By.css('img'));
        expect(fixture.nativeElement.querySelector('img').src).toContain(
            'youtubelogo'
        );
    }));
});
