import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelledDataComponent } from './modelled-data.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { By } from '@angular/platform-browser';

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

    it('should have the title of the model defined', () => {
        fixture.componentInstance.title = 'subscription model';
        expect(fixture.componentInstance.title).toBeDefined();
    });

    it('should render the title in the label tags in mat card ', () => {
        fixture.componentInstance.title = 'subscription model';
        fixture.detectChanges();
        let de = fixture.debugElement.query(
            By.css('.container>mat-card>label')
        );
        expect(de.nativeElement.textContent).toBe('subscription model');
    });
});
