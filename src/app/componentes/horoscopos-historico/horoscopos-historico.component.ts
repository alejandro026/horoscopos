import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-horoscopos-historico',
  templateUrl: './horoscopos-historico.component.html',
  styleUrls: ['./horoscopos-historico.component.css']
})
export class HoroscoposHistoricoComponent implements OnInit {

  fechaHoy:Date= new Date();
  fechaAyer?:Date;
  fechaMa?:Date;

  constructor() { }

  ngOnInit(): void {
    this.calcularDias();
  }




  calcularDias(){
    this.fechaAyer=new Date((this.fechaHoy.getDate()-1));
    this.fechaMa?.setDate(this.fechaMa.getDate()+1);

    console.log("calcularDias ~ this.fechaMa", this.fechaMa)

  }

}
