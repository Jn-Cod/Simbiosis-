// Datos del proyecto Jardines Polinizadores de Nicaragua

const POLINIZADORES = [
  {
    id: "abeja-mielifera",
    nombre: "Abeja melífera",
    cientifico: "Apis mellifera",
    img: "https://images.unsplash.com/photo-1568526381923-caf3fd520382?auto=format&fit=crop&w=800&q=80",
    resumen:
      "Principal polinizadora de cultivos en Nicaragua. Produce miel y polen, y es clave para café, cacao y frutas.",
    descripcion:
      "Introducida en América hace siglos, la abeja melífera es hoy indispensable para la agricultura nicaragüense. Una sola colmena puede visitar millones de flores al año. Sus principales amenazas son el uso de plaguicidas, la pérdida de hábitat y enfermedades como la varroa.",
    datos: ["Poliniza más de 80 variedades de cultivos", "Produce miel, cera y propóleo", "Vive en colmenas organizadas"],
    plantas: ["girasol", "cafe", "cacao", "buganvilla", "cempasuchil"],
  },
  {
    id: "abejorro",
    nombre: "Abejorro",
    cientifico: "Bombus spp.",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Zinnia_elegans_with_Bombus_01.JPG?width=800",
    resumen:
      "Especialista en polinización por vibración. Beneficia tomate, frijol y berries en las tierras altas.",
    descripcion:
      "Los abejorros realizan la 'polinización por zumbido': agitan las flores para liberar el polen. Son especialmente efectivos en cultivos de altura como los de Matagalpa y Jinotega. Prefieren climas frescos y bosques de neblina con abundancia de flores silvestres.",
    datos: ["Polinizan aunque haga frío", "Su tongue largo alcanza flores tubulares", "Anidan en el suelo o entre vegetación"],
    plantas: ["lavanda", "girasol", "maiz", "coralillo"],
  },
  {
    id: "monarca",
    nombre: "Mariposa monarca",
    cientifico: "Danaus plexippus",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Monarch_Butterfly_Danaus_plexippus_on_Echinacea_purpurea_2800px.jpg?width=800",
    resumen:
      "Migrante de América del Norte que atraviesa Nicaragua. Poliniza flores silvestres en su ruta.",
    descripcion:
      "Cada año millones de monarcas migran desde Canadá y Estados Unidos hasta los bosques mexicanos, pasando por Nicaragua. Durante su recorrido se alimentan del néctar de flores silvestres, contribuyendo a la polinización de especies nativas. La pérdida de hábitat en las rutas migratorias amenaza su viaje.",
    datos: ["Migra más de 4,000 kilómetros", "Se alimenta de néctar de flores silvestres", "Anida en la buganvilla y otras enredaderas"],
    plantas: ["buganvilla", "cempasuchil", "coralillo", "girasol"],
  },
  {
    id: "colibri",
    nombre: "Colibrí",
    cientifico: "Archilochus colubris y spp. locales",
    img: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=800&q=80",
    resumen:
      "Ave polinizadora que visita flores tubulares. Es clave para la flor de izote y el coralillo.",
    descripcion:
      "Los colibríes son las únicas aves capaces de volar sostenidamente hacia atrás. Al insertar su pico en flores tubulares para beber néctar, transportan polen de una planta a otra. En Nicaragua se les encuentra desde zonas bajas hasta bosques montanos, siempre cerca de flores de tubo largo.",
    datos: ["Su metabolismo exige néctar casi continuo", "Puede visitar cientos de flores por día", "Prefieren flores rojas y anaranjadas"],
    plantas: ["izote", "coralillo", "buganvilla", "lavanda"],
  },
  {
    id: "escarabajo",
    nombre: "Escarabajos polinizadores",
    cientifico: "Coleóptera (diversas familias)",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Trichius_fasciatus_-_Succisa_pratensis_-_Keila.jpg?width=800",
    resumen:
      "Los polinizadores más antiguos. Visitan flores abiertas como girasoles y participan en la polinización del cacao.",
    descripcion:
      "Los escarabajos polinizan desde hace más de 100 millones de años, antes de que existieran las abejas. Se alimentan de polen y néctar de flores abiertas y aromáticas. En zonas cálidas de Nicaragua se asocian con la polinización de árboles frutales y del cacao, cultivo emblemático de la costa caribeña.",
    datos: ["Polinizan flores abiertas y poco ornamentales", "Muchos viven en suelos sanos y hojarasca", "Sensibles a plaguicidas y monocultivos"],
    plantas: ["cacao", "girasol", "maiz", "cafe"],
  },
  {
    id: "abeja-mariola",
    nombre: "Abeja mariola (sin aguijón)",
    cientifico: "Melipona beecheii y Tetragonisca angustula",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Melipona_beecheii_-_Flickr_-_gailhampshire.jpg?width=800",
    resumen:
      "Abeja nativa sin aguijón, criada desde la época maya. Poliniza café, cacao y frutales del trópico.",
    descripcion:
      "Las abejas mariolas son nativas de Mesoamérica y no poseen aguijón funcional, por lo que pueden manejarse cerca de viviendas y escuelas. Viven en colonias pequeñas dentro de troncos huecos. Su tamaño reducido les permite entrar en flores que la abeja melífera no alcanza, mejorando el cuajado de café y cacao. Su miel es muy valorada y medicinal.",
    datos: ["Nativa y sin aguijón, fácil de manejar", "Poliniza flores pequeñas y profundas", "Miel apreciada por su valor medicinal"],
    plantas: ["cafe", "cacao", "buganvilla", "coralillo"],
  },
  {
    id: "mariposa-julia",
    nombre: "Mariposa Julia",
    cientifico: "Dryas iulia",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Julia_(Dryas_iulia_nudeloa)_male.JPG?width=800",
    resumen:
      "Mariposa anaranjada de vuelo rápido, común en patios y bordes de bosque. Visita flores rojas todo el año.",
    descripcion:
      "La mariposa Julia abunda en las tierras cálidas de Nicaragua. Su larga trompa le permite libar néctar de corolas profundas, y con sus patas transporta polen entre flores. Sus orugas se alimentan de plantas del género Passiflora (calala), por lo que setos con estas enredaderas favorecen su ciclo de vida completo.",
    datos: ["Activa durante todo el año en climas cálidos", "Su trompa larga alcanza flores tubulares", "Sus orugas dependen de las pasifloras"],
    plantas: ["coralillo", "buganvilla", "cempasuchil"],
  },
  {
    id: "polilla-esfinge",
    nombre: "Polilla colibrí (esfinge)",
    cientifico: "Hyles lineata y esfíngidos spp.",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Hyles_lineata.jpg?width=800",
    resumen:
      "Polilla de vuelo suspendido que poliniza de noche. Clave para la flor de izote y flores blancas.",
    descripcion:
      "La polilla esfinge o 'colibrí de noche' liba néctar mientras queda suspendida en el aire, igual que un colibrí. Trabaja cuando oscurece, polinizando flores blancas y aromáticas que abren al anochecer, como el izote. Es un polinizador nocturno fundamental, poco visible pero muy eficaz en jardines y huertos.",
    datos: ["Poliniza de noche y al atardecer", "Vuela suspendida como un colibrí", "Prefiere flores blancas y fragantes"],
    plantas: ["izote", "lavanda", "coralillo"],
  },
  {
    id: "mosca-flores",
    nombre: "Moscas de las flores (sírfidos)",
    cientifico: "Familia Syrphidae",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Syrphidae_on_Carduus_defloratus.jpg?width=800",
    resumen:
      "Moscas que imitan a las abejas. Polinizan flores abiertas y sus larvas devoran pulgones.",
    descripcion:
      "Los sírfidos son moscas inofensivas con rayas amarillas y negras que las hacen parecer abejas o avispas. Los adultos polinizan flores abiertas como girasoles y cempasúchil, mientras sus larvas se alimentan de pulgones, convirtiéndolas en aliadas del control biológico en huertos y jardines escolares.",
    datos: ["Adultos polinizadores, larvas depredadoras", "Imitan a abejas para protegerse", "Reducen pulgones sin insecticidas"],
    plantas: ["girasol", "cempasuchil", "maiz", "lavanda"],
  },
  {
    id: "murcielago-nectar",
    nombre: "Murciélago polinizador",
    cientifico: "Glossophaga soricina y spp. nectarívoros",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Glossophaga_soricina.jpg?width=800",
    resumen:
      "El único mamífero polinizador frecuente. Visita de noche flores grandes como la flor de murciélago.",
    descripcion:
      "Los murciélagos nectarívoros tienen lengua larga y velluda para lamer néctar de flores grandes, blancas o verdosas que abren de noche. Son polinizadores esenciales de cactus, agaves y de la flor de murciélago (Bauhinia). Sus refugios en cuevas y árboles huecos deben protegerse, pues una sola colonia poliniza grandes extensiones.",
    datos: ["Polinizan de noche flores grandes", "Su lengua larga lame el néctar", "Clave para cactus, agaves y bauhinia"],
    plantas: ["flor-murcielago", "izote", "cacao"],
  },
  {
    id: "avispa-higos",
    nombre: "Avispa de los higos",
    cientifico: "Familia Agaonidae",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Agaonidae_2019_10_10_10_17_37_3249b.jpg?width=800",
    resumen:
      "Pequeña avispa que poliniza exclusivamente a los higos. Sin ella, no habría frutos.",
    descripcion:
      "Cada especie de higuera tiene su propia avispa polinizadora: una relación de mutualismo de millones de años. La avispa hembra entra al fruto para depositar sus huevos y, al hacerlo, transporta el polen. Los higos silvestres son un recurso de alimento que sostiene a aves, monos y murciélagos en los bosques tropicales de Nicaragua.",
    datos: ["Relación exclusiva avispa–higuera", "Poliniza el higo desde su interior", "Los frutos alimentan a fauna silvestre"],
    plantas: ["higo"],
  },
];

const PLANTAS = [
  {
    id: "buganvilla",
    nombre: "Buganvilla",
    cientifico: "Bougainvillea spectabilis",
    img: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=800&q=80",
    resumen:
      "Enredadera resistente a la sequía, ideal para muros y patios. Atrae monarcas y colibríes.",
    descripcion:
      "Muy común en ciudades nicaragüenses, la buganvilla no requiere riego constante y florece casi todo el año. Sus brácteas coloridas esconden flores pequeñas ricas en néctar. Es perfecta para jardines urbanos y muros perimetrales de escuelas y parques.",
    cuidados: ["Pleno sol", "Riego moderado", "Poda ligera después de floración"],
    beneficios: ["Resistente a sequía", "Florece casi todo el año", "Cobertura viva para muros"],
    polinizadores: ["monarca", "colibri", "abeja-mielifera"],
  },
  {
    id: "izote",
    nombre: "Flor de izote",
    cientifico: "Yucca gigantea",
    img: "https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?auto=format&fit=crop&w=800&q=80",
    resumen:
      "Flor nacional de Nicaragua. Sus flores blancas alimentan a colibríes y polillas nocturnas.",
    descripcion:
      "El izote es un símbolo nacional y también un alimento: sus flores se cocinan en nacatamales y guisos. Florece en épocas secas, cuando otras fuentes de néctar escasean, lo que la convierte en un recurso vital para los polinizadores. Las hojas jóvenes se usan como forraje y fibra.",
    cuidados: ["Sol directo", "Muy resistente a sequía", "Suelo bien drenado"],
    beneficios: ["Alimento humano y animal", "Néctar en época seca", "Cero mantenimiento"],
    polinizadores: ["colibri", "escarabajo"],
  },
  {
    id: "girasol",
    nombre: "Girasol",
    cientifico: "Helianthus annuus",
    img: "https://images.unsplash.com/photo-1470509037663-253afd7f0f51?auto=format&fit=crop&w=800&q=80",
    resumen:
      "Flor alta y vistosa, fuente intensa de polen para abejas y abejorros.",
    descripcion:
      "El girasol produce enormes cantidades de polen y néctar, por lo que se siembra como planta compañera en huertos para atraer polinizadores y reducir plagas. Sus semillas alimentan a aves y se pueden tostar como alimento humano.",
    cuidados: ["Sol pleno", "Riego regular", "Suelo profundo"],
    beneficios: ["Alta producción de polen", "Planta compañera de huertos", "Semillas comestibles"],
    polinizadores: ["abeja-mielifera", "abejorro", "monarca", "escarabajo"],
  },
  {
    id: "cempasuchil",
    nombre: "Cempasúchil",
    cientifico: "Tagetes erecta",
    img: "https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=800&q=80",
    resumen:
      "Flor del Día de los Difuntos, usada también como planta insecticida natural en huertos.",
    descripcion:
      "El cempasúchil es esencial en las tradiciones nicaragüenses del primero de noviembre. Además de su valor cultural, sus raíces liberan sustancias que disuaden a nematodos del suelo, y su néctar atrae abejas y mariposas. Se cultiva fácilmente en macetas y jardines familiares.",
    cuidados: ["Sol o media sombra", "Riego moderado", "Suelo fértil"],
    beneficios: ["Valor cultural", "Control natural de plagas del suelo", "Atrae mariposas"],
    polinizadores: ["monarca", "abeja-mielifera", "abejorro"],
  },
  {
    id: "cafe",
    nombre: "Café",
    cientifico: "Coffea arabica",
    img: "https://images.unsplash.com/photo-1524350876685-274059332603?auto=format&fit=crop&w=800&q=80",
    resumen:
      "Cultivo emblemático de Matagalpa y Jinotega. Su floración depende de abejas nativas.",
    descripcion:
      "La flor blanca del café dura solo uno o dos días y su polinización determina el tamaño y uniformidad del grano. Estudios en las tierras altas de Nicaragua muestran que donde hay más polinizadores silvestres, la productividad del café mejora. Proteger linderos con flores nativas beneficia directamente a las familias cafetaleras.",
    cuidados: ["Sombra parcial", "Suelos volcánicos", "Lluvias regulares"],
    beneficios: ["Polinización mejora el rendimiento", "Sombra con árboles de servicio", "Base de la economía rural"],
    polinizadores: ["abeja-mielifera", "escarabajo", "abejorro"],
  },
  {
    id: "cacao",
    nombre: "Cacao",
    cientifico: "Theobroma cacao",
    img: "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=800&q=80",
    resumen:
      "Árbol de la costa caribeña cuyas pequeñas flores son polinizadas por escarabajos y moscas.",
    descripcion:
      "Las flores del cacao son diminutas y crecen directamente en el tronco (caulifloria). Solo insectos pequeños, como escarabajos y ceratopogónidos, las polinizan con éxito. Sin estos polinizadores no hay mazorcas ni chocolate. Plantar coberturas y evitar insecticidas en las fincas de cacao es fundamental.",
    cuidados: ["Humedad alta", "Sombra de dosel", "Suelos profundos"],
    beneficios: ["Cultivo de alto valor", "Tolerante a sombra", "Base de chocolate y bebidas"],
    polinizadores: ["escarabajo", "abeja-mielifera"],
  },
  {
    id: "lavanda",
    nombre: "Lavanda",
    cientifico: "Lavandula angustifolia",
    img: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?auto=format&fit=crop&w=800&q=80",
    resumen:
      "Aromática de flores moradas muy atractiva para abejas; apta para macetas en zonas frescas.",
    descripcion:
      "La lavanda es una planta de clima fresco que rinde bien en las zonas altas de Estelí, Madriz y Jinotega. Es una de las flores preferidas de las abejas para producir miel monofloral. También se usa como repelente natural de polillas y en artesanías locales.",
    cuidados: ["Sol pleno", "Riego escaso", "Suelo bien drenado"],
    beneficios: ["Miel monofloral", "Repelente natural", "Uso artesanal y medicinal"],
    polinizadores: ["abeja-mielifera", "abejorro", "colibri"],
  },
  {
    id: "coralillo",
    nombre: "Coralillo",
    cientifico: "Hamelia patens",
    img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80",
    resumen:
      "Arbusto de flores tubulares rojas, favorito de los colibríes en zonas bajas y medianas.",
    descripcion:
      "El coralillo, conocido también como flor de coral, florece casi todo el año en tierras cálidas. Sus flores tubulares están diseñadas para colibríes y mariposas de trompa larga. Crece rápido con poco cuidado, lo que lo hace ideal para setos vivos en escuelas y parques comunales.",
    cuidados: ["Sol o media sombra", "Riego moderado", "Crece rápido"],
    beneficios: ["Floración continua", "Seto vivo de bajo costo", "Refugio para aves pequeñas"],
    polinizadores: ["colibri", "monarca", "abejorro"],
  },
  {
    id: "maiz",
    nombre: "Maíz",
    cientifico: "Zea mays",
    img: "https://images.unsplash.com/photo-1462530260150-162092dbf011?auto=format&fit=crop&w=800&q=80",
    resumen:
      "Cultivo base de la alimentación nicaragüense; los escarabajos y el viento lo polinizan.",
    descripcion:
      "El maíz es polinizado principalmente por el viento, pero la presencia de insectos en los linderos mejora la salud del cultivo y reduce plagas. Las milpas tradicionales nicaragüenses combinan maíz, frijol y calabaza: un sistema que a su vez alberga gran diversidad de polinizadores silvestres.",
    cuidados: ["Sol pleno", "Riego en floración", "Asociación con frijol"],
    beneficios: ["Base alimentaria", "Sistema milpa tradicional", "Asociación con otras especies"],
    polinizadores: ["escarabajo", "abejorro", "mosca-flores"],
  },
  {
    id: "flor-murcielago",
    nombre: "Flor de murciélago",
    cientifico: "Bauhinia monandra",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Bauhinia_monandra.jpg?width=800",
    resumen:
      "Árbol de flores abiertas y aromáticas, polinizado por murciélagos y abejas grandes al anochecer.",
    descripcion:
      "La Bauhinia, conocida como flor de murciélago por la forma de sus pétalos, abre sus flores al caer la tarde y libera un aroma que atrae murciélagos y polillas. Sus hojas bilobuladas son inconfundibles. Se usa en parques y bulevares y ofrece sombra ligera mientras alimenta a la fauna nocturna.",
    cuidados: ["Sol pleno", "Riego moderado", "Poda de formación"],
    beneficios: ["Alimenta fauna nocturna", "Sombra ligera para patios", "Flores aromáticas vistosas"],
    polinizadores: ["murcielago-nectar", "abeja-mielifera", "polilla-esfinge"],
  },
  {
    id: "higo",
    nombre: "Higuera",
    cientifico: "Ficus carica",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Fig_(Ficus_carica)_fruit_halved.jpg?width=800",
    resumen:
      "Árbol frutal polinizado por diminutas avispas. Sus higos alimentan a aves y murciélagos.",
    descripcion:
      "La higuera produce frutos dulces y nutritivos que maduran en poco tiempo. Su polinización depende de pequeñas avispas que entran al fruto en una relación exclusiva de millones de años. Además de dar alimento humano, los higos sostienen a aves frugívoras y murciélagos, por lo que es un árbol clave en corredores biológicos.",
    cuidados: ["Sol pleno", "Riego moderado", "Tolera poda fuerte"],
    beneficios: ["Fruto nutritivo y de rápido cultivo", "Alimento para aves y murciélagos", "Árbol de corredor biológico"],
    polinizadores: ["avispa-higos", "murcielago-nectar"],
  },
];

const ZONAS = [
  { id: 1, nombre: "Managua", lat: 12.1364, lng: -86.2514, jardines: 45, progreso: 82, nivel: "alto",
    detalle: "Jardines en escuelas, parques y techos verdes. Alianza con la alcaldía y universidades." },
  { id: 2, nombre: "León", lat: 12.4357, lng: -86.8776, jardines: 32, progreso: 74, nivel: "alto",
    detalle: "Huertos polinizadores en barrios históricos y fincas de caña y hortalizas." },
  { id: 3, nombre: "Granada", lat: 11.9344, lng: -85.9560, jardines: 28, progreso: 68, nivel: "medio",
    detalle: "Corredores florales en Isletas y parques coloniales con especies nativas." },
  { id: 4, nombre: "Matagalpa", lat: 12.9256, lng: -85.9176, jardines: 40, progreso: 71, nivel: "alto",
    detalle: "Linderos de café con izote, coralillo y bugs nativos en fincas familiares." },
  { id: 5, nombre: "Jinotega", lat: 13.0917, lng: -85.9997, jardines: 36, progreso: 69, nivel: "alto",
    detalle: "Jardines en beneficios de café y viveros comunitarios de flor de izote." },
  { id: 6, nombre: "Estelí", lat: 13.0919, lng: -86.3583, jardines: 18, progreso: 55, nivel: "medio",
    detalle: "Parcelas demostrativas de lavanda y cempasúchil en la meseta." },
  { id: 7, nombre: "Chinandega", lat: 12.6294, lng: -87.1311, jardines: 22, progreso: 48, nivel: "medio",
    detalle: "Jardines escolares y rondas de río con buganvilla y coralillo." },
  { id: 8, nombre: "Masaya", lat: 11.9736, lng: -86.0944, jardines: 20, progreso: 60, nivel: "medio",
    detalle: "Huertos familiares y corredores florales alrededor del lago de Apoyo." },
  { id: 9, nombre: "Rivas", lat: 11.4372, lng: -85.8258, jardines: 12, progreso: 35, nivel: "bajo",
    detalle: "Primeras pilotos en península de Rivas con recipientes reciclables reutilizados." },
  { id: 10, nombre: "Bluefields (RAAS)", lat: 11.9996, lng: -83.7666, jardines: 8, progreso: 22, nivel: "bajo",
    detalle: "Viveros de especies de la costa caribeña: cacao, coralillo y frutales nativos." },
];

const CONTENEDORES = [
  { id: "pet", nombre: "Botellas PET", usos: "Macetas colgantes, viveros y trampas de agua para riego lento" },
  { id: "tapas", nombre: "Tapas plásticas", usos: "Mosaicos artísticos en jardines escolares y marcadores de parcelas" },
  { id: "latas", nombre: "Latas de aluminio", usos: "Macetas pintadas y comederos para polinizadores" },
  { id: "tetrapak", nombre: "Tetra Pak", usos: "Semilleros y bandejas de germinación" },
  { id: "carton", nombre: "Cartón de huevo", usos: "Bandejas de siembra y compostaje casero" },
];
