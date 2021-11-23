import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeroPageRoutingModule } from './hero-routing.module';

import { HeroPage } from './hero.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeroPageRoutingModule,
    ComponentsModule
  ],
  declarations: [HeroPage]
})
export class HeroPageModule {}
