import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acuario',
  templateUrl: './acuario.component.html',
  styleUrls: ['./acuario.component.css']
})
export class AcuarioComponent implements OnInit {

  selected: Date= new Date();


  fechaMaxima: Date= new Date();

  hoscopoAries=[
    {
     dia:1,
      imagen:"https://lh4.googleusercontent.com/R0PuR67S6mrtftsICkCfWfXQKjhLmpyl1leegrDVS9T6jSB9Wl6-WrfqFrxTt7naodqdkTqYVb4kxLPvor57Zd4=w1280",
      informacion:"Estás acostumbrado a que los demás hagan lo que tú quieres. Pero hoy alguien te demostrará que tu poder está por terminarse."
    },
    {
     dia:2,
      imagen:"https://lh4.googleusercontent.com/R0PuR67S6mrtftsICkCfWfXQKjhLmpyl1leegrDVS9T6jSB9Wl6-WrfqFrxTt7naodqdkTqYVb4kxLPvor57Zd4=w1280",
      informacion:"Comenzarás tu día con muchísimas tensiones desde muy temprano en la mañana. La jornada te parecerá eterna."
    },
    {
     dia:3,
      imagen:"https://lh4.googleusercontent.com/R0PuR67S6mrtftsICkCfWfXQKjhLmpyl1leegrDVS9T6jSB9Wl6-WrfqFrxTt7naodqdkTqYVb4kxLPvor57Zd4=w1280",
      informacion:"Lograrás tomar la determinación de dejar hábitos que sabes son nocivos para tu salud. No decaigas con el primer escollo."
    },
    {
     dia:4,
      imagen:"https://lh4.googleusercontent.com/R0PuR67S6mrtftsICkCfWfXQKjhLmpyl1leegrDVS9T6jSB9Wl6-WrfqFrxTt7naodqdkTqYVb4kxLPvor57Zd4=w1280",
      informacion:"Te verás arrojado de tu mundo perfecto en la jornada de hoy, para enfrentar difíciles situaciones que afectarán tu futuro."
    },
    {
     dia:5,
      imagen:"https://lh4.googleusercontent.com/R0PuR67S6mrtftsICkCfWfXQKjhLmpyl1leegrDVS9T6jSB9Wl6-WrfqFrxTt7naodqdkTqYVb4kxLPvor57Zd4=w1280",
      informacion:"Surgirán cambios drásticos, que no tenías previstos. Trata de reacomodar tu vida a las nuevas situaciones, no desesperes."
    },
    {
     dia:6,
      imagen:"https://lh4.googleusercontent.com/R0PuR67S6mrtftsICkCfWfXQKjhLmpyl1leegrDVS9T6jSB9Wl6-WrfqFrxTt7naodqdkTqYVb4kxLPvor57Zd4=w1280",
      informacion:"Deberás afrontar las consecuencias de tus acciones finalmente en la jornada. Se acabo tu tiempo disponible para arrepentirte."
    },
    {
     dia:7,
      imagen:"https://lh4.googleusercontent.com/R0PuR67S6mrtftsICkCfWfXQKjhLmpyl1leegrDVS9T6jSB9Wl6-WrfqFrxTt7naodqdkTqYVb4kxLPvor57Zd4=w1280",
      informacion:"Hoy decidirás dedicarle más atención a tu hogar. Notarás que le hace falta un cambio y tal vez sientas ganas de mudarte."
    },
    {
     dia:8,
      imagen:"https://lh4.googleusercontent.com/R0PuR67S6mrtftsICkCfWfXQKjhLmpyl1leegrDVS9T6jSB9Wl6-WrfqFrxTt7naodqdkTqYVb4kxLPvor57Zd4=w1280",
      informacion:"Hoy es un buen momento para iniciar un nuevo proyecto. Trata de que esta vez no quede en la nada como los anteriores. Busca apoyo."
    },
    {
     dia:9,
      imagen:"https://lh4.googleusercontent.com/R0PuR67S6mrtftsICkCfWfXQKjhLmpyl1leegrDVS9T6jSB9Wl6-WrfqFrxTt7naodqdkTqYVb4kxLPvor57Zd4=w1280",
      informacion:"No descartes el dialogo como manera de solucionar los problemas que te aquejan con vecinos en el hogar. Tranquilidad ante todo."
    },
    {
     dia:10,
      imagen:"https://lh4.googleusercontent.com/R0PuR67S6mrtftsICkCfWfXQKjhLmpyl1leegrDVS9T6jSB9Wl6-WrfqFrxTt7naodqdkTqYVb4kxLPvor57Zd4=w1280",
      informacion:"Un gasto de energía te fatigará si no logras racionar tus recursos. No asumas todas las responsabilidades, delega algunas."
    },
    {
     dia:11,
      imagen:"https://lh4.googleusercontent.com/R0PuR67S6mrtftsICkCfWfXQKjhLmpyl1leegrDVS9T6jSB9Wl6-WrfqFrxTt7naodqdkTqYVb4kxLPvor57Zd4=w1280",
      informacion:"Los romances y las historias de amor estarán a la orden del día y encontrarás un candidato especial en tu grupo de estudio o de trabajo o en alguna aplicación de citas. Asumirás una actitud más comprometida con tus hijos y las personas que amas."
    },
    {
      dia:12,
      imagen:"https://lh4.googleusercontent.com/R0PuR67S6mrtftsICkCfWfXQKjhLmpyl1leegrDVS9T6jSB9Wl6-WrfqFrxTt7naodqdkTqYVb4kxLPvor57Zd4=w1280",
       informacion:"Dedicas casi todo tu día al trabajo, hoy replantéate si esto es realmente lo que quieres, o qué es lo que en verdad deseas."
     },
     {
      dia:13,
      imagen:"https://lh4.googleusercontent.com/R0PuR67S6mrtftsICkCfWfXQKjhLmpyl1leegrDVS9T6jSB9Wl6-WrfqFrxTt7naodqdkTqYVb4kxLPvor57Zd4=w1280",
       informacion:"No te quedará más opción que hacer notar de la peor manera posible cierto comportamiento que encuentras ofensivo en amigos."
     },
     {
      dia:14,
      imagen:"https://lh4.googleusercontent.com/R0PuR67S6mrtftsICkCfWfXQKjhLmpyl1leegrDVS9T6jSB9Wl6-WrfqFrxTt7naodqdkTqYVb4kxLPvor57Zd4=w1280",
       informacion:"Te harán una invitación para una reunión con amigos. Es una buena oportunidad para encontrarte con gente que hace tiempo no veías."
     },
     {
      dia:15,
      imagen:"https://lh4.googleusercontent.com/R0PuR67S6mrtftsICkCfWfXQKjhLmpyl1leegrDVS9T6jSB9Wl6-WrfqFrxTt7naodqdkTqYVb4kxLPvor57Zd4=w1280",
       informacion:"Que tus miedos internos no sean los responsables de tu miseria personal. Enfrenta tus temores y destiérralos lo antes posible."
     },
     {
      dia:16,
      imagen:"https://lh4.googleusercontent.com/R0PuR67S6mrtftsICkCfWfXQKjhLmpyl1leegrDVS9T6jSB9Wl6-WrfqFrxTt7naodqdkTqYVb4kxLPvor57Zd4=w1280",
       informacion:"Hoy no habrá quién te detenga. Estarás con las baterías recargadas y con el mejor ánimo, y no pararás de producir."
     },
     {
      dia:17,
      imagen:"https://lh4.googleusercontent.com/R0PuR67S6mrtftsICkCfWfXQKjhLmpyl1leegrDVS9T6jSB9Wl6-WrfqFrxTt7naodqdkTqYVb4kxLPvor57Zd4=w1280",
       informacion:"Serán momentos determinantes en tus relaciones. Si sientes que tu pareja no te valora lo suficiente decidirás decirle adiós. Pero no te preocupes porque todo indica que, si una persona sale de tu vida, muy pronto llegará un remplazo contundente."
     },
     {
      dia:18,
      imagen:"https://lh4.googleusercontent.com/R0PuR67S6mrtftsICkCfWfXQKjhLmpyl1leegrDVS9T6jSB9Wl6-WrfqFrxTt7naodqdkTqYVb4kxLPvor57Zd4=w1280",
       informacion:"Existen muchas probabilidades que a causa de una decisión trascendente termines peleado con un familiar cercano."
     },
     {
      dia:19,
      imagen:"https://lh4.googleusercontent.com/R0PuR67S6mrtftsICkCfWfXQKjhLmpyl1leegrDVS9T6jSB9Wl6-WrfqFrxTt7naodqdkTqYVb4kxLPvor57Zd4=w1280",
       informacion:"La Vanguardia te ofrece las predicciones astrales del horóscopo para Acuario, tu signo zodiacal en el día de hoy . Podrás saber ante qué tipo de día estás en tu trabajo, qué novedades amorosas te esperan, si es un buen día para jugar a la lotería y cuál será tu estado de salud."
     },
     {
      dia:20,
      imagen:"https://lh4.googleusercontent.com/R0PuR67S6mrtftsICkCfWfXQKjhLmpyl1leegrDVS9T6jSB9Wl6-WrfqFrxTt7naodqdkTqYVb4kxLPvor57Zd4=w1280",
       informacion:"Acuario, tu horóscopo nos dice que, tienes que ir rompiendo con viejos hábitos nocivos que Plutón dentro de tu casa 12 te puede dar indicios de que debas mejorar, pero solo tú podrás concretar eficientemente esas rupturas con esas acciones."
     },
     {
      dia:21,
      imagen:"https://lh4.googleusercontent.com/R0PuR67S6mrtftsICkCfWfXQKjhLmpyl1leegrDVS9T6jSB9Wl6-WrfqFrxTt7naodqdkTqYVb4kxLPvor57Zd4=w1280",
       informacion:"Acuario, hoy será un día en el que, sin duda, será mejor callar que discutir, pues esto último supondrá un gasto innecesario de energía y más problemas. Por otro lado, tu mundo emocional podría encontrarse patas arriba, así que necesitarás un poco de tiempo y dedicación para ponerlo en orden."
     },
     {
      dia:22,
      imagen:"https://lh4.googleusercontent.com/R0PuR67S6mrtftsICkCfWfXQKjhLmpyl1leegrDVS9T6jSB9Wl6-WrfqFrxTt7naodqdkTqYVb4kxLPvor57Zd4=w1280",
       informacion:"Tu vida está siempre llena de lucha, especialmente en el trabajo y los asuntos mundanos, en parte porque eres muy firme en tus principios, pero a partir de ahora ya no estarás solo, tendrás a tu lado a alguien que quiere ayudarte y protegerte, movido por un afecto sincero. Todo lo que tú das por los demás a partir de ahora volverá a ti."
     },
     {
      dia:23,
      imagen:"https://lh4.googleusercontent.com/R0PuR67S6mrtftsICkCfWfXQKjhLmpyl1leegrDVS9T6jSB9Wl6-WrfqFrxTt7naodqdkTqYVb4kxLPvor57Zd4=w1280",
       informacion:"Acuario, pronto tendrás la energía suficiente para desarrollar los nuevos proyectos que te interesen, pero por ahora, deberías concentrarte en el trabajo y tratar de no cometer errores, ya que malgastarás tus fuerzas. Asimismo, tu sexto sentido estará muy activo hoy y podrá ayudarte a tomar algunas decisiones."
     },
     {
      dia:24,
      imagen:"https://lh4.googleusercontent.com/R0PuR67S6mrtftsICkCfWfXQKjhLmpyl1leegrDVS9T6jSB9Wl6-WrfqFrxTt7naodqdkTqYVb4kxLPvor57Zd4=w1280",
       informacion:"Las experiencias del pasado te servirán para ir subiendo peldaño por peldaño hasta llegar a la cima sin dar pasos en falso. Es posible que recibas un ascenso en el trabajo o que te otorguen algún tipo de distinción honorifica. Prepárate porque jugarás en las grandes ligas."
     },
     {
      dia:25,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.SQxe0xmB0NkE4O9oEkiTbgHaFj%26pid%3DApi&f=1&ipt=5ffacdfb2c2ffb1edc6e0b64aaf47ab28509a0032c3af9215ff6085ae8fc3a66&ipo=images",
       informacion:"No dejes que tu acostumbrada impaciencia acabe con tus posibilidades de alcanzar el éxito en tu vida profesional."
     },
     {
      dia:26,
      imagen:"https://lh4.googleusercontent.com/R0PuR67S6mrtftsICkCfWfXQKjhLmpyl1leegrDVS9T6jSB9Wl6-WrfqFrxTt7naodqdkTqYVb4kxLPvor57Zd4=w1280",
       informacion:"Intente ser un poco más reservado en la vida. Disfrute de esta conducta y no se esfuerce en conformar siempre a su entorno, empiece a ser tal cual es."
     },
     {
      dia:27,
      imagen:"https://lh4.googleusercontent.com/R0PuR67S6mrtftsICkCfWfXQKjhLmpyl1leegrDVS9T6jSB9Wl6-WrfqFrxTt7naodqdkTqYVb4kxLPvor57Zd4=w1280",
       informacion:"Hoy estoy contento porque le dirás adiós a una situación que venía siendo muy karmática en tu vida. Lograrás liberarte de una carga familiar que te estaba impidiendo encontrar la serenidad. Privilegiarás los momentos de soledad porque en la reflexión encontrarás la posibilidad de oxigenarte."
     },
     {
      dia:28,
      imagen:"https://lh4.googleusercontent.com/R0PuR67S6mrtftsICkCfWfXQKjhLmpyl1leegrDVS9T6jSB9Wl6-WrfqFrxTt7naodqdkTqYVb4kxLPvor57Zd4=w1280",
       informacion:"Acuario, tu horóscopo nos dice que, eres alguien que tiene una energía muy buena y social para poder incrementar todo tipo de acciones sensibles e intelectuales dentro de grupos, esto por todo lo que Venus y Mercurio junto al Sol te aporta dentro de tu casa 11."
     },
     {
      dia:29,
      imagen:"https://lh4.googleusercontent.com/R0PuR67S6mrtftsICkCfWfXQKjhLmpyl1leegrDVS9T6jSB9Wl6-WrfqFrxTt7naodqdkTqYVb4kxLPvor57Zd4=w1280",
       informacion:"Lo que deberás hacer será seguir intentando. La persistencia dará buenos resultados. En lo financiero una puerta se cerrará."
     },
     {
      dia:30,
      imagen:"https://lh4.googleusercontent.com/R0PuR67S6mrtftsICkCfWfXQKjhLmpyl1leegrDVS9T6jSB9Wl6-WrfqFrxTt7naodqdkTqYVb4kxLPvor57Zd4=w1280",
       informacion:"Separa parte de tu tiempo para poner tus asuntos en orden y definir, realmente, que es lo que buscas en una relación amorosa. Si te sientes aburrido, la rutina te mata y estás en un punto frío es hora ya de hacer algo drástico y decisivo con tu vida. "
     }
  ]

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
