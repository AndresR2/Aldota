import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeroStatsPageRoutingModule } from './hero-stats-routing.module';

import { HeroStatsPage } from './hero-stats.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeroStatsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [HeroStatsPage]
})
export class HeroStatsPageModule {}
