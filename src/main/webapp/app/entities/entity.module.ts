import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'persona',
        loadChildren: () => import('./persona/persona.module').then(m => m.ConsumptionApiPersonaModule),
      },
      {
        path: 'report',
        loadChildren: () => import('./report/report.module').then(m => m.ConsumptionApiReportModule),
      },
      {
        path: 'report-parameter',
        loadChildren: () => import('./report-parameter/report-parameter.module').then(m => m.ConsumptionApiReportParameterModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class ConsumptionApiEntityModule {}
