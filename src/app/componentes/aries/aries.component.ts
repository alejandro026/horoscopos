import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aries',
  templateUrl: './aries.component.html',
  styleUrls: ['./aries.component.css']
})
export class AriesComponent implements OnInit {

  selected: Date= new Date();


  fechaMaxima: Date= new Date();

  hoscopoAries=[
    {
     dia:1,
      imagen:"https://lh6.googleusercontent.com/2MhCWNc_S53os7f9vGy73nLcw1m2ifMydAmRjFP5x2E3mPCiPaXHT_uj9U0KurMhT-FH8m2ecSsF92-6unphkWl3ODlysP95uH22XDYpJuXQb0HHnBk2JDl6DgSdbhpGZhFmLslsNanUPsGtoAN9eA",
      informacion:"Te surgirá una propuesta interesante pero deberás dar una respuesta hoy mismo. No lo pienses demasiado y di que sí, te conviene."
    },
    {
     dia:2,
      imagen:"https://lh6.googleusercontent.com/2MhCWNc_S53os7f9vGy73nLcw1m2ifMydAmRjFP5x2E3mPCiPaXHT_uj9U0KurMhT-FH8m2ecSsF92-6unphkWl3ODlysP95uH22XDYpJuXQb0HHnBk2JDl6DgSdbhpGZhFmLslsNanUPsGtoAN9eA",
      informacion:"Esta semana debes cuidar y medir tus gastos, no presiones demasiado rápido el botón de ‘comprar’ y mejor, tómate un par de días para valorar tu elección, quizá al final decidas no comprar nada. Es una semana ideal para realizar cualquier tipo de investigación."
    },
    {
     dia:3,
      imagen:"https://lh6.googleusercontent.com/2MhCWNc_S53os7f9vGy73nLcw1m2ifMydAmRjFP5x2E3mPCiPaXHT_uj9U0KurMhT-FH8m2ecSsF92-6unphkWl3ODlysP95uH22XDYpJuXQb0HHnBk2JDl6DgSdbhpGZhFmLslsNanUPsGtoAN9eA",
      informacion:"Generalmente, tu mente siempre está atraída por pensar en los planes y en todo lo que podrías impulsar y construir. A veces, esto hace que te demores en finalizar viejos proyectos o pendientes. "
    },
    {
     dia:4,
      imagen:"https://lh6.googleusercontent.com/2MhCWNc_S53os7f9vGy73nLcw1m2ifMydAmRjFP5x2E3mPCiPaXHT_uj9U0KurMhT-FH8m2ecSsF92-6unphkWl3ODlysP95uH22XDYpJuXQb0HHnBk2JDl6DgSdbhpGZhFmLslsNanUPsGtoAN9eA",
      informacion:"La unión que hoy lograrán la Luna y Júpiter provocará intensidad en tus relaciones o encuentros con personas que causen impacto en tu vida. Esto será por una actividad profunda en tu interior que te ayudará a comprender el funcionamiento de las relaciones, tanto en lo que respecta a las motivaciones internas de los demás como en las tuyas propias."
    },
    {
     dia:5,
      imagen:"https://lh6.googleusercontent.com/2MhCWNc_S53os7f9vGy73nLcw1m2ifMydAmRjFP5x2E3mPCiPaXHT_uj9U0KurMhT-FH8m2ecSsF92-6unphkWl3ODlysP95uH22XDYpJuXQb0HHnBk2JDl6DgSdbhpGZhFmLslsNanUPsGtoAN9eA",
      informacion:"Hoy será un día en el que te favorecerá mantenerte tranquilo frente a las situaciones inesperadas que podrían presentarse. Esto será por la oposición entre Venus y Urano que en tu horóscopo podría generarte cambios financieros y emocionales."
    },
    {
     dia:6,
      imagen:"https://lh6.googleusercontent.com/2MhCWNc_S53os7f9vGy73nLcw1m2ifMydAmRjFP5x2E3mPCiPaXHT_uj9U0KurMhT-FH8m2ecSsF92-6unphkWl3ODlysP95uH22XDYpJuXQb0HHnBk2JDl6DgSdbhpGZhFmLslsNanUPsGtoAN9eA",
      informacion:"Hoy el Sol continuará su paso por Escorpio y para ti será una muy buena oportunidad para reajustar las decisiones que has tomado en los últimos meses basadas en tensiones y los miedos al cambio. También para corregir algunas reacciones que has tenido por no saber aceptar los cuestionamientos de los demás hacia ti."
    },
    {
     dia:7,
      imagen:"https://lh6.googleusercontent.com/2MhCWNc_S53os7f9vGy73nLcw1m2ifMydAmRjFP5x2E3mPCiPaXHT_uj9U0KurMhT-FH8m2ecSsF92-6unphkWl3ODlysP95uH22XDYpJuXQb0HHnBk2JDl6DgSdbhpGZhFmLslsNanUPsGtoAN9eA",
      informacion:"Hace tiempo que Saturno te motiva a realizar toda una renovación de las personas que te rodean y con quienes compartes los temas que te estimulan a construir un mundo mejor. Como consecuencia de esto, se te han acercado gente de otros grupos, los has integrado con tus amistades y así tu vida social se fue activando de una nueva manera."
    },
    {
     dia:8,
      imagen:"https://lh6.googleusercontent.com/2MhCWNc_S53os7f9vGy73nLcw1m2ifMydAmRjFP5x2E3mPCiPaXHT_uj9U0KurMhT-FH8m2ecSsF92-6unphkWl3ODlysP95uH22XDYpJuXQb0HHnBk2JDl6DgSdbhpGZhFmLslsNanUPsGtoAN9eA",
      informacion:"Hoy experimentarás el último Eclipse del año y será muy significativo porque se encargará de cerrar una etapa y de este modo prepararte para un nuevo periodo que podría ser mucho más positivo, si te preparas bien. Este evento cósmico será total y en tu horóscopo lo sentirás en el área relacionada con tu economía."
    },
    {
     dia:9,
      imagen:"https://lh6.googleusercontent.com/2MhCWNc_S53os7f9vGy73nLcw1m2ifMydAmRjFP5x2E3mPCiPaXHT_uj9U0KurMhT-FH8m2ecSsF92-6unphkWl3ODlysP95uH22XDYpJuXQb0HHnBk2JDl6DgSdbhpGZhFmLslsNanUPsGtoAN9eA",
      informacion:"A la fuerte influencia del eclipse, hoy el cosmos te seguirá generando cancelaciones e imprevistos, por tal motivo no tendrás más opción que renovar los planes que tenías de reuniones de trabajo."
    },
    {
     dia:10,
      imagen:"https://lh6.googleusercontent.com/2MhCWNc_S53os7f9vGy73nLcw1m2ifMydAmRjFP5x2E3mPCiPaXHT_uj9U0KurMhT-FH8m2ecSsF92-6unphkWl3ODlysP95uH22XDYpJuXQb0HHnBk2JDl6DgSdbhpGZhFmLslsNanUPsGtoAN9eA",
      informacion:"Venus muy pocas veces se combina favorablemente con Neptuno, y hoy será una de esas pocas oportunidades generándote un día de mucho optimismo. Tu entusiasmo y excitación por cumplir tus sueños será muy alto y te sentirás totalmente listo para concretar las mejoras laborales que deseas."
    },
    {
     dia:11,
      imagen:"https://lh6.googleusercontent.com/2MhCWNc_S53os7f9vGy73nLcw1m2ifMydAmRjFP5x2E3mPCiPaXHT_uj9U0KurMhT-FH8m2ecSsF92-6unphkWl3ODlysP95uH22XDYpJuXQb0HHnBk2JDl6DgSdbhpGZhFmLslsNanUPsGtoAN9eA",
      informacion:"En el horóscopo de hoy, viernes 11 de noviembre, el Sol se cruza en el camino de Saturno, astro relacionado con los impedimentos y demoras, dándote la sensación de estar muy alejado de tus metas; por eso, te recomiendo mantener la calma y no enojarte. Es un día para reflexionar sobre los cambios a realizar."
    },
    {
      dia:12,
      imagen:"https://lh6.googleusercontent.com/2MhCWNc_S53os7f9vGy73nLcw1m2ifMydAmRjFP5x2E3mPCiPaXHT_uj9U0KurMhT-FH8m2ecSsF92-6unphkWl3ODlysP95uH22XDYpJuXQb0HHnBk2JDl6DgSdbhpGZhFmLslsNanUPsGtoAN9eA",
       informacion:"Podrías recibir un mensaje o una llamada molesta, pero no te preocupes porque sabrás manejar la situación para que nadie indeseable se entrometa en tu vida. En las conversaciones que entables no trates de imponer tu punto de vista y piensa dos veces antes de hablar."
     },
     {
      dia:13,
      imagen:"https://lh6.googleusercontent.com/2MhCWNc_S53os7f9vGy73nLcw1m2ifMydAmRjFP5x2E3mPCiPaXHT_uj9U0KurMhT-FH8m2ecSsF92-6unphkWl3ODlysP95uH22XDYpJuXQb0HHnBk2JDl6DgSdbhpGZhFmLslsNanUPsGtoAN9eA",
       informacion:"No se permita que recuerdos desagradable del pasado se adueñen de sus pensamientos. Entienda que debe vivir el presente y romper con ciertas ataduras añejas."
     },
     {
      dia:14,
      imagen:"https://lh6.googleusercontent.com/2MhCWNc_S53os7f9vGy73nLcw1m2ifMydAmRjFP5x2E3mPCiPaXHT_uj9U0KurMhT-FH8m2ecSsF92-6unphkWl3ODlysP95uH22XDYpJuXQb0HHnBk2JDl6DgSdbhpGZhFmLslsNanUPsGtoAN9eA",
       informacion:"Buscarás conectarte con tus seres queridos. Aprovecharás la jornada para visitas familiares postergadas desde hace tiempo."
     },
     {
      dia:15,
      imagen:"https://lh6.googleusercontent.com/2MhCWNc_S53os7f9vGy73nLcw1m2ifMydAmRjFP5x2E3mPCiPaXHT_uj9U0KurMhT-FH8m2ecSsF92-6unphkWl3ODlysP95uH22XDYpJuXQb0HHnBk2JDl6DgSdbhpGZhFmLslsNanUPsGtoAN9eA",
       informacion:"La jornada se presenta positiva para las transacciones. Aprovecha para visitar el mercado de pulgas, grandes oportunidades."
     },
     {
      dia:16,
      imagen:"https://lh6.googleusercontent.com/2MhCWNc_S53os7f9vGy73nLcw1m2ifMydAmRjFP5x2E3mPCiPaXHT_uj9U0KurMhT-FH8m2ecSsF92-6unphkWl3ODlysP95uH22XDYpJuXQb0HHnBk2JDl6DgSdbhpGZhFmLslsNanUPsGtoAN9eA",
       informacion:"Es posible que hoy te encuentres con alguna dificultad no prevista en la vida, Aries, pero todo saldrá bien si demuestras tu valor y tomas decisiones: escucha a la voz de tu sexto sentido; debes confiar en tus propios juicios. Canaliza tus deseos y controla los impulsos que tengas, así el entusiasmo te conducirá al triunfo."
     },
     {
      dia:17,
      imagen:"https://lh6.googleusercontent.com/2MhCWNc_S53os7f9vGy73nLcw1m2ifMydAmRjFP5x2E3mPCiPaXHT_uj9U0KurMhT-FH8m2ecSsF92-6unphkWl3ODlysP95uH22XDYpJuXQb0HHnBk2JDl6DgSdbhpGZhFmLslsNanUPsGtoAN9eA",
       informacion:""
     },
     {
      dia:18,
      imagen:"https://lh6.googleusercontent.com/2MhCWNc_S53os7f9vGy73nLcw1m2ifMydAmRjFP5x2E3mPCiPaXHT_uj9U0KurMhT-FH8m2ecSsF92-6unphkWl3ODlysP95uH22XDYpJuXQb0HHnBk2JDl6DgSdbhpGZhFmLslsNanUPsGtoAN9eA",
       informacion:""
     },
     {
      dia:19,
      imagen:"https://lh6.googleusercontent.com/2MhCWNc_S53os7f9vGy73nLcw1m2ifMydAmRjFP5x2E3mPCiPaXHT_uj9U0KurMhT-FH8m2ecSsF92-6unphkWl3ODlysP95uH22XDYpJuXQb0HHnBk2JDl6DgSdbhpGZhFmLslsNanUPsGtoAN9eA",
       informacion:""
     },
     {
      dia:20,
      imagen:"https://lh6.googleusercontent.com/2MhCWNc_S53os7f9vGy73nLcw1m2ifMydAmRjFP5x2E3mPCiPaXHT_uj9U0KurMhT-FH8m2ecSsF92-6unphkWl3ODlysP95uH22XDYpJuXQb0HHnBk2JDl6DgSdbhpGZhFmLslsNanUPsGtoAN9eA",
       informacion:""
     },
     {
      dia:21,
      imagen:"https://lh6.googleusercontent.com/2MhCWNc_S53os7f9vGy73nLcw1m2ifMydAmRjFP5x2E3mPCiPaXHT_uj9U0KurMhT-FH8m2ecSsF92-6unphkWl3ODlysP95uH22XDYpJuXQb0HHnBk2JDl6DgSdbhpGZhFmLslsNanUPsGtoAN9eA",
       informacion:""
     },
     {
      dia:22,
      imagen:"https://lh6.googleusercontent.com/2MhCWNc_S53os7f9vGy73nLcw1m2ifMydAmRjFP5x2E3mPCiPaXHT_uj9U0KurMhT-FH8m2ecSsF92-6unphkWl3ODlysP95uH22XDYpJuXQb0HHnBk2JDl6DgSdbhpGZhFmLslsNanUPsGtoAN9eA",
       informacion:""
     },
     {
      dia:23,
      imagen:"https://lh6.googleusercontent.com/2MhCWNc_S53os7f9vGy73nLcw1m2ifMydAmRjFP5x2E3mPCiPaXHT_uj9U0KurMhT-FH8m2ecSsF92-6unphkWl3ODlysP95uH22XDYpJuXQb0HHnBk2JDl6DgSdbhpGZhFmLslsNanUPsGtoAN9eA",
       informacion:""
     },
     {
      dia:24,
      imagen:"https://lh6.googleusercontent.com/2MhCWNc_S53os7f9vGy73nLcw1m2ifMydAmRjFP5x2E3mPCiPaXHT_uj9U0KurMhT-FH8m2ecSsF92-6unphkWl3ODlysP95uH22XDYpJuXQb0HHnBk2JDl6DgSdbhpGZhFmLslsNanUPsGtoAN9eA",
       informacion:""
     },
     {
      dia:25,
      imagen:"https://lh6.googleusercontent.com/2MhCWNc_S53os7f9vGy73nLcw1m2ifMydAmRjFP5x2E3mPCiPaXHT_uj9U0KurMhT-FH8m2ecSsF92-6unphkWl3ODlysP95uH22XDYpJuXQb0HHnBk2JDl6DgSdbhpGZhFmLslsNanUPsGtoAN9eA",
       informacion:""
     },
     {
      dia:26,
      imagen:"https://lh6.googleusercontent.com/2MhCWNc_S53os7f9vGy73nLcw1m2ifMydAmRjFP5x2E3mPCiPaXHT_uj9U0KurMhT-FH8m2ecSsF92-6unphkWl3ODlysP95uH22XDYpJuXQb0HHnBk2JDl6DgSdbhpGZhFmLslsNanUPsGtoAN9eA",
       informacion:""
     },
     {
      dia:27,
      imagen:"https://lh6.googleusercontent.com/2MhCWNc_S53os7f9vGy73nLcw1m2ifMydAmRjFP5x2E3mPCiPaXHT_uj9U0KurMhT-FH8m2ecSsF92-6unphkWl3ODlysP95uH22XDYpJuXQb0HHnBk2JDl6DgSdbhpGZhFmLslsNanUPsGtoAN9eA",
       informacion:""
     },
     {
      dia:28,
      imagen:"https://lh6.googleusercontent.com/2MhCWNc_S53os7f9vGy73nLcw1m2ifMydAmRjFP5x2E3mPCiPaXHT_uj9U0KurMhT-FH8m2ecSsF92-6unphkWl3ODlysP95uH22XDYpJuXQb0HHnBk2JDl6DgSdbhpGZhFmLslsNanUPsGtoAN9eA",
       informacion:""
     },
     {
      dia:29,
      imagen:"https://lh6.googleusercontent.com/2MhCWNc_S53os7f9vGy73nLcw1m2ifMydAmRjFP5x2E3mPCiPaXHT_uj9U0KurMhT-FH8m2ecSsF92-6unphkWl3ODlysP95uH22XDYpJuXQb0HHnBk2JDl6DgSdbhpGZhFmLslsNanUPsGtoAN9eA",
       informacion:""
     },
     {
      dia:30,
      imagen:"https://lh6.googleusercontent.com/2MhCWNc_S53os7f9vGy73nLcw1m2ifMydAmRjFP5x2E3mPCiPaXHT_uj9U0KurMhT-FH8m2ecSsF92-6unphkWl3ODlysP95uH22XDYpJuXQb0HHnBk2JDl6DgSdbhpGZhFmLslsNanUPsGtoAN9eA",
       informacion:""
     }
  ]

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
