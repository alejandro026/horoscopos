import { HoroscoposHistoricoComponent } from './componentes/horoscopos-historico/horoscopos-historico.component';
import { HoroscoposMensualComponent } from './componentes/horoscopos-mensual/horoscopos-mensual.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'horoscopos', component: HoroscoposMensualComponent },
  { path: 'horoscopos-historico', component: HoroscoposHistoricoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
