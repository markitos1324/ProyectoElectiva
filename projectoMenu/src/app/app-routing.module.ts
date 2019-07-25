import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'general', loadChildren: './general/general.module#GeneralPageModule' },
  { path: 'pensum', loadChildren: './pensum/pensum.module#PensumPageModule' },
  { path: 'ubicacion', loadChildren: './ubicacion/ubicacion.module#UbicacionPageModule' },
  { path: 'grupos', loadChildren: './grupos/grupos.module#GruposPageModule' },
  { path: 'personal', loadChildren: './personal/personal.module#PersonalPageModule' },
  { path: 'informacion', loadChildren: './informacion/informacion.module#InformacionPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
