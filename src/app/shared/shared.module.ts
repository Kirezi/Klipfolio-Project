import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
const components = [HeaderComponent, LoadingSpinnerComponent];
const modules = [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule
];
@NgModule({
    declarations: [...components],
    imports: [...modules],
    exports: [...components, ...modules]
})
export class SharedModule {}
