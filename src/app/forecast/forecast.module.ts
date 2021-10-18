import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertiesTableComponent } from './properties-table/properties-table.component';
import { PropertyComponent } from './properties-table/property/property.component';

@NgModule({
  declarations: [PropertiesTableComponent, PropertyComponent],
  imports: [CommonModule],
  exports: [PropertiesTableComponent],
})
export class ForecastModule {}
