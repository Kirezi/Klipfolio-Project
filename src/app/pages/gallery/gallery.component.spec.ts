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

    it('should set services correctly from the apiservice', () => {
        expect(fixture.componentInstance.services.length).toEqual(3);
    });

    it('should set modelleddatas  correctly from the apiservice', () => {
        expect(fixture.componentInstance.modelData.length).toEqual(2);
    });

    it('should set metrics correctly from the apiservice', () => {
        expect(fixture.componentInstance.metrics.length).toEqual(1);
    });

    it('should create a service component for each service obj coming from Api', () => {
        expect(
            fixture.debugElement.queryAll(By.css('app-service')).length
        ).toBe(fixture.componentInstance.services.length);
    });

    it('should create a metric component for each metric obj coming from Api', () => {
        expect(fixture.debugElement.queryAll(By.css('app-metric')).length).toBe(
            fixture.componentInstance.metrics.length
        );
    });

    it('should create a modelled data component for each modelled data obj coming from Api', () => {
        expect(
            fixture.debugElement.queryAll(By.css('app-modelled-data')).length
        ).toBe(fixture.componentInstance.modelData.length);
    });
});
