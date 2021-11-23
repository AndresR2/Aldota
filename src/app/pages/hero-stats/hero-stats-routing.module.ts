import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroStatsPage } from './hero-stats.page';

const routes: Routes = [
  {
    path: '',
    component: HeroStatsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroStatsPageRoutingModule {}
