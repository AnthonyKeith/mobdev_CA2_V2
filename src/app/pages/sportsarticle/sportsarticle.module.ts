import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SportsarticlePageRoutingModule } from './sportsarticle-routing.module';

import { SportsarticlePage } from './sportsarticle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SportsarticlePageRoutingModule
  ],
  declarations: [SportsarticlePage]
})
export class SportsarticlePageModule {}
