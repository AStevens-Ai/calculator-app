import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfigureCalculatorPageRoutingModule } from './configure-calculator-routing.module';

import { ConfigureCalculatorPage } from './configure-calculator.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfigureCalculatorPageRoutingModule
  ],
  declarations: [ConfigureCalculatorPage]
})
export class ConfigureCalculatorPageModule {}
