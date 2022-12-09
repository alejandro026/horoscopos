import { Component, Inject, OnInit } from '@angular/core';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';

@Component({
  selector: 'app-capricornio',
  templateUrl: './capricornio.component.html',
  styleUrls: ['./capricornio.component.css']
})
export class CapricornioComponent implements OnInit {

  selected: Date= new Date();


  fechaMaxima: Date= new Date();

  hoscopoAries=[
    {
     dia:1,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.YTVmVO1ZVWI7FcSwzSwq5wHaD4%26pid%3DApi&f=1&ipt=ae4499a2b564161bd70c38d6216046f3c7eb754c2c05822c1ef3d3c6a9bff3b9&ipo=images",
      informacion:"Cuando se trata de romance, tu cuerpo puede convertirse en gelatina hoy. Puedes ser tan emocional que no puedes funcionar, Capricornio. Eso es amor. Y aunque puede ser celestial, también puede ser debilitante. "
    },
    {
     dia:2,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.YTVmVO1ZVWI7FcSwzSwq5wHaD4%26pid%3DApi&f=1&ipt=ae4499a2b564161bd70c38d6216046f3c7eb754c2c05822c1ef3d3c6a9bff3b9&ipo=images",
      informacion:"Demasiado correr podría hacerte sentir exhausto y mal tiempo hoy, Capricornio. Es posible que haya estado haciendo demasiado ejercicio. Por lo tanto, este es un buen día para evitar hacer ejercicio y descansar un poco. "
    },
    {
     dia:3,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.YTVmVO1ZVWI7FcSwzSwq5wHaD4%26pid%3DApi&f=1&ipt=ae4499a2b564161bd70c38d6216046f3c7eb754c2c05822c1ef3d3c6a9bff3b9&ipo=images",
      informacion:"Si sientes que has estado mirando el pasado últimamente, Capricornio, es para liberarte de él. Puede tener ganas de volver a visitar su infancia o reavivar ciertas relaciones con viejos amigos. Pero los planetas te están haciendo demasiado romántico, y la realidad de las cosas te decepcionará. "
    },
    {
     dia:4,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.YTVmVO1ZVWI7FcSwzSwq5wHaD4%26pid%3DApi&f=1&ipt=ae4499a2b564161bd70c38d6216046f3c7eb754c2c05822c1ef3d3c6a9bff3b9&ipo=images",
      informacion:"Es posible que haya pasado las últimas semanas explorando nuevos horizontes, hablando con nuevas personas, saliendo con más frecuencia por la noche, cuando sea posible, o incluso haciendo viajes cortos fuera de casa. Pero este es un momento para establecerse. "
    },
    {
     dia:5,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.YTVmVO1ZVWI7FcSwzSwq5wHaD4%26pid%3DApi&f=1&ipt=ae4499a2b564161bd70c38d6216046f3c7eb754c2c05822c1ef3d3c6a9bff3b9&ipo=images",
      informacion:"Podrías desarrollar dolor de estómago si intentas resolver todos los problemas confusos del día, Capricornio. Es probable que haya demasiados asuntos para que los manejes solos, así que ni siquiera lo intentes. "
    },
    {
     dia:6,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.YTVmVO1ZVWI7FcSwzSwq5wHaD4%26pid%3DApi&f=1&ipt=ae4499a2b564161bd70c38d6216046f3c7eb754c2c05822c1ef3d3c6a9bff3b9&ipo=images",
      informacion:"Podrías desarrollar dolor de estómago si intentas resolver todos los problemas confusos del día, Capricornio. Es probable que haya demasiados asuntos para que los manejes solos, así que ni siquiera lo intentes. "
    },
    {
     dia:7,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.YTVmVO1ZVWI7FcSwzSwq5wHaD4%26pid%3DApi&f=1&ipt=ae4499a2b564161bd70c38d6216046f3c7eb754c2c05822c1ef3d3c6a9bff3b9&ipo=images",
      informacion:"Este no es un día para personas sensibles como tú, Capricornio. De hecho, el que grita más fuerte y golpea la mesa con más fuerza probablemente saldrá ganador hoy. El aire de violencia también tendrá un efecto en ti."
    },
    {
     dia:8,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.YTVmVO1ZVWI7FcSwzSwq5wHaD4%26pid%3DApi&f=1&ipt=ae4499a2b564161bd70c38d6216046f3c7eb754c2c05822c1ef3d3c6a9bff3b9&ipo=images",
      informacion:" Como una persona que encarna el afecto y la ternura, Capricornio, puede sentirse especialmente resentido por el estado de ánimo de hoy. Será difícil encantar una sonrisa de cualquiera o lograr una apariencia de armonía."
    },
    {
     dia:9,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.YTVmVO1ZVWI7FcSwzSwq5wHaD4%26pid%3DApi&f=1&ipt=ae4499a2b564161bd70c38d6216046f3c7eb754c2c05822c1ef3d3c6a9bff3b9&ipo=images",
      informacion:"Deja de estar triste, si algo es tuyo no permitirás que sea de nadie más. Hoy el dia te sonrie"
    },
    {
     dia:10,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.YTVmVO1ZVWI7FcSwzSwq5wHaD4%26pid%3DApi&f=1&ipt=ae4499a2b564161bd70c38d6216046f3c7eb754c2c05822c1ef3d3c6a9bff3b9&ipo=images",
      informacion:"Capricornio, eres alguien que necesita tener mucho tiempo para ti. A menudo sueñas con acurrucarte en la cama con un buen libro o dar un paseo en bicicleta. Este es solo tu ritmo natural. No intentes ignorarlo, porque hacerlo solo podría significar problemas para ti. Ríndete de vez en cuando. "
    },
    {
     dia:11,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.YTVmVO1ZVWI7FcSwzSwq5wHaD4%26pid%3DApi&f=1&ipt=ae4499a2b564161bd70c38d6216046f3c7eb754c2c05822c1ef3d3c6a9bff3b9&ipo=images",
      informacion:"Sal de tu caparazón y siéntete orgulloso de tu lado sensible, Capricornio. Aunque puede sentirse vulnerable cuando se trata de amor y romance, esto no significa que tenga que ocultarlo. Puede pensar que todos los demás lo tienen juntos en este departamento, pero no se deje engañar. ¡Son tan inseguros como tú! Adelante, deja que brille este lado de tu personalidad. Admitir su vulnerabilidad es maravillosamente atractivo."
    },
    {
      dia:12,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.YTVmVO1ZVWI7FcSwzSwq5wHaD4%26pid%3DApi&f=1&ipt=ae4499a2b564161bd70c38d6216046f3c7eb754c2c05822c1ef3d3c6a9bff3b9&ipo=images",
       informacion:" ¿Alguna vez has pensado en ti mismo como un CEO o cualquier otro tipo de líder, Capricornio? Hoy es un gran día para comenzar un proyecto que involucra a otras personas, ¡con usted a cargo! El lado fuerte y asertivo de su personalidad saldrá en su toma de decisiones y carisma. "
     },
     {
      dia:13,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.YTVmVO1ZVWI7FcSwzSwq5wHaD4%26pid%3DApi&f=1&ipt=ae4499a2b564161bd70c38d6216046f3c7eb754c2c05822c1ef3d3c6a9bff3b9&ipo=images",
       informacion:"Tu carrera y tus objetivos financieros deben estar a tu alcance, Capricornio. Tanto su energía física como su potencia interna están funcionando en su apogeo, lo que lo convierte en un día ideal para hacer planes claros. Además, si ha estado trabajando para mejorar su salud, puede ver algunos resultados definitivos."
     },
     {
      dia:14,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.YTVmVO1ZVWI7FcSwzSwq5wHaD4%26pid%3DApi&f=1&ipt=ae4499a2b564161bd70c38d6216046f3c7eb754c2c05822c1ef3d3c6a9bff3b9&ipo=images",
       informacion:"La inspiración en varios contextos podría llenar tu mente hoy, Capricornio. Las oportunidades para avanzar en sus intereses artísticos o espirituales podrían surgir en su camino, tal vez a través de consejos dados por un nuevo conocido. También podría estar en el lugar correcto en el momento adecuado para tener un golpe de suerte. Es probable que te sientas especialmente romántico y sexy."
     },
     {
      dia:15,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.YTVmVO1ZVWI7FcSwzSwq5wHaD4%26pid%3DApi&f=1&ipt=ae4499a2b564161bd70c38d6216046f3c7eb754c2c05822c1ef3d3c6a9bff3b9&ipo=images",
       informacion:"La energía de hoy puede resaltar tu popularidad, Capricornio. Los tránsitos aumentan su entusiasmo y energía para hacer las cosas. La gente se sentirá atraída por ti. Incluso puede encontrar que otros lo admiran. Este tipo de popularidad puede hacerte sentir especial y afortunado."
     },
     {
      dia:16,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.YTVmVO1ZVWI7FcSwzSwq5wHaD4%26pid%3DApi&f=1&ipt=ae4499a2b564161bd70c38d6216046f3c7eb754c2c05822c1ef3d3c6a9bff3b9&ipo=images",
       informacion:"Tómalo lento y fácil hoy, Capricornio. Con la energía de los aspectos del día, no es probable que apresurarte demasiado. De hecho, es más apto para cometer errores o dejar un montón de cosas sin terminar. "
     },
     {
      dia:17,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.YTVmVO1ZVWI7FcSwzSwq5wHaD4%26pid%3DApi&f=1&ipt=ae4499a2b564161bd70c38d6216046f3c7eb754c2c05822c1ef3d3c6a9bff3b9&ipo=images",
       informacion:"Puede que le resulte difícil relacionarse con personas en situaciones sociales, Capricornio. Quizás estés frustrado al escuchar las mismas conversaciones superficiales una y otra vez. Si bien debe mezclarse ( incluso virtualmente ) con diferentes personas, todo lo que puede pensar es en lo agradable que sería si pudiera estar solo frente al televisor. "
     },
     {
      dia:18,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.YTVmVO1ZVWI7FcSwzSwq5wHaD4%26pid%3DApi&f=1&ipt=ae4499a2b564161bd70c38d6216046f3c7eb754c2c05822c1ef3d3c6a9bff3b9&ipo=images",
       informacion:" Este es el tipo de día que disfrutas. El clima es positivo y la energía fluye. Es como si tuvieras una varita mágica. ¡Lo das una ola y, presto, las tareas y tareas del día están hechas! Para esta noche, apenas has aprovechado tus niveles de energía. "
     },
     {
      dia:19,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.YTVmVO1ZVWI7FcSwzSwq5wHaD4%26pid%3DApi&f=1&ipt=ae4499a2b564161bd70c38d6216046f3c7eb754c2c05822c1ef3d3c6a9bff3b9&ipo=images",
       informacion:"Deja de preguntar si eres talentoso, Capricornio. Definitivamente este no es el momento para tales preguntas. Ahora es el momento de trabajar en algo concreto. Necesitará la ayuda de otros para tener éxito, así que trabaje para convencerlos de que se alíen con usted. "
     },
     {
      dia:20,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.YTVmVO1ZVWI7FcSwzSwq5wHaD4%26pid%3DApi&f=1&ipt=ae4499a2b564161bd70c38d6216046f3c7eb754c2c05822c1ef3d3c6a9bff3b9&ipo=images",
       informacion:" Hoy, Capricornio, ¡estás de humor para el compromiso! Tómese el tiempo para conectarse con el mundo social mientras busca personas de ideas afines que puedan compartir su reino íntimo e individualista. En última instancia, todos tenemos que descubrir cómo abrirnos camino en la sociedad. "
     },
     {
      dia:21,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.YTVmVO1ZVWI7FcSwzSwq5wHaD4%26pid%3DApi&f=1&ipt=ae4499a2b564161bd70c38d6216046f3c7eb754c2c05822c1ef3d3c6a9bff3b9&ipo=images",
       informacion:" La posibilidad de avanzar en su carrera aumentando sus habilidades tecnológicas puede presentarse hoy. Esto podría abrirle puertas en muchas direcciones, allanando el camino para aumentar los ingresos. Varios contactos nuevos podrían entrar en su vida, aportando amistad y oportunidades"
     },
     {
      dia:22,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.YTVmVO1ZVWI7FcSwzSwq5wHaD4%26pid%3DApi&f=1&ipt=ae4499a2b564161bd70c38d6216046f3c7eb754c2c05822c1ef3d3c6a9bff3b9&ipo=images",
       informacion:"¿Te sientes disperso, Capricornio? Es posible que hoy te estés preguntando sobre un millón de cosas diferentes. ¿Eres lo suficientemente fuerte como para asumir tus deberes familiares? ¿Eres atractivo? ¿Eres importante? Por supuesto, todas estas preguntas simplemente lo distraen de su ansiedad. No te preocupes. Las próximas semanas serán menos estresantes."
     },
     {
      dia:23,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.YTVmVO1ZVWI7FcSwzSwq5wHaD4%26pid%3DApi&f=1&ipt=ae4499a2b564161bd70c38d6216046f3c7eb754c2c05822c1ef3d3c6a9bff3b9&ipo=images",
       informacion:" Podría ser que amigos cercanos o familiares estén en un fuerte desacuerdo con respecto a un determinado tema, Capricornio. Intenta no sentirte demasiado angustiado por las divisiones entre las personas que amas. Algunos pueden querer que tome partido y se exprese plenamente sobre la situación. Puedes sentir que estás condenado si lo haces y condenado si no lo haces. Haz tu mejor esfuerzo para comprometerte."
     },
     {
      dia:24,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.YTVmVO1ZVWI7FcSwzSwq5wHaD4%26pid%3DApi&f=1&ipt=ae4499a2b564161bd70c38d6216046f3c7eb754c2c05822c1ef3d3c6a9bff3b9&ipo=images",
       informacion:" Las funciones de grupos pequeños y los eventos sociales podrían no ser tan satisfactorios como de costumbre hoy, Capricornio. Puede que no estés de humor. Puede sentirse presionado para mezclarse cuando prefiere sentarse en el sofá. Cualquier conversación en la que te encuentres parecerá trivial y aburrida. Este es un buen día para sentarse y escuchar. Puede aprender de las personas que lo rodean sin tener que decir una palabra."
     },
     {
      dia:25,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.YTVmVO1ZVWI7FcSwzSwq5wHaD4%26pid%3DApi&f=1&ipt=ae4499a2b564161bd70c38d6216046f3c7eb754c2c05822c1ef3d3c6a9bff3b9&ipo=images",
       informacion:"Las funciones de grupos pequeños y los eventos sociales podrían no ser tan satisfactorios como de costumbre hoy, Capricornio. Puede que no estés de humor. Puede sentirse presionado para mezclarse cuando prefiere sentarse en el sofá. Cualquier conversación en la que te encuentres parecerá trivial y aburrida. Este es un buen día para sentarse y escuchar."
     },
     {
      dia:26,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.YTVmVO1ZVWI7FcSwzSwq5wHaD4%26pid%3DApi&f=1&ipt=ae4499a2b564161bd70c38d6216046f3c7eb754c2c05822c1ef3d3c6a9bff3b9&ipo=images",
       informacion:"Guarda tu corazón hoy, Capricornio, porque es un objetivo principal de las palabras abrasivas volando. Su naturaleza sensible se siente sola y vulnerable en esta atmósfera dura, por lo que podría estar mejor simplemente quedándose en la cama. "
     },
     {
      dia:27,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.YTVmVO1ZVWI7FcSwzSwq5wHaD4%26pid%3DApi&f=1&ipt=ae4499a2b564161bd70c38d6216046f3c7eb754c2c05822c1ef3d3c6a9bff3b9&ipo=images",
       informacion:"Tus pasiones se han estado revolviendo como un animal enjaulado durante los últimos días, Capricornio. Ahora es el momento de dejarlos salir. Algo de lo que expresas puede provocar sorpresa o desaprobación, pero esa no es razón para permanecer en silencio. "
     },
     {
      dia:28,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.YTVmVO1ZVWI7FcSwzSwq5wHaD4%26pid%3DApi&f=1&ipt=ae4499a2b564161bd70c38d6216046f3c7eb754c2c05822c1ef3d3c6a9bff3b9&ipo=images",
       informacion:"Puede haber un poco de agravamiento en una parte de tu vida que te insta a levantarte y hacer algo, Capricornio. Podría ser que te estás volviendo demasiado emocional sobre un tema determinado, y que debes considerar más de los hechos fríos y duros de lo que realmente está sucediendo."
     },
     {
      dia:29,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.YTVmVO1ZVWI7FcSwzSwq5wHaD4%26pid%3DApi&f=1&ipt=ae4499a2b564161bd70c38d6216046f3c7eb754c2c05822c1ef3d3c6a9bff3b9&ipo=images",
       informacion:"Simpatiza con los que necesitan desahogarse hoy, Capricornio. No se sorprenda si las personas se alinean afuera de su puerta para tener la oportunidad de doblar la oreja durante una o dos horas. Tu mente es aguda. Podrá ver el núcleo de cualquier problema que se le presente. "
     },
     {
      dia:30,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.YTVmVO1ZVWI7FcSwzSwq5wHaD4%26pid%3DApi&f=1&ipt=ae4499a2b564161bd70c38d6216046f3c7eb754c2c05822c1ef3d3c6a9bff3b9&ipo=images",
       informacion:"Puedes sentir que tu círculo social gira a tu alrededor este mes, querido Capricornio, como el sol, Mercurio y Venus viajan a través de Escorpio y el sector de su carta que gobierna la comunidad. Este clima cósmico te inspira a organizar reuniones con tus seres queridos más cercanos, aunque la tentación de jugar al matchmaker entre tus amigos también podría entrar en juego"
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
