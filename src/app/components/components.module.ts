import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ServiceComponent } from './service/service.component';
import { ModelledDataComponent } from './modelled-data/modelled-data.component';
import { MetricComponent } from './metric/metric.component';

const components = [ServiceComponent, ModelledDataComponent, MetricComponent];

@NgModule({
    declarations: [...components],
    imports: [CommonModule, SharedModule, FormsModule],
    exports: [...components]
})
export class ComponentsModule {}
