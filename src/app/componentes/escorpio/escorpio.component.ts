import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-escorpio',
  templateUrl: './escorpio.component.html',
  styleUrls: ['./escorpio.component.css']
})
export class EscorpioComponent implements OnInit {

  selected: Date= new Date();


  fechaMaxima: Date= new Date();

  hoscopoAries=[
    {
     dia:1,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.q3WzB1ebTje732dl07SnVQHaEK%26pid%3DApi&f=1&ipt=46eadef3f3cfbea5d82409df04df37308b435d6fd75892c8d90e1d7317d07ec1&ipo=images",
      informacion:"Tus jugos creativos fluyen libremente, Escorpio, pero parece haber un obstáculo. Algo o alguien aparentemente no quiere que continúes por el camino en el que estás. Quizás él o ella tenga miedo de que descubras una pasión completamente nueva en la vida con la que no necesariamente están de acuerdo. No olvides quién dirige tu programa: tú y nadie más."
    },
    {
     dia:2,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.q3WzB1ebTje732dl07SnVQHaEK%26pid%3DApi&f=1&ipt=46eadef3f3cfbea5d82409df04df37308b435d6fd75892c8d90e1d7317d07ec1&ipo=images",
      informacion:"Si un amigo o conocido le da consejos sobre dinero o inversiones hoy, no lo tome. Seguir el ejemplo de esta persona incognoscible podría resultar desastroso. La participación en actividades grupales tampoco es aconsejable. Podrían salirse de control, y se podría encontrar terminar en medio de una multitud enojada. "
    },
    {
     dia:3,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.q3WzB1ebTje732dl07SnVQHaEK%26pid%3DApi&f=1&ipt=46eadef3f3cfbea5d82409df04df37308b435d6fd75892c8d90e1d7317d07ec1&ipo=images",
      informacion:"¿De qué tienes miedo, Escorpio? ¿Es contacto con otras personas? Es como si una cuerda invisible te estuviera impidiendo acercarte a la gente, o peor aún, tirando hacia atrás. ¿De qué se trata esto? Estás pasando por un período que está estrechamente relacionado con tu pasado."
    },
    {
     dia:4,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.q3WzB1ebTje732dl07SnVQHaEK%26pid%3DApi&f=1&ipt=46eadef3f3cfbea5d82409df04df37308b435d6fd75892c8d90e1d7317d07ec1&ipo=images",
      informacion:"Con la configuración celestial de hoy, su universo emocional volverá a brillar con energía positiva. Conocerás a más personas, y es probable que tus encuentros sean más profundos. Las próximas semanas son bastante prometedoras para ti, Escorpio. La música estará en la clave del placer y la sensualidad. ¡Permite que la música llene tus sentidos!"
    },
    {
     dia:5,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.q3WzB1ebTje732dl07SnVQHaEK%26pid%3DApi&f=1&ipt=46eadef3f3cfbea5d82409df04df37308b435d6fd75892c8d90e1d7317d07ec1&ipo=images",
      informacion:"Tu talento innato y tu ética de trabajo concienzuda te hacen admirar y respetar. Ya sea que lo sepas o no, otros te admiran como alguien que lo tiene juntos. Sin embargo, todavía tienes esa duda persistente de que eres un impostor. Las energías astrales de hoy le piden que mire dónde se originan estas dudas. ¡Es hora de llegar a la fuente y exorcizar a los monstruos para siempre! No tienen nada que ver con tu éxito."
    },
    {
     dia:6,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.q3WzB1ebTje732dl07SnVQHaEK%26pid%3DApi&f=1&ipt=46eadef3f3cfbea5d82409df04df37308b435d6fd75892c8d90e1d7317d07ec1&ipo=images",
      informacion:"La gente puede ser difícil de tratar hoy, Escorpio. Pronto puedes descubrir que son tan tercos como tú. Intenta dar a los demás el beneficio de la duda o habrá un punto muerto en casi todos los rincones de tu vida. No lo considere una pérdida o falla de carácter si descubre que necesita hacer algunas concesiones para que las cosas funcionen."
    },
    {
     dia:7,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.q3WzB1ebTje732dl07SnVQHaEK%26pid%3DApi&f=1&ipt=46eadef3f3cfbea5d82409df04df37308b435d6fd75892c8d90e1d7317d07ec1&ipo=images",
      informacion:"Hoy podrían surgir tensiones menores, Escorpio. Las personas cercanas a usted, tal vez su pareja o sus padres, parecen estar tratando de obligarlo a adoptar un comportamiento que no está dispuesto a seguir. ¿Negociará su independencia suavemente o se liberará de su dominio? La segunda posibilidad parece más probable."
    },
    {
     dia:8,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.q3WzB1ebTje732dl07SnVQHaEK%26pid%3DApi&f=1&ipt=46eadef3f3cfbea5d82409df04df37308b435d6fd75892c8d90e1d7317d07ec1&ipo=images",
      informacion:"Existe cierta probabilidad de que una reunión reciente con una persona influyente haya puesto un freno a sus esperanzas para sus proyectos. ¿Los abandonarás y vivirás con pesar? ¿O elegirá mantener sus objetivos a pesar de los consejos en contrario y el riesgo de encontrar la desaprobación de sus supervisores? Este es el tipo de pregunta que tendrá que resolver hoy, Escorpio."
    },
    {
     dia:9,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.q3WzB1ebTje732dl07SnVQHaEK%26pid%3DApi&f=1&ipt=46eadef3f3cfbea5d82409df04df37308b435d6fd75892c8d90e1d7317d07ec1&ipo=images",
      informacion:"¿Estás anhelando un poco de diversión y anhelas un poco de experimentación y tal vez incluso un juego infantil? Por tentadores que sean estos prospectos, tendrá que ignorarlos. Escorpio, simplemente no tienes tiempo, al menos no hoy. Estará demasiado ocupado lidiando con numerosas pequeñas emergencias que surgen y teniendo que justificar sus decisiones durante todo el día."
    },
    {
     dia:10,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.q3WzB1ebTje732dl07SnVQHaEK%26pid%3DApi&f=1&ipt=46eadef3f3cfbea5d82409df04df37308b435d6fd75892c8d90e1d7317d07ec1&ipo=images",
      informacion:" Hoy deberías pensar en tu excesiva dependencia del dinero y las posesiones materiales, Escorpio. ¿No crees que pasas demasiado tiempo pensando en dinero y dónde lo vas a encontrar? ¿Tienes cuidado con tu dinero? ¿Te apegas o incluso tienes un presupuesto? Estas son preguntas importantes, y este es un buen día para encontrar las respuestas."
    },
    {
     dia:11,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.q3WzB1ebTje732dl07SnVQHaEK%26pid%3DApi&f=1&ipt=46eadef3f3cfbea5d82409df04df37308b435d6fd75892c8d90e1d7317d07ec1&ipo=images",
      informacion:"Las estrellas indican que el amor y el romance están a tu favor, Escorpio. Descubrirá que esta área de su vida va bien. Ducha a tu pareja con cariño. Tu ego de miel necesita ser acariciado. Sin embargo, no lo malcries hasta el punto de que tu pareja se egocéntrica y termina ignorando todos tus deseos y necesidades."
    },
    {
      dia:12,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.q3WzB1ebTje732dl07SnVQHaEK%26pid%3DApi&f=1&ipt=46eadef3f3cfbea5d82409df04df37308b435d6fd75892c8d90e1d7317d07ec1&ipo=images",
       informacion:"Es posible que hoy puedas estar en conflicto con personas del sexo opuesto, Escorpio. Puedes sentir como si te pusieran obstáculos delante y te frenaran. Pero en lugar de entrar en conflictos que eventualmente podrían convertirse en confrontaciones completas, trate de preguntarse qué creen que está haciendo mal. ¿Tu personalidad considera tus lados masculino y femenino?"
     },
     {
      dia:13,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.q3WzB1ebTje732dl07SnVQHaEK%26pid%3DApi&f=1&ipt=46eadef3f3cfbea5d82409df04df37308b435d6fd75892c8d90e1d7317d07ec1&ipo=images",
       informacion:" Tu poder interno probablemente esté en su punto más alto, Escorpio. Deberías sentirte especialmente seguro. Es probable que tenga una influencia más fuerte en los demás de lo habitual. Podrías ejercer el poder de la mente sobre la materia. Se podría pensar en algo solo para que suceda en algún momento durante el día."
     },
     {
      dia:14,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.q3WzB1ebTje732dl07SnVQHaEK%26pid%3DApi&f=1&ipt=46eadef3f3cfbea5d82409df04df37308b435d6fd75892c8d90e1d7317d07ec1&ipo=images",
       informacion:"La inspiración artística podría venir desde lo más profundo en algún momento hoy, tal vez incluso desde un sueño o visión. Es probable que tenga mucha energía para invertir en creatividad en este momento, Escorpio, y si trabaja duro y no pierde de vista el lado comercial de las artes, podrías seguir adelante"
     },
     {
      dia:15,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.q3WzB1ebTje732dl07SnVQHaEK%26pid%3DApi&f=1&ipt=46eadef3f3cfbea5d82409df04df37308b435d6fd75892c8d90e1d7317d07ec1&ipo=images",
       informacion:" La energía del día debería hacerte sentir bastante bien, Escorpio. Tu espíritu debe estar alto, y reír puede ser una buena parte de tu día. Cuando te ríes, hace que otras personas se vayan. Este es un efecto poderoso para tener. Puede descubrir que puede transferir el entusiasmo y los buenos sentimientos que tiene a quienes lo rodean"
     },
     {
      dia:16,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.q3WzB1ebTje732dl07SnVQHaEK%26pid%3DApi&f=1&ipt=46eadef3f3cfbea5d82409df04df37308b435d6fd75892c8d90e1d7317d07ec1&ipo=images",
       informacion:"Si las cosas no han ido demasiado bien con aquellos con quienes pasas la mayor parte de tu tiempo, Escorpio, podría ser hora de considerar tus expectativas sobre ellas. Pregunte qué tipo de demandas le impone a los demás y si son justos. ¿Es posible que espere lo mismo de los demás que da, pero tal vez no puedan igualar su nivel de rendimiento? "
     },
     {
      dia:17,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.q3WzB1ebTje732dl07SnVQHaEK%26pid%3DApi&f=1&ipt=46eadef3f3cfbea5d82409df04df37308b435d6fd75892c8d90e1d7317d07ec1&ipo=images",
       informacion:"La persona más organizada y estable ganará la carrera, así que deja que seas tú, Escorpio. Sin embargo, ten cuidado. Otras personas pueden tratar de distraerlo de su trabajo. Puede estar en medio de un proyecto importante y decidir tomar un descanso. Antes de que te des cuenta, suena el teléfono y de repente estás atrapado sin escape"
     },
     {
      dia:18,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.q3WzB1ebTje732dl07SnVQHaEK%26pid%3DApi&f=1&ipt=46eadef3f3cfbea5d82409df04df37308b435d6fd75892c8d90e1d7317d07ec1&ipo=images",
       informacion:" Es probable que su optimismo reciba un pequeño impulso hoy, Escorpio. Un encuentro emocional memorable puede ser la fuente de un celo extra. O puede obtener una gran satisfacción de ser parte de un grupo. Las tareas molestas de la vida cotidiana serán olvidadas al menos por hoy. ¡La perspectiva no es más que positiva!"
     },
     {
      dia:19,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.q3WzB1ebTje732dl07SnVQHaEK%26pid%3DApi&f=1&ipt=46eadef3f3cfbea5d82409df04df37308b435d6fd75892c8d90e1d7317d07ec1&ipo=images",
       informacion:" ¡Cúbrete, Escorpio, porque hoy promete ser una montaña rusa emocional! Algo parece estar torcido con tus relaciones, y te sientes desgarrado en direcciones opuestas. Una fuerza te empuja a enriquecer tu universo interior y otra fuerza te empuja a los brazos de alguien que has conocido recientemente. Mantente ocupado para evitar la confrontación"
     },
     {
      dia:20,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.q3WzB1ebTje732dl07SnVQHaEK%26pid%3DApi&f=1&ipt=46eadef3f3cfbea5d82409df04df37308b435d6fd75892c8d90e1d7317d07ec1&ipo=images",
       informacion:" Puedes esperar que tu estado de ánimo mejore hoy, Escorpio. Los proyectos profesionales y privados que tiene en este momento deberían progresar bien. Te sientes tranquilo y te animan a hacer algunos planes nuevos. Si continúa manteniendo el buen ritmo, tendrá éxito en redefinir sus objetivos y dirección de la vida."
     },
     {
      dia:21,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.q3WzB1ebTje732dl07SnVQHaEK%26pid%3DApi&f=1&ipt=46eadef3f3cfbea5d82409df04df37308b435d6fd75892c8d90e1d7317d07ec1&ipo=images",
       informacion:" Oportunidades inusuales e inesperadas para mejorar tu carrera podrían llegar a ti hoy a través de amigos. Estos amigos podrían proporcionarle información valiosa sobre el máximo uso de sus habilidades, Escorpio. La eficiencia podría obtener un impulso de la tecnología. "
     },
     {
      dia:22,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.q3WzB1ebTje732dl07SnVQHaEK%26pid%3DApi&f=1&ipt=46eadef3f3cfbea5d82409df04df37308b435d6fd75892c8d90e1d7317d07ec1&ipo=images",
       informacion:" Si siente que no está progresando lo suficiente hacia sus objetivos, use este día para corregir su objetivo. ¿Estás decepcionado con tu vida amorosa? Es posible que haya dedicado una gran cantidad de energía últimamente sin ver mucha recompensa. Espere unos días más antes de tomar decisiones drásticas sobre el futuro, Escorpio."
     },
     {
      dia:23,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.q3WzB1ebTje732dl07SnVQHaEK%26pid%3DApi&f=1&ipt=46eadef3f3cfbea5d82409df04df37308b435d6fd75892c8d90e1d7317d07ec1&ipo=images",
       informacion:" Es probable que tu mente se arregle en una cosa hoy, Escorpio, y no descansarás hasta que la hayas obtenido. Tal vez es un lugar físico al que estás tratando de llegar, un nuevo dispositivo que quieres tener o una persona que te gustaría conocer mejor. No se sorprenda si tiene que pelear un poco para lograr este objetivo, sea lo que sea."
     },
     {
      dia:24,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.q3WzB1ebTje732dl07SnVQHaEK%26pid%3DApi&f=1&ipt=46eadef3f3cfbea5d82409df04df37308b435d6fd75892c8d90e1d7317d07ec1&ipo=images",
       informacion:"Una persona carismática podría contactarlo hoy y querer su ayuda con algo. Los problemas emocionales con respecto a la familia pueden hacer que te sientas sombrío. Su lado creativo puede tener que estar en barbecho mientras atiende problemas mundanos. Básicamente, te sientes bastante optimista sobre tu vida y tu futuro. Nunca tienes miedo al trabajo duro y eres perseverante."
     },
     {
      dia:25,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.q3WzB1ebTje732dl07SnVQHaEK%26pid%3DApi&f=1&ipt=46eadef3f3cfbea5d82409df04df37308b435d6fd75892c8d90e1d7317d07ec1&ipo=images",
       informacion:"El barco se dirige, así que será mejor que subas a bordo, Escorpio. Las personas no son aptas para simpatizar demasiado con su historia de sollozo emocional hoy, así que manténgala en secreto. Quejarse te sacará del bote por completo. La energía de hoy te está enseñando a endurecerte. No lo tomes como algo personal. Tenga en cuenta que hay lecciones importantes que todos necesitamos aprender. Uno de ellos es saber cuándo guardar silencio."
     },
     {
      dia:26,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.q3WzB1ebTje732dl07SnVQHaEK%26pid%3DApi&f=1&ipt=46eadef3f3cfbea5d82409df04df37308b435d6fd75892c8d90e1d7317d07ec1&ipo=images",
       informacion:"Puedes ser un poco sensible hoy, Escorpio. Es posible que esté irritable y en conflicto a medida que comience a sospechar que los proyectos a largo plazo pueden no estar terminados. Ha llegado el momento de hacer un balance. Es probable que haya habido una buena razón por la que no ha podido completar ese proyecto que emprendió hace varios meses. El asesoramiento de otros debe guiarlo en la dirección correcta."
     },
     {
      dia:27,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.q3WzB1ebTje732dl07SnVQHaEK%26pid%3DApi&f=1&ipt=46eadef3f3cfbea5d82409df04df37308b435d6fd75892c8d90e1d7317d07ec1&ipo=images",
       informacion:"Obviamente estás luchando con algo grande, Escorpio. Los comentarios recientes sobre su irritabilidad están bien fundados. Pero no te preocupes. Te perdonarán eventualmente. Mientras tanto, haz lo que puedas para controlar tu temperamento. Se deriva de sus miedos actuales, que parecen multiplicarse exponencialmente."
     },
     {
      dia:28,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.q3WzB1ebTje732dl07SnVQHaEK%26pid%3DApi&f=1&ipt=46eadef3f3cfbea5d82409df04df37308b435d6fd75892c8d90e1d7317d07ec1&ipo=images",
       informacion:"Tu estado de ánimo puede dar un giro extraño hoy, Escorpio, mientras calmas tu deseo de luchar por algo. Probablemente esté más interesado en disfrutar de la belleza de algo en lugar de tratar de conservarlo para usted."
     },
     {
      dia:29,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.q3WzB1ebTje732dl07SnVQHaEK%26pid%3DApi&f=1&ipt=46eadef3f3cfbea5d82409df04df37308b435d6fd75892c8d90e1d7317d07ec1&ipo=images",
       informacion:"Puede que estés un poco atascado hoy, Escorpio, cuando una persona o situación no funciona bien con lo que estás pensando, y otra no encaja bien con lo que sientes. Se está produciendo un choque que puede ser difícil de conciliar, especialmente si permanece obstinadamente en su posición. "
     },
     {
      dia:30,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.q3WzB1ebTje732dl07SnVQHaEK%26pid%3DApi&f=1&ipt=46eadef3f3cfbea5d82409df04df37308b435d6fd75892c8d90e1d7317d07ec1&ipo=images",
       informacion:" Puedes esperar que tu estado de ánimo mejore hoy, Escorpio. Los proyectos profesionales y privados que tiene en este momento deberían progresar bien. Te sientes tranquilo y te animan a hacer algunos planes nuevos. Si continúa manteniendo el buen ritmo, tendrá éxito en redefinir sus objetivos y dirección de la vida."
     }
  ]

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
