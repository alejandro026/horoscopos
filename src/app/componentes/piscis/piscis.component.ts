import { Component, Inject, OnInit } from '@angular/core';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';

@Component({
  selector: 'app-piscis',
  templateUrl: './piscis.component.html',
  styleUrls: ['./piscis.component.css']
})
export class PiscisComponent implements OnInit {

  selected: Date= new Date();


  fechaMaxima: Date= new Date();

  hoscopoAries=[
    {
     dia:1,
      imagen:"https://lh4.googleusercontent.com/TlunkCAgt9WNes-JfxQL8lUEPxV0hFrCTwui2r52NPCotoS7Re1maErF2x6mxj_8WYy4hLV_34KTaa7y4pBQptNp2Am9d7HgJ5Sx8FcJI4glELztOoz_L5nDbqd_qyWKim0ov3AAXUlHfLcAS8lOTw",
      informacion:"Tienes una naturaleza creativa y artística que tal vez quieras poner en buen uso hoy, Piscis. Usted podría tener algunas buenas ideas para mejoras en el hogar. Tal vez necesite algunas estanterías para ayudarlo a organizarse, o tal vez desee una redecoración completa. Hagas lo que hagas, Piscis, seguramente se verá hermoso. Cuando se trata de esfuerzos artísticos, definitivamente tienes el toque."
    },
    {
     dia:2,
      imagen:"https://lh4.googleusercontent.com/TlunkCAgt9WNes-JfxQL8lUEPxV0hFrCTwui2r52NPCotoS7Re1maErF2x6mxj_8WYy4hLV_34KTaa7y4pBQptNp2Am9d7HgJ5Sx8FcJI4glELztOoz_L5nDbqd_qyWKim0ov3AAXUlHfLcAS8lOTw",
      informacion:" Es posible que te hayas sentido más emocional últimamente, Piscis. Hoy en día, una energía fantasiosa podría barrerte de tus pies y llevarte a otro reino por completo. Siéntase libre de despegar por lo menos un poco de tiempo para obtener una mejor perspectiva sobre los problemas en cuestión. Los poderes fuertes y contundentes te instan a dejar que alguien más tome las riendas de un proyecto en particular."
    },
    {
     dia:3,
      imagen:"https://lh4.googleusercontent.com/TlunkCAgt9WNes-JfxQL8lUEPxV0hFrCTwui2r52NPCotoS7Re1maErF2x6mxj_8WYy4hLV_34KTaa7y4pBQptNp2Am9d7HgJ5Sx8FcJI4glELztOoz_L5nDbqd_qyWKim0ov3AAXUlHfLcAS8lOTw",
      informacion:"Es probable que este día no sea el punto culminante de su semana, Piscis. Es posible que esté al tanto de las limitaciones en el trabajo o en el hogar. Es muy probable que anhele una recompensa adecuada por su trabajo. Cualquier tipo de reconocimiento sería bueno en este punto. Este es un buen día para definir nuevas metas personales y profesionales. Te sostendrán a través de tus interminables tareas."
    },
    {
     dia:4,
      imagen:"https://lh4.googleusercontent.com/TlunkCAgt9WNes-JfxQL8lUEPxV0hFrCTwui2r52NPCotoS7Re1maErF2x6mxj_8WYy4hLV_34KTaa7y4pBQptNp2Am9d7HgJ5Sx8FcJI4glELztOoz_L5nDbqd_qyWKim0ov3AAXUlHfLcAS8lOTw",
      informacion:" Durante los últimos días, Piscis, has tenido bastante suerte en términos financieros y materiales. Pero el día que tenemos por delante será una excepción. Si planea hacer una inversión, firmar un contrato o comprar un artículo importante, pospóngalo hasta otro día. ¡También puedes resignarte a este destino y estar agradecido de que te hayas ahorrado la oportunidad de cometer un error!"
    },
    {
     dia:5,
      imagen:"https://lh4.googleusercontent.com/TlunkCAgt9WNes-JfxQL8lUEPxV0hFrCTwui2r52NPCotoS7Re1maErF2x6mxj_8WYy4hLV_34KTaa7y4pBQptNp2Am9d7HgJ5Sx8FcJI4glELztOoz_L5nDbqd_qyWKim0ov3AAXUlHfLcAS8lOTw",
      informacion:"Obviamente, tienes un papel importante que desempeñar, Piscis. El estado de ánimo hoy puede ser algo frustrante, pero la forma en que lo maneje le dará recompensas y reconocimiento en su lugar de trabajo o en la escuela. Su fuerza, autocontrol y estabilidad marcaron la diferencia entre el éxito y el fracaso. Puedes y debes estar orgulloso de ti mismo."
    },
    {
     dia:6,
      imagen:"https://lh4.googleusercontent.com/TlunkCAgt9WNes-JfxQL8lUEPxV0hFrCTwui2r52NPCotoS7Re1maErF2x6mxj_8WYy4hLV_34KTaa7y4pBQptNp2Am9d7HgJ5Sx8FcJI4glELztOoz_L5nDbqd_qyWKim0ov3AAXUlHfLcAS8lOTw",
      informacion:"Hoy puede sentirse un poco más seguro de sí mismo de lo habitual. Puedes ser bastante tímido y reservado. Hoy deberías tratar de hacer que la gente sea un poco más consciente de ti, para tomarte en serio. Es hora de que la gente te respete más, especialmente las personas que te rodean. Trata de pensar en ti mismo antes de pensar en otras personas. ¡Tú lo vales!"
    },
    {
     dia:7,
      imagen:"https://lh4.googleusercontent.com/TlunkCAgt9WNes-JfxQL8lUEPxV0hFrCTwui2r52NPCotoS7Re1maErF2x6mxj_8WYy4hLV_34KTaa7y4pBQptNp2Am9d7HgJ5Sx8FcJI4glELztOoz_L5nDbqd_qyWKim0ov3AAXUlHfLcAS8lOTw",
      informacion:"Diviértete con tus seres queridos, Piscis. Deja tus preocupaciones a un lado. No pienses en las posibles consecuencias negativas de pasar un buen rato. Concéntrate en la diversión y la emoción del momento. Usted tiene la capacidad de crear vínculos fantásticamente fuertes entre usted y su pareja romántica. El amor está a tu favor, así que actúa con confianza. No hay razón para sentirse mal o inseguro de ninguna manera. Mantén la cabeza en alto."
    },
    {
     dia:8,
      imagen:"https://lh4.googleusercontent.com/TlunkCAgt9WNes-JfxQL8lUEPxV0hFrCTwui2r52NPCotoS7Re1maErF2x6mxj_8WYy4hLV_34KTaa7y4pBQptNp2Am9d7HgJ5Sx8FcJI4glELztOoz_L5nDbqd_qyWKim0ov3AAXUlHfLcAS8lOTw",
      informacion:"Como Piscis, tienes un don innato para sanar y calmar a otras personas en situaciones de crisis. Si esto no es lo que haces para ganarte la vida, deberías pensar en hacer algo con este talento natural. Las posiciones de los planetas hoy pueden estar diciéndoles que piensen en esto en términos más concretos. Si está interesado en la terapia a base de hierbas, por ejemplo, este podría ser el momento perfecto para aprender más."
    },
    {
     dia:9,
      imagen:"https://lh4.googleusercontent.com/TlunkCAgt9WNes-JfxQL8lUEPxV0hFrCTwui2r52NPCotoS7Re1maErF2x6mxj_8WYy4hLV_34KTaa7y4pBQptNp2Am9d7HgJ5Sx8FcJI4glELztOoz_L5nDbqd_qyWKim0ov3AAXUlHfLcAS8lOTw",
      informacion:"Tu intuición debería ser muy alta en este momento, Piscis, al igual que tu poder de manifestación. Hoy necesitas tratar de frenar tus pensamientos y solo pensar cosas hermosas, ¡porque puedes encontrar que cualquier cosa en la que pienses parece manifestarse! Algunos sueños y visiones poderosas pueden abrir nuevas líneas de exploración intelectual para ti que pueden tener un efecto potente en tu futuro inmediato. Ve a ella."
    },
    {
     dia:10,
      imagen:"https://lh4.googleusercontent.com/TlunkCAgt9WNes-JfxQL8lUEPxV0hFrCTwui2r52NPCotoS7Re1maErF2x6mxj_8WYy4hLV_34KTaa7y4pBQptNp2Am9d7HgJ5Sx8FcJI4glELztOoz_L5nDbqd_qyWKim0ov3AAXUlHfLcAS8lOTw",
      informacion:"Hoy es posible que te sientas inspirado para ayudar a otros menos afortunados, Piscis. La oportunidad de hacer algo de trabajo voluntario podría venir en su camino, tal vez para una iglesia, caridad u otra organización humanitaria. O podrías lanzarte a una disciplina artística. De cualquier manera, es probable que te diviertas inmensamente y conozcas a algunas personas interesantes en el proceso. La recaudación de fondos podría estar involucrada de alguna manera."
    },
    {
     dia:11,
      imagen:"https://lh4.googleusercontent.com/TlunkCAgt9WNes-JfxQL8lUEPxV0hFrCTwui2r52NPCotoS7Re1maErF2x6mxj_8WYy4hLV_34KTaa7y4pBQptNp2Am9d7HgJ5Sx8FcJI4glELztOoz_L5nDbqd_qyWKim0ov3AAXUlHfLcAS8lOTw",
      informacion:"Ten tacto al hablar hoy, Piscis. Con la energía de este día, es importante que te tomes el tiempo para pensar en cómo tus palabras afectan a la persona con la que estás hablando. Puede ser más fácil de lo habitual decir algo incorrecto, especialmente si estás en la posición de decirle a alguien algo que crees que podría no ir demasiado bien. Evite comentarios que sugieran críticas a la persona en lugar de la acción."
    },
    {
      dia:12,
      imagen:"https://lh4.googleusercontent.com/TlunkCAgt9WNes-JfxQL8lUEPxV0hFrCTwui2r52NPCotoS7Re1maErF2x6mxj_8WYy4hLV_34KTaa7y4pBQptNp2Am9d7HgJ5Sx8FcJI4glELztOoz_L5nDbqd_qyWKim0ov3AAXUlHfLcAS8lOTw",
       informacion:"Puede que te sientas emocionalmente bien, Piscis, pero desafortunadamente las personas que te rodean no parecen compartir este sentimiento. Tu primer instinto puede ser sacrificarte para hacer el camino más fácil para el siguiente tipo. Recuerde que otras personas necesitan aprender a hacer las cosas por su cuenta. Si alguien está de mal humor, que esté de mal humor. Es mejor que pase el día solo"
     },
     {
      dia:13,
      imagen:"https://lh4.googleusercontent.com/TlunkCAgt9WNes-JfxQL8lUEPxV0hFrCTwui2r52NPCotoS7Re1maErF2x6mxj_8WYy4hLV_34KTaa7y4pBQptNp2Am9d7HgJ5Sx8FcJI4glELztOoz_L5nDbqd_qyWKim0ov3AAXUlHfLcAS8lOTw",
       informacion:" Es posible que haya tenido algunas decepciones emocionales últimamente, pero hoy restaurará su fe en el amor. Todo lo que necesitas hacer es actuar. Tu asombrosa lucidez y realismo te impiden esperar lo imposible. Prefieres ir a trabajar para alcanzar tus metas que perder el tiempo con ilusiones. De hecho, es más probable que obtengas resultados de ti mismo que de otras personas."
     },
     {
      dia:14,
      imagen:"https://lh4.googleusercontent.com/TlunkCAgt9WNes-JfxQL8lUEPxV0hFrCTwui2r52NPCotoS7Re1maErF2x6mxj_8WYy4hLV_34KTaa7y4pBQptNp2Am9d7HgJ5Sx8FcJI4glELztOoz_L5nDbqd_qyWKim0ov3AAXUlHfLcAS8lOTw",
       informacion:" ¡Nunca puedes ser otra persona que no sea quien eres, Piscis! Así son las cosas, y no puedes cambiarlo. Otros miembros de su familia pueden haber soñado con liberarse de un deber o una lección moral, pero estos sueños no se aplican a usted. Tus sueños de ser otra persona son como fantasmas que han vuelto para perseguirte. ¡Simplemente quítalos!"
     },
     {
      dia:15,
      imagen:"https://lh4.googleusercontent.com/TlunkCAgt9WNes-JfxQL8lUEPxV0hFrCTwui2r52NPCotoS7Re1maErF2x6mxj_8WYy4hLV_34KTaa7y4pBQptNp2Am9d7HgJ5Sx8FcJI4glELztOoz_L5nDbqd_qyWKim0ov3AAXUlHfLcAS8lOTw",
       informacion:" Parece que la nueva alineación planetaria acaba de abrir algunas puertas que anteriormente habían estado cerradas. Te deleitas con la confianza que la gente tiene en ti. No es que tus habilidades hayan cambiado, ¡solo tu actitud! La gente confía en ti porque exhibes más confianza en ti mismo. Es una sensación maravillosa, ¿no? Aférrate a él a toda costa."
     },
     {
      dia:16,
      imagen:"https://lh4.googleusercontent.com/TlunkCAgt9WNes-JfxQL8lUEPxV0hFrCTwui2r52NPCotoS7Re1maErF2x6mxj_8WYy4hLV_34KTaa7y4pBQptNp2Am9d7HgJ5Sx8FcJI4glELztOoz_L5nDbqd_qyWKim0ov3AAXUlHfLcAS8lOTw",
       informacion:"El último equipo podría estar disponible repentinamente para usted. Es probable que haga la vida más fácil y más interesante. También podría abrir puertas para hacer nuevos amigos y encontrar nuevas oportunidades. El aumento de los ingresos también es una posibilidad. Podrías tropezar con alguna información sorprendente, Piscis, y esto podría hacer que tu mente vaya en una nueva dirección. Hoy promete mucha estimulación."
     },
     {
      dia:17,
      imagen:"https://lh4.googleusercontent.com/TlunkCAgt9WNes-JfxQL8lUEPxV0hFrCTwui2r52NPCotoS7Re1maErF2x6mxj_8WYy4hLV_34KTaa7y4pBQptNp2Am9d7HgJ5Sx8FcJI4glELztOoz_L5nDbqd_qyWKim0ov3AAXUlHfLcAS8lOTw",
       informacion:"¿Estás cansado, Piscis? No es de extrañar. Estás tan ansioso por ser útil que te has quedado harapiento en las últimas semanas. Como habrás notado, el mundo es tan apático ahora que cada movimiento requiere un enorme esfuerzo de tu parte. ¿Por qué no establecerse y descansar hoy? Eso sería lo más sabio y razonable que se puede hacer. Todavía se te necesitará mañana."
     },
     {
      dia:18,
      imagen:"https://lh4.googleusercontent.com/TlunkCAgt9WNes-JfxQL8lUEPxV0hFrCTwui2r52NPCotoS7Re1maErF2x6mxj_8WYy4hLV_34KTaa7y4pBQptNp2Am9d7HgJ5Sx8FcJI4glELztOoz_L5nDbqd_qyWKim0ov3AAXUlHfLcAS8lOTw",
       informacion:" Serás un activo valioso para los demás hoy debido a tu mente racional y tu capacidad para pensar las cosas con claridad. Las fuerzas obstinadas a tu alrededor no se van a doblar, pero tienes la capacidad única de hacerlo. Haz tu mejor esfuerzo para evitar peleas, aunque será tentador para ti y para otros querer desahogarte"
     },
     {
      dia:19,
      imagen:"https://lh4.googleusercontent.com/TlunkCAgt9WNes-JfxQL8lUEPxV0hFrCTwui2r52NPCotoS7Re1maErF2x6mxj_8WYy4hLV_34KTaa7y4pBQptNp2Am9d7HgJ5Sx8FcJI4glELztOoz_L5nDbqd_qyWKim0ov3AAXUlHfLcAS8lOTw",
       informacion:"Su imaginación puede evocar historias o imágenes que desea conmemorar a través de la escritura o la pintura, pero la falta de confianza en sí mismo puede desalentarlo. Sin embargo, probablemente sea una buena idea hacerlo de todos modos. Estas ideas vienen de lo más profundo de ti. Darles forma podría representar una liberación de viejos traumas. Mantén tu trabajo escondido en un cajón si no te gusta."
     },
     {
      dia:20,
      imagen:"https://lh4.googleusercontent.com/TlunkCAgt9WNes-JfxQL8lUEPxV0hFrCTwui2r52NPCotoS7Re1maErF2x6mxj_8WYy4hLV_34KTaa7y4pBQptNp2Am9d7HgJ5Sx8FcJI4glELztOoz_L5nDbqd_qyWKim0ov3AAXUlHfLcAS8lOTw",
       informacion:"Los palos y las piedras pueden romper tus huesos, pero los nombres nunca te harán daño, Piscis. El problema con la energía de hoy es que puede haber algunos palos y piedras arrojados en tu dirección. Esté atento a tales objetos. Hay fuerzas poderosas que operan que están cargadas de agresión emocional. La guerra puede estallar si no tienes cuidado. Trata de mantener la paz."
     },
     {
      dia:21,
      imagen:"https://lh4.googleusercontent.com/TlunkCAgt9WNes-JfxQL8lUEPxV0hFrCTwui2r52NPCotoS7Re1maErF2x6mxj_8WYy4hLV_34KTaa7y4pBQptNp2Am9d7HgJ5Sx8FcJI4glELztOoz_L5nDbqd_qyWKim0ov3AAXUlHfLcAS8lOTw",
       informacion:"No eres el único que puede resolver tus problemas, Piscis. Confía en que hay otros que son capaces de entender. Aquellos que quieren ayudarte están motivados sólo por el amor, sin segundas intenciones. Está en tu naturaleza ser escéptico, pero estas personas existen. ¿Y adivina qué? ¡Podrías comunicarte con uno de ellos hoy!"
     },
     {
      dia:22,
      imagen:"https://lh4.googleusercontent.com/TlunkCAgt9WNes-JfxQL8lUEPxV0hFrCTwui2r52NPCotoS7Re1maErF2x6mxj_8WYy4hLV_34KTaa7y4pBQptNp2Am9d7HgJ5Sx8FcJI4glELztOoz_L5nDbqd_qyWKim0ov3AAXUlHfLcAS8lOTw",
       informacion:"Cuando termine el día, lo recordarás como algo inusual, Piscis. Ideas salvajes brotaron en tu cabeza como hongos. Es posible que haya imaginado salir inmediatamente para un viaje alrededor del mundo, o haber elaborado planes para una invención de limpieza, o haber visualizado una apertura completamente nueva en el mundo en línea. No descartes estas ideas como poco realistas. No lo son."
     },
     {
      dia:23,
      imagen:"https://lh4.googleusercontent.com/TlunkCAgt9WNes-JfxQL8lUEPxV0hFrCTwui2r52NPCotoS7Re1maErF2x6mxj_8WYy4hLV_34KTaa7y4pBQptNp2Am9d7HgJ5Sx8FcJI4glELztOoz_L5nDbqd_qyWKim0ov3AAXUlHfLcAS8lOTw",
       informacion:"Cuide las cosas por la mañana para que pueda estar despreocupado y relajado por la noche. Es importante que cuadres las cosas en tu cabeza para que puedas comunicar información importante a otros más tarde. Siéntase libre de adoptar un enfoque no convencional. Es importante marchar al ritmo de tu propio tambor y no del de nadie más."
     },
     {
      dia:24,
      imagen:"https://lh4.googleusercontent.com/TlunkCAgt9WNes-JfxQL8lUEPxV0hFrCTwui2r52NPCotoS7Re1maErF2x6mxj_8WYy4hLV_34KTaa7y4pBQptNp2Am9d7HgJ5Sx8FcJI4glELztOoz_L5nDbqd_qyWKim0ov3AAXUlHfLcAS8lOTw",
       informacion:"Baja el pie hoy, Piscis. No dejes que otros te empujen. Podría ser que estés acostumbrado a dejar que la gente se salga con la suya para mantener la paz. El problema con esto es que sus sueños y metas pueden perderse en la confusión. No pierdas de vista tu verdadero destino. Hay mucho más en la vida de lo que podrías ver en la superficie. Profundiza más."
     },
     {
      dia:25,
      imagen:"https://lh4.googleusercontent.com/TlunkCAgt9WNes-JfxQL8lUEPxV0hFrCTwui2r52NPCotoS7Re1maErF2x6mxj_8WYy4hLV_34KTaa7y4pBQptNp2Am9d7HgJ5Sx8FcJI4glELztOoz_L5nDbqd_qyWKim0ov3AAXUlHfLcAS8lOTw",
       informacion:"Existe cierta probabilidad de que el estado de ánimo en casa esté lleno de tensión, Piscis. ¿Te atreviste a expresar alguna opinión intelectual contraria? En cualquier caso, parece que su confianza en sí mismo es más fuerte de lo habitual en este momento. Sigue adelante y expresa cualquier queja u opinión que puedas haber estado guardando para ti mismo. Pero trate de hacerlo con delicadeza, especialmente en lo que respecta a su familia."
     },
     {
      dia:26,
      imagen:"https://lh4.googleusercontent.com/TlunkCAgt9WNes-JfxQL8lUEPxV0hFrCTwui2r52NPCotoS7Re1maErF2x6mxj_8WYy4hLV_34KTaa7y4pBQptNp2Am9d7HgJ5Sx8FcJI4glELztOoz_L5nDbqd_qyWKim0ov3AAXUlHfLcAS8lOTw",
       informacion:"Ten tacto al hablar hoy, Piscis. Con la energía de este día, es importante que te tomes el tiempo para pensar en cómo tus palabras afectan a la persona con la que estás hablando. Puede ser más fácil de lo habitual decir algo incorrecto, especialmente si estás en la posición de decirle a alguien algo que crees que podría no ir demasiado bien. Evite comentarios que sugieran críticas a la persona en lugar de la acción."
     },
     {
      dia:27,
      imagen:"https://lh4.googleusercontent.com/TlunkCAgt9WNes-JfxQL8lUEPxV0hFrCTwui2r52NPCotoS7Re1maErF2x6mxj_8WYy4hLV_34KTaa7y4pBQptNp2Am9d7HgJ5Sx8FcJI4glELztOoz_L5nDbqd_qyWKim0ov3AAXUlHfLcAS8lOTw",
       informacion:" Es posible que haya tenido algunas decepciones emocionales últimamente, pero hoy restaurará su fe en el amor. Todo lo que necesitas hacer es actuar. Tu asombrosa lucidez y realismo te impiden esperar lo imposible. Prefieres ir a trabajar para alcanzar tus metas que perder el tiempo con ilusiones. De hecho, es más probable que obtengas resultados de ti mismo que de otras personas."
     },
     {
      dia:28,
      imagen:"https://lh4.googleusercontent.com/TlunkCAgt9WNes-JfxQL8lUEPxV0hFrCTwui2r52NPCotoS7Re1maErF2x6mxj_8WYy4hLV_34KTaa7y4pBQptNp2Am9d7HgJ5Sx8FcJI4glELztOoz_L5nDbqd_qyWKim0ov3AAXUlHfLcAS8lOTw",
       informacion:"Tu intuición debería ser muy alta en este momento, Piscis, al igual que tu poder de manifestación. Hoy necesitas tratar de frenar tus pensamientos y solo pensar cosas hermosas, ¡porque puedes encontrar que cualquier cosa en la que pienses parece manifestarse! Algunos sueños y visiones poderosas pueden abrir nuevas líneas de exploración intelectual para ti que pueden tener un efecto potente en tu futuro inmediato. Ve a ella."
     },
     {
      dia:29,
      imagen:"https://lh4.googleusercontent.com/TlunkCAgt9WNes-JfxQL8lUEPxV0hFrCTwui2r52NPCotoS7Re1maErF2x6mxj_8WYy4hLV_34KTaa7y4pBQptNp2Am9d7HgJ5Sx8FcJI4glELztOoz_L5nDbqd_qyWKim0ov3AAXUlHfLcAS8lOTw",
       informacion:"Diviértete con tus seres queridos, Piscis. Deja tus preocupaciones a un lado. No pienses en las posibles consecuencias negativas de pasar un buen rato. Concéntrate en la diversión y la emoción del momento. Usted tiene la capacidad de crear vínculos fantásticamente fuertes entre usted y su pareja romántica. El amor está a tu favor, así que actúa con confianza. No hay razón para sentirse mal o inseguro de ninguna manera. Mantén la cabeza en alto."
     },
     {
      dia:30,
      imagen:"https://lh4.googleusercontent.com/TlunkCAgt9WNes-JfxQL8lUEPxV0hFrCTwui2r52NPCotoS7Re1maErF2x6mxj_8WYy4hLV_34KTaa7y4pBQptNp2Am9d7HgJ5Sx8FcJI4glELztOoz_L5nDbqd_qyWKim0ov3AAXUlHfLcAS8lOTw",
       informacion:"Obviamente, tienes un papel importante que desempeñar, Piscis. El estado de ánimo hoy puede ser algo frustrante, pero la forma en que lo maneje le dará recompensas y reconocimiento en su lugar de trabajo o en la escuela. Su fuerza, autocontrol y estabilidad marcaron la diferencia entre el éxito y el fracaso. Puedes y debes estar orgulloso de ti mismo."
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
