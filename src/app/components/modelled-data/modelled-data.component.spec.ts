import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelledDataComponent } from './modelled-data.component';
import { SharedModule } from 'src/app/shared/shared.module';

describe('ModelledDataComponent', () => {
    let component: ModelledDataComponent;
    let fixture: ComponentFixture<ModelledDataComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [SharedModule],
            declarations: [ModelledDataComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ModelledDataComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create modelled data component', () => {
        expect(component).toBeTruthy();
    });
});
