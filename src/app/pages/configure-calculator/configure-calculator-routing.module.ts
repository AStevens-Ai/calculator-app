import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfigureCalculatorPage } from './configure-calculator.page';

const routes: Routes = [
  {
    path: '',
    component: ConfigureCalculatorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigureCalculatorPageRoutingModule {}
