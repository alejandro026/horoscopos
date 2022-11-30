import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sagitario',
  templateUrl: './sagitario.component.html',
  styleUrls: ['./sagitario.component.css']
})
export class SagitarioComponent implements OnInit {

  selected: Date= new Date();


  fechaMaxima: Date= new Date();

  hoscopoAries=[
    {
     dia:1,
      imagen:"https://lh3.googleusercontent.com/06K_2ebWPaYA6lXFqIbO22sLPpoqzctUpNxnO9TgdtXbHGW6VHSmIrFLnEejwoK-mPXzwaLDVkoCm8k9H8T3OzjGakBh5k5z9dMWlqNGv22Hc8EXsQNNK2PW_ExuDd6buPGiQ6h_UyFWQ156H5JYDA",
      informacion:" tu ego puede estar bajo algo de estrés hoy, Sagitario. La parte complicada es que la amenaza que sientes probablemente sea el resultado de algo que ni siquiera es completamente real. Podría ser que alguien esté actuando sobre información falsa que no tiene nada que ver con la realidad de la situación. Es posible que te dejes llevar por la falsa impresión que tiene otra persona de quién eres en realidad."
    },
    {
     dia:2,
      imagen:"https://lh3.googleusercontent.com/06K_2ebWPaYA6lXFqIbO22sLPpoqzctUpNxnO9TgdtXbHGW6VHSmIrFLnEejwoK-mPXzwaLDVkoCm8k9H8T3OzjGakBh5k5z9dMWlqNGv22Hc8EXsQNNK2PW_ExuDd6buPGiQ6h_UyFWQ156H5JYDA",
      informacion:"el estado de ánimo puede ser opresivo hoy, Sagitario. Después de enfrentar los desafíos de los últimos días, ¡ahora necesita un poco de paz y tranquilidad bien merecidos! Por desgracia, las autoridades no están dispuestas a dártelo. Puede esperar que lo depositen sin contemplaciones en su escritorio. El trabajo, al parecer, no esperará hasta que hayas dormido la siesta. ¿Por qué no planear unas vacaciones exóticas para algún momento en el futuro?"
    },
    {
     dia:3,
      imagen:"https://lh3.googleusercontent.com/06K_2ebWPaYA6lXFqIbO22sLPpoqzctUpNxnO9TgdtXbHGW6VHSmIrFLnEejwoK-mPXzwaLDVkoCm8k9H8T3OzjGakBh5k5z9dMWlqNGv22Hc8EXsQNNK2PW_ExuDd6buPGiQ6h_UyFWQ156H5JYDA",
      informacion:" Deberás esperar algunas perturbaciones en la armonía que ha reinado en los últimos días, Sagitario. Por ejemplo, sus necesidades pueden no coincidir con las de su pareja o amigos cercanos, o puede sentirse inquieto. Las preocupaciones menores sobre el futuro pueden entrometerse en el buen humor de las personas. En definitiva, este no será un buen día para buscar en la armonía emocional una fuente de satisfacción."
    },
    {
     dia:4,
      imagen:"https://lh3.googleusercontent.com/06K_2ebWPaYA6lXFqIbO22sLPpoqzctUpNxnO9TgdtXbHGW6VHSmIrFLnEejwoK-mPXzwaLDVkoCm8k9H8T3OzjGakBh5k5z9dMWlqNGv22Hc8EXsQNNK2PW_ExuDd6buPGiQ6h_UyFWQ156H5JYDA",
      informacion:"¿Sientes que tu autoexpresión está siendo reprimida, Sagitario? Quizás necesite más tiempo para elegir una dirección en la vida. Hoy, puedes esperar sentir mucha presión de alguien cercano a ti. Te sentirás obligado a satisfacer las demandas de esta persona. Por más molesto que esto pueda ser, puede estar tranquilo sabiendo que él o ella tiene sus mejores intereses en el corazón."
    },
    {
     dia:5,
      imagen:"https://lh3.googleusercontent.com/06K_2ebWPaYA6lXFqIbO22sLPpoqzctUpNxnO9TgdtXbHGW6VHSmIrFLnEejwoK-mPXzwaLDVkoCm8k9H8T3OzjGakBh5k5z9dMWlqNGv22Hc8EXsQNNK2PW_ExuDd6buPGiQ6h_UyFWQ156H5JYDA",
      informacion:"Las últimas semanas han sido un poco demasiado serias para tu gusto, pero esto es bueno para ti de vez en cuando, Sagitario. Es posible que tienda a querer jugar, lo que a veces le impide terminar su trabajo. Aproveche el día de hoy para tratar de organizar su vida diaria para que pueda tener tiempo para ocuparse de sus responsabilidades y divertirse un poco."
    },
    {
     dia:6,
      imagen:"https://lh3.googleusercontent.com/06K_2ebWPaYA6lXFqIbO22sLPpoqzctUpNxnO9TgdtXbHGW6VHSmIrFLnEejwoK-mPXzwaLDVkoCm8k9H8T3OzjGakBh5k5z9dMWlqNGv22Hc8EXsQNNK2PW_ExuDd6buPGiQ6h_UyFWQ156H5JYDA",
      informacion:"Tu lado sensible y sensual está siendo sacado a la luz, Sagitario. Puede sentir que su lado romántico está en exhibición. ¡Eres como un bailarín en el escenario y aceptas este papel con placer! Hay una gran combinación de energías en el trabajo que te permite ser más realista sobre el amor y abordarlo con estilo dramático y coraje. Sea más expresivo cuando se trata de sus necesidades y deseos."
    },
    {
     dia:7,
      imagen:"https://lh3.googleusercontent.com/06K_2ebWPaYA6lXFqIbO22sLPpoqzctUpNxnO9TgdtXbHGW6VHSmIrFLnEejwoK-mPXzwaLDVkoCm8k9H8T3OzjGakBh5k5z9dMWlqNGv22Hc8EXsQNNK2PW_ExuDd6buPGiQ6h_UyFWQ156H5JYDA",
      informacion:"Tienes un día muy dinámico por delante, Sagitario. Puede sentir la necesidad de poner toda su energía en un proyecto de grupo. Querrás arremangarte y ponerte a trabajar. Suele ser una persona meditativa, pensativa, pero hoy busca resultados y acciones concretas. ¿Quién sabe? Este arduo trabajo podría incluso ayudarlo a relajarse un poco."
    },
    {
     dia:8,
      imagen:"https://lh3.googleusercontent.com/06K_2ebWPaYA6lXFqIbO22sLPpoqzctUpNxnO9TgdtXbHGW6VHSmIrFLnEejwoK-mPXzwaLDVkoCm8k9H8T3OzjGakBh5k5z9dMWlqNGv22Hc8EXsQNNK2PW_ExuDd6buPGiQ6h_UyFWQ156H5JYDA",
      informacion:"Hoy podrían tener lugar algunas conversaciones fascinantes con amigos, familiares y otras personas cercanas a ti, trayendo nuevas ideas a tu manera, Sagitario. Tienes tanto la energía física como el poder interior para hacer que las cosas sucedan, por lo que debes aprovecharlo al máximo. Considere cuidadosamente sus necesidades y aspiraciones y formule un plan de acción para hacerlas realidad. ¡Los resultados pueden sorprenderte!"
    },
    {
     dia:9,
      imagen:"https://lh3.googleusercontent.com/06K_2ebWPaYA6lXFqIbO22sLPpoqzctUpNxnO9TgdtXbHGW6VHSmIrFLnEejwoK-mPXzwaLDVkoCm8k9H8T3OzjGakBh5k5z9dMWlqNGv22Hc8EXsQNNK2PW_ExuDd6buPGiQ6h_UyFWQ156H5JYDA",
      informacion:"hoy podrías jugar con la idea de publicar, exhibir o hacer públicas las innovaciones creativas en las que has estado trabajando, Sagitario. La información espiritual podría llegarle desde lejos, tal vez a través de amigos o de un grupo al que esté afiliado. La inspiración de todo tipo podría entrar y salir de tu cabeza, por lo que sería mejor escribir tus pensamientos."
    },
    {
     dia:10,
      imagen:"https://lh3.googleusercontent.com/06K_2ebWPaYA6lXFqIbO22sLPpoqzctUpNxnO9TgdtXbHGW6VHSmIrFLnEejwoK-mPXzwaLDVkoCm8k9H8T3OzjGakBh5k5z9dMWlqNGv22Hc8EXsQNNK2PW_ExuDd6buPGiQ6h_UyFWQ156H5JYDA",
      informacion:"espera un aumento en la popularidad hoy, Sagitario. Una forma de hacer un buen uso de esto es generar un cambio. Quizás usted y sus compañeros de trabajo sientan que el lugar de trabajo necesita un nuevo programa, como los beneficios. Sería bueno presentar esto a los tomadores de decisiones. Incluso si se ha hecho antes, use su popularidad para iniciar una petición o encontrar formas creativas de hacer que un grupo sea más efectivo."
    },
    {
     dia:11,
      imagen:"https://lh3.googleusercontent.com/06K_2ebWPaYA6lXFqIbO22sLPpoqzctUpNxnO9TgdtXbHGW6VHSmIrFLnEejwoK-mPXzwaLDVkoCm8k9H8T3OzjGakBh5k5z9dMWlqNGv22Hc8EXsQNNK2PW_ExuDd6buPGiQ6h_UyFWQ156H5JYDA",
      informacion:"un poco de tiempo romántico con alguien especial puede estar bien hoy, Sagitario. Con el caos diario del trabajo y la vida, puede ser difícil pasar un buen rato a solas. Si no hace planes específicos, pueden pasar meses antes de que esto suceda. Tome la situación en la mano y haga esos planes. Si es soltero, considere hacer arreglos para una cita o pasar tiempo con un amigo, si es posible."
    },
    {
      dia:12,
      imagen:"https://lh3.googleusercontent.com/06K_2ebWPaYA6lXFqIbO22sLPpoqzctUpNxnO9TgdtXbHGW6VHSmIrFLnEejwoK-mPXzwaLDVkoCm8k9H8T3OzjGakBh5k5z9dMWlqNGv22Hc8EXsQNNK2PW_ExuDd6buPGiQ6h_UyFWQ156H5JYDA",
       informacion:"Tu cerebro está zumbando a toda velocidad, Sagitario. Cualquier otra persona se marearía tratando de procesar incluso una fracción de las cosas que se filtran en tu cabeza en un día. La clave para usted es no decir cada pensamiento en voz alta, sino mantener su procesamiento interno. La gente quiere escuchar tu decisión final, no el proceso por el que pasaste para llegar a ella. Ahorrarás mucho tiempo a todos si lo haces."
     },
     {
      dia:13,
      imagen:"https://lh3.googleusercontent.com/06K_2ebWPaYA6lXFqIbO22sLPpoqzctUpNxnO9TgdtXbHGW6VHSmIrFLnEejwoK-mPXzwaLDVkoCm8k9H8T3OzjGakBh5k5z9dMWlqNGv22Hc8EXsQNNK2PW_ExuDd6buPGiQ6h_UyFWQ156H5JYDA",
       informacion:"Tal vez deberías suspender tus inhibiciones por el día, Sagitario, y dejar que tus sueños te guíen. Por ejemplo, puede imaginar que la necesidad de tomar decisiones se ha desvanecido. O puede concederse unas vacaciones de las tareas diarias. Sin duda sería un alivio. ¿Quién sabe? Podrías evocar algo de realidad a partir de las cosas de tus sueños."
     },
     {
      dia:14,
      imagen:"https://lh3.googleusercontent.com/06K_2ebWPaYA6lXFqIbO22sLPpoqzctUpNxnO9TgdtXbHGW6VHSmIrFLnEejwoK-mPXzwaLDVkoCm8k9H8T3OzjGakBh5k5z9dMWlqNGv22Hc8EXsQNNK2PW_ExuDd6buPGiQ6h_UyFWQ156H5JYDA",
       informacion:"¡La gente va a pensar que hoy eres una estrella, Sagitario! Aunque es posible que no te sientas así contigo mismo. ¿Qué te pasa últimamente? ¿Has perdido la confianza en ti mismo? ¿Ahora lo estás compensando? ¿Sientes la necesidad de más éxito en tu vida? Todo esto es posible, pero tendrás que correr algunos riesgos si quieres progresar."
     },
     {
      dia:15,
      imagen:"https://lh3.googleusercontent.com/06K_2ebWPaYA6lXFqIbO22sLPpoqzctUpNxnO9TgdtXbHGW6VHSmIrFLnEejwoK-mPXzwaLDVkoCm8k9H8T3OzjGakBh5k5z9dMWlqNGv22Hc8EXsQNNK2PW_ExuDd6buPGiQ6h_UyFWQ156H5JYDA",
       informacion:"algunas personas dicen que te pierdes la vida debido a tu tendencia a observar tu vida en lugar de experimentarla directamente. Si ese es el caso, entonces hoy será una verdadera salida para ti. De repente parecerá más en contacto con sus sentimientos y estará más presente y conectado con quienes lo rodean. Se siente bien para variar, ¿no?"
     },
     {
      dia:16,
      imagen:"https://lh3.googleusercontent.com/06K_2ebWPaYA6lXFqIbO22sLPpoqzctUpNxnO9TgdtXbHGW6VHSmIrFLnEejwoK-mPXzwaLDVkoCm8k9H8T3OzjGakBh5k5z9dMWlqNGv22Hc8EXsQNNK2PW_ExuDd6buPGiQ6h_UyFWQ156H5JYDA",
       informacion:"algunas personas dicen que te pierdes la vida debido a tu tendencia a observar tu vida en lugar de experimentarla directamente. Si ese es el caso, entonces hoy será una verdadera salida para ti. De repente parecerá más en contacto con sus sentimientos y estará más presente y conectado con quienes lo rodean. Se siente bien para variar, ¿no?"
     },
     {
      dia:17,
      imagen:"https://lh3.googleusercontent.com/06K_2ebWPaYA6lXFqIbO22sLPpoqzctUpNxnO9TgdtXbHGW6VHSmIrFLnEejwoK-mPXzwaLDVkoCm8k9H8T3OzjGakBh5k5z9dMWlqNGv22Hc8EXsQNNK2PW_ExuDd6buPGiQ6h_UyFWQ156H5JYDA",
       informacion:" Hoy podría presentarse la posibilidad de realizar un viaje en avión. El viaje se puede hacer con amigos o un grupo pequeño, si es posible. Si ha estado trabajando en proyectos relacionados con la educación o la publicación, este es el día para llevarlos a cabo. Los libros, la televisión e Internet pueden brindarle información valiosa e interesante. Este promete ser un día ajetreado y estimulante."
     },
     {
      dia:18,
      imagen:"https://lh3.googleusercontent.com/06K_2ebWPaYA6lXFqIbO22sLPpoqzctUpNxnO9TgdtXbHGW6VHSmIrFLnEejwoK-mPXzwaLDVkoCm8k9H8T3OzjGakBh5k5z9dMWlqNGv22Hc8EXsQNNK2PW_ExuDd6buPGiQ6h_UyFWQ156H5JYDA",
       informacion:" ¿Te sientes algo molesto hoy? Esto no es de extrañar, ya que el día lo inspira a analizar detenidamente lo que está sucediendo en su vida. Es como si de repente te das cuenta de que las decisiones que tomas pueden tener impactos de gran alcance. Pero no dejes que eso te impida comprometerte con un curso de acción, Sagitario. ¡Ser aventurero!"
     },
     {
      dia:19,
      imagen:"https://lh3.googleusercontent.com/06K_2ebWPaYA6lXFqIbO22sLPpoqzctUpNxnO9TgdtXbHGW6VHSmIrFLnEejwoK-mPXzwaLDVkoCm8k9H8T3OzjGakBh5k5z9dMWlqNGv22Hc8EXsQNNK2PW_ExuDd6buPGiQ6h_UyFWQ156H5JYDA",
       informacion:"Hoy pueden pasar cosas justo delante de tus narices, Sagitario, y es posible que ni siquiera te des cuenta. Lo que será obvio es su reacción a la situación cuando este evento oculto de repente salga a la luz. Es probable que se produzca una explosión de pasión, debido al elevado estado emocional de las personas. Trate de trabajar con esta energía en lugar de contra ella."
     },
     {
      dia:20,
      imagen:"https://lh3.googleusercontent.com/06K_2ebWPaYA6lXFqIbO22sLPpoqzctUpNxnO9TgdtXbHGW6VHSmIrFLnEejwoK-mPXzwaLDVkoCm8k9H8T3OzjGakBh5k5z9dMWlqNGv22Hc8EXsQNNK2PW_ExuDd6buPGiQ6h_UyFWQ156H5JYDA",
       informacion:" las preocupaciones sobre familiares o amigos podrían atormentarte durante todo el día, Sagitario. Tal vez no esté seguro de lo que está mal y se sienta impotente. Independientemente de las vagas preocupaciones que pueda tener, no intente descubrir la verdad sin conocer los hechos. Podrías hacer montañas a partir de un grano de arena. Este no es un buen día para hacer recados. Los retrasos y los obstáculos pueden causar mucha frustración y pérdida de tiempo."
     },
     {
      dia:21,
      imagen:"https://lh3.googleusercontent.com/06K_2ebWPaYA6lXFqIbO22sLPpoqzctUpNxnO9TgdtXbHGW6VHSmIrFLnEejwoK-mPXzwaLDVkoCm8k9H8T3OzjGakBh5k5z9dMWlqNGv22Hc8EXsQNNK2PW_ExuDd6buPGiQ6h_UyFWQ156H5JYDA",
       informacion:"querrás entrar en acción hoy, Sagitario. Siéntase libre de ordenar a otros para variar y delegar. Un enfoque agresivo es exactamente lo que se requiere, y usted tiene la capacidad de entregar los productos. Tratar de hacer todo usted mismo puede parecer una gran idea al principio, pero es mejor que solicite ayuda para que otros puedan sentirse involucrados y pueda concentrarse en hacer un mejor trabajo en menos tareas."
     },
     {
      dia:22,
      imagen:"https://lh3.googleusercontent.com/06K_2ebWPaYA6lXFqIbO22sLPpoqzctUpNxnO9TgdtXbHGW6VHSmIrFLnEejwoK-mPXzwaLDVkoCm8k9H8T3OzjGakBh5k5z9dMWlqNGv22Hc8EXsQNNK2PW_ExuDd6buPGiQ6h_UyFWQ156H5JYDA",
       informacion:"No tiene sentido tratar de entender el día de hoy, Sagitario. Mucho de lo que sucede ocurre en un nivel inconsciente y desafía cualquier explicación racional. Es posible que haya tenido un sueño anoche digno de interpretación profesional. Si puedes soportar apagar tu intelecto, este podría ser un día muy provechoso para ti."
     },
     {
      dia:23,
      imagen:"https://lh3.googleusercontent.com/06K_2ebWPaYA6lXFqIbO22sLPpoqzctUpNxnO9TgdtXbHGW6VHSmIrFLnEejwoK-mPXzwaLDVkoCm8k9H8T3OzjGakBh5k5z9dMWlqNGv22Hc8EXsQNNK2PW_ExuDd6buPGiQ6h_UyFWQ156H5JYDA",
       informacion:"espera estar de humor provocativo hoy, Sagitario. Durante los últimos días, es posible que haya estado buscando una salida para la energía desbordante que tiene la suerte de tener. Tendrá una oportunidad hoy, ya que es probable que se le presenten proyectos innovadores. Si te enfrentas a tus demonios, encontrarás una oportunidad única para deshacerte de los miedos que has estado cargando durante tanto tiempo."
     },
     {
      dia:24,
      imagen:"https://lh3.googleusercontent.com/06K_2ebWPaYA6lXFqIbO22sLPpoqzctUpNxnO9TgdtXbHGW6VHSmIrFLnEejwoK-mPXzwaLDVkoCm8k9H8T3OzjGakBh5k5z9dMWlqNGv22Hc8EXsQNNK2PW_ExuDd6buPGiQ6h_UyFWQ156H5JYDA",
       informacion:": las cosas mejorarán cada vez más para ti a medida que avanza el día, Sagitario. Trate de recuperar su ser práctico, lógico y con los pies en la tierra durante el día para que tenga la noche para socializar y comunicarse con amigos cercanos, si es posible. El equilibrio será un tema clave para usted hoy, así que asegúrese de mantener las cosas bajo control antes de que cualquier parte de su vida se salga de control."
     },
     {
      dia:25,
      imagen:"https://lh3.googleusercontent.com/06K_2ebWPaYA6lXFqIbO22sLPpoqzctUpNxnO9TgdtXbHGW6VHSmIrFLnEejwoK-mPXzwaLDVkoCm8k9H8T3OzjGakBh5k5z9dMWlqNGv22Hc8EXsQNNK2PW_ExuDd6buPGiQ6h_UyFWQ156H5JYDA",
       informacion:"Hoy es un buen día para que sigas adelante, Sagitario. Normalmente eres mucho mejor para acompañarte o simplemente dejarte llevar por la corriente de la situación. Esta forma de hacer las cosas ha demostrado ser bastante efectiva para usted en el pasado. De hecho, te ha llevado lejos. Lo que tienes ahora es una situación diferente. Las cosas que has comenzado no te servirán de nada hasta que las completes."
     },
     {
      dia:26,
      imagen:"https://lh3.googleusercontent.com/06K_2ebWPaYA6lXFqIbO22sLPpoqzctUpNxnO9TgdtXbHGW6VHSmIrFLnEejwoK-mPXzwaLDVkoCm8k9H8T3OzjGakBh5k5z9dMWlqNGv22Hc8EXsQNNK2PW_ExuDd6buPGiQ6h_UyFWQ156H5JYDA",
       informacion:"Hoy más que nunca anhelarás escapar de la rutina diaria. Tienes sed de nuevas vistas y sonidos, nuevas caras y lugares. Sin embargo, eres muy consciente de que debes compaginar tus deseos con tus obligaciones profesionales o domésticas. No siempre es fácil, pero debe confiar en su imaginación para sugerir una forma de resolver este conflicto de manera amistosa."
     },
     {
      dia:27,
      imagen:"https://lh3.googleusercontent.com/06K_2ebWPaYA6lXFqIbO22sLPpoqzctUpNxnO9TgdtXbHGW6VHSmIrFLnEejwoK-mPXzwaLDVkoCm8k9H8T3OzjGakBh5k5z9dMWlqNGv22Hc8EXsQNNK2PW_ExuDd6buPGiQ6h_UyFWQ156H5JYDA",
      informacion:" Hoy podría presentarse la posibilidad de realizar un viaje en avión. El viaje se puede hacer con amigos o un grupo pequeño, si es posible. Si ha estado trabajando en proyectos relacionados con la educación o la publicación, este es el día para llevarlos a cabo. Los libros, la televisión e Internet pueden brindarle información valiosa e interesante. Este promete ser un día ajetreado y estimulante."
    },
     {
      dia:28,
      imagen:"https://lh3.googleusercontent.com/06K_2ebWPaYA6lXFqIbO22sLPpoqzctUpNxnO9TgdtXbHGW6VHSmIrFLnEejwoK-mPXzwaLDVkoCm8k9H8T3OzjGakBh5k5z9dMWlqNGv22Hc8EXsQNNK2PW_ExuDd6buPGiQ6h_UyFWQ156H5JYDA",
      informacion:"Hoy pueden pasar cosas justo delante de tus narices, Sagitario, y es posible que ni siquiera te des cuenta. Lo que será obvio es su reacción a la situación cuando este evento oculto de repente salga a la luz. Es probable que se produzca una explosión de pasión, debido al elevado estado emocional de las personas. Trate de trabajar con esta energía en lugar de contra ella."
    },
     {
      dia:29,
      imagen:"https://lh3.googleusercontent.com/06K_2ebWPaYA6lXFqIbO22sLPpoqzctUpNxnO9TgdtXbHGW6VHSmIrFLnEejwoK-mPXzwaLDVkoCm8k9H8T3OzjGakBh5k5z9dMWlqNGv22Hc8EXsQNNK2PW_ExuDd6buPGiQ6h_UyFWQ156H5JYDA",
      informacion:"¿Sientes que tu autoexpresión está siendo reprimida, Sagitario? Quizás necesite más tiempo para elegir una dirección en la vida. Hoy, puedes esperar sentir mucha presión de alguien cercano a ti. Te sentirás obligado a satisfacer las demandas de esta persona. Por más molesto que esto pueda ser, puede estar tranquilo sabiendo que él o ella tiene sus mejores intereses en el corazón."
     },
     {
      dia:30,
      imagen:"https://lh3.googleusercontent.com/06K_2ebWPaYA6lXFqIbO22sLPpoqzctUpNxnO9TgdtXbHGW6VHSmIrFLnEejwoK-mPXzwaLDVkoCm8k9H8T3OzjGakBh5k5z9dMWlqNGv22Hc8EXsQNNK2PW_ExuDd6buPGiQ6h_UyFWQ156H5JYDA",
      informacion:"Hoy pueden pasar cosas justo delante de tus narices, Sagitario, y es posible que ni siquiera te des cuenta. Lo que será obvio es su reacción a la situación cuando este evento oculto de repente salga a la luz. Es probable que se produzca una explosión de pasión, debido al elevado estado emocional de las personas. Trate de trabajar con esta energía en lugar de contra ella."
    }
  ]

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
