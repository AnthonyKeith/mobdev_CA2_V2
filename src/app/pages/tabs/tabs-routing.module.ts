import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
    {
      path: 'tabs',
      component: TabsPage,
      children: [
        {
          path: 'news',
          children: [
            {
              path: '',
              loadChildren: () => import('../news/news.module').then( m => m.NewsPageModule)
            },
            {
              path: ':id',
              loadChildren: () => import('../newsarticle/newsarticle.module').then( m => m.NewsarticlePageModule)
            }
          ]
        },
        {
          path: 'sports',
          children: [
            {
              path: '',
              loadChildren: () => import('../sports/sports.module').then( m => m.SportsPageModule)
            },
            {
              path: ':id',
              loadChildren: () => import('../sportsarticle/sportsarticle.module').then( m => m.SportsarticlePageModule)
            }
          ]
        },
        {
          path: 'business',
          children: [
            {
              path: '',
              loadChildren: () => import('../business/business.module').then( m => m.BusinessPageModule)
            },
            {
              path: ':id',
              loadChildren: () => import('../businessarticle/businessarticle.module').then( m => m.BusinessarticlePageModule)
            }
          ]
        }
      ]
    },
    {
      path: '',
      redirectTo: '/tabs/news',
      pathMatch: 'full'
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}


