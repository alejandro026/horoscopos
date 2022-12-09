import { Component, Inject, OnInit } from '@angular/core';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';

@Component({
  selector: 'app-virgo',
  templateUrl: './virgo.component.html',
  styleUrls: ['./virgo.component.css']
})
export class VirgoComponent implements OnInit {

  selected: Date= new Date();


  fechaMaxima: Date= new Date();

  hoscopoAries=[
    {
     dia:1,
      imagen:"https://lh3.googleusercontent.com/unwexNl3GAe3E6faflCEc7ss6zg1U1Xq6jVl_XVFdUgMrGSUYO9cY8k0GiJRJkHtFPSSP3hggW_qE4YgtZxVBT9oAFCL-HKPYbSJAJYXJlne-T2FwV3uNDqFla_PESdGzgJDngZbTuffhqB6McBCSw",
      informacion:"Si estás en el mercado del romance, Virgo, ya sea con una nueva pareja o reavivando el fuego con una pareja actual, ten cuidado. Los pequeños problemas podrían desgarrar el control hoy. Es probable que ocurran condiciones extremas, gracias a sus emociones sensibles combinadas con una oleada de energía del exterior. Trate de no enojarse demasiado cuando la tensión aumenta debido a algo sin importancia."
    },
    {
     dia:2,
      imagen:"https://lh3.googleusercontent.com/unwexNl3GAe3E6faflCEc7ss6zg1U1Xq6jVl_XVFdUgMrGSUYO9cY8k0GiJRJkHtFPSSP3hggW_qE4YgtZxVBT9oAFCL-HKPYbSJAJYXJlne-T2FwV3uNDqFla_PESdGzgJDngZbTuffhqB6McBCSw",
      informacion:" Tu energía física es muy alta hoy, Virgo. Es probable que desee salir y hacer ejercicio, tal vez trotar por el parque o asistir a una clase virtual de aeróbicos. ¡Ten cuidado! Es posible que no esté tan en forma como cree y esforzarse demasiado podría causar lesiones menores. Alguien que conoces profesionalmente podría no estar de buen humor. Podrías dejarte llevar por su ira. Trate de mantenerse al margen."
    },
    {
     dia:3,
      imagen:"https://lh3.googleusercontent.com/unwexNl3GAe3E6faflCEc7ss6zg1U1Xq6jVl_XVFdUgMrGSUYO9cY8k0GiJRJkHtFPSSP3hggW_qE4YgtZxVBT9oAFCL-HKPYbSJAJYXJlne-T2FwV3uNDqFla_PESdGzgJDngZbTuffhqB6McBCSw",
      informacion:" Puedes interpretar los aspectos de hoy de varias maneras, Virgo. Las configuraciones planetarias corresponden a una búsqueda del espacio, ya sea físico o intelectual. Puede que te estés haciendo preguntas filosóficas, o tal vez estés pensando en hacer un largo viaje en el futuro. ¿Qué decidirás hacer? ¿Leerás a Kant o planearás el viaje de tus sueños?"
    },
    {
     dia:4,
      imagen:"https://lh3.googleusercontent.com/unwexNl3GAe3E6faflCEc7ss6zg1U1Xq6jVl_XVFdUgMrGSUYO9cY8k0GiJRJkHtFPSSP3hggW_qE4YgtZxVBT9oAFCL-HKPYbSJAJYXJlne-T2FwV3uNDqFla_PESdGzgJDngZbTuffhqB6McBCSw",
      informacion:"Si tienes hijos, sus dificultades pueden recordarte a las tuyas, Virgo. O puede ser simplemente que su educación le traiga recuerdos suyos. ¿Te estás aferrando a un problema de un período de tu vida que todavía te molesta? Este sería un buen momento para hacerse la pregunta. ¡Pregúntale, luego respóndelo y ponlo a descansar de una vez por todas!"
    },
    {
     dia:5,
      imagen:"https://lh3.googleusercontent.com/unwexNl3GAe3E6faflCEc7ss6zg1U1Xq6jVl_XVFdUgMrGSUYO9cY8k0GiJRJkHtFPSSP3hggW_qE4YgtZxVBT9oAFCL-HKPYbSJAJYXJlne-T2FwV3uNDqFla_PESdGzgJDngZbTuffhqB6McBCSw",
      informacion:"Este sería el momento de decir sí a tu destino, Virgo. Estás un poco frustrado porque las cosas no han avanzado de la manera que te gustaría. Pero ahora que las oportunidades se te presentan, descubres que estás retrasando las cosas. Solo tienes miedo, eso es todo. Pero en lugar de dejar que tu miedo te alcance, convierte su energía en tu ventaja."
    },
    {
     dia:6,
      imagen:"https://lh3.googleusercontent.com/unwexNl3GAe3E6faflCEc7ss6zg1U1Xq6jVl_XVFdUgMrGSUYO9cY8k0GiJRJkHtFPSSP3hggW_qE4YgtZxVBT9oAFCL-HKPYbSJAJYXJlne-T2FwV3uNDqFla_PESdGzgJDngZbTuffhqB6McBCSw",
      informacion:"Tienes un buen corazón, Virgo, y hoy se expande para otorgar amor a toda la humanidad. No puedes evitar sentirte conectado de una manera profunda y espiritual con todos los que han venido antes que tú y todos los que siguen. Incluso si no tiene mucho dinero, considere establecer un plan anual de donaciones que beneficie a causas que valgan la pena. Esto sería una expresión directa de sus sentimientos y podría ayudar a muchas personas."
    },
    {
     dia:7,
      imagen:"https://lh3.googleusercontent.com/unwexNl3GAe3E6faflCEc7ss6zg1U1Xq6jVl_XVFdUgMrGSUYO9cY8k0GiJRJkHtFPSSP3hggW_qE4YgtZxVBT9oAFCL-HKPYbSJAJYXJlne-T2FwV3uNDqFla_PESdGzgJDngZbTuffhqB6McBCSw",
      informacion:" Puedes interpretar los aspectos de hoy de varias maneras, Virgo. Las configuraciones planetarias corresponden a una búsqueda del espacio, ya sea físico o intelectual. Puede que te estés haciendo preguntas filosóficas, o tal vez estés pensando en hacer un largo viaje en el futuro. ¿Qué decidirás hacer? ¿Leerás a Kant o planearás el viaje de tus sueños?"
    },
    {
     dia:8,
      imagen:"https://lh3.googleusercontent.com/unwexNl3GAe3E6faflCEc7ss6zg1U1Xq6jVl_XVFdUgMrGSUYO9cY8k0GiJRJkHtFPSSP3hggW_qE4YgtZxVBT9oAFCL-HKPYbSJAJYXJlne-T2FwV3uNDqFla_PESdGzgJDngZbTuffhqB6McBCSw",
      informacion:"Si estás en el mercado del romance, Virgo, ya sea con una nueva pareja o reavivando el fuego con una pareja actual, ten cuidado. Los pequeños problemas podrían desgarrar el control hoy. Es probable que ocurran condiciones extremas, gracias a sus emociones sensibles combinadas con una oleada de energía del exterior. Trate de no enojarse demasiado cuando la tensión aumenta debido a algo sin importancia."
    },
    {
     dia:9,
      imagen:"https://lh3.googleusercontent.com/unwexNl3GAe3E6faflCEc7ss6zg1U1Xq6jVl_XVFdUgMrGSUYO9cY8k0GiJRJkHtFPSSP3hggW_qE4YgtZxVBT9oAFCL-HKPYbSJAJYXJlne-T2FwV3uNDqFla_PESdGzgJDngZbTuffhqB6McBCSw",
      informacion:" Puede que estés agotado, Virgo, pero tendrás que seguir adelante de todos modos. Estás entrando en un largo período de trabajo y perseverancia. Este definitivamente no es el momento de llegar tarde o resistirse. Si todavía estás en pijama al mediodía, ¡deberías estar avergonzado! Haz lo que puedas para despertarte de tu aturdimiento reciente. ¡Es hora de levantarse y ponerse en movimiento!"
    },
    {
     dia:10,
      imagen:"https://lh3.googleusercontent.com/unwexNl3GAe3E6faflCEc7ss6zg1U1Xq6jVl_XVFdUgMrGSUYO9cY8k0GiJRJkHtFPSSP3hggW_qE4YgtZxVBT9oAFCL-HKPYbSJAJYXJlne-T2FwV3uNDqFla_PESdGzgJDngZbTuffhqB6McBCSw",
      informacion:"Aquí hay un día que será bastante tranquilo para ti, Virgo. La paz ha reemplazado toda tu búsqueda del alma. Te sientes en contacto con la rutina diaria de la vida, incluyendo aspectos que no siempre consideras como el clima, las expresiones de las personas o las pequeñas coincidencias. Parece que estás flotando en una nube. ¡Vas a tener mucha confianza hoy!"
    },
    {
     dia:11,
      imagen:"https://lh3.googleusercontent.com/unwexNl3GAe3E6faflCEc7ss6zg1U1Xq6jVl_XVFdUgMrGSUYO9cY8k0GiJRJkHtFPSSP3hggW_qE4YgtZxVBT9oAFCL-HKPYbSJAJYXJlne-T2FwV3uNDqFla_PESdGzgJDngZbTuffhqB6McBCSw",
      informacion:" Hacer el amor sensual y apasionado definitivamente está en la agenda de actividades para esta noche, Virgo. La diversión, la emoción, el romance y el amor son temas clave que probablemente tengan prioridad si tienes algo que decir al respecto, y lo haces. No dejes que alguien más dicte tu camino por ti. Sabes lo que quieres, así que no digas que no te importa cuando lo haces. El amor viene en tu camino. Aprende a agarrarlo."
    },
    {
      dia:12,
      imagen:"https://lh3.googleusercontent.com/unwexNl3GAe3E6faflCEc7ss6zg1U1Xq6jVl_XVFdUgMrGSUYO9cY8k0GiJRJkHtFPSSP3hggW_qE4YgtZxVBT9oAFCL-HKPYbSJAJYXJlne-T2FwV3uNDqFla_PESdGzgJDngZbTuffhqB6McBCSw",
      informacion:"¿Qué buscas en la vida, Virgo? En el fondo, ¿el tipo de trabajo que haces satisface tus deseos más íntimos? Los pequeños problemas que encuentres en tu vida profesional durante la próxima semana podrían ser la gota que colme el vaso. Echa un vistazo a tu alrededor para ver si el trabajo que haces y las personas en tu vida tienen en cuenta tu naturaleza profundamente espiritual."
    },
     {
      dia:13,
      imagen:"https://lh3.googleusercontent.com/unwexNl3GAe3E6faflCEc7ss6zg1U1Xq6jVl_XVFdUgMrGSUYO9cY8k0GiJRJkHtFPSSP3hggW_qE4YgtZxVBT9oAFCL-HKPYbSJAJYXJlne-T2FwV3uNDqFla_PESdGzgJDngZbTuffhqB6McBCSw",
      informacion:"Los eventos sobre los que pareces no tener control parecen estar uniéndose para hacer que las cosas sucedan para ti, Virgo. Puede que esto te dé un poco de miedo, pero no dejes que te afecte. Sigue la corriente. Has trabajado duro para lo que está sucediendo hoy, y mereces disfrutar de los resultados. La euforia que sientes podría manifestarse como abundante energía física. Esto podría ser demasiado bueno. No te excedas."
    },
     {
      dia:14,
      imagen:"https://lh3.googleusercontent.com/unwexNl3GAe3E6faflCEc7ss6zg1U1Xq6jVl_XVFdUgMrGSUYO9cY8k0GiJRJkHtFPSSP3hggW_qE4YgtZxVBT9oAFCL-HKPYbSJAJYXJlne-T2FwV3uNDqFla_PESdGzgJDngZbTuffhqB6McBCSw",
       informacion:" Tu mente está llena de pensamientos maravillosos hoy, Virgo. Podrías considerar pasar el día meditando, haciendo algún trabajo voluntario o convirtiendo tu inspiración en un proyecto artístico de algún tipo. Su intuición es especialmente alta, por lo que puede sintonizar más agudamente de lo habitual con los pensamientos y sentimientos de los demás. Tómese unos minutos durante el día para estar a solas con sus pensamientos. Probablemente se beneficiará de ello."
     },
     {
      dia:15,
      imagen:"https://lh3.googleusercontent.com/unwexNl3GAe3E6faflCEc7ss6zg1U1Xq6jVl_XVFdUgMrGSUYO9cY8k0GiJRJkHtFPSSP3hggW_qE4YgtZxVBT9oAFCL-HKPYbSJAJYXJlne-T2FwV3uNDqFla_PESdGzgJDngZbTuffhqB6McBCSw",
       informacion:" Tienes una imaginación increíble, Virgo. Hoy es un gran día para ponerlo en uso. Tómese el tiempo para participar en actividades creativas y pruebe la meditación, la planificación de historias, el juego de roles o la visualización. Tienes una herramienta poderosa para desbloquear miedos e inhibiciones internas, aumentando tu confianza y creatividad y resolviendo los desafíos de la vida. Si esta es una idea nueva para ti, considera aprender más sobre la meditación para conectarte con tu ser interior."
     },
     {
      dia:16,
      imagen:"https://lh3.googleusercontent.com/unwexNl3GAe3E6faflCEc7ss6zg1U1Xq6jVl_XVFdUgMrGSUYO9cY8k0GiJRJkHtFPSSP3hggW_qE4YgtZxVBT9oAFCL-HKPYbSJAJYXJlne-T2FwV3uNDqFla_PESdGzgJDngZbTuffhqB6McBCSw",
       informacion:"Ten cuidado de no caer presa de tu propio idealismo hoy, Virgo. Si bien esta es una de sus cualidades más admirables, ya que contribuye a su naturaleza romántica y creativa, demasiado de cualquier cosa puede ser perjudicial. Es importante ver las cosas como son, a pesar de lo mucho que desees que sean diferentes. El mundo real no siempre va de la mano con tu lugar ideal. Si algo se siente mal, probablemente lo sea. Confía en tus instintos."
     },
     {
      dia:17,
      imagen:"https://lh3.googleusercontent.com/unwexNl3GAe3E6faflCEc7ss6zg1U1Xq6jVl_XVFdUgMrGSUYO9cY8k0GiJRJkHtFPSSP3hggW_qE4YgtZxVBT9oAFCL-HKPYbSJAJYXJlne-T2FwV3uNDqFla_PESdGzgJDngZbTuffhqB6McBCSw",
       informacion:"Este es uno de esos días en que el camino se bifurca en varias direcciones y debes decidir qué camino tomar, Virgo. Esto generalmente no es difícil. Simplemente vas con la corriente. Pero ahora las cosas fluyen en múltiples direcciones y necesitas averiguar qué camino tomar. Quédate con la forma que parezca más natural. Recuerde que cualquier elección que haga será la correcta."
     },
     {
      dia:18,
      imagen:"https://lh3.googleusercontent.com/unwexNl3GAe3E6faflCEc7ss6zg1U1Xq6jVl_XVFdUgMrGSUYO9cY8k0GiJRJkHtFPSSP3hggW_qE4YgtZxVBT9oAFCL-HKPYbSJAJYXJlne-T2FwV3uNDqFla_PESdGzgJDngZbTuffhqB6McBCSw",
       informacion:" En los próximos días, es probable que obtengas acceso a dimensiones de percepción que nunca sospechaste, Virgo. Tal vez te darás cuenta de ciertos fenómenos energéticos, experiencias pico u otros estados de conciencia altamente sensibles. No te asustes. En su lugar, investiga lo que estos mundos tienen para ofrecer. Lo que aprendas te ayudará a sobrellevar tu sensibilidad."
     },
     {
      dia:19,
      imagen:"https://lh3.googleusercontent.com/unwexNl3GAe3E6faflCEc7ss6zg1U1Xq6jVl_XVFdUgMrGSUYO9cY8k0GiJRJkHtFPSSP3hggW_qE4YgtZxVBT9oAFCL-HKPYbSJAJYXJlne-T2FwV3uNDqFla_PESdGzgJDngZbTuffhqB6McBCSw",
       informacion:"En el fondo, ¿no tienes ganas de respirar un nuevo espíritu en tu vida amorosa? Por supuesto, algunas cosas son más fáciles de decir que de hacer. Actualmente, no tienes mucho tiempo para dedicarte a ti mismo, mucho menos a tu pareja. El afecto podría prosperar si se le da media oportunidad. El día sugiere que te comprometas a tomar algunas decisiones que te ayudarán a ti y a tu pareja a acercarte."
     },
     {
      dia:20,
      imagen:"https://lh3.googleusercontent.com/unwexNl3GAe3E6faflCEc7ss6zg1U1Xq6jVl_XVFdUgMrGSUYO9cY8k0GiJRJkHtFPSSP3hggW_qE4YgtZxVBT9oAFCL-HKPYbSJAJYXJlne-T2FwV3uNDqFla_PESdGzgJDngZbTuffhqB6McBCSw",
       informacion:" Estarás lleno de ideas para mejorar tu estilo de vida, Virgo, especialmente en lo que se refiere a tu familia. Es cierto que en los últimos meses has experimentado algunas dificultades. Ahora puedes respirar mejor. Ya sea para su carrera o para su hogar, es probable que las iniciativas de hoy traigan grandes recompensas. Aproveche la atmósfera para armar un plan realista para el futuro."
     },
     {
      dia:21,
      imagen:"https://lh3.googleusercontent.com/unwexNl3GAe3E6faflCEc7ss6zg1U1Xq6jVl_XVFdUgMrGSUYO9cY8k0GiJRJkHtFPSSP3hggW_qE4YgtZxVBT9oAFCL-HKPYbSJAJYXJlne-T2FwV3uNDqFla_PESdGzgJDngZbTuffhqB6McBCSw",
       informacion:"Hoy su mente podría estar en temas sociales y políticos. Si actualmente no está involucrado con grupos que se ocupan de estos problemas, podría considerar unirse a uno. Un aumento reciente en los ingresos podría haberle dado algo de tiempo extra, y puede estar entusiasmado con las posibilidades. El servicio a los demás es uno, Virgo. Considere algunos otros, tal vez desarrollando una habilidad creativa, antes de seguir adelante."
     },
     {
      dia:22,
      imagen:"https://lh3.googleusercontent.com/unwexNl3GAe3E6faflCEc7ss6zg1U1Xq6jVl_XVFdUgMrGSUYO9cY8k0GiJRJkHtFPSSP3hggW_qE4YgtZxVBT9oAFCL-HKPYbSJAJYXJlne-T2FwV3uNDqFla_PESdGzgJDngZbTuffhqB6McBCSw",
       informacion:"Después de los eventos de las últimas semanas, ¿todavía quieres seguir actuando como la misma persona? Esta es siempre una buena pregunta para hacer con una atmósfera celestial como la de hoy. Las personas generalmente sienten que tienen la oportunidad de salir de los viejos sistemas y relaciones. Pero la gente siempre duda en hacer esto por miedo al futuro. No vaciles. ¡Da los siguientes pasos!"
     },
     {
      dia:23,
      imagen:"https://lh3.googleusercontent.com/unwexNl3GAe3E6faflCEc7ss6zg1U1Xq6jVl_XVFdUgMrGSUYO9cY8k0GiJRJkHtFPSSP3hggW_qE4YgtZxVBT9oAFCL-HKPYbSJAJYXJlne-T2FwV3uNDqFla_PESdGzgJDngZbTuffhqB6McBCSw",
       informacion:"En un intento de fusionarse con el infinito, puede pasar por alto algunos principios básicos de la vida, Virgo. Ten cuidado de no ser seducido por aquellos que quieren que te involucres en su drama. Es posible que aceptes voluntariamente al principio. Es posible que ni siquiera te des cuenta de la profundidad de un agujero que has cavado hasta que sea demasiado tarde. Asegúrate de no haber alienado a todos para que todavía quede alguien para desenterrarte."
     },
     {
      dia:24,
      imagen:"https://lh3.googleusercontent.com/unwexNl3GAe3E6faflCEc7ss6zg1U1Xq6jVl_XVFdUgMrGSUYO9cY8k0GiJRJkHtFPSSP3hggW_qE4YgtZxVBT9oAFCL-HKPYbSJAJYXJlne-T2FwV3uNDqFla_PESdGzgJDngZbTuffhqB6McBCSw",
       informacion:" Las tareas mundanas, incluidos los recados y responder correspondencia, pueden aburrirte todo el día, Virgo. Es probable que estés inquieto y fuertemente tentado a tirarlo todo e ir a algún lugar para disfrutar. Echa un buen vistazo a lo que estás haciendo y trata de juzgar objetivamente lo importante que es hacerlo ahora. Si no es tan importante, entonces déjalo a un lado. ¡Probablemente necesites relajarte!"
     },
     {
      dia:25,
      imagen:"https://lh3.googleusercontent.com/unwexNl3GAe3E6faflCEc7ss6zg1U1Xq6jVl_XVFdUgMrGSUYO9cY8k0GiJRJkHtFPSSP3hggW_qE4YgtZxVBT9oAFCL-HKPYbSJAJYXJlne-T2FwV3uNDqFla_PESdGzgJDngZbTuffhqB6McBCSw",
       informacion:" Tu corazón sensible puede ser provocado por la ira hoy, Virgo. No tengas miedo de herir los sentimientos de otras personas. Te estarías haciendo un flaco favor a ti mismo y a los demás al no revelar el verdadero alcance de tus emociones. Las otras partes involucradas pueden no tener todos los hechos necesarios para tomar la decisión más informada. Ayuda en este proceso revelando tu perspectiva."
     },
     {
      dia:26,
      imagen:"https://lh3.googleusercontent.com/unwexNl3GAe3E6faflCEc7ss6zg1U1Xq6jVl_XVFdUgMrGSUYO9cY8k0GiJRJkHtFPSSP3hggW_qE4YgtZxVBT9oAFCL-HKPYbSJAJYXJlne-T2FwV3uNDqFla_PESdGzgJDngZbTuffhqB6McBCSw",
       informacion:" Tu piel delgada se siente aún más delgada de lo habitual hoy, Virgo. Si eres testigo de un arrebato violento en la calle, en el trabajo o en la televisión, de repente te das cuenta de tu vulnerabilidad. No dejes que te asuste para que te escondas. Como uno de los pocos guardianes restantes de las menguantes reservas de bondad del mundo, usted tiene una responsabilidad."
     },
     {
      dia:27,
      imagen:"https://lh3.googleusercontent.com/unwexNl3GAe3E6faflCEc7ss6zg1U1Xq6jVl_XVFdUgMrGSUYO9cY8k0GiJRJkHtFPSSP3hggW_qE4YgtZxVBT9oAFCL-HKPYbSJAJYXJlne-T2FwV3uNDqFla_PESdGzgJDngZbTuffhqB6McBCSw",
       informacion:"A menudo se le llama el equipo de limpieza. Ya sea en el hogar o en el inconsciente, disfrutas preparando nidos para todo tipo de nacimientos, reales y figurados. No se sorprenda si se encuentra ordenando su casa, tirando cosas inútiles, limpiando el escritorio o poniéndose al día con el correo. Hay fuerzas poderosas que te obligan a prepararte para alguien o algo nuevo y diferente."
     },
     {
      dia:28,
      imagen:"https://lh3.googleusercontent.com/unwexNl3GAe3E6faflCEc7ss6zg1U1Xq6jVl_XVFdUgMrGSUYO9cY8k0GiJRJkHtFPSSP3hggW_qE4YgtZxVBT9oAFCL-HKPYbSJAJYXJlne-T2FwV3uNDqFla_PESdGzgJDngZbTuffhqB6McBCSw",
       informacion:" La energía es apta para recoger en tu vida hoy, Virgo. Es posible que se le pida que se presente al servicio. No hagas promesas que no puedas cumplir. Tus palabras serán tomadas en serio, y no debes engañar a la gente para que piense que algo va a suceder cuando sabes que no es así. Ya sabes cómo resultará esa situación. Confía en ti mismo, independientemente de las circunstancias."
     },
     {
      dia:29,
      imagen:"https://lh3.googleusercontent.com/unwexNl3GAe3E6faflCEc7ss6zg1U1Xq6jVl_XVFdUgMrGSUYO9cY8k0GiJRJkHtFPSSP3hggW_qE4YgtZxVBT9oAFCL-HKPYbSJAJYXJlne-T2FwV3uNDqFla_PESdGzgJDngZbTuffhqB6McBCSw",
       informacion:"Siéntete libre de dejarlo todo hoy, Virgo. Finalmente es tu turno de levantarte y decir lo que sientes. No dejes que otros te empujen a lugares en los que no quieres estar. La clave es sondear profundamente con tu mente penetrante y compartir tus increíbles ideas con los demás. No se sorprenda si sus acciones causan algo de tensión. No dejes que esto te impida hacer lo que sientes que es correcto."
     },
     {
      dia:30,
      imagen:"https://lh3.googleusercontent.com/unwexNl3GAe3E6faflCEc7ss6zg1U1Xq6jVl_XVFdUgMrGSUYO9cY8k0GiJRJkHtFPSSP3hggW_qE4YgtZxVBT9oAFCL-HKPYbSJAJYXJlne-T2FwV3uNDqFla_PESdGzgJDngZbTuffhqB6McBCSw",
       informacion:"Este es el momento adecuado para liberarse de las relaciones que han visto su día, Virgo. Esto no será fácil, pero debes hacerlo. En tu vida profesional y privada, eres demasiado reacio a salir de situaciones u obligaciones desagradables. Tienes miedo de lastimar a la gente o hacerlos enojar. Pero al final, te estás lastimando a ti mismo. Dale más peso a tus propias necesidades y sigue tu propio camino."
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
