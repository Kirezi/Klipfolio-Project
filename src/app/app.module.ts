import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ServiceComponent } from './components/service/service.component';
import { MetricComponent } from './components/metric/metric.component';
import { ModelledDataComponent } from './components/modelled-data/modelled-data.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
@NgModule({
    declarations: [
        AppComponent,
        GalleryComponent,
        ServiceComponent,
        MetricComponent,
        ModelledDataComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        SharedModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
