import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-horoscopos-mensual',
  templateUrl: './horoscopos-mensual.component.html',
  styleUrls: ['./horoscopos-mensual.component.css']
})
export class HoroscoposMensualComponent implements OnInit {

  selected: Date= new Date();


  fechaMaxima: Date= new Date();



  constructor(
  ) { }

  ngOnInit(): void {
  }

}
