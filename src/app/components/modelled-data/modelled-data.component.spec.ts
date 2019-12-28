import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelledDataComponent } from './modelled-data.component';

describe('ModelledDataComponent', () => {
    let component: ModelledDataComponent;
    let fixture: ComponentFixture<ModelledDataComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ModelledDataComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ModelledDataComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
