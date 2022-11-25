import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-libra',
  templateUrl: './libra.component.html',
  styleUrls: ['./libra.component.css']
})
export class LibraComponent implements OnInit {

  selected: Date= new Date();


  fechaMaxima: Date= new Date();

  hoscopoAries=[
    {
     dia:1,
      imagen:"https://lh5.googleusercontent.com/vlaGhSqcfutdxQVpOUqkl3WO-3ywNtAosBOGBA5BYogj1TcwRe1K89BQBPqnuH5k-mfmRpqkFz6l2wwPIRqCdm34RxYRk0dof8GiiNsAJIBErZrb85BNtk1CXzPIFbiQrh1WSch0F1GPDe8nV7Rjqw",
      informacion:"Las ganas de renovarte y de verte distinto se hacen presentes. Empezar por un cambio en tu cabello puede ser el primer paso. Disfruta de las cosas que se hacen de a dos: es la compañía ideal para ir de compras, visitar tiendas, eso sí, no debemos pedir precios ya que son pura distinción. "
    },
    {
     dia:2,
      imagen:"https://lh5.googleusercontent.com/vlaGhSqcfutdxQVpOUqkl3WO-3ywNtAosBOGBA5BYogj1TcwRe1K89BQBPqnuH5k-mfmRpqkFz6l2wwPIRqCdm34RxYRk0dof8GiiNsAJIBErZrb85BNtk1CXzPIFbiQrh1WSch0F1GPDe8nV7Rjqw",
      informacion:"Puedes mejorar mucho la energía de tu hogar al cambiar el orden y ciertas normas que no están funcionando del todo, esto gracias a que Plutón se posa en tu casa  y con él puedes cambiar las cosas de maneras mucho más sencillas y radicales. Busca conectar con lo más íntimo y emotivo en ti y vas a poder desde ahí trabajar el amor propio, esto mediante la influencia de la Luna y Saturno que en tu casa te hacen trabajar en apreciarte a ti mismo y tus talentos."
    },
    {
     dia:3,
      imagen:"https://lh5.googleusercontent.com/vlaGhSqcfutdxQVpOUqkl3WO-3ywNtAosBOGBA5BYogj1TcwRe1K89BQBPqnuH5k-mfmRpqkFz6l2wwPIRqCdm34RxYRk0dof8GiiNsAJIBErZrb85BNtk1CXzPIFbiQrh1WSch0F1GPDe8nV7Rjqw",
      informacion:" "
    },
    {
     dia:4,
      imagen:"https://lh5.googleusercontent.com/vlaGhSqcfutdxQVpOUqkl3WO-3ywNtAosBOGBA5BYogj1TcwRe1K89BQBPqnuH5k-mfmRpqkFz6l2wwPIRqCdm34RxYRk0dof8GiiNsAJIBErZrb85BNtk1CXzPIFbiQrh1WSch0F1GPDe8nV7Rjqw",
      informacion:""
    },
    {
     dia:5,
      imagen:"https://lh5.googleusercontent.com/vlaGhSqcfutdxQVpOUqkl3WO-3ywNtAosBOGBA5BYogj1TcwRe1K89BQBPqnuH5k-mfmRpqkFz6l2wwPIRqCdm34RxYRk0dof8GiiNsAJIBErZrb85BNtk1CXzPIFbiQrh1WSch0F1GPDe8nV7Rjqw",
      informacion:""
    },
    {
     dia:6,
      imagen:"https://lh5.googleusercontent.com/vlaGhSqcfutdxQVpOUqkl3WO-3ywNtAosBOGBA5BYogj1TcwRe1K89BQBPqnuH5k-mfmRpqkFz6l2wwPIRqCdm34RxYRk0dof8GiiNsAJIBErZrb85BNtk1CXzPIFbiQrh1WSch0F1GPDe8nV7Rjqw",
      informacion:""
    },
    {
     dia:7,
      imagen:"https://lh5.googleusercontent.com/vlaGhSqcfutdxQVpOUqkl3WO-3ywNtAosBOGBA5BYogj1TcwRe1K89BQBPqnuH5k-mfmRpqkFz6l2wwPIRqCdm34RxYRk0dof8GiiNsAJIBErZrb85BNtk1CXzPIFbiQrh1WSch0F1GPDe8nV7Rjqw",
      informacion:"Hace tiempo que Saturno te motiva a realizar toda una renovación de las personas que te rodean y con quienes compartes los temas que te estimulan a construir un mundo mejor. Como consecuencia de esto, se te han acercado gente de otros grupos, los has integrado con tus amistades y así tu vida social se fue activando de una nueva manera."
    },
    {
     dia:8,
      imagen:"https://lh5.googleusercontent.com/vlaGhSqcfutdxQVpOUqkl3WO-3ywNtAosBOGBA5BYogj1TcwRe1K89BQBPqnuH5k-mfmRpqkFz6l2wwPIRqCdm34RxYRk0dof8GiiNsAJIBErZrb85BNtk1CXzPIFbiQrh1WSch0F1GPDe8nV7Rjqw",
      informacion:"Hoy experimentarás el último Eclipse del año y será muy significativo porque se encargará de cerrar una etapa y de este modo prepararte para un nuevo periodo que podría ser mucho más positivo, si te preparas bien. Este evento cósmico será total y en tu horóscopo lo sentirás en el área relacionada con tu economía."
    },
    {
     dia:9,
      imagen:"https://lh5.googleusercontent.com/vlaGhSqcfutdxQVpOUqkl3WO-3ywNtAosBOGBA5BYogj1TcwRe1K89BQBPqnuH5k-mfmRpqkFz6l2wwPIRqCdm34RxYRk0dof8GiiNsAJIBErZrb85BNtk1CXzPIFbiQrh1WSch0F1GPDe8nV7Rjqw",
      informacion:"A la fuerte influencia del eclipse, hoy el cosmos te seguirá generando cancelaciones e imprevistos, por tal motivo no tendrás más opción que renovar los planes que tenías de reuniones de trabajo."
    },
    {
     dia:10,
      imagen:"https://lh5.googleusercontent.com/vlaGhSqcfutdxQVpOUqkl3WO-3ywNtAosBOGBA5BYogj1TcwRe1K89BQBPqnuH5k-mfmRpqkFz6l2wwPIRqCdm34RxYRk0dof8GiiNsAJIBErZrb85BNtk1CXzPIFbiQrh1WSch0F1GPDe8nV7Rjqw",
      informacion:"Venus muy pocas veces se combina favorablemente con Neptuno, y hoy será una de esas pocas oportunidades generándote un día de mucho optimismo. Tu entusiasmo y excitación por cumplir tus sueños será muy alto y te sentirás totalmente listo para concretar las mejoras laborales que deseas."
    },
    {
     dia:11,
      imagen:"https://lh5.googleusercontent.com/vlaGhSqcfutdxQVpOUqkl3WO-3ywNtAosBOGBA5BYogj1TcwRe1K89BQBPqnuH5k-mfmRpqkFz6l2wwPIRqCdm34RxYRk0dof8GiiNsAJIBErZrb85BNtk1CXzPIFbiQrh1WSch0F1GPDe8nV7Rjqw",
      informacion:"En el horóscopo de hoy, viernes 11 de noviembre, el Sol se cruza en el camino de Saturno, astro relacionado con los impedimentos y demoras, dándote la sensación de estar muy alejado de tus metas; por eso, te recomiendo mantener la calma y no enojarte. Es un día para reflexionar sobre los cambios a realizar."
    },
    {
      dia:12,
      imagen:"https://lh5.googleusercontent.com/vlaGhSqcfutdxQVpOUqkl3WO-3ywNtAosBOGBA5BYogj1TcwRe1K89BQBPqnuH5k-mfmRpqkFz6l2wwPIRqCdm34RxYRk0dof8GiiNsAJIBErZrb85BNtk1CXzPIFbiQrh1WSch0F1GPDe8nV7Rjqw",
       informacion:"Podrías recibir un mensaje o una llamada molesta, pero no te preocupes porque sabrás manejar la situación para que nadie indeseable se entrometa en tu vida. En las conversaciones que entables no trates de imponer tu punto de vista y piensa dos veces antes de hablar."
     },
     {
      dia:13,
      imagen:"https://lh5.googleusercontent.com/vlaGhSqcfutdxQVpOUqkl3WO-3ywNtAosBOGBA5BYogj1TcwRe1K89BQBPqnuH5k-mfmRpqkFz6l2wwPIRqCdm34RxYRk0dof8GiiNsAJIBErZrb85BNtk1CXzPIFbiQrh1WSch0F1GPDe8nV7Rjqw",
       informacion:"No se permita que recuerdos desagradable del pasado se adueñen de sus pensamientos. Entienda que debe vivir el presente y romper con ciertas ataduras añejas."
     },
     {
      dia:14,
      imagen:"https://lh5.googleusercontent.com/vlaGhSqcfutdxQVpOUqkl3WO-3ywNtAosBOGBA5BYogj1TcwRe1K89BQBPqnuH5k-mfmRpqkFz6l2wwPIRqCdm34RxYRk0dof8GiiNsAJIBErZrb85BNtk1CXzPIFbiQrh1WSch0F1GPDe8nV7Rjqw",
       informacion:"Aries, según nos indica tu horóscopo, te conviene mantener la energía de tu regente Marte a raya ya que desde la casa de las comunicaciones y en estado de retrogradación no será algo positivo para ti el que sus efectos los manifiestes en tu vida."
     },
     {
      dia:15,
      imagen:"https://lh5.googleusercontent.com/vlaGhSqcfutdxQVpOUqkl3WO-3ywNtAosBOGBA5BYogj1TcwRe1K89BQBPqnuH5k-mfmRpqkFz6l2wwPIRqCdm34RxYRk0dof8GiiNsAJIBErZrb85BNtk1CXzPIFbiQrh1WSch0F1GPDe8nV7Rjqw",
       informacion:"Aries, según nos indica tu horóscopo, te conviene mantener la energía de tu regente Marte a raya ya que desde la casa de las comunicaciones y en estado de retrogradación no será algo positivo para ti el que sus efectos los manifiestes en tu vida."
     },
     {
      dia:16,
      imagen:"https://lh5.googleusercontent.com/vlaGhSqcfutdxQVpOUqkl3WO-3ywNtAosBOGBA5BYogj1TcwRe1K89BQBPqnuH5k-mfmRpqkFz6l2wwPIRqCdm34RxYRk0dof8GiiNsAJIBErZrb85BNtk1CXzPIFbiQrh1WSch0F1GPDe8nV7Rjqw",
       informacion:"Aries, según nos indica tu horóscopo, te conviene mantener la energía de tu regente Marte a raya ya que desde la casa de las comunicaciones y en estado de retrogradación no será algo positivo para ti el que sus efectos los manifiestes en tu vida."
     },
     {
      dia:17,
      imagen:"https://lh5.googleusercontent.com/vlaGhSqcfutdxQVpOUqkl3WO-3ywNtAosBOGBA5BYogj1TcwRe1K89BQBPqnuH5k-mfmRpqkFz6l2wwPIRqCdm34RxYRk0dof8GiiNsAJIBErZrb85BNtk1CXzPIFbiQrh1WSch0F1GPDe8nV7Rjqw",
       informacion:"Aries, según nos indica tu horóscopo, te conviene mantener la energía de tu regente Marte a raya ya que desde la casa de las comunicaciones y en estado de retrogradación no será algo positivo para ti el que sus efectos los manifiestes en tu vida."
     },
     {
      dia:18,
      imagen:"https://lh5.googleusercontent.com/vlaGhSqcfutdxQVpOUqkl3WO-3ywNtAosBOGBA5BYogj1TcwRe1K89BQBPqnuH5k-mfmRpqkFz6l2wwPIRqCdm34RxYRk0dof8GiiNsAJIBErZrb85BNtk1CXzPIFbiQrh1WSch0F1GPDe8nV7Rjqw",
       informacion:"Aries, según nos indica tu horóscopo, te conviene mantener la energía de tu regente Marte a raya ya que desde la casa de las comunicaciones y en estado de retrogradación no será algo positivo para ti el que sus efectos los manifiestes en tu vida."
     },
     {
      dia:19,
      imagen:"https://lh5.googleusercontent.com/vlaGhSqcfutdxQVpOUqkl3WO-3ywNtAosBOGBA5BYogj1TcwRe1K89BQBPqnuH5k-mfmRpqkFz6l2wwPIRqCdm34RxYRk0dof8GiiNsAJIBErZrb85BNtk1CXzPIFbiQrh1WSch0F1GPDe8nV7Rjqw",
       informacion:"Aries, según nos indica tu horóscopo, te conviene mantener la energía de tu regente Marte a raya ya que desde la casa de las comunicaciones y en estado de retrogradación no será algo positivo para ti el que sus efectos los manifiestes en tu vida."
     },
     {
      dia:20,
      imagen:"https://lh5.googleusercontent.com/vlaGhSqcfutdxQVpOUqkl3WO-3ywNtAosBOGBA5BYogj1TcwRe1K89BQBPqnuH5k-mfmRpqkFz6l2wwPIRqCdm34RxYRk0dof8GiiNsAJIBErZrb85BNtk1CXzPIFbiQrh1WSch0F1GPDe8nV7Rjqw",
       informacion:"Aries, según nos indica tu horóscopo, te conviene mantener la energía de tu regente Marte a raya ya que desde la casa de las comunicaciones y en estado de retrogradación no será algo positivo para ti el que sus efectos los manifiestes en tu vida."
     },
     {
      dia:21,
      imagen:"https://lh5.googleusercontent.com/vlaGhSqcfutdxQVpOUqkl3WO-3ywNtAosBOGBA5BYogj1TcwRe1K89BQBPqnuH5k-mfmRpqkFz6l2wwPIRqCdm34RxYRk0dof8GiiNsAJIBErZrb85BNtk1CXzPIFbiQrh1WSch0F1GPDe8nV7Rjqw",
       informacion:"Aries, según nos indica tu horóscopo, te conviene mantener la energía de tu regente Marte a raya ya que desde la casa de las comunicaciones y en estado de retrogradación no será algo positivo para ti el que sus efectos los manifiestes en tu vida."
     },
     {
      dia:22,
      imagen:"https://lh5.googleusercontent.com/vlaGhSqcfutdxQVpOUqkl3WO-3ywNtAosBOGBA5BYogj1TcwRe1K89BQBPqnuH5k-mfmRpqkFz6l2wwPIRqCdm34RxYRk0dof8GiiNsAJIBErZrb85BNtk1CXzPIFbiQrh1WSch0F1GPDe8nV7Rjqw",
       informacion:"Aries, según nos indica tu horóscopo, te conviene mantener la energía de tu regente Marte a raya ya que desde la casa de las comunicaciones y en estado de retrogradación no será algo positivo para ti el que sus efectos los manifiestes en tu vida."
     },
     {
      dia:23,
      imagen:"https://lh5.googleusercontent.com/vlaGhSqcfutdxQVpOUqkl3WO-3ywNtAosBOGBA5BYogj1TcwRe1K89BQBPqnuH5k-mfmRpqkFz6l2wwPIRqCdm34RxYRk0dof8GiiNsAJIBErZrb85BNtk1CXzPIFbiQrh1WSch0F1GPDe8nV7Rjqw",
       informacion:"Aries, según nos indica tu horóscopo, te conviene mantener la energía de tu regente Marte a raya ya que desde la casa de las comunicaciones y en estado de retrogradación no será algo positivo para ti el que sus efectos los manifiestes en tu vida."
     },
     {
      dia:24,
      imagen:"https://lh5.googleusercontent.com/vlaGhSqcfutdxQVpOUqkl3WO-3ywNtAosBOGBA5BYogj1TcwRe1K89BQBPqnuH5k-mfmRpqkFz6l2wwPIRqCdm34RxYRk0dof8GiiNsAJIBErZrb85BNtk1CXzPIFbiQrh1WSch0F1GPDe8nV7Rjqw",
       informacion:"Estás viendo ciertas cosas por el lado negativo pero tú crees que sólo te pasa porque eres realista. Aunque es bueno mantener a diario los pies en el suelo, no pienses que las cosas con las que sueñas son imposibles. No dejes esta lucha porque te dará resultados. En el terreno sentimental, si hoy sientes que la actitud de tu pareja es algo más fría que anteriormente, pueda que se deba a que os falta un poquitín de pasión."
     },
     {
      dia:25,
      imagen:"https://lh5.googleusercontent.com/vlaGhSqcfutdxQVpOUqkl3WO-3ywNtAosBOGBA5BYogj1TcwRe1K89BQBPqnuH5k-mfmRpqkFz6l2wwPIRqCdm34RxYRk0dof8GiiNsAJIBErZrb85BNtk1CXzPIFbiQrh1WSch0F1GPDe8nV7Rjqw",
       informacion:"Aries, según nos indica tu horóscopo, te conviene mantener la energía de tu regente Marte a raya ya que desde la casa de las comunicaciones y en estado de retrogradación no será algo positivo para ti el que sus efectos los manifiestes en tu vida."
     },
     {
      dia:26,
      imagen:"https://lh5.googleusercontent.com/vlaGhSqcfutdxQVpOUqkl3WO-3ywNtAosBOGBA5BYogj1TcwRe1K89BQBPqnuH5k-mfmRpqkFz6l2wwPIRqCdm34RxYRk0dof8GiiNsAJIBErZrb85BNtk1CXzPIFbiQrh1WSch0F1GPDe8nV7Rjqw",
       informacion:"Aries, según nos indica tu horóscopo, te conviene mantener la energía de tu regente Marte a raya ya que desde la casa de las comunicaciones y en estado de retrogradación no será algo positivo para ti el que sus efectos los manifiestes en tu vida."
     },
     {
      dia:27,
      imagen:"https://lh5.googleusercontent.com/vlaGhSqcfutdxQVpOUqkl3WO-3ywNtAosBOGBA5BYogj1TcwRe1K89BQBPqnuH5k-mfmRpqkFz6l2wwPIRqCdm34RxYRk0dof8GiiNsAJIBErZrb85BNtk1CXzPIFbiQrh1WSch0F1GPDe8nV7Rjqw",
       informacion:"Aries, según nos indica tu horóscopo, te conviene mantener la energía de tu regente Marte a raya ya que desde la casa de las comunicaciones y en estado de retrogradación no será algo positivo para ti el que sus efectos los manifiestes en tu vida."
     },
     {
      dia:28,
      imagen:"https://lh5.googleusercontent.com/vlaGhSqcfutdxQVpOUqkl3WO-3ywNtAosBOGBA5BYogj1TcwRe1K89BQBPqnuH5k-mfmRpqkFz6l2wwPIRqCdm34RxYRk0dof8GiiNsAJIBErZrb85BNtk1CXzPIFbiQrh1WSch0F1GPDe8nV7Rjqw",
       informacion:"Aries, según nos indica tu horóscopo, te conviene mantener la energía de tu regente Marte a raya ya que desde la casa de las comunicaciones y en estado de retrogradación no será algo positivo para ti el que sus efectos los manifiestes en tu vida."
     },
     {
      dia:29,
      imagen:"https://lh5.googleusercontent.com/vlaGhSqcfutdxQVpOUqkl3WO-3ywNtAosBOGBA5BYogj1TcwRe1K89BQBPqnuH5k-mfmRpqkFz6l2wwPIRqCdm34RxYRk0dof8GiiNsAJIBErZrb85BNtk1CXzPIFbiQrh1WSch0F1GPDe8nV7Rjqw",
       informacion:"Aries, según nos indica tu horóscopo, te conviene mantener la energía de tu regente Marte a raya ya que desde la casa de las comunicaciones y en estado de retrogradación no será algo positivo para ti el que sus efectos los manifiestes en tu vida."
     },
     {
      dia:30,
      imagen:"https://lh5.googleusercontent.com/vlaGhSqcfutdxQVpOUqkl3WO-3ywNtAosBOGBA5BYogj1TcwRe1K89BQBPqnuH5k-mfmRpqkFz6l2wwPIRqCdm34RxYRk0dof8GiiNsAJIBErZrb85BNtk1CXzPIFbiQrh1WSch0F1GPDe8nV7Rjqw",
       informacion:"Aries, según nos indica tu horóscopo, te conviene mantener la energía de tu regente Marte a raya ya que desde la casa de las comunicaciones y en estado de retrogradación no será algo positivo para ti el que sus efectos los manifiestes en tu vida."
     }
  ]

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
