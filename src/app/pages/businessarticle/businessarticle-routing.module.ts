import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusinessarticlePage } from './businessarticle.page';

const routes: Routes = [
  {
    path: '',
    component: BusinessarticlePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusinessarticlePageRoutingModule {}
