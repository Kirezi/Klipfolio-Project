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
        SharedModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
