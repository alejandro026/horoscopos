import { Component, Inject, OnInit } from '@angular/core';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';

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
      imagen:"image.png",
      informacion:"Te surgirá una propuesta interesante pero deberás dar una respuesta hoy mismo. No lo pienses demasiado y di que sí, te conviene."
    },
    {
     dia:2,
      imagen:"image.png",
      informacion:"Esta semana debes cuidar y medir tus gastos, no presiones demasiado rápido el botón de ‘comprar’ y mejor, tómate un par de días para valorar tu elección, quizá al final decidas no comprar nada. Es una semana ideal para realizar cualquier tipo de investigación."
    },
    {
     dia:3,
      imagen:"image.png",
      informacion:"Generalmente, tu mente siempre está atraída por pensar en los planes y en todo lo que podrías impulsar y construir. A veces, esto hace que te demores en finalizar viejos proyectos o pendientes. "
    },
    {
     dia:4,
      imagen:"image.png",
      informacion:"La unión que hoy lograrán la Luna y Júpiter provocará intensidad en tus relaciones o encuentros con personas que causen impacto en tu vida. Esto será por una actividad profunda en tu interior que te ayudará a comprender el funcionamiento de las relaciones, tanto en lo que respecta a las motivaciones internas de los demás como en las tuyas propias."
    },
    {
     dia:5,
      imagen:"image.png",
      informacion:"Hoy será un día en el que te favorecerá mantenerte tranquilo frente a las situaciones inesperadas que podrían presentarse. Esto será por la oposición entre Venus y Urano que en tu horóscopo podría generarte cambios financieros y emocionales."
    },
    {
     dia:6,
      imagen:"image.png",
      informacion:"Hoy el Sol continuará su paso por Escorpio y para ti será una muy buena oportunidad para reajustar las decisiones que has tomado en los últimos meses basadas en tensiones y los miedos al cambio. También para corregir algunas reacciones que has tenido por no saber aceptar los cuestionamientos de los demás hacia ti."
    },
    {
     dia:7,
      imagen:"image.png",
      informacion:"Hace tiempo que Saturno te motiva a realizar toda una renovación de las personas que te rodean y con quienes compartes los temas que te estimulan a construir un mundo mejor. Como consecuencia de esto, se te han acercado gente de otros grupos, los has integrado con tus amistades y así tu vida social se fue activando de una nueva manera."
    },
    {
     dia:8,
      imagen:"image.png",
      informacion:"Hoy experimentarás el último Eclipse del año y será muy significativo porque se encargará de cerrar una etapa y de este modo prepararte para un nuevo periodo que podría ser mucho más positivo, si te preparas bien. Este evento cósmico será total y en tu horóscopo lo sentirás en el área relacionada con tu economía."
    },
    {
     dia:9,
      imagen:"image.png",
      informacion:"Hoy le prestarás más atención a tus hábitos alimenticios y optarás por seguir una dieta basada en comida cacera. Se feliz"
    },
    {
     dia:10,
      imagen:"image.png",
      informacion:"Venus muy pocas veces se combina favorablemente con Neptuno, y hoy será una de esas pocas oportunidades generándote un día de mucho optimismo. Tu entusiasmo y excitación por cumplir tus sueños será muy alto y te sentirás totalmente listo para concretar las mejoras laborales que deseas."
    },
    {
     dia:11,
      imagen:"image.png",
      informacion:"En el horóscopo de hoy, viernes 11 de noviembre, el Sol se cruza en el camino de Saturno, astro relacionado con los impedimentos y demoras, dándote la sensación de estar muy alejado de tus metas; por eso, te recomiendo mantener la calma y no enojarte. Es un día para reflexionar sobre los cambios a realizar."
    },
    {
      dia:12,
      imagen:"image.png",
       informacion:"Podrías recibir un mensaje o una llamada molesta, pero no te preocupes porque sabrás manejar la situación para que nadie indeseable se entrometa en tu vida. En las conversaciones que entables no trates de imponer tu punto de vista y piensa dos veces antes de hablar."
     },
     {
      dia:13,
      imagen:"image.png",
       informacion:"No se permita que recuerdos desagradable del pasado se adueñen de sus pensamientos. Entienda que debe vivir el presente y romper con ciertas ataduras añejas."
     },
     {
      dia:14,
      imagen:"image.png",
       informacion:"Buscarás conectarte con tus seres queridos. Aprovecharás la jornada para visitas familiares postergadas desde hace tiempo."
     },
     {
      dia:15,
      imagen:"image.png",
       informacion:"La jornada se presenta positiva para las transacciones. Aprovecha para visitar el mercado de pulgas, grandes oportunidades."
     },
     {
      dia:16,
      imagen:"image.png",
       informacion:"Es posible que hoy te encuentres con alguna dificultad no prevista en la vida, Aries, pero todo saldrá bien si demuestras tu valor y tomas decisiones: escucha a la voz de tu sexto sentido; debes confiar en tus propios juicios. Canaliza tus deseos y controla los impulsos que tengas, así el entusiasmo te conducirá al triunfo."
     },
     {
      dia:17,
      imagen:"image.png",
       informacion:"Alguien presentará a tus superiores quejas sobre ti. Trata de que permitan el derecho a réplica, ya que tales quejas son falsas."
     },
     {
      dia:18,
      imagen:"image.png",
       informacion:"Ponte tus zapatos de viaje, Aries. El miedo a lo desconocido puede haberte llevado a posponer ciertos viajes. Afirmaste que estabas demasiado ocupado, pero nadie realmente creyó esto, ni siquiera tú. Si hoy se presenta una oportunidad de viajar, no la deje pasar. Es una tontería evitar la vida."
     },
     {
      dia:19,
      imagen:"image.png",
       informacion:"El día que viene puede traer una tormenta de individualismo e independencia. Por lo general, tolera las peculiaridades y las deficiencias menores de sus amigos o familiares, pero hoy presentan obstáculos reales para sus relaciones."
     },
     {
      dia:20,
      imagen:"image.png",
       informacion:"Existe la posibilidad de que te sientas engañado o aprovechado de alguna manera. ¿Siente que está pagando más de su parte justa? El día que viene le brinda la oportunidad de lograr el reconocimiento de sus esfuerzos y tal vez reparar algunas quejas."
     },
     {
      dia:21,
      imagen:"image.png",
       informacion:"Amigos o un grupo podrían aportar información nueva y emocionante a su manera, tal vez con oportunidades profesionales o educativas. Puede explorar la combinación de talentos artísticos con tecnología moderna. "
     },
     {
      dia:22,
      imagen:"image.png",
       informacion:"Los planetas te están moviendo a un nuevo ciclo, Aries. Pronto estarás en una nueva. Tendrá que hacer un balance de lo que ha aprendido en semanas anteriores. "
     },
     {
      dia:23,
      imagen:"image.png",
       informacion:"En tus intentos de ser siempre el amable y servicial, Aries, es posible que estés comprometiendo algunos de tus valores. Sepa que el equilibrio y la armonía son cosas maravillosas, pero no siempre valen el precio del sacrificio personal."
     },
     {
      dia:24,
      imagen:"image.png",
       informacion:"La asistencia a algún tipo de evento grupal puede parecer especialmente atractiva hoy en día. Sin embargo, Aries, las preocupaciones sobre tu familia pueden distraerte para que no te beneficies de la forma en que deberías. "
     },
     {
      dia:25,
      imagen:"image.png",
       informacion:"Emocionalmente, las cosas pueden ponerse bastante tensas para ti, ya que otros tienden a demostrar una actitud egoísta, Aries. El egoísmo no siempre debe considerarse negativo. A veces es saludable y necesario adoptar una postura más egocéntrica."
     },
     {
      dia:26,
      imagen:"image.png",
       informacion:"¿Has notado cómo los retrasos parecen ocurrir con más frecuencia, Aries? Hoy no será la excepción. Algo que has estado esperando se ha retrasado una vez más."
     },
     {
      dia:27,
      imagen:"image.png",
       informacion:" Es probable que haya algún tumulto en tu vida emocional en este momento, Aries. Puede sentir una necesidad apremiante de tener una conversación sincera con su pareja. La tensión puede desarrollarse si se vuelve cada vez más insistente sobre su necesidad de hacerlo. Se puede evitar la ira o la alienación si expresa sus sentimientos con claridad y compasión."
     },
     {
      dia:28,
      imagen:"image.png",
       informacion:"Tu actitud perezosa habitual es capaz de recibir una explosión de energía esta noche, Aries. Está en su naturaleza no querer mover un dedo, pero por alguna razón puede verse obligado a levantarse y moverse. Descubrirá que cuando se conecta con otros, está más motivado para que las cosas sucedan por sí mismo. Cuando obtienes la atención que sientes que mereces, tu devoción es fuerte."
     },
     {
      dia:29,
      imagen:"image.png",
       informacion:"Por el amor de Dios, decide hoy, Aries. Cuanto más se tambalee sobre qué camino tomar, más probable es que pierda el bote por completo. Tiene todos los hechos que necesita, así que no se demore más. Una vez que te decidas, sé fuerte y tira todo tu peso detrás de él. Su mente puede ser como una computadora que archiva información siempre y cuando permanezca alerta."
     },
     {
      dia:30,
      imagen:"image.png",
       informacion:"Puede encontrar algo de la conversación aburrida. A pesar de su falta de entusiasmo, podría ser una buena idea salir de todos modos. Quedarse solo en casa podría ser una noche sombría."
     }
  ]

   constructor(
    private _adapter: DateAdapter<any>,
    @Inject(MAT_DATE_LOCALE) private _locale: string,
  ) { }

  ngOnInit(): void {

    this._locale = 'fr';
    this._adapter.setLocale(this._locale);
  }

}
