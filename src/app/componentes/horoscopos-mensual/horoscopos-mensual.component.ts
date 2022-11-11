import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-horoscopos-mensual',
  templateUrl: './horoscopos-mensual.component.html',
  styleUrls: ['./horoscopos-mensual.component.css']
})
export class HoroscoposMensualComponent implements OnInit {

  panelOpenState = false;

  selected?: Date | null;

  dia= this.selected?.getDay();

  fechaMaxima: Date= new Date();

  hoscopo=[
    {
     imagen:"https://lh3.googleusercontent.com/ZawWWfBoLuSD26BTkkMairJIjxd11oCULGSvezDcqCXhZKNosbnueuG324Fy24MwvpJbqyMZvCrnwkWAFx6W7s3Oq4QbN9NCwpGjXKKxp1gLaiqX9lYdEGbsEIUvlt6jD76rT7nHxq751qQDlTiZ7g",
      informacion:"Te surgirá una propuesta interesante pero deberás dar una respuesta hoy mismo. No lo pienses demasiado y di que sí, te conviene."
    },
    {
     imagen:"https://lh3.googleusercontent.com/ZawWWfBoLuSD26BTkkMairJIjxd11oCULGSvezDcqCXhZKNosbnueuG324Fy24MwvpJbqyMZvCrnwkWAFx6W7s3Oq4QbN9NCwpGjXKKxp1gLaiqX9lYdEGbsEIUvlt6jD76rT7nHxq751qQDlTiZ7g",
      informacion:"Esta semana debes cuidar y medir tus gastos, no presiones demasiado rápido el botón de ‘comprar’ y mejor, tómate un par de días para valorar tu elección, quizá al final decidas no comprar nada. Es una semana ideal para realizar cualquier tipo de investigación."
    },
    {
     imagen:"https://lh3.googleusercontent.com/ZawWWfBoLuSD26BTkkMairJIjxd11oCULGSvezDcqCXhZKNosbnueuG324Fy24MwvpJbqyMZvCrnwkWAFx6W7s3Oq4QbN9NCwpGjXKKxp1gLaiqX9lYdEGbsEIUvlt6jD76rT7nHxq751qQDlTiZ7g",
      informacion:"Generalmente, tu mente siempre está atraída por pensar en los planes y en todo lo que podrías impulsar y construir. A veces, esto hace que te demores en finalizar viejos proyectos o pendientes. "
    },
    {
     imagen:"https://lh3.googleusercontent.com/ZawWWfBoLuSD26BTkkMairJIjxd11oCULGSvezDcqCXhZKNosbnueuG324Fy24MwvpJbqyMZvCrnwkWAFx6W7s3Oq4QbN9NCwpGjXKKxp1gLaiqX9lYdEGbsEIUvlt6jD76rT7nHxq751qQDlTiZ7g",
      informacion:"La unión que hoy lograrán la Luna y Júpiter provocará intensidad en tus relaciones o encuentros con personas que causen impacto en tu vida. Esto será por una actividad profunda en tu interior que te ayudará a comprender el funcionamiento de las relaciones, tanto en lo que respecta a las motivaciones internas de los demás como en las tuyas propias."
    },
    {
     imagen:"https://lh3.googleusercontent.com/ZawWWfBoLuSD26BTkkMairJIjxd11oCULGSvezDcqCXhZKNosbnueuG324Fy24MwvpJbqyMZvCrnwkWAFx6W7s3Oq4QbN9NCwpGjXKKxp1gLaiqX9lYdEGbsEIUvlt6jD76rT7nHxq751qQDlTiZ7g",
      informacion:"Hoy será un día en el que te favorecerá mantenerte tranquilo frente a las situaciones inesperadas que podrían presentarse. Esto será por la oposición entre Venus y Urano que en tu horóscopo podría generarte cambios financieros y emocionales."
    },
    {
     imagen:"https://lh3.googleusercontent.com/ZawWWfBoLuSD26BTkkMairJIjxd11oCULGSvezDcqCXhZKNosbnueuG324Fy24MwvpJbqyMZvCrnwkWAFx6W7s3Oq4QbN9NCwpGjXKKxp1gLaiqX9lYdEGbsEIUvlt6jD76rT7nHxq751qQDlTiZ7g",
      informacion:"Hoy el Sol continuará su paso por Escorpio y para ti será una muy buena oportunidad para reajustar las decisiones que has tomado en los últimos meses basadas en tensiones y los miedos al cambio. También para corregir algunas reacciones que has tenido por no saber aceptar los cuestionamientos de los demás hacia ti."
    },
    {
     imagen:"https://lh3.googleusercontent.com/ZawWWfBoLuSD26BTkkMairJIjxd11oCULGSvezDcqCXhZKNosbnueuG324Fy24MwvpJbqyMZvCrnwkWAFx6W7s3Oq4QbN9NCwpGjXKKxp1gLaiqX9lYdEGbsEIUvlt6jD76rT7nHxq751qQDlTiZ7g",
      informacion:"Hace tiempo que Saturno te motiva a realizar toda una renovación de las personas que te rodean y con quienes compartes los temas que te estimulan a construir un mundo mejor. Como consecuencia de esto, se te han acercado gente de otros grupos, los has integrado con tus amistades y así tu vida social se fue activando de una nueva manera."
    },



    {
     imagen:"https://lh3.googleusercontent.com/ZawWWfBoLuSD26BTkkMairJIjxd11oCULGSvezDcqCXhZKNosbnueuG324Fy24MwvpJbqyMZvCrnwkWAFx6W7s3Oq4QbN9NCwpGjXKKxp1gLaiqX9lYdEGbsEIUvlt6jD76rT7nHxq751qQDlTiZ7g",
      informacion:"Hoy experimentarás el último Eclipse del año y será muy significativo porque se encargará de cerrar una etapa y de este modo prepararte para un nuevo periodo que podría ser mucho más positivo, si te preparas bien. Este evento cósmico será total y en tu horóscopo lo sentirás en el área relacionada con tu economía."
    },
    {
     imagen:"https://lh3.googleusercontent.com/ZawWWfBoLuSD26BTkkMairJIjxd11oCULGSvezDcqCXhZKNosbnueuG324Fy24MwvpJbqyMZvCrnwkWAFx6W7s3Oq4QbN9NCwpGjXKKxp1gLaiqX9lYdEGbsEIUvlt6jD76rT7nHxq751qQDlTiZ7g",
      informacion:"A la fuerte influencia del eclipse, hoy el cosmos te seguirá generando cancelaciones e imprevistos, por tal motivo no tendrás más opción que renovar los planes que tenías de reuniones de trabajo."
    },
    {
     imagen:"https://lh3.googleusercontent.com/ZawWWfBoLuSD26BTkkMairJIjxd11oCULGSvezDcqCXhZKNosbnueuG324Fy24MwvpJbqyMZvCrnwkWAFx6W7s3Oq4QbN9NCwpGjXKKxp1gLaiqX9lYdEGbsEIUvlt6jD76rT7nHxq751qQDlTiZ7g",
      informacion:"Venus muy pocas veces se combina favorablemente con Neptuno, y hoy será una de esas pocas oportunidades generándote un día de mucho optimismo. Tu entusiasmo y excitación por cumplir tus sueños será muy alto y te sentirás totalmente listo para concretar las mejoras laborales que deseas."
    },
    {
     imagen:"https://lh3.googleusercontent.com/ZawWWfBoLuSD26BTkkMairJIjxd11oCULGSvezDcqCXhZKNosbnueuG324Fy24MwvpJbqyMZvCrnwkWAFx6W7s3Oq4QbN9NCwpGjXKKxp1gLaiqX9lYdEGbsEIUvlt6jD76rT7nHxq751qQDlTiZ7g",
      informacion:"En el horóscopo de hoy, viernes 11 de noviembre, el Sol se cruza en el camino de Saturno, astro relacionado con los impedimentos y demoras, dándote la sensación de estar muy alejado de tus metas; por eso, te recomiendo mantener la calma y no enojarte. Es un día para reflexionar sobre los cambios a realizar."
    }
  ]

  constructor() { }
 fecha:Date= new Date();
  ngOnInit(): void {
  }

}
