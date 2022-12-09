import { Component, Inject, OnInit } from '@angular/core';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';

@Component({
  selector: 'app-tauro',
  templateUrl: './tauro.component.html',
  styleUrls: ['./tauro.component.css']
})
export class TauroComponent implements OnInit {

  selected: Date= new Date();


  fechaMaxima: Date= new Date();

  hoscopoAries=[
    {
     dia:1,
      imagen:"https://lh3.googleusercontent.com/cs7dAwYlMke29tfupaDcWuBv7uiiAu0ZK1Fdqz6jTN5hP2MaHUQi9P-guvodXG_4VMJtaC_adunrp_vXJZZyzokda9cYWcJJKzj6MjHY93MkInu2ZwseqzDFeHsrG02RikYLtdvSX0VKiXysacUE_A",
      informacion:"Los amigos y la familia, aunque queridos, pueden ser irritantes hoy, Tauro. Todos a tu alrededor parecen molestos e incapaces de comunicarse con claridad. Afortunadamente, tu temperamento tiene un fusible largo. Para evitar una explosión repentina, sería una buena idea evitar el hogar y las tensiones allí. Si te tomas un descanso de tu rutina normal, es probable que conozcas a personas que te pondrán en un estado de ánimo más tranquilo."
    },
    {
     dia:2,
      imagen:"https://lh3.googleusercontent.com/cs7dAwYlMke29tfupaDcWuBv7uiiAu0ZK1Fdqz6jTN5hP2MaHUQi9P-guvodXG_4VMJtaC_adunrp_vXJZZyzokda9cYWcJJKzj6MjHY93MkInu2ZwseqzDFeHsrG02RikYLtdvSX0VKiXysacUE_A",
      informacion:"Cálmate y organízate antes de difundir tus ideas a otros, Tauro. Esto es especialmente cierto cuando se trata de amor y romance. Tan pronto como surge este tema, te tensas y estallas de manera inapropiada. Ponte a tierra y encuentra tu centro de equilibrio, literal y figurativamente, antes de continuar. No te preocupes por obtener la ventaja. Lo que tienes que hacer es unir las manos."
    },
    {
     dia:3,
      imagen:"https://lh3.googleusercontent.com/cs7dAwYlMke29tfupaDcWuBv7uiiAu0ZK1Fdqz6jTN5hP2MaHUQi9P-guvodXG_4VMJtaC_adunrp_vXJZZyzokda9cYWcJJKzj6MjHY93MkInu2ZwseqzDFeHsrG02RikYLtdvSX0VKiXysacUE_A",
      informacion:"¿Has hecho la limpieza que las configuraciones planetarias te pidieron que hicieras en las últimas semanas, Tauro? Si este es el caso, hoy deberías comenzar a sentirte menos agobiado por las convenciones en tu vida. Sin duda, has resuelto algunos de los problemas en tus relaciones. Te sentirás como si estuvieras en una especie de renacimiento a través del próximo ciclo."
    },
    {
     dia:4,
      imagen:"https://lh3.googleusercontent.com/cs7dAwYlMke29tfupaDcWuBv7uiiAu0ZK1Fdqz6jTN5hP2MaHUQi9P-guvodXG_4VMJtaC_adunrp_vXJZZyzokda9cYWcJJKzj6MjHY93MkInu2ZwseqzDFeHsrG02RikYLtdvSX0VKiXysacUE_A",
      informacion:"Un grupo de personas orientadas hacia actividades artísticas, espirituales o humanitarias podría reunirse virtualmente hoy para trabajar en el avance de sus proyectos. Entre ellos podría haber alguien muy especial que podría desempeñar un papel positivo en su vida. Como resultado de esta reunión, podría encontrar inspiración para seguir adelante con proyectos personales. Por la noche, ¡mira una película romántica o habla con alguien que te atraiga!"
    },
    {
     dia:5,
      imagen:"https://lh3.googleusercontent.com/cs7dAwYlMke29tfupaDcWuBv7uiiAu0ZK1Fdqz6jTN5hP2MaHUQi9P-guvodXG_4VMJtaC_adunrp_vXJZZyzokda9cYWcJJKzj6MjHY93MkInu2ZwseqzDFeHsrG02RikYLtdvSX0VKiXysacUE_A",
      informacion:"Un grupo de personas orientadas hacia actividades artísticas, espirituales o humanitarias podría reunirse virtualmente hoy para trabajar en el avance de sus proyectos. Entre ellos podría haber alguien muy especial que podría desempeñar un papel positivo en su vida. Como resultado de esta reunión, podría encontrar inspiración para seguir adelante con proyectos personales. Por la noche, ¡mira una película romántica o habla con alguien que te atraiga!"
    },
    {
     dia:6,
      imagen:"https://lh3.googleusercontent.com/cs7dAwYlMke29tfupaDcWuBv7uiiAu0ZK1Fdqz6jTN5hP2MaHUQi9P-guvodXG_4VMJtaC_adunrp_vXJZZyzokda9cYWcJJKzj6MjHY93MkInu2ZwseqzDFeHsrG02RikYLtdvSX0VKiXysacUE_A",
      informacion:" Tu ego probablemente se ha sentido fuerte últimamente, y es posible que sientas un impulso adicional de confianza en ti mismo, Tauro. No te sorprendas si tu ego se ve amenazado por alguien que aparece de la nada con una actitud agresiva y obstinada, alguien que no está en el mismo camino que tú. Es posible que le resulte difícil tratar con personas hoy en día, ya que podrían ser un poco espaciales."
    },
    {
     dia:7,
      imagen:"https://lh3.googleusercontent.com/cs7dAwYlMke29tfupaDcWuBv7uiiAu0ZK1Fdqz6jTN5hP2MaHUQi9P-guvodXG_4VMJtaC_adunrp_vXJZZyzokda9cYWcJJKzj6MjHY93MkInu2ZwseqzDFeHsrG02RikYLtdvSX0VKiXysacUE_A",
      informacion:"Es posible que te encuentres en una situación en la que debas elegir si comprometerte o no con una relación, Tauro. Los viejos demonios podrían volver para perseguirte, renovando las dudas y creando temores sobre la falta de libertad. ¡Ignora a estos demonios a toda costa! Si cedes ante ellos, es probable que pierdas mucho terreno. Sé valiente y decide por tu cuenta."
    },
    {
     dia:8,
      imagen:"https://lh3.googleusercontent.com/cs7dAwYlMke29tfupaDcWuBv7uiiAu0ZK1Fdqz6jTN5hP2MaHUQi9P-guvodXG_4VMJtaC_adunrp_vXJZZyzokda9cYWcJJKzj6MjHY93MkInu2ZwseqzDFeHsrG02RikYLtdvSX0VKiXysacUE_A",
      informacion:"Tu filosofía de vida viene naturalmente, Tauro. Otros necesitan estudiar, escuchar a expertos o firmar varias lealtades. Tú, por otro lado, ya tienes una perspectiva profunda de la vida que seguramente heredaste de tus experiencias pasadas. Sería interesante que ampliaras un poco tu filosofía y trataras de convertirla en algo concreto."
    },
    {
     dia:9,
      imagen:"https://lh3.googleusercontent.com/cs7dAwYlMke29tfupaDcWuBv7uiiAu0ZK1Fdqz6jTN5hP2MaHUQi9P-guvodXG_4VMJtaC_adunrp_vXJZZyzokda9cYWcJJKzj6MjHY93MkInu2ZwseqzDFeHsrG02RikYLtdvSX0VKiXysacUE_A",
      informacion:"Hoy es probable que sea un poco gris, Tauro. No podrás ver cómo puedes salir de tu situación actual. Es posible que tenga algunos problemas financieros o físicos en este momento. Si este es el caso, es porque no confías lo suficiente en tus habilidades y buen sentido para salir adelante. Es posible que no cuides tu cuerpo tan bien como deberías. Eso se remedia fácilmente."
    },
    {
     dia:10,
      imagen:"https://lh3.googleusercontent.com/cs7dAwYlMke29tfupaDcWuBv7uiiAu0ZK1Fdqz6jTN5hP2MaHUQi9P-guvodXG_4VMJtaC_adunrp_vXJZZyzokda9cYWcJJKzj6MjHY93MkInu2ZwseqzDFeHsrG02RikYLtdvSX0VKiXysacUE_A",
      informacion:"Tauro, no te sorprendas si conoces a personas que son bastante egocéntricas hoy. En general, podría ser que tenga dificultades para entender a las personas que son egoístas y no participan en actividades con otros. Hoy podrías intentar mirarlos como si tuvieran algo que enseñarte: el valor de vivir un poco más para ti y menos para los demás."
    },
    {
     dia:11,
      imagen:"https://lh3.googleusercontent.com/cs7dAwYlMke29tfupaDcWuBv7uiiAu0ZK1Fdqz6jTN5hP2MaHUQi9P-guvodXG_4VMJtaC_adunrp_vXJZZyzokda9cYWcJJKzj6MjHY93MkInu2ZwseqzDFeHsrG02RikYLtdvSX0VKiXysacUE_A",
      informacion:"Puede sentirse atrapado en un aprieto de profunda emoción y actitudes obstinadas con amigos cercanos o amantes, Tauro. Tal vez sea difícil para ti decir lo que realmente sientes. Es posible que tenga la impresión de que está siendo probado y juzgado por todos los demás. Trata de no dejar que tu ego se interponga en el camino de un buen momento. Di lo que sientas sin preocuparte por cómo reaccionarán los demás."
    },
    {
      dia:12,
      imagen:"https://lh3.googleusercontent.com/cs7dAwYlMke29tfupaDcWuBv7uiiAu0ZK1Fdqz6jTN5hP2MaHUQi9P-guvodXG_4VMJtaC_adunrp_vXJZZyzokda9cYWcJJKzj6MjHY93MkInu2ZwseqzDFeHsrG02RikYLtdvSX0VKiXysacUE_A",
      informacion:"Si has estado trabajando para manifestar dinero extra en tu vida, Tauro, probablemente verás que sucede hoy. La abundante energía física y emocional le da a tu poder mental interno sobre la materia un impulso especial, y es posible que veas los resultados que has deseado en finanzas y otros asuntos. Los intereses profesionales también deben ir bien, así como cualquier proyecto personal. ¡Sigan con el buen trabajo!"
    },
     {
      dia:13,
      imagen:"https://lh3.googleusercontent.com/cs7dAwYlMke29tfupaDcWuBv7uiiAu0ZK1Fdqz6jTN5hP2MaHUQi9P-guvodXG_4VMJtaC_adunrp_vXJZZyzokda9cYWcJJKzj6MjHY93MkInu2ZwseqzDFeHsrG02RikYLtdvSX0VKiXysacUE_A",
      informacion:"Un grupo de personas orientadas hacia actividades artísticas, espirituales o humanitarias podría reunirse virtualmente hoy para trabajar en el avance de sus proyectos. Entre ellos podría haber alguien muy especial que podría desempeñar un papel positivo en su vida. Como resultado de esta reunión, podría encontrar inspiración para seguir adelante con proyectos personales. Por la noche, ¡mira una película romántica o habla con alguien que te atraiga!"
    },
     {
      dia:14,
      imagen:"https://lh3.googleusercontent.com/cs7dAwYlMke29tfupaDcWuBv7uiiAu0ZK1Fdqz6jTN5hP2MaHUQi9P-guvodXG_4VMJtaC_adunrp_vXJZZyzokda9cYWcJJKzj6MjHY93MkInu2ZwseqzDFeHsrG02RikYLtdvSX0VKiXysacUE_A",
       informacion:"Es posible que hoy descubra que las personas realmente se sienten atraídas por usted como amigos. Esto se debe a que generalmente eres un buen oyente. Estás abierto a las ideas y pensamientos de otras personas y puedes preocuparte fácilmente. Considere notar a los que lo rodean para ver si no hay alguien que pueda usar un oído para escuchar un problema. Puede que no se necesite mucho para que alguien hable."
     },
     {
      dia:15,
      imagen:"https://lh3.googleusercontent.com/cs7dAwYlMke29tfupaDcWuBv7uiiAu0ZK1Fdqz6jTN5hP2MaHUQi9P-guvodXG_4VMJtaC_adunrp_vXJZZyzokda9cYWcJJKzj6MjHY93MkInu2ZwseqzDFeHsrG02RikYLtdvSX0VKiXysacUE_A",
       informacion:" Si tu pareja actúa rápidamente sobre sus pasiones hoy, Tauro, probablemente querrás ralentizar un poco las cosas. 'Agradable y fácil es la frase del día' para usted, así que cree un ambiente que permita más tiempo en tales circunstancias. Hágale saber a su pareja cómo se siente y qué le gustaría que sucediera. Nadie es un lector de mentes. Hay muchas menos posibilidades de cualquier malentendido cuando hay una comunicación abierta."
     },
     {
      dia:16,
      imagen:"https://lh3.googleusercontent.com/cs7dAwYlMke29tfupaDcWuBv7uiiAu0ZK1Fdqz6jTN5hP2MaHUQi9P-guvodXG_4VMJtaC_adunrp_vXJZZyzokda9cYWcJJKzj6MjHY93MkInu2ZwseqzDFeHsrG02RikYLtdvSX0VKiXysacUE_A",
       informacion:"Cálmate y organízate antes de difundir tus ideas a otros, Tauro. Esto es especialmente cierto cuando se trata de amor y romance. Tan pronto como surge este tema, te tensas y estallas de manera inapropiada. Ponte a tierra y encuentra tu centro de equilibrio, literal y figurativamente, antes de continuar. No te preocupes por obtener la ventaja. Lo que tienes que hacer es unir las manos."
     },
     {
      dia:17,
      imagen:"https://lh3.googleusercontent.com/cs7dAwYlMke29tfupaDcWuBv7uiiAu0ZK1Fdqz6jTN5hP2MaHUQi9P-guvodXG_4VMJtaC_adunrp_vXJZZyzokda9cYWcJJKzj6MjHY93MkInu2ZwseqzDFeHsrG02RikYLtdvSX0VKiXysacUE_A",
       informacion:"Cálmate y organízate antes de difundir tus ideas a otros, Tauro. Esto es especialmente cierto cuando se trata de amor y romance. Tan pronto como surge este tema, te tensas y estallas de manera inapropiada. Ponte a tierra y encuentra tu centro de equilibrio, literal y figurativamente, antes de continuar. No te preocupes por obtener la ventaja. Lo que tienes que hacer es unir las manos."
     },
     {
      dia:18,
      imagen:"https://lh3.googleusercontent.com/cs7dAwYlMke29tfupaDcWuBv7uiiAu0ZK1Fdqz6jTN5hP2MaHUQi9P-guvodXG_4VMJtaC_adunrp_vXJZZyzokda9cYWcJJKzj6MjHY93MkInu2ZwseqzDFeHsrG02RikYLtdvSX0VKiXysacUE_A",
       informacion:"Algo te está obligando a ser más ciudadano del mundo de lo habitual, Tauro. Puede encontrar esto algo perturbador. Sientes que las raíces de tu identidad, como tus antecedentes familiares y tu posición social, se están disolviendo poco a poco. Consuélese con el conocimiento de que su familia simplemente está cambiando y expandiéndose. Se estabilizará de nuevo en otro plano superior."
     },
     {
      dia:19,
      imagen:"https://lh3.googleusercontent.com/cs7dAwYlMke29tfupaDcWuBv7uiiAu0ZK1Fdqz6jTN5hP2MaHUQi9P-guvodXG_4VMJtaC_adunrp_vXJZZyzokda9cYWcJJKzj6MjHY93MkInu2ZwseqzDFeHsrG02RikYLtdvSX0VKiXysacUE_A",
       informacion:" Si quieres aprovechar al máximo el día por delante, Tauro, trata de convencer a tu equipo o familia para que trabajen juntos. Esto es difícil de hacer, ya que el horario de todos es tan exigente en este momento. Por difícil que sea coordinar sus esfuerzos y orquestar la armonía, la fuerza de tu carácter y tu espíritu de equipo harán que todo funcione."
     },
     {
      dia:20,
      imagen:"https://lh3.googleusercontent.com/cs7dAwYlMke29tfupaDcWuBv7uiiAu0ZK1Fdqz6jTN5hP2MaHUQi9P-guvodXG_4VMJtaC_adunrp_vXJZZyzokda9cYWcJJKzj6MjHY93MkInu2ZwseqzDFeHsrG02RikYLtdvSX0VKiXysacUE_A",
       informacion:"Tienes el talento de unir a las personas, no hay duda de eso, Tauro. Hoy será especialmente bueno para participar o iniciar actividades grupales. Es un día favorable para cualquier proyecto relacionado con el compañerismo y la asistencia. Puede hacer el trabajo preliminar para formar un equipo, un grupo de discusión o un esfuerzo caritativo."
     },
     {
      dia:21,
      imagen:"https://lh3.googleusercontent.com/cs7dAwYlMke29tfupaDcWuBv7uiiAu0ZK1Fdqz6jTN5hP2MaHUQi9P-guvodXG_4VMJtaC_adunrp_vXJZZyzokda9cYWcJJKzj6MjHY93MkInu2ZwseqzDFeHsrG02RikYLtdvSX0VKiXysacUE_A",
       informacion:"Hoy podría decidir organizar una fiesta virtual o una pequeña reunión en su hogar. Echas de menos tener muchos visitantes. Esta debería ser una ocasión emocionante, Tauro, y podrías hacer todo lo posible para que este sea el mejor evento pequeño posible. Probablemente valdrá la pena. Este evento podría traer personas e información a su manera que hacen una gran diferencia para usted."
     },
     {
      dia:22,
      imagen:"https://lh3.googleusercontent.com/cs7dAwYlMke29tfupaDcWuBv7uiiAu0ZK1Fdqz6jTN5hP2MaHUQi9P-guvodXG_4VMJtaC_adunrp_vXJZZyzokda9cYWcJJKzj6MjHY93MkInu2ZwseqzDFeHsrG02RikYLtdvSX0VKiXysacUE_A",
       informacion:"¿Has hecho la limpieza que las configuraciones planetarias te pidieron que hicieras en las últimas semanas, Tauro? Si este es el caso, hoy deberías comenzar a sentirte menos agobiado por las convenciones en tu vida. Sin duda, has resuelto algunos de los problemas en tus relaciones. Te sentirás como si estuvieras en una especie de renacimiento a través del próximo ciclo."
     },
     {
      dia:23,
      imagen:"https://lh3.googleusercontent.com/cs7dAwYlMke29tfupaDcWuBv7uiiAu0ZK1Fdqz6jTN5hP2MaHUQi9P-guvodXG_4VMJtaC_adunrp_vXJZZyzokda9cYWcJJKzj6MjHY93MkInu2ZwseqzDFeHsrG02RikYLtdvSX0VKiXysacUE_A",
       informacion:" Las acciones podrían ser rápidas e intensas hoy, Tauro. Las cosas pueden golpearte como un rayo, así que prepárate para casi cualquier cosa. Estabilízate mentalmente antes de interactuar con los demás. Vístete para demostrar tu poder. Eres una fuerza a tener en cuenta, no una a la que pisar. Las emociones violentas son propensas a emerger. No luches contra el impulso de liberar cualquier enojo que sientas. Diríjalo apropiadamente."
     },
     {
      dia:24,
      imagen:"https://lh3.googleusercontent.com/cs7dAwYlMke29tfupaDcWuBv7uiiAu0ZK1Fdqz6jTN5hP2MaHUQi9P-guvodXG_4VMJtaC_adunrp_vXJZZyzokda9cYWcJJKzj6MjHY93MkInu2ZwseqzDFeHsrG02RikYLtdvSX0VKiXysacUE_A",
       informacion:" Seamos realistas, Tauro. Hoy es probable que encuentres tus tareas y recados extremadamente aburridos. Podrías encontrarte mirando el reloj, sintiendo que ha pasado una hora y luego dándote cuenta de que solo han pasado diez minutos. Si puedes posponer tus tareas hasta mañana, hazlo. Nada es tan urgente que requiera toda tu atención todo el día. Regálese una tarde divertida."
     },
     {
      dia:25,
      imagen:"https://lh3.googleusercontent.com/cs7dAwYlMke29tfupaDcWuBv7uiiAu0ZK1Fdqz6jTN5hP2MaHUQi9P-guvodXG_4VMJtaC_adunrp_vXJZZyzokda9cYWcJJKzj6MjHY93MkInu2ZwseqzDFeHsrG02RikYLtdvSX0VKiXysacUE_A",
       informacion:" Es posible que te conmueva la energía presente en el aire hoy, Tauro. Ponte tu armadura y prepárate para la batalla. Otros pueden acobardarse cuando miran por la ventana y ven lo que está pasando afuera, pero tú quieres saltar a la refriega. Las emociones fuertes y agresivas son las armas del día, y todo el mundo sabe que tienes un gran arsenal en este departamento."
     },
     {
      dia:26,
      imagen:"https://lh3.googleusercontent.com/cs7dAwYlMke29tfupaDcWuBv7uiiAu0ZK1Fdqz6jTN5hP2MaHUQi9P-guvodXG_4VMJtaC_adunrp_vXJZZyzokda9cYWcJJKzj6MjHY93MkInu2ZwseqzDFeHsrG02RikYLtdvSX0VKiXysacUE_A",
       informacion:"Sal y muévete, Tauro! Si puedes lograr tomarte el día libre, este sería un buen momento para liberar algo de energía. Solías disfrutar de la competencia cuando eras pequeño. ¿Recuerdas lo emocionante que fue ser el primero en llegar a la cima de la colina? Encontrarás tu vida enormemente enriquecida si pudieras encontrar una manera de reavivar sentimientos similares."
     },
     {
      dia:27,
      imagen:"https://lh3.googleusercontent.com/cs7dAwYlMke29tfupaDcWuBv7uiiAu0ZK1Fdqz6jTN5hP2MaHUQi9P-guvodXG_4VMJtaC_adunrp_vXJZZyzokda9cYWcJJKzj6MjHY93MkInu2ZwseqzDFeHsrG02RikYLtdvSX0VKiXysacUE_A",
       informacion:"Los amigos y la familia, aunque queridos, pueden ser irritantes hoy, Tauro. Todos a tu alrededor parecen molestos e incapaces de comunicarse con claridad. Afortunadamente, tu temperamento tiene un fusible largo. Para evitar una explosión repentina, sería una buena idea evitar el hogar y las tensiones allí. Si te tomas un descanso de tu rutina normal, es probable que conozcas a personas que te pondrán en un estado de ánimo más tranquilo."
     },
     {
      dia:28,
      imagen:"https://lh3.googleusercontent.com/cs7dAwYlMke29tfupaDcWuBv7uiiAu0ZK1Fdqz6jTN5hP2MaHUQi9P-guvodXG_4VMJtaC_adunrp_vXJZZyzokda9cYWcJJKzj6MjHY93MkInu2ZwseqzDFeHsrG02RikYLtdvSX0VKiXysacUE_A",
       informacion:"Es posible que sus emociones sean difíciles de manejar, Tauro, especialmente más tarde en el día. Considere adoptar un enfoque intelectual en lugar de emocional. Tus sentimientos podrían enviarte a un cambio de humor drástico de un extremo del espectro al otro. Lo que realmente necesitas en este momento, especialmente esta noche, es equilibrio. Ata los cabos sueltos para mantener más equilibrio."
     },
     {
      dia:29,
      imagen:"https://lh3.googleusercontent.com/cs7dAwYlMke29tfupaDcWuBv7uiiAu0ZK1Fdqz6jTN5hP2MaHUQi9P-guvodXG_4VMJtaC_adunrp_vXJZZyzokda9cYWcJJKzj6MjHY93MkInu2ZwseqzDFeHsrG02RikYLtdvSX0VKiXysacUE_A",
       informacion:" Mentalmente, eres propenso a hacerlo muy bien hoy, Tauro. Usted encontrará que usted puede hacer frente a casi cualquier desafío cerebral que se presente. El aspecto más difícil del día será lidiar con tus emociones. Lo más probable es que sientas un gran deseo de atención. Solo quieres ser amado. Sube al escenario y di lo que hay en tu corazón. Este no es un buen momento para albergar tus sentimientos."
     },
     {
      dia:30,
      imagen:"https://lh3.googleusercontent.com/cs7dAwYlMke29tfupaDcWuBv7uiiAu0ZK1Fdqz6jTN5hP2MaHUQi9P-guvodXG_4VMJtaC_adunrp_vXJZZyzokda9cYWcJJKzj6MjHY93MkInu2ZwseqzDFeHsrG02RikYLtdvSX0VKiXysacUE_A",
       informacion:" Es posible que haya estado gastando o ahorrando demasiado dinero, Tauro. Está claro que un reequilibrio está en orden si quieres encontrar placer en lugar de frustración eterna. Es un fenómeno curioso. Es como si hubieras perdido contacto con tu cuerpo. Sin embargo, es en tu cuerpo donde finalmente encontrarás tu equilibrio. ¡Ciertamente no lo encontrarás en tu cabeza!"
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
