import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetricComponent } from './metric.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChartsModule } from 'ng2-charts';

describe('MetricComponent', () => {
    let component: MetricComponent;
    let fixture: ComponentFixture<MetricComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [SharedModule, ChartsModule],
            declarations: [MetricComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MetricComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        component.metric = {
            title: 'subscription',
            data: [
                {
                    count: 200,
                    updatedAt: {
                        seconds: 1577805000
                    }
                },

                {
                    count: 500,
                    updatedAt: {
                        seconds: 1577869200
                    }
                }
            ]
        };
    });

    it('should create metric component', () => {
        expect(component).toBeTruthy();
    });

    it('should have the correct metric object', () => {
        component.metric = {
            title: 'subscription',
            data: [
                {
                    count: 200,
                    updatedAt: {
                        seconds: 1577805000
                    }
                },

                {
                    count: 500,
                    updatedAt: {
                        seconds: 1577869200
                    }
                }
            ]
        };
        expect(component.metric).toBeDefined();
    });

    // it('should get the exact last index', async(() => {
    //     component.metric = {
    //         title: 'subscription',
    //         data: [
    //             {
    //                 count: 200,
    //                 updatedAt: {
    //                     seconds: 1577805000
    //                 }
    //             },

    //             {
    //                 count: 500,
    //                 updatedAt: {
    //                     seconds: 1577869200
    //                 }
    //             }
    //         ]
    //     };

    //     expect(component.indexOfLastElement).toEqual(
    //         component.metric.data.length - 1
    //     );
    // }));

    it('should render the metric title name in the label tag ', async(() => {
        component.metric = {
            title: 'subscription',
            data: [
                {
                    count: 200,
                    updatedAt: {
                        seconds: 1577805000
                    }
                },

                {
                    count: 500,
                    updatedAt: {
                        seconds: 1577869200
                    }
                }
            ]
        };

        fixture.detectChanges();
        expect(
            fixture.nativeElement
                .querySelector('label')
                .textContent.toLowerCase()
        ).toContain('subscription');
    }));

    it('should render the metric count  in the span tag ', () => {
        console.log('checking', component.indexOfLastElement);
        fixture.detectChanges();

        expect(
            fixture.nativeElement.querySelector('#countLabel').textContent
        ).toContain(component.metric.data[1].count);
    });
});
