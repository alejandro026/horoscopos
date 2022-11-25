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
       informacion:""
     },
     {
      dia:18,
      imagen:"https://lh4.googleusercontent.com/R0PuR67S6mrtftsICkCfWfXQKjhLmpyl1leegrDVS9T6jSB9Wl6-WrfqFrxTt7naodqdkTqYVb4kxLPvor57Zd4=w1280",
       informacion:""
     },
     {
      dia:19,
      imagen:"https://lh4.googleusercontent.com/R0PuR67S6mrtftsICkCfWfXQKjhLmpyl1leegrDVS9T6jSB9Wl6-WrfqFrxTt7naodqdkTqYVb4kxLPvor57Zd4=w1280",
       informacion:""
     },
     {
      dia:20,
      imagen:"https://lh4.googleusercontent.com/R0PuR67S6mrtftsICkCfWfXQKjhLmpyl1leegrDVS9T6jSB9Wl6-WrfqFrxTt7naodqdkTqYVb4kxLPvor57Zd4=w1280",
       informacion:""
     },
     {
      dia:21,
      imagen:"https://lh4.googleusercontent.com/R0PuR67S6mrtftsICkCfWfXQKjhLmpyl1leegrDVS9T6jSB9Wl6-WrfqFrxTt7naodqdkTqYVb4kxLPvor57Zd4=w1280",
       informacion:""
     },
     {
      dia:22,
      imagen:"https://lh4.googleusercontent.com/R0PuR67S6mrtftsICkCfWfXQKjhLmpyl1leegrDVS9T6jSB9Wl6-WrfqFrxTt7naodqdkTqYVb4kxLPvor57Zd4=w1280",
       informacion:""
     },
     {
      dia:23,
      imagen:"https://lh4.googleusercontent.com/R0PuR67S6mrtftsICkCfWfXQKjhLmpyl1leegrDVS9T6jSB9Wl6-WrfqFrxTt7naodqdkTqYVb4kxLPvor57Zd4=w1280",
       informacion:""
     },
     {
      dia:24,
      imagen:"https://lh4.googleusercontent.com/R0PuR67S6mrtftsICkCfWfXQKjhLmpyl1leegrDVS9T6jSB9Wl6-WrfqFrxTt7naodqdkTqYVb4kxLPvor57Zd4=w1280",
       informacion:""
     },
     {
      dia:25,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.SQxe0xmB0NkE4O9oEkiTbgHaFj%26pid%3DApi&f=1&ipt=5ffacdfb2c2ffb1edc6e0b64aaf47ab28509a0032c3af9215ff6085ae8fc3a66&ipo=images",
       informacion:"No dejes que tu acostumbrada impaciencia acabe con tus posibilidades de alcanzar el éxito en tu vida profesional."
     },
     {
      dia:26,
      imagen:"https://lh4.googleusercontent.com/R0PuR67S6mrtftsICkCfWfXQKjhLmpyl1leegrDVS9T6jSB9Wl6-WrfqFrxTt7naodqdkTqYVb4kxLPvor57Zd4=w1280",
       informacion:""
     },
     {
      dia:27,
      imagen:"https://lh4.googleusercontent.com/R0PuR67S6mrtftsICkCfWfXQKjhLmpyl1leegrDVS9T6jSB9Wl6-WrfqFrxTt7naodqdkTqYVb4kxLPvor57Zd4=w1280",
       informacion:""
     },
     {
      dia:28,
      imagen:"https://lh4.googleusercontent.com/R0PuR67S6mrtftsICkCfWfXQKjhLmpyl1leegrDVS9T6jSB9Wl6-WrfqFrxTt7naodqdkTqYVb4kxLPvor57Zd4=w1280",
       informacion:""
     },
     {
      dia:29,
      imagen:"https://lh4.googleusercontent.com/R0PuR67S6mrtftsICkCfWfXQKjhLmpyl1leegrDVS9T6jSB9Wl6-WrfqFrxTt7naodqdkTqYVb4kxLPvor57Zd4=w1280",
       informacion:""
     },
     {
      dia:30,
      imagen:"https://lh4.googleusercontent.com/R0PuR67S6mrtftsICkCfWfXQKjhLmpyl1leegrDVS9T6jSB9Wl6-WrfqFrxTt7naodqdkTqYVb4kxLPvor57Zd4=w1280",
       informacion:""
     }
  ]

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
