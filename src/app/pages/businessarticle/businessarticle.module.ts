import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BusinessarticlePageRoutingModule } from './businessarticle-routing.module';

import { BusinessarticlePage } from './businessarticle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BusinessarticlePageRoutingModule
  ],
  declarations: [BusinessarticlePage]
})
export class BusinessarticlePageModule {}
