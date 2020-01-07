import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryComponent } from './gallery.component';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Service } from 'src/app/model/service.model';
import { of } from 'rxjs';
import { ModelData } from 'src/app/model/modelData.model';
import { Metric } from 'src/app/model/metric.model';
import { By } from '@angular/platform-browser';

describe('GalleryComponent', () => {
    let component: GalleryComponent;
    let fixture: ComponentFixture<GalleryComponent>;
    let mockApiService;
    let services: Service[];
    let modelData: ModelData[];
    let metrics: Metric[];

    @Component({ selector: 'app-metric', template: '<div></div>' })
    class MetricStubComponent {
        @Input() metric: Metric;
    }

    @Component({ selector: 'app-service', template: '' })
    class ServiceStubComponent {
        @Input() service: Service;
        @Output() serviceClicked = new EventEmitter();
    }

    @Component({ selector: 'app-modelled-data', template: '' })
    class ModelledDataStubComponent {
        @Input() title: string;
    }

    @Component({ selector: 'loading-spinner', template: '' })
    class LoadingSpinnerStubComponent {}
    beforeEach(async(() => {
        // create service mockup data
        services = [
            {
                id: 'service1',
                serviceName: 'facebook',
                imageUrl: 'facebook.png'
            },
            {
                id: 'service2',
                serviceName: 'instagram',
                imageUrl: 'instagram.png'
            },
            {
                id: 'service1',
                serviceName: 'mailchimp',
                imageUrl: 'mailchimp.png'
            }
        ];
        // create mockup  model data
        modelData = [{ title: 'leads' }, { title: 'followers' }];
        // create metric mockup data
        metrics = [
            {
                title: 'subscription',
                data: [
                    {
                        count: 200,
                        updatedAt: new Date()
                    },

                    {
                        count: 300,
                        updatedAt: new Date(
                            +new Date() -
                                Math.floor(Math.random() * 10000000000)
                        )
                    }
                ]
            }
        ];
        // create model data

        mockApiService = jasmine.createSpyObj([
            'getServices',
            'getModelledData',
            'getMetricData'
        ]);
        TestBed.configureTestingModule({
            declarations: [
                GalleryComponent,
                MetricStubComponent,
                ServiceStubComponent,
                ModelledDataStubComponent,
                LoadingSpinnerStubComponent
            ],
            providers: [{ provide: ApiService, useValue: mockApiService }]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GalleryComponent);
        component = fixture.componentInstance;
        mockApiService.getServices.and.returnValue(of(services));
        mockApiService.getModelledData.and.returnValue(of(modelData));
        mockApiService.getMetricData.and.returnValue(of(metrics));
        fixture.detectChanges();
    });

    it('should create gallery page', () => {
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });

    it('should  call fetchServices() and have the exact services component created', () => {
        spyOn(component, 'fetchServices').and.callThrough();
        expect(component.services.length).toEqual(services.length);
        expect(
            fixture.debugElement.queryAll(By.css('app-service')).length
        ).toBe(fixture.componentInstance.services.length);
    });

    it('should call fetchModelledDatas() and have the exact modelled-data component created', () => {
        spyOn(component, 'fetchModelledDatas').and.callThrough();
        expect(component.modelData.length).toEqual(2);
        expect(
            fixture.debugElement.queryAll(By.css('app-modelled-data')).length
        ).toBe(fixture.componentInstance.modelData.length);
    });

    it('should call fetchMetricData() and have the exact metric component', () => {
        spyOn(component, 'fetchMetricData').and.callThrough();
        expect(component.metrics.length).toEqual(1);
        expect(fixture.debugElement.queryAll(By.css('app-metric')).length).toBe(
            fixture.componentInstance.metrics.length
        );
    });

    it('should return a No Service Exist if Api return null', () => {
        let message = 'No SERVICE EXIST';
        mockApiService.getServices.and.returnValue(of(null));
        component.ngOnInit();
        spyOn(component, 'fetchServices').and.callThrough();
        expect(component.errorServiceMessage).toContain(message);
        fixture.detectChanges();
    });

    it('should return a No Modelled Exist if Api return null', () => {
        let message = 'NO MODELLED DATA EXIST';
        mockApiService.getModelledData.and.returnValue(of(null));
        component.ngOnInit();
        spyOn(component, 'fetchModelledDatas').and.callThrough();
        expect(component.errorModelMessage).toContain(message);
        fixture.detectChanges();
    });

    it('should return a No Metric Exist if Api return null', () => {
        mockApiService.getMetricData.and.returnValue(of(null));
        component.ngOnInit();
        spyOn(component, 'fetchMetricData').and.callThrough();
        expect(component.errorMetricMessage).toContain('NO METRIC EXIST');
    });

    // it('should return an error if getMetric return', () => {
    //     mockApiService.getMetricData.and.returnValue(of(undefined));
    //     component.ngOnInit();
    //     spyOn(component, 'fetchMetricData').and.callThrough();
    //     expect(component.errorMetricMessage).toContain('crazy');
    // });
});
