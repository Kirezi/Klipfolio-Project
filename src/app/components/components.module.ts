import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ServiceComponent } from './service/service.component';
import { ModelledDataComponent } from './modelled-data/modelled-data.component';
import { MetricComponent } from './metric/metric.component';
import { ChartsModule } from 'ng2-charts';

const components = [ServiceComponent, ModelledDataComponent, MetricComponent];

@NgModule({
    declarations: [...components],
    imports: [CommonModule, SharedModule, FormsModule, ChartsModule],
    exports: [...components]
})
export class ComponentsModule {}
