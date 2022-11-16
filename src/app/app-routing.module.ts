import { PruebaComponent } from './componentes/prueba/prueba.component';
import { HoroscoposHistoricoComponent } from './componentes/horoscopos-historico/horoscopos-historico.component';
import { HoroscoposMensualComponent } from './componentes/horoscopos-mensual/horoscopos-mensual.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HoroscoposMensualComponent },
  { path: 'horoscopos', component: HoroscoposMensualComponent },
  { path: 'historico', component:  HoroscoposHistoricoComponent},
  { path: 'prueba', component:  PruebaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
