import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
const components = [];
const modules = [CommonModule, MatButtonModule];
@NgModule({
    declarations: [...components],
    imports: [...modules],
    exports: [...components, ...modules]
})
export class SharedModule {}
