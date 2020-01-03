import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ComponentsModule } from './components/components.module';
import { AngularFireStorageModule, StorageBucket } from '@angular/fire/storage';
import { ChartsModule } from 'ng2-charts';
@NgModule({
    declarations: [AppComponent, GalleryComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        SharedModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        ComponentsModule,
        AngularFirestoreModule,
        AngularFireStorageModule,
        ChartsModule
    ],
    providers: [{ provide: StorageBucket, useValue: 'image-bucket' }],
    bootstrap: [AppComponent]
})
export class AppModule {}
