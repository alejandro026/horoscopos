import { HoroscoposHistoricoComponent } from './componentes/horoscopos-historico/horoscopos-historico.component';
import { HoroscoposMensualComponent } from './componentes/horoscopos-mensual/horoscopos-mensual.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HoroscoposMensualComponent },
  { path: 'horoscopos', component: HoroscoposHistoricoComponent },
  { path: 'historico', component: HoroscoposMensualComponent },
  { path: '*', redirectTo: "/historico", pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
