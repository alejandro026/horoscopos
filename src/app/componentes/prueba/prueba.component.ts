import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

  likes1:number=54;
  likes2:number=523;
  comentarios1:number=10;
  comentarios2:number=154;

  constructor() {
  }

  ngOnInit(): void {
  }

  subirLikes(numero:number){
    switch (numero) {
      case 1:
        this.likes1++;
        break;
      case 2:
        this.likes2++;
        break;
      default:
        break;
    }
  }

  dejarComentario(numero:number){
    Swal.fire({
      title: 'Escribe tu comentario',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Publicar',
      cancelButtonText: 'Cancelar',
      showLoaderOnConfirm: true,
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Tu comentario se ha publicado',
          showConfirmButton: false,
          timer: 1500
        })

        switch (numero) {
          case 1:
            this.comentarios1++;
            break;
          case 2:
            this.comentarios2++;
            break;
          default:
            break;
        }

      }
    })
  }

}
