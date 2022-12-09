import { Component, Inject, OnInit } from '@angular/core';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';

@Component({
  selector: 'app-cancer',
  templateUrl: './cancer.component.html',
  styleUrls: ['./cancer.component.css']
})
export class CancerComponent implements OnInit {

  selected: Date= new Date();


  fechaMaxima: Date= new Date();

  hoscopoAries=[
    {
     dia:1,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.WAkXkZ6mw3FqSajDcCkAqQHaHa%26pid%3DApi&f=1&ipt=796e63c79d4d6df68fa00d9247b90e145f51c09416403563949f78c646c03913&ipo=images",
      informacion:"Hay ironía en la situación actual, Cáncer. El único remedio real para situaciones como esta es aceptarlos y bromear al respecto. Si intentas tomarte demasiado en serio, especialmente cuando se trata de arte o romance, inevitablemente fracasarás."
    },
    {
     dia:2,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.WAkXkZ6mw3FqSajDcCkAqQHaHa%26pid%3DApi&f=1&ipt=796e63c79d4d6df68fa00d9247b90e145f51c09416403563949f78c646c03913&ipo=images",
      informacion:"Las visitas cortas en su vecindario podrían catapultarlo a algunas situaciones negativas, Cáncer. Es mejor quedarse cerca de casa si puede. Una carta o llamada enojada podría ponerte de mal humor. Este no es un día para socializar."
    },
    {
     dia:3,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.WAkXkZ6mw3FqSajDcCkAqQHaHa%26pid%3DApi&f=1&ipt=796e63c79d4d6df68fa00d9247b90e145f51c09416403563949f78c646c03913&ipo=images",
      informacion:"Cáncer, ocultas tus necesidades emocionales de los demás. Debe poder confiar en alguien para compartir sus sentimientos."
    },
    {
     dia:4,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.WAkXkZ6mw3FqSajDcCkAqQHaHa%26pid%3DApi&f=1&ipt=796e63c79d4d6df68fa00d9247b90e145f51c09416403563949f78c646c03913&ipo=images",
      informacion:"Las configuraciones planetarias de hoy indican que puede esperar un período muy rentable, Cáncer. Has trabajado duro últimamente, y es natural que finalmente llegues a esta etapa."
    },
    {
     dia:5,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.WAkXkZ6mw3FqSajDcCkAqQHaHa%26pid%3DApi&f=1&ipt=796e63c79d4d6df68fa00d9247b90e145f51c09416403563949f78c646c03913&ipo=images",
      informacion:"Este es un día muy espiritual y creativo para ti, Cancer. Eres especialmente intuitivo. Cualquier esfuerzo creativo probablemente resonará profundamente. Incluso si no sientes que tienes el talento para ello, ¿por qué no probar alguna forma de expresión artística? Podrías incursionar con un pincel o hacer notas en un diario. "
    },
    {
     dia:6,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.WAkXkZ6mw3FqSajDcCkAqQHaHa%26pid%3DApi&f=1&ipt=796e63c79d4d6df68fa00d9247b90e145f51c09416403563949f78c646c03913&ipo=images",
      informacion:"No es una buena idea tratar de encajar a las personas en un molde hoy, Cancer. Esto solo molestará a los demás y lo frustrará. Es importante que te relajes y simplemente dejes que las personas florezcan en las personas que quieren ser. "
    },
    {
     dia:7,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.WAkXkZ6mw3FqSajDcCkAqQHaHa%26pid%3DApi&f=1&ipt=796e63c79d4d6df68fa00d9247b90e145f51c09416403563949f78c646c03913&ipo=images",
      informacion:" Es importante que abandones el mito de que no tienes regalos ni talentos, Cáncer. Considera pensar en tus talentos de la misma manera que piensas en tu cuerpo."
    },
    {
     dia:8,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.WAkXkZ6mw3FqSajDcCkAqQHaHa%26pid%3DApi&f=1&ipt=796e63c79d4d6df68fa00d9247b90e145f51c09416403563949f78c646c03913&ipo=images",
      informacion:"Sí, Cáncer, este es un buen momento para abandonar viejas creencias y valores morales. Su visión de la vida ha cambiado y, sobre todo, es más consciente de cómo sus ideas anticuadas y preconcebidas a veces envenenan su vida."
    },
    {
     dia:9,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.WAkXkZ6mw3FqSajDcCkAqQHaHa%26pid%3DApi&f=1&ipt=796e63c79d4d6df68fa00d9247b90e145f51c09416403563949f78c646c03913&ipo=images",
      informacion:"No siempre es fácil pensar en cómo va tu vida, Cáncer. Imagínese si estuviera solo en el mundo, sin nada que lo detenga o lo obligue a hacer nada. Al menos una vez al mes, dedica una hora a visualizar cómo sería tu vida en estas condiciones. "
    },
    {
     dia:10,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.WAkXkZ6mw3FqSajDcCkAqQHaHa%26pid%3DApi&f=1&ipt=796e63c79d4d6df68fa00d9247b90e145f51c09416403563949f78c646c03913&ipo=images",
      informacion:"Incluso si es cierto en general que el Cáncer tiene cuerpos fuertes como usted, hay momentos en que es importante que se cuiden solos. Este sería un día ideal para ser más conscientes de ese hecho. No es que tengas problemas de salud. "
    },
    {
     dia:11,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.WAkXkZ6mw3FqSajDcCkAqQHaHa%26pid%3DApi&f=1&ipt=796e63c79d4d6df68fa00d9247b90e145f51c09416403563949f78c646c03913&ipo=images",
      informacion:"Puede sentirse deslizándose en un entendimiento más profundo con un amigo cercano o un ser querido, Cancer. Las situaciones románticas se están calentando, y lentamente está dejando que sus inhibiciones se desvanezcan para que estén completamente ausentes."
    },
    {
      dia:12,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.WAkXkZ6mw3FqSajDcCkAqQHaHa%26pid%3DApi&f=1&ipt=796e63c79d4d6df68fa00d9247b90e145f51c09416403563949f78c646c03913&ipo=images",
       informacion:"Su sentido de responsabilidad es probablemente el catalizador de la mayor parte de su motivación, Cáncer. Pero, ¿qué sucede cuando los eventos están fuera de tu control y eres incapaz de hacer algo al respecto? Es posible que tenga que admitir que a veces no puede controlar todo, especialmente su familia y amigos. "
     },
     {
      dia:13,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.WAkXkZ6mw3FqSajDcCkAqQHaHa%26pid%3DApi&f=1&ipt=796e63c79d4d6df68fa00d9247b90e145f51c09416403563949f78c646c03913&ipo=images",
       informacion:"Hoy podría ocurrir mucha actividad en casa, Cancer. Quizás tenga visitantes o trabaje un poco en la casa. Su intuición es particularmente fuerte en este momento, y podría captar demasiados pensamientos y sentimientos de los demás, incluso de extraños."
     },
     {
      dia:14,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.WAkXkZ6mw3FqSajDcCkAqQHaHa%26pid%3DApi&f=1&ipt=796e63c79d4d6df68fa00d9247b90e145f51c09416403563949f78c646c03913&ipo=images",
       informacion:"Hoy puede escuchar oportunidades para ganar dinero extra a través de un trabajo creativo de algún tipo, Cancer. Este podría ser un verdadero golpe de suerte logrado al estar en el lugar correcto en el momento correcto. "
     },
     {
      dia:15,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.WAkXkZ6mw3FqSajDcCkAqQHaHa%26pid%3DApi&f=1&ipt=796e63c79d4d6df68fa00d9247b90e145f51c09416403563949f78c646c03913&ipo=images",
       informacion:"Con la energía de hoy, es posible que desee dejar que su imaginación se libere por un tiempo, Cáncer. Esto puede agregar un impulso real, ya que lo conectará con su ser interno. Deja que tu imaginación sea tu boleto para tus habilidades creativas y artísticas. Las habilidades para resolver problemas también se pueden acentuar o realizar cuando la mente tiene tiempo para deambular. "
     },
     {
      dia:16,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.WAkXkZ6mw3FqSajDcCkAqQHaHa%26pid%3DApi&f=1&ipt=796e63c79d4d6df68fa00d9247b90e145f51c09416403563949f78c646c03913&ipo=images",
       informacion:" Si alguien tarda demasiado en hacer algo hoy, Cáncer, su temperamento puede estallar. La paciencia no siempre es tu fuerte, y puedes creer en la filosofía de si quieres que se haga bien, hazlo tú mismo. Esto no siempre es justo."
     },
     {
      dia:17,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.WAkXkZ6mw3FqSajDcCkAqQHaHa%26pid%3DApi&f=1&ipt=796e63c79d4d6df68fa00d9247b90e145f51c09416403563949f78c646c03913&ipo=images",
       informacion:"Tus emociones son sólidas y te sientes bien, Cáncer. Al mismo tiempo, puede estar atado a la lengua. Te está costando expresar tus verdaderos sentimientos de la manera que te gustaría,"
     },
     {
      dia:18,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.WAkXkZ6mw3FqSajDcCkAqQHaHa%26pid%3DApi&f=1&ipt=796e63c79d4d6df68fa00d9247b90e145f51c09416403563949f78c646c03913&ipo=images",
       informacion:"Cáncer, estás desmitificando el concepto de talento. Solías mirar con envidia a otras personas y pensar: Desearía tener una habilidad natural como esa."
     },
     {
      dia:19,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.WAkXkZ6mw3FqSajDcCkAqQHaHa%26pid%3DApi&f=1&ipt=796e63c79d4d6df68fa00d9247b90e145f51c09416403563949f78c646c03913&ipo=images",
       informacion:"Últimamente, has tenido la sensación de que tu pareja no está atenta. La tensión se ha ido acumulando y hoy, Cáncer, es probable que te desbordes con la ira que proviene de demasiadas dudas y sospechas."
     },
     {
      dia:20,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.WAkXkZ6mw3FqSajDcCkAqQHaHa%26pid%3DApi&f=1&ipt=796e63c79d4d6df68fa00d9247b90e145f51c09416403563949f78c646c03913&ipo=images",
       informacion:" Existe la posibilidad de que algo que necesita o quiere haya estado eludiendo su comprensión. El aspecto algo tenso de los cielos últimamente no ha ayudado. "
     },
     {
      dia:21,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.WAkXkZ6mw3FqSajDcCkAqQHaHa%26pid%3DApi&f=1&ipt=796e63c79d4d6df68fa00d9247b90e145f51c09416403563949f78c646c03913&ipo=images",
       informacion:" ¿Has estado pensando en expandir tus habilidades informáticas? Si es así, este es el día para hacerlo. Es probable que descubra mucha información valiosa, así como atajos para lograr sus objetivos."
     },
     {
      dia:22,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.WAkXkZ6mw3FqSajDcCkAqQHaHa%26pid%3DApi&f=1&ipt=796e63c79d4d6df68fa00d9247b90e145f51c09416403563949f78c646c03913&ipo=images",
       informacion:"Este es el final de la primera etapa en su socialización, Cáncer. ¿Estás satisfecho con las personas que has conocido? Por lo general, puede aprovechar al máximo estos encuentros, pero ¿su conocimiento político lo decepcionó? ¿Te llevó en direcciones a las que no querías ir? Aproveche esta pausa para recuperar el aliento y descubrir dónde se encuentra hoy y dónde quiere estar mañana."
     },
     {
      dia:23,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.WAkXkZ6mw3FqSajDcCkAqQHaHa%26pid%3DApi&f=1&ipt=796e63c79d4d6df68fa00d9247b90e145f51c09416403563949f78c646c03913&ipo=images",
       informacion:"Hoy puede ser uno de esos días en los que intentas pintar un área grande, pero solo tienes un pincel pequeño. Sus trazos son cuidadosos y calculados."
     },
     {
      dia:24,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.WAkXkZ6mw3FqSajDcCkAqQHaHa%26pid%3DApi&f=1&ipt=796e63c79d4d6df68fa00d9247b90e145f51c09416403563949f78c646c03913&ipo=images",
       informacion:" Es posible que no hayas tenido noticias de un amigo cercano en mucho tiempo y te preocupes un poco, Cáncer. Quizás esta persona no estuvo bien la última vez que hablaste. Si puede, puede ser una buena idea llamar. Sueños extraños e inquietantes podrían afectar tu sueño esta noche, pero no te agites demasiado. No son proféticos de ninguna manera."
     },
     {
      dia:25,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.WAkXkZ6mw3FqSajDcCkAqQHaHa%26pid%3DApi&f=1&ipt=796e63c79d4d6df68fa00d9247b90e145f51c09416403563949f78c646c03913&ipo=images",
       informacion:" Ahora es el momento perfecto para decirle algo a alguien que has querido decir durante bastante tiempo, Cáncer. Sácalo a la intemperie. Mantenerlo adentro solo te comerá. Deja de preocuparte por las consecuencias y muévete. Hoy es el momento de ser audaz y agresivo. "
     },
     {
      dia:26,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.WAkXkZ6mw3FqSajDcCkAqQHaHa%26pid%3DApi&f=1&ipt=796e63c79d4d6df68fa00d9247b90e145f51c09416403563949f78c646c03913&ipo=images",
       informacion:" Un amigo o familiar está envenenando lentamente su relación, Cáncer. Un malentendido entre ustedes dos finalmente será beneficioso a largo plazo. ¿Por qué? Te hace darte cuenta de lo incómodo que estás con relaciones vagas y mal definidas. "
     },
     {
      dia:27,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.WAkXkZ6mw3FqSajDcCkAqQHaHa%26pid%3DApi&f=1&ipt=796e63c79d4d6df68fa00d9247b90e145f51c09416403563949f78c646c03913&ipo=images",
       informacion:"Raramente te sorprende o te molesta el revés ocasional. Hoy, sin embargo, debe poner una mano firme en cualquier proyecto que emprenda. Este no es el momento para una actitud relajada, especialmente en lo que respecta al dinero. Si adopta un enfoque sistemático, tendrá el doble beneficio de conservar tanto la energía como los activos."
     },
     {
      dia:28,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.WAkXkZ6mw3FqSajDcCkAqQHaHa%26pid%3DApi&f=1&ipt=796e63c79d4d6df68fa00d9247b90e145f51c09416403563949f78c646c03913&ipo=images",
       informacion:" Asegúrese de solidificar sus asuntos temprano en el día, Cáncer, porque las chispas volarán después del atardecer. La gente podría tratar de desequilibrarte con charlas rápidas e ideas elegantes. Debe asegurarse de estar en tierra firme antes de dar el siguiente paso hacia arriba. Equilibra tus emociones para que no desquites tu frustración con los demás. Concéntrate en tus objetivos."
     },
     {
      dia:29,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.WAkXkZ6mw3FqSajDcCkAqQHaHa%26pid%3DApi&f=1&ipt=796e63c79d4d6df68fa00d9247b90e145f51c09416403563949f78c646c03913&ipo=images",
       informacion:"Puede que le resulte difícil rodar hoy, Cáncer. Es probable que estés atrapado en un estancamiento entre tu mente y tu corazón. Tenga cuidado al dejar que esta tensión se acumule. Lo más importante para ti hoy es relajarte."
     },
     {
      dia:30,
      imagen:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.WAkXkZ6mw3FqSajDcCkAqQHaHa%26pid%3DApi&f=1&ipt=796e63c79d4d6df68fa00d9247b90e145f51c09416403563949f78c646c03913&ipo=images",
       informacion:"Hoy tendrás algunas complicaciones y experimentarás ciertos disgustos con gente de tu trabajo, lo mejor es evitarlos."
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
