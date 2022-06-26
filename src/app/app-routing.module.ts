import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
},
  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
},
{
  path: 'tab1',
  loadChildren: () => import('./tab1/tab1.module').then( m => m.Tab1PageModule)
},
{
  path: 'tabjob',
  loadChildren: () => import('./tabjob/tabjob.module').then( m => m.TabjobPageModule)
},
{
  path: 'tabnotif',
  loadChildren: () => import('./tabnotif/tabnotif.module').then( m => m.TabnotifPageModule)
},
  {
    path: 'post',
    loadChildren: () => import('./post/post.module').then( m => m.PostPageModule)
  },
  {
    path: 'tweet',
    loadChildren: () => import('./components/shared-components.module').then( m => m.SharedComponentsModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'config',
    loadChildren: () => import('./config/config.module').then( m => m.ConfigPageModule)
  },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
