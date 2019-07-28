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
  { path: 'informacion', loadChildren: './informacion/informacion.module#InformacionPageModule' },
  { path: 'image-full-screen', loadChildren: './image-full-screen/image-full-screen.module#ImageFullScreenPageModule' },  { path: 'infelcom', loadChildren: './infelcom/infelcom.module#InfelcomPageModule' },
  { path: 'gimi', loadChildren: './gimi/gimi.module#GimiPageModule' },
  { path: 'gis', loadChildren: './gis/gis.module#GISPageModule' },
  { path: 'telematics', loadChildren: './telematics/telematics.module#TelematicsPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
