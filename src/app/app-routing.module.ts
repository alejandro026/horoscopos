import { GeminisComponent } from './componentes/geminis/geminis.component';
import { EscorpioComponent } from './componentes/escorpio/escorpio.component';
import { CapricornioComponent } from './componentes/capricornio/capricornio.component';
import { CancerComponent } from './componentes/cancer/cancer.component';
import { AriesComponent } from './componentes/aries/aries.component';
import { AcuarioComponent } from './componentes/acuario/acuario.component';
import { HoroscoposMensualComponent } from './componentes/horoscopos-mensual/horoscopos-mensual.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HoroscoposMensualComponent },
  { path: 'horoscopos', component: HoroscoposMensualComponent },
  { path: 'acuario', component:  AcuarioComponent},
  { path: 'aries', component:  AriesComponent},
  { path: 'cancer', component:  CancerComponent},
  { path: 'capricornio', component:  CapricornioComponent},
  { path: 'escorpio', component:  EscorpioComponent},
  { path: 'geminis', component:  GeminisComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
