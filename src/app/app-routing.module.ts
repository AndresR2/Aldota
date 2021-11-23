import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'heroStats',
    loadChildren: () => import('./pages/hero-stats/hero-stats.module').then( m => m.HeroStatsPageModule)
  },
  {
    path: 'heroes',
    loadChildren: () => import('./pages/hero/hero.module').then( m => m.HeroPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
