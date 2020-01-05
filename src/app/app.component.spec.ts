import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA, Component } from '@angular/core';
import { ApiService } from './service/api.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({ selector: 'app-header', template: '' })
class HeaderComponent {}

@Component({ selector: 'app-gallery', template: '' })
class GalleryComponent {}

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [AppComponent, HeaderComponent, GalleryComponent],
            providers: [],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
    }));

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });

    it(`should have as title 'Klipfolio-project'`, () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('Klipfolio-project');
    });
});
