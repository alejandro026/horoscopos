import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leo',
  templateUrl: './leo.component.html',
  styleUrls: ['./leo.component.css']
})
export class LeoComponent implements OnInit {

  selected: Date= new Date();


  fechaMaxima: Date= new Date();

  hoscopoAries=[
    {
     dia:1,
      imagen:"https://lh6.googleusercontent.com/EGXszlfQ5KD9r_2sAmmmpbj4jUr1VdrBfMgUVRcjXFi_hfmpmtBSDs8a7a9ga_U1sIs26r1Xelwo0B7GKQJiqEaJzJ84gXyzQ-jFe8gVssTIygSb9BvcvrJygP0QtbgsgzZg2wbRdZs5nK0VKIycZw",
      informacion:"Hoy es ideal para el romance, Leo. Es ideal para formar nuevas relaciones o mejorar las existentes. Si no tiene una persona especial, haga un esfuerzo por expandir su círculo social. Asista a una conferencia o tome un taller. Si tienes un compañero, haz algo diferente juntos que te ayude a conocerse mejor. "
    },
    {
     dia:2,
      imagen:"https://lh6.googleusercontent.com/EGXszlfQ5KD9r_2sAmmmpbj4jUr1VdrBfMgUVRcjXFi_hfmpmtBSDs8a7a9ga_U1sIs26r1Xelwo0B7GKQJiqEaJzJ84gXyzQ-jFe8gVssTIygSb9BvcvrJygP0QtbgsgzZg2wbRdZs5nK0VKIycZw",
      informacion:"Considera suscribirte a un boletín alternativo de algún tipo, Leo. Encontrará información sorprendente que el público en general no necesariamente conoce. "
    },
    {
     dia:3,
      imagen:"https://lh6.googleusercontent.com/EGXszlfQ5KD9r_2sAmmmpbj4jUr1VdrBfMgUVRcjXFi_hfmpmtBSDs8a7a9ga_U1sIs26r1Xelwo0B7GKQJiqEaJzJ84gXyzQ-jFe8gVssTIygSb9BvcvrJygP0QtbgsgzZg2wbRdZs5nK0VKIycZw",
      informacion:"Si está esperando que alguien venga y satisfaga todas sus necesidades, especialmente las emocionales, ¡puede que tenga que esperar mucho tiempo! Eres responsable de satisfacer tus propias necesidades, Leo. Si no lo haces, serás eternamente dependiente. ¡Esto sería diferente a Leo, y ciertamente diferente a ti!"
    },
    {
     dia:4,
      imagen:"https://lh6.googleusercontent.com/EGXszlfQ5KD9r_2sAmmmpbj4jUr1VdrBfMgUVRcjXFi_hfmpmtBSDs8a7a9ga_U1sIs26r1Xelwo0B7GKQJiqEaJzJ84gXyzQ-jFe8gVssTIygSb9BvcvrJygP0QtbgsgzZg2wbRdZs5nK0VKIycZw",
      informacion:"Si no tienes cuidado de mantener los ojos en línea recta y enfocarte en el futuro, es probable que el pasado te alcance, Leo. No mires hacia atrás, incluso si no ves nada frente a ti. Debes seguir avanzando. Es cierto que esto es más fácil decirlo que hacerlo. Sin embargo, te sientes inspirado para intentarlo."
    },
    {
     dia:5,
      imagen:"https://lh6.googleusercontent.com/EGXszlfQ5KD9r_2sAmmmpbj4jUr1VdrBfMgUVRcjXFi_hfmpmtBSDs8a7a9ga_U1sIs26r1Xelwo0B7GKQJiqEaJzJ84gXyzQ-jFe8gVssTIygSb9BvcvrJygP0QtbgsgzZg2wbRdZs5nK0VKIycZw",
      informacion:" Ahora es el momento de pensar en tu orientación profesional, Leo. Es posible que necesite divertirse un poco más en su vida y experimentar placeres que nunca antes había tenido. Tienes una cierta tendencia a separar los dos mundos del trabajo y el juego, pero no hay necesidad. De hecho, su trabajo prosperará una vez que descubra formas de hacerlo más juguetón."
    },
    {
     dia:6,
      imagen:"https://lh6.googleusercontent.com/EGXszlfQ5KD9r_2sAmmmpbj4jUr1VdrBfMgUVRcjXFi_hfmpmtBSDs8a7a9ga_U1sIs26r1Xelwo0B7GKQJiqEaJzJ84gXyzQ-jFe8gVssTIygSb9BvcvrJygP0QtbgsgzZg2wbRdZs5nK0VKIycZw",
      informacion:"Hoy puede ser un poco duro para ti, Leo. Es como si la realidad estuviera esperando hacerte tropezar. Nada sobre ti es realista. Si todavía eres un poco infantil o irresponsable, hoy puede ser bastante duro para ti. No es nada serio, así que no te preocupes. Sin embargo, si siente que su espalda está en la pared, no reaccione. Intenta aceptar con calma lo que te está pasando."
    },
    {
     dia:7,
      imagen:"https://lh6.googleusercontent.com/EGXszlfQ5KD9r_2sAmmmpbj4jUr1VdrBfMgUVRcjXFi_hfmpmtBSDs8a7a9ga_U1sIs26r1Xelwo0B7GKQJiqEaJzJ84gXyzQ-jFe8gVssTIygSb9BvcvrJygP0QtbgsgzZg2wbRdZs5nK0VKIycZw",
      informacion:" La mayoría de las veces es bueno tener opiniones fuertes y ser independiente y voluntario, Leo. Pero hay otras ocasiones en que esta actitud aleja a las personas que espera acercar. Hay una actitud obstinada pero sensible en tu mundo de romance que puede ser difícil de tratar para ti. Quizás esté adoptando un enfoque más racional de las cosas mientras su ser querido está tomando uno más emocional."
    },
    {
     dia:8,
      imagen:"https://lh6.googleusercontent.com/EGXszlfQ5KD9r_2sAmmmpbj4jUr1VdrBfMgUVRcjXFi_hfmpmtBSDs8a7a9ga_U1sIs26r1Xelwo0B7GKQJiqEaJzJ84gXyzQ-jFe8gVssTIygSb9BvcvrJygP0QtbgsgzZg2wbRdZs5nK0VKIycZw",
      informacion:"Hoy podrías poner fin a tus actividades por un rato, Leo. Puede observar bien las cosas y darse cuenta de que el clima de confianza que necesita para ser productivo y creativo falta en este momento. Es un buen momento para volver a ordenar sus relaciones y recordar a otros sus responsabilidades con usted."
    },
    {
     dia:9,
      imagen:"https://lh6.googleusercontent.com/EGXszlfQ5KD9r_2sAmmmpbj4jUr1VdrBfMgUVRcjXFi_hfmpmtBSDs8a7a9ga_U1sIs26r1Xelwo0B7GKQJiqEaJzJ84gXyzQ-jFe8gVssTIygSb9BvcvrJygP0QtbgsgzZg2wbRdZs5nK0VKIycZw",
      informacion:"Cualquier objetivo que hayas estado tratando de alcanzar finalmente puede hacerse realidad hoy, Leo. Finalizar todo podría implicar correr mucho en el automóvil y reunirse con otras personas, pero es probable que se sienta emocionado de todos modos. Las personas poderosas podrían ser de gran ayuda para usted. Como resultado, las cosas deberían ir muy bien en este momento. ¡Aprovecha al máximo!"
    },
    {
     dia:10,
      imagen:"https://lh6.googleusercontent.com/EGXszlfQ5KD9r_2sAmmmpbj4jUr1VdrBfMgUVRcjXFi_hfmpmtBSDs8a7a9ga_U1sIs26r1Xelwo0B7GKQJiqEaJzJ84gXyzQ-jFe8gVssTIygSb9BvcvrJygP0QtbgsgzZg2wbRdZs5nK0VKIycZw",
      informacion:"Cualquier objetivo que hayas estado tratando de alcanzar finalmente puede hacerse realidad hoy, Leo. Finalizar todo podría implicar correr mucho en el automóvil y reunirse con otras personas, pero es probable que se sienta emocionado de todos modos. Las personas poderosas podrían ser de gran ayuda para usted. Como resultado, las cosas deberían ir muy bien en este momento. ¡Aprovecha al máximo!"
    },
    {
     dia:11,
      imagen:"https://lh6.googleusercontent.com/EGXszlfQ5KD9r_2sAmmmpbj4jUr1VdrBfMgUVRcjXFi_hfmpmtBSDs8a7a9ga_U1sIs26r1Xelwo0B7GKQJiqEaJzJ84gXyzQ-jFe8gVssTIygSb9BvcvrJygP0QtbgsgzZg2wbRdZs5nK0VKIycZw",
      informacion:" Hoy deberías verte y sentirte genial. Puede atraer algunas miradas admirables de los transeúntes en la calle. El sexo y el romance pueden estar en tu mente, Leo. Es probable que quieras pasar el día con tu persona especial. También podría canalizar esos sentimientos hacia actividades creativas de algún tipo. Puede llegar información que haga fluir sus jugos mentales. ¡Aprovecha al máximo!"
    },
    {
      dia:12,
      imagen:"https://lh6.googleusercontent.com/EGXszlfQ5KD9r_2sAmmmpbj4jUr1VdrBfMgUVRcjXFi_hfmpmtBSDs8a7a9ga_U1sIs26r1Xelwo0B7GKQJiqEaJzJ84gXyzQ-jFe8gVssTIygSb9BvcvrJygP0QtbgsgzZg2wbRdZs5nK0VKIycZw",
       informacion:" Hoy puedes conocer a un nuevo amigo, Leo. Las personas tienden a sentirse cómodas a su alrededor, incluso si son diferentes a usted. Eso es porque generalmente aceptas el hecho de que todos son diferentes y está bien. Esta es una cualidad rara y especial: ¡no todos son tan abiertos como usted! Planee hacer algo con su nuevo amigo o pasar el rato con otra persona especial, si es posible. No faltarán personas interesadas en pasar tiempo con usted."
     },
     {
      dia:13,
      imagen:"https://lh6.googleusercontent.com/EGXszlfQ5KD9r_2sAmmmpbj4jUr1VdrBfMgUVRcjXFi_hfmpmtBSDs8a7a9ga_U1sIs26r1Xelwo0B7GKQJiqEaJzJ84gXyzQ-jFe8gVssTIygSb9BvcvrJygP0QtbgsgzZg2wbRdZs5nK0VKIycZw",
       informacion:" Puede que te resulte bastante difícil recibir críticas hoy, Leo. Esto es algo difícil de escuchar para muchos, pero realmente depende de su perspectiva. En lugar de verlo como un ataque personal, trate de ver el valor en las críticas. Si eres honesto contigo mismo y reconoces que puedes aprender y crecer de la crítica, aprovéchalo como una oportunidad. Si descubres que está en el campo izquierdo, déjalo allí."
     },
     {
      dia:14,
      imagen:"https://lh6.googleusercontent.com/EGXszlfQ5KD9r_2sAmmmpbj4jUr1VdrBfMgUVRcjXFi_hfmpmtBSDs8a7a9ga_U1sIs26r1Xelwo0B7GKQJiqEaJzJ84gXyzQ-jFe8gVssTIygSb9BvcvrJygP0QtbgsgzZg2wbRdZs5nK0VKIycZw",
       informacion:"Los asuntos de amor y romance deberían ir bien, pero trata de no exagerar, Leo. Tenga cuidado de quedar tan atrapado en la fantasía del romance que no se ocupa de los detalles. Hoy es un buen día para obtener la base sólida antes de comenzar a construir. Si ya ha comenzado a construir, es posible que deba retroceder y considerar áreas en las que pueden ser necesarias algunas vigas de soporte adicionales."
     },
     {
      dia:15,
      imagen:"https://lh6.googleusercontent.com/EGXszlfQ5KD9r_2sAmmmpbj4jUr1VdrBfMgUVRcjXFi_hfmpmtBSDs8a7a9ga_U1sIs26r1Xelwo0B7GKQJiqEaJzJ84gXyzQ-jFe8gVssTIygSb9BvcvrJygP0QtbgsgzZg2wbRdZs5nK0VKIycZw",
       informacion:"Los asuntos de amor y romance deberían ir bien, pero trata de no exagerar, Leo. Tenga cuidado de quedar tan atrapado en la fantasía del romance que no se ocupa de los detalles. Hoy es un buen día para obtener la base sólida antes de comenzar a construir. Si ya ha comenzado a construir, es posible que deba retroceder y considerar áreas en las que pueden ser necesarias algunas vigas de soporte adicionales."
     },
     {
      dia:16,
      imagen:"https://lh6.googleusercontent.com/EGXszlfQ5KD9r_2sAmmmpbj4jUr1VdrBfMgUVRcjXFi_hfmpmtBSDs8a7a9ga_U1sIs26r1Xelwo0B7GKQJiqEaJzJ84gXyzQ-jFe8gVssTIygSb9BvcvrJygP0QtbgsgzZg2wbRdZs5nK0VKIycZw",
       informacion:"¿Estás pensando en hacer negocios por ti mismo, Leo? Trabajar por cuenta propia no significa automáticamente que tendrá más libertad. Por supuesto, usted será su propio jefe, pero también tendrá toda la responsabilidad por el éxito o el fracaso de su empresa. Si renuncias, todo colapsará. Piénsalo. Base su decisión sobre la realidad y no la fantasía."
     },
     {
      dia:17,
      imagen:"https://lh6.googleusercontent.com/EGXszlfQ5KD9r_2sAmmmpbj4jUr1VdrBfMgUVRcjXFi_hfmpmtBSDs8a7a9ga_U1sIs26r1Xelwo0B7GKQJiqEaJzJ84gXyzQ-jFe8gVssTIygSb9BvcvrJygP0QtbgsgzZg2wbRdZs5nK0VKIycZw",
       informacion:"¡Algunos días es mejor estar de vacaciones! Eso es lo que puedes pensar hoy. Todos sus proyectos están sumidos en arenas movedizas, y siente que está girando sus ruedas. Pero incluso si las cosas están momentáneamente atascadas, no pierdas la fe. Tu ser interior está ganando estabilidad. Cuando sea el momento adecuado, será fuerte y confiable."
     },
     {
      dia:18,
      imagen:"https://lh6.googleusercontent.com/EGXszlfQ5KD9r_2sAmmmpbj4jUr1VdrBfMgUVRcjXFi_hfmpmtBSDs8a7a9ga_U1sIs26r1Xelwo0B7GKQJiqEaJzJ84gXyzQ-jFe8gVssTIygSb9BvcvrJygP0QtbgsgzZg2wbRdZs5nK0VKIycZw",
       informacion:"El día que viene será relajante, Leo. Dado que es propicio para el aspecto material de las cosas, es un buen momento para resolver problemas del hogar como facturas o reparaciones. Pero también podría aprovechar el aspecto actual para poner en marcha planes aún más ambiciosos sobre su situación de vida. ¿Es hora de pensar más seriamente sobre ese movimiento con el que has estado soñando?"
     },
     {
      dia:19,
      imagen:"https://lh6.googleusercontent.com/EGXszlfQ5KD9r_2sAmmmpbj4jUr1VdrBfMgUVRcjXFi_hfmpmtBSDs8a7a9ga_U1sIs26r1Xelwo0B7GKQJiqEaJzJ84gXyzQ-jFe8gVssTIygSb9BvcvrJygP0QtbgsgzZg2wbRdZs5nK0VKIycZw",
       informacion:" Los eventos sociales, posiblemente con grupos pequeños, podrían ponerlo en contacto con personas con conocimientos que podrían proporcionar información valiosa. Puede decidir volver a la escuela o avanzar en su educación. La tecnología podría desempeñar un papel importante en todo esto, Leo, por lo que podría ser una buena idea trabajar en sus habilidades informáticas y hacer que se apaguen. Un viaje corto podría estar a la vista."
     },
     {
      dia:20,
      imagen:"https://lh6.googleusercontent.com/EGXszlfQ5KD9r_2sAmmmpbj4jUr1VdrBfMgUVRcjXFi_hfmpmtBSDs8a7a9ga_U1sIs26r1Xelwo0B7GKQJiqEaJzJ84gXyzQ-jFe8gVssTIygSb9BvcvrJygP0QtbgsgzZg2wbRdZs5nK0VKIycZw",
       informacion:" Este es el final del viaje en el que has estado en las últimas semanas, Leo. Indudablemente viste algunas vistas interesantes. Ya sea que estuviera en un viaje interior o exterior, la energía cósmica lo llevará a un puerto seguro. Desempaca tus maletas con cuidado, ya que están llenas de tesoros y recuerdos. Querrás ponerlos en la casa como recordatorios felices de cuánto has crecido."
     },
     {
      dia:21,
      imagen:"https://lh6.googleusercontent.com/EGXszlfQ5KD9r_2sAmmmpbj4jUr1VdrBfMgUVRcjXFi_hfmpmtBSDs8a7a9ga_U1sIs26r1Xelwo0B7GKQJiqEaJzJ84gXyzQ-jFe8gVssTIygSb9BvcvrJygP0QtbgsgzZg2wbRdZs5nK0VKIycZw",
       informacion:"  Puedes estar ladrando el árbol equivocado hoy, Leo. Antes de desperdiciar toda su energía en su podio proclamando sus pensamientos al mundo, le correspondería detenerse, mirar a su alrededor y notar a su audiencia. ¿Cómo están reaccionando a tu diatriba? ¿La gente se aleja o está animando? Quizás necesites dejar que alguien más gire el micrófono."
     },
     {
      dia:22,
      imagen:"https://lh6.googleusercontent.com/EGXszlfQ5KD9r_2sAmmmpbj4jUr1VdrBfMgUVRcjXFi_hfmpmtBSDs8a7a9ga_U1sIs26r1Xelwo0B7GKQJiqEaJzJ84gXyzQ-jFe8gVssTIygSb9BvcvrJygP0QtbgsgzZg2wbRdZs5nK0VKIycZw",
       informacion:"Un visitante mayor podría venir a tu puerta hoy, Leo. No es probable que estés demasiado emocionado por esto, pero de todos modos podrás ser el buen anfitrión. El romance y la sociabilidad pueden estar un poco limitados por las obligaciones con la familia, particularmente los padres, pero no dejes que te deprima. Puede estar atrapado en casa esta noche, pero podrá soltarse más tarde."
     },
     {
      dia:23,
      imagen:"https://lh6.googleusercontent.com/EGXszlfQ5KD9r_2sAmmmpbj4jUr1VdrBfMgUVRcjXFi_hfmpmtBSDs8a7a9ga_U1sIs26r1Xelwo0B7GKQJiqEaJzJ84gXyzQ-jFe8gVssTIygSb9BvcvrJygP0QtbgsgzZg2wbRdZs5nK0VKIycZw",
       informacion:"Tus opiniones pueden ser el tema de conversación todo el día, Leo. Tienes una voluntad muy fuerte y no tienes miedo de expresarla. Hoy tendrás esa oportunidad. Siéntase libre de iluminar a los demás con su tremenda riqueza de conocimiento. Toma el control de la conversación y acepta el desafío mental de tratar de ganar a otras personas a tu lado. Ya sea que tenga éxito o no, se divertirá intentándolo."
     },
     {
      dia:24,
      imagen:"https://lh6.googleusercontent.com/EGXszlfQ5KD9r_2sAmmmpbj4jUr1VdrBfMgUVRcjXFi_hfmpmtBSDs8a7a9ga_U1sIs26r1Xelwo0B7GKQJiqEaJzJ84gXyzQ-jFe8gVssTIygSb9BvcvrJygP0QtbgsgzZg2wbRdZs5nK0VKIycZw",
       informacion:" ¡Has sido una mariposa social últimamente, Leo! La fase sociable en la que se encuentra actualmente exige una gran cantidad de energía. Te atraen algunos de tus nuevos conocidos pero te irritan los demás. Uno en particular te causa ansiedad real hoy. Tienes dos opciones. Abandona por completo a tu nuevo grupo de amigos o expulsa a la persona que te está causando problemas."
     },
     {
      dia:25,
      imagen:"https://lh6.googleusercontent.com/EGXszlfQ5KD9r_2sAmmmpbj4jUr1VdrBfMgUVRcjXFi_hfmpmtBSDs8a7a9ga_U1sIs26r1Xelwo0B7GKQJiqEaJzJ84gXyzQ-jFe8gVssTIygSb9BvcvrJygP0QtbgsgzZg2wbRdZs5nK0VKIycZw",
       informacion:" Espere ser dividido entre dos impulsos aparentemente paradójicos hoy, Leo. Parte de ti quiere pasar el día envuelto en un capullo, jugando con tus juguetes. Pero otro lado de ustedes está tan comprometido con encabezar un importante esfuerzo creativo o social con amigos que comparten sus ideas revolucionarias. Te sientes exhausto por tratar de construir el mundo perfecto."
     },
     {
      dia:26,
      imagen:"https://lh6.googleusercontent.com/EGXszlfQ5KD9r_2sAmmmpbj4jUr1VdrBfMgUVRcjXFi_hfmpmtBSDs8a7a9ga_U1sIs26r1Xelwo0B7GKQJiqEaJzJ84gXyzQ-jFe8gVssTIygSb9BvcvrJygP0QtbgsgzZg2wbRdZs5nK0VKIycZw",
       informacion:"Las cosas te están mejorando, Leo, especialmente más tarde en el día. Las piezas deberían unirse y las cosas fluir naturalmente en su lugar. Descubrirá que su energía dirigida hacia el exterior está mejor equilibrada ahora. Debes conectarte con otros usando tu ingenio agudo, voluntad fuerte y pura inteligencia. Tómese su tiempo para hacer las cosas que necesita hacer. No te apresures."
     },
     {
      dia:27,
      imagen:"https://lh6.googleusercontent.com/EGXszlfQ5KD9r_2sAmmmpbj4jUr1VdrBfMgUVRcjXFi_hfmpmtBSDs8a7a9ga_U1sIs26r1Xelwo0B7GKQJiqEaJzJ84gXyzQ-jFe8gVssTIygSb9BvcvrJygP0QtbgsgzZg2wbRdZs5nK0VKIycZw",
       informacion:"Es probable que te impulsen a la acción fuerzas fuertes que no quieren que te tomes un descanso, Leo. Tenga en cuenta que cuanto más se resista, más será empujado y tirado por fuentes externas. Si te encuentras en apuros, respira hondo y cálmate. Actúa desde un punto de neutralidad en lugar de un punto de ira o defensa."
     },
     {
      dia:28,
      imagen:"https://lh6.googleusercontent.com/EGXszlfQ5KD9r_2sAmmmpbj4jUr1VdrBfMgUVRcjXFi_hfmpmtBSDs8a7a9ga_U1sIs26r1Xelwo0B7GKQJiqEaJzJ84gXyzQ-jFe8gVssTIygSb9BvcvrJygP0QtbgsgzZg2wbRdZs5nK0VKIycZw",
       informacion:"Confías en tus talentos, esto te ha permitido brillar y liderar en tus proyectos. Hoy te hablarán para cerrar una alianza muy positiva, acéptala. En el amor, viene algo muy intenso, prepárate."
     },
     {
      dia:29,
      imagen:"https://lh6.googleusercontent.com/EGXszlfQ5KD9r_2sAmmmpbj4jUr1VdrBfMgUVRcjXFi_hfmpmtBSDs8a7a9ga_U1sIs26r1Xelwo0B7GKQJiqEaJzJ84gXyzQ-jFe8gVssTIygSb9BvcvrJygP0QtbgsgzZg2wbRdZs5nK0VKIycZw",
       informacion:"Según nos dice tu horóscopo, Leo, Marte opuesto a Mercurio y Venus en casa 5 te advierte que no eres el centro del mundo, por lo que no puedes pensar exclusivamente en tus deseos personales o te terminarás quedando solo."
     },
     {
      dia:30,
      imagen:"https://lh6.googleusercontent.com/EGXszlfQ5KD9r_2sAmmmpbj4jUr1VdrBfMgUVRcjXFi_hfmpmtBSDs8a7a9ga_U1sIs26r1Xelwo0B7GKQJiqEaJzJ84gXyzQ-jFe8gVssTIygSb9BvcvrJygP0QtbgsgzZg2wbRdZs5nK0VKIycZw",
       informacion:"Leo, hay días en los que te gusta fingir que eres invulnerable y que nada te afecta. Pero la verdad es que eres de carne y hueso como todos y las desilusiones te pegan con la misma intensidad que a todos. Esconder tus sentimientos no te hace más fuerte. Intenta ser más abierto con lo que sientes en este día."
     }
  ]

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
