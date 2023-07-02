import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SportsarticlePage } from './sportsarticle.page';

const routes: Routes = [
  {
    path: '',
    component: SportsarticlePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SportsarticlePageRoutingModule {}
