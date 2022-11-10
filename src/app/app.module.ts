import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HoroscoposMensualComponent } from './componentes/horoscopos-mensual/horoscopos-mensual.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { HoroscoposHistoricoComponent } from './componentes/horoscopos-historico/horoscopos-historico.component';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    HoroscoposMensualComponent,
    HoroscoposHistoricoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
