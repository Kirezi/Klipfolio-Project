import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryComponent } from './gallery.component';
import { Component, NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({ selector: 'app-metric', template: '' })
class MetricComponent {}

@Component({ selector: 'app-service', template: '' })
class ServiceComponent {}

@Component({ selector: 'app-modelled-data', template: '' })
class ModelledDataComponent {}

@Component({ selector: 'loading-spinner', template: '' })
class LoadingSpinnerComponent {}

describe('GalleryComponent', () => {
    let component: GalleryComponent;
    let fixture: ComponentFixture<GalleryComponent>;
    let mockService;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                GalleryComponent,
                MetricComponent,
                ServiceComponent,
                ModelledDataComponent,
                LoadingSpinnerComponent
            ],
            providers: [{ provide: ApiService }],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
    }));

    beforeEach(() => {
        mockService = jasmine.createSpyObj([
            'getServices',
            'getModelledData',
            'getMetricData'
        ]);
        fixture = TestBed.createComponent(GalleryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        // service = TestBed.get(ApiService);
    });

    it('should create gallery page', async(() => {
        expect(component).toBeTruthy();
    }));

    // it('should use the quoteList from the service', () => {
    //     const apiService = fixture.debugElement.injector.get(ApiService);
    //     fixture.detectChanges();
    //     expect(apiService.getServices()).toEqual(component.fetchServices());
    // });
});
