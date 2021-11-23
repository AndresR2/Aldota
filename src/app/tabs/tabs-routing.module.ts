import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'heroStats',
        loadChildren: () => import('../pages/hero-stats/hero-stats.module').then( m => m.HeroStatsPageModule)
      },
      {
        path: 'heroes',
        loadChildren: () => import('../pages/hero/hero.module').then( m => m.HeroPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/heroes',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/heroes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
