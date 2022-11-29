import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-geminis',
  templateUrl: './geminis.component.html',
  styleUrls: ['./geminis.component.css']
})
export class GeminisComponent implements OnInit {

  selected: Date= new Date();


  fechaMaxima: Date= new Date();

  hoscopoAries=[
    {
     dia:1,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Xn2_5p8lP_m_E5STj2UlpwHaEK%26pid%3DApi&f=1&ipt=a038e9ddd9204877f19e3310acd68b92a85747b23de52f3cd02da9067cd4a508&ipo=images",
      informacion:" Hoy es muy adecuado para hacer nuevos amigos, Gemini. ¡Tu sentido de la aventura sin duda depende de ello! Serás tu habitual confianza, pero otros parecerán responder a tu carisma incluso más de lo habitual. "
    },
    {
     dia:2,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Xn2_5p8lP_m_E5STj2UlpwHaEK%26pid%3DApi&f=1&ipt=a038e9ddd9204877f19e3310acd68b92a85747b23de52f3cd02da9067cd4a508&ipo=images",
      informacion:"Si supieras la verdad de todas las cosas que están sucediendo fuera de tu mundo, te horrorizarías, Gemini. No deberías tomar las cosas al pie de la letra hoy. Es importante simplemente ir a ver las cosas por ti mismo. No confíes en la palabra de otro sobre lo que es verdad y lo que no. Pregunta lo que ves. Asegúrate de no dejar que otros te pongan la lana sobre los ojos."
    },
    {
     dia:3,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Xn2_5p8lP_m_E5STj2UlpwHaEK%26pid%3DApi&f=1&ipt=a038e9ddd9204877f19e3310acd68b92a85747b23de52f3cd02da9067cd4a508&ipo=images",
      informacion:"Hoy va a ser un gran día para ti, Gemini. No eres de los que adoptan reglas, restricciones o restricciones de ningún tipo, prefiriendo residir en un mundo de fantasía donde no se aplican limitaciones. ¿Has considerado que es posible que te unas al resto de nosotros aquí en la Tierra y aún conserves tu libertad e ideales? "
    },
    {
     dia:4,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Xn2_5p8lP_m_E5STj2UlpwHaEK%26pid%3DApi&f=1&ipt=a038e9ddd9204877f19e3310acd68b92a85747b23de52f3cd02da9067cd4a508&ipo=images",
      informacion:"No es porque tus nuevos proyectos exijan tanta precisión que te están causando problemas, Gemini. Tiendes a pensar que los detalles evitan tener una visión global, pero eso simplemente no es cierto. No hay conflicto entre la visión a largo plazo y las necesidades a corto plazo. "
    },
    {
     dia:5,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Xn2_5p8lP_m_E5STj2UlpwHaEK%26pid%3DApi&f=1&ipt=a038e9ddd9204877f19e3310acd68b92a85747b23de52f3cd02da9067cd4a508&ipo=images",
      informacion:"Estás desperdiciando tu energía, Géminis, y lo sabes. Haces todo lo posible para seguir tu rutina diaria, pero nunca estás realmente presente. Escuchas a la gente pero lo que dicen no te interesa de ninguna manera fundamental. Sí, estás aburrido y tienes miedo de admitirlo ante ti mismo."
    },
    {
     dia:6,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Xn2_5p8lP_m_E5STj2UlpwHaEK%26pid%3DApi&f=1&ipt=a038e9ddd9204877f19e3310acd68b92a85747b23de52f3cd02da9067cd4a508&ipo=images",
      informacion:"Hoy podría ser bastante restrictivo, Gemini. A pesar de sus grandes aspiraciones, hoy estará marcado por la necesidad de ocuparse de los pequeños problemas que surgen en la vida cotidiana. En otras palabras, justo lo que amas. "
    },
    {
     dia:7,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Xn2_5p8lP_m_E5STj2UlpwHaEK%26pid%3DApi&f=1&ipt=a038e9ddd9204877f19e3310acd68b92a85747b23de52f3cd02da9067cd4a508&ipo=images",
      informacion:"Tu espíritu brilla, Géminis. Puede sentirse lleno de tremenda energía a medida que avanza su día. Tu sentido de la aventura es alto, y hay muy poco que te deprima. Un área con la que podría ser difícil lidiar en este momento es el amor y el romance. "
    },
    {
     dia:8,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Xn2_5p8lP_m_E5STj2UlpwHaEK%26pid%3DApi&f=1&ipt=a038e9ddd9204877f19e3310acd68b92a85747b23de52f3cd02da9067cd4a508&ipo=images",
      informacion:"Es posible que últimamente haya tenido dificultades para alcanzar sus objetivos. Desafortunadamente para ti, Géminis, hoy no será diferente. Puede comenzar a sentirse un poco insatisfecho con la forma en que va su vida en este momento. Te harás ciertas preguntas sobre tus objetivos. "
    },
    {
     dia:9,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Xn2_5p8lP_m_E5STj2UlpwHaEK%26pid%3DApi&f=1&ipt=a038e9ddd9204877f19e3310acd68b92a85747b23de52f3cd02da9067cd4a508&ipo=images",
      informacion:"Los obstáculos que encontraste para alcanzar tus preciados objetivos podrían de repente derretirse, despejando el camino para hacer realidad tus sueños, Gemini. Esto podría involucrar salud física, planes para futuros viajes y educación, y autoexpresión."
    },
    {
     dia:10,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Xn2_5p8lP_m_E5STj2UlpwHaEK%26pid%3DApi&f=1&ipt=a038e9ddd9204877f19e3310acd68b92a85747b23de52f3cd02da9067cd4a508&ipo=images",
      informacion:"Los mandados u otros viajes cortos en su vecindario podrían resultar en una reunión casual con alguien que podría ser de gran beneficio para usted en el futuro, Gemini. "
    },
    {
     dia:11,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Xn2_5p8lP_m_E5STj2UlpwHaEK%26pid%3DApi&f=1&ipt=a038e9ddd9204877f19e3310acd68b92a85747b23de52f3cd02da9067cd4a508&ipo=images",
      informacion:"Es bueno soñar, especialmente en días como hoy, Géminis. Expandir su mente y pensar en las posibilidades son formas positivas de aumentar su conocimiento. Date tiempo para pensar. ¿Por qué no recostarse boca arriba y mirar las nubes o las estrellas? "
    },
    {
      dia:12,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Xn2_5p8lP_m_E5STj2UlpwHaEK%26pid%3DApi&f=1&ipt=a038e9ddd9204877f19e3310acd68b92a85747b23de52f3cd02da9067cd4a508&ipo=images",
       informacion:"Considera planificar un interludio romántico, Gemini. Con la influencia de los aspectos planetarios de hoy, será fácil conectarse con esa persona especial. Haga la cena con su cónyuge o pareja o haga una cita con alguien nuevo que le haya llamado la atención, si es posible. "
     },
     {
      dia:13,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Xn2_5p8lP_m_E5STj2UlpwHaEK%26pid%3DApi&f=1&ipt=a038e9ddd9204877f19e3310acd68b92a85747b23de52f3cd02da9067cd4a508&ipo=images",
       informacion:" Has alcanzado una época climática del año con respecto al amor y el romance, Gemini. Este es el momento en que tu sueño finalmente se materializa, o te das cuenta de que todos tus esfuerzos son fracasos. Todo depende de cómo jugaste tus cartas en los últimos meses. "
     },
     {
      dia:14,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Xn2_5p8lP_m_E5STj2UlpwHaEK%26pid%3DApi&f=1&ipt=a038e9ddd9204877f19e3310acd68b92a85747b23de52f3cd02da9067cd4a508&ipo=images",
       informacion:" Su entorno está cambiando actualmente, Géminis. Quizás tu círculo de amigos ya haya sufrido un cambio importante. El hecho es que ya no tienes tantos prejuicios sobre las personas que conoces, y ya no buscas solo un cierto tipo de persona como amigo. Aceptas a quien viene."
     },
     {
      dia:15,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Xn2_5p8lP_m_E5STj2UlpwHaEK%26pid%3DApi&f=1&ipt=a038e9ddd9204877f19e3310acd68b92a85747b23de52f3cd02da9067cd4a508&ipo=images",
       informacion:"El día que viene no será fácil, Gemini. Un vistazo a tu vida amorosa revela que estarás haciendo un puente sobre ciertas inhibiciones. Anhelas la paz y la estabilidad, y por el momento todo está en suspenso. "
     },
     {
      dia:16,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Xn2_5p8lP_m_E5STj2UlpwHaEK%26pid%3DApi&f=1&ipt=a038e9ddd9204877f19e3310acd68b92a85747b23de52f3cd02da9067cd4a508&ipo=images",
       informacion:"Tienes un día prometedor por delante, Gemini. Finalmente, avanzará a pasos agigantados en lo que sea necesario hacer. Lo que sea que haya estado causando los retrasos probablemente se revelará hoy."
     },
     {
      dia:17,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Xn2_5p8lP_m_E5STj2UlpwHaEK%26pid%3DApi&f=1&ipt=a038e9ddd9204877f19e3310acd68b92a85747b23de52f3cd02da9067cd4a508&ipo=images",
       informacion:"Grandes cantidades de información podrían llegar a usted por correo electrónico o teléfono. Espere escuchar de grupos. Podrías hacer nuevos amigos, Gemini, posiblemente en tu vecindario, ya que podrían estar ocurriendo cambios en tu comunidad."
     },
     {
      dia:18,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Xn2_5p8lP_m_E5STj2UlpwHaEK%26pid%3DApi&f=1&ipt=a038e9ddd9204877f19e3310acd68b92a85747b23de52f3cd02da9067cd4a508&ipo=images",
       informacion:" La agitación social que ha estado en tu vida durante las últimas tres semanas está llegando a su fin, Gemini. La energía celestial lo ayudará a aprender algunas lecciones y prepararse para el próximo ciclo. "
     },
     {
      dia:19,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Xn2_5p8lP_m_E5STj2UlpwHaEK%26pid%3DApi&f=1&ipt=a038e9ddd9204877f19e3310acd68b92a85747b23de52f3cd02da9067cd4a508&ipo=images",
       informacion:" Es probable que tu actitud lúdica se oponga a alguien que se niega a ver las cosas a tu manera, Gemini. Aléjese de aquellos que no están comprometidos a ayudar a la situación. Podría ser que hay personas que a propósito intentan sabotear sus planes."
     },
     {
      dia:20,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Xn2_5p8lP_m_E5STj2UlpwHaEK%26pid%3DApi&f=1&ipt=a038e9ddd9204877f19e3310acd68b92a85747b23de52f3cd02da9067cd4a508&ipo=images",
       informacion:"Puede que te distraigas con los sueños de un viaje que planeas hacer, Gemini. Un amigo podría llamar por teléfono y querer discutirlo, lo que no ayuda. Las visiones de lugares lejanos y pasatiempos emocionantes pueden bailar en tu cabeza, y las tareas rutinarias parecen increíblemente tediosas e indignas de atención."
     },
     {
      dia:21,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Xn2_5p8lP_m_E5STj2UlpwHaEK%26pid%3DApi&f=1&ipt=a038e9ddd9204877f19e3310acd68b92a85747b23de52f3cd02da9067cd4a508&ipo=images",
       informacion:"Acércate al touchdown hoy, Gemini, y no te detengas hasta que tengas éxito. No dejes que las inseguridades de otras personas se conviertan en tuyas. Ten confianza en ti mismo y en la forma en que te comportas con los demás."
     },
     {
      dia:22,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Xn2_5p8lP_m_E5STj2UlpwHaEK%26pid%3DApi&f=1&ipt=a038e9ddd9204877f19e3310acd68b92a85747b23de52f3cd02da9067cd4a508&ipo=images",
       informacion:"Dedica el día a tus hijos o pareja, Gemini. Puede protestar porque es demasiado difícil encontrar el tiempo para prestarles la atención que merecen. No tienes tiempo para ti, mucho menos para nadie más."
     },
     {
      dia:23,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Xn2_5p8lP_m_E5STj2UlpwHaEK%26pid%3DApi&f=1&ipt=a038e9ddd9204877f19e3310acd68b92a85747b23de52f3cd02da9067cd4a508&ipo=images",
       informacion:"Toda insatisfacción será abolida hoy cuando confronte y resuelva sistemáticamente todos los pequeños problemas que le han estado molestando. Su umbral de tolerancia es bajo a inexistente. "
     },
     {
      dia:24,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Xn2_5p8lP_m_E5STj2UlpwHaEK%26pid%3DApi&f=1&ipt=a038e9ddd9204877f19e3310acd68b92a85747b23de52f3cd02da9067cd4a508&ipo=images",
       informacion:"La comunicación con los demás podría ser extremadamente gratificante, Géminis, especialmente más adelante en el día. Proyecte más energía hacia afuera y únase a otros en proyectos que de otro modo podría tratar de abordar por su cuenta. "
     },
     {
      dia:25,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Xn2_5p8lP_m_E5STj2UlpwHaEK%26pid%3DApi&f=1&ipt=a038e9ddd9204877f19e3310acd68b92a85747b23de52f3cd02da9067cd4a508&ipo=images",
       informacion:"Tu corazón está en el lugar correcto hoy, Gemini, así que siéntete libre de compartir tu buen humor con los demás. Mantenga las cosas simples y directas. Trate de no complicar los problemas con problemas innecesarios. Agiliza tus pensamientos y acciones."
     },
     {
      dia:26,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Xn2_5p8lP_m_E5STj2UlpwHaEK%26pid%3DApi&f=1&ipt=a038e9ddd9204877f19e3310acd68b92a85747b23de52f3cd02da9067cd4a508&ipo=images",
       informacion:"Te aguarda una jornada complicada en la que caerás en acaloradas discusiones con amigos cercanos. Modera tus palabras."
     },
     {
      dia:27,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Xn2_5p8lP_m_E5STj2UlpwHaEK%26pid%3DApi&f=1&ipt=a038e9ddd9204877f19e3310acd68b92a85747b23de52f3cd02da9067cd4a508&ipo=images",
       informacion:"Todos te reconocen por tu verborragia y elocuencia, pero hoy alguien te retrucará un comentario que te dejará mudo por un rato."
     },
     {
      dia:28,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Xn2_5p8lP_m_E5STj2UlpwHaEK%26pid%3DApi&f=1&ipt=a038e9ddd9204877f19e3310acd68b92a85747b23de52f3cd02da9067cd4a508&ipo=images",
       informacion:"Vive cada día como si fuese el último. Empieza hoy a implementar esta filosofía, verás que te llenará el alma y levantará tu ánimo"
     },
     {
      dia:29,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Xn2_5p8lP_m_E5STj2UlpwHaEK%26pid%3DApi&f=1&ipt=a038e9ddd9204877f19e3310acd68b92a85747b23de52f3cd02da9067cd4a508&ipo=images",
       informacion:"Alguna gente se sorprenderá por tu deseo de arriesgarte incluso en una situación imposible. Pero si no te atreves, nunca ganarás."
     },
     {
      dia:30,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Xn2_5p8lP_m_E5STj2UlpwHaEK%26pid%3DApi&f=1&ipt=a038e9ddd9204877f19e3310acd68b92a85747b23de52f3cd02da9067cd4a508&ipo=images",
       informacion:"Estarás sentimentalmente regular. Pero en contrapartida al infortunio en el amor serás más afortunado en el resto de tu vida."
     }
  ]

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
