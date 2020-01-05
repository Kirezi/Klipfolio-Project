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
    });

    it('should create metric component', () => {
        expect(component).toBeTruthy();
    });
});
