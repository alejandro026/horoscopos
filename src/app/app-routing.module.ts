import { VirgoComponent } from './componentes/virgo/virgo.component';
import { TauroComponent } from './componentes/tauro/tauro.component';
import { SagitarioComponent } from './componentes/sagitario/sagitario.component';
import { PiscisComponent } from './componentes/piscis/piscis.component';
import { LibraComponent } from './componentes/libra/libra.component';
import { LeoComponent } from './componentes/leo/leo.component';
import { GeminisComponent } from './componentes/geminis/geminis.component';
import { EscorpioComponent } from './componentes/escorpio/escorpio.component';
import { CapricornioComponent } from './componentes/capricornio/capricornio.component';
import { CancerComponent } from './componentes/cancer/cancer.component';
import { AriesComponent } from './componentes/aries/aries.component';
import { AcuarioComponent } from './componentes/acuario/acuario.component';
import { PruebaComponent } from './componentes/prueba/prueba.component';
import { HoroscoposHistoricoComponent } from './componentes/horoscopos-historico/horoscopos-historico.component';
import { HoroscoposMensualComponent } from './componentes/horoscopos-mensual/horoscopos-mensual.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HoroscoposMensualComponent },
  { path: 'horoscopos', component: HoroscoposMensualComponent },
  { path: 'historico', component:  HoroscoposHistoricoComponent},
  { path: 'acuario', component:  AcuarioComponent},
  { path: 'aries', component:  AriesComponent},
  { path: 'cancer', component:  CancerComponent},
  { path: 'capricornio', component:  CapricornioComponent},
  { path: 'escorpio', component:  EscorpioComponent},
  { path: 'geminis', component:  GeminisComponent},
  { path: 'leo', component:  LeoComponent},
  { path: 'libra', component:  LibraComponent},
  { path: 'piscis', component:  PiscisComponent},
  { path: 'sagitario', component:  SagitarioComponent},
  { path: 'tauro', component:  TauroComponent},
  { path: 'virgo', component:  VirgoComponent},
  { path: 'prueba', component:  PruebaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
