export const books = [
  {
    id: 0,
    title: "Little Women",
    long_title: "-",
    authors: ["Tadae Hukizawa", "Louisa May Alcott"],
    edition: "Edición 25 Aniversario",
    synopsis:
      "As a New England mother struggles to support her family in the wake of her husband’s service in the Civil War, her four daughters struggle, too—caught between childhood dreams and the realities of burgeoning adulthood. For Meg, Jo, Beth, and Amy March, raised in integrity and virtue, negotiating the right path in life means making choices that will either narrow or expand their destinies. Based on the author’s life, Little Women transcends genre, gender, and class with its examination of personal quests, societal restrictions, family ties, and the end of innocence. AmazonClassics brings you timeless works from the masters of storytelling. Ideal for anyone who wants to read a great work for the first time or rediscover an old favorite, these new editions open the door to literature’s most unforgettable characters and beloved worlds. Revised edition: Previously published as Little Women, this edition of Little Women (AmazonClassics Edition) includes editorial revisions.",
    image: ["https://m.media-amazon.com/images/I/71i9TStgFaL._SL1500_.jpg"],
    pages: 566,
    language: "Inglés",
    publisher: "AmazonClassics",
    date_published: "2017-08-29T00:00:00.000Z",
    subjects: ["Comedia", "Novela", "Literatura infantil"],
  },
  {
    id: 1,
    title: "Padre Rico, Padre Pobre",
    long_title: "",
    authors: ["Robert T. Kiyosaki"],
    edition: "Edición 25 Aniversario",
    synopsis:
      "La edición de aniversario del libro de finanzas personales número 1 del mundo. El autor y conferencista Robert T. Kiyosaki desarrolló una perspectiva económica única a partir de la exposición que tuvo a dos influencias: su propio padre, altamente educado,  pero muy inestable y el padre multimillonario, sin educación universitaria, de su mejor amigo. Los problemas monetarios que su padre pobre experimentó toda la vida (con cheques mensuales muy respetables pero nunca suficientes) rompían con lo que le comunicaba su padre rico: que la clase pobre y la clase media trabajan por dinero, pero la clase alta hace que el dinero trabaje para ellos. Kiyosaki presenta la filosofía detrás de esta relación excepcional con el dinero.",
    image: ["https://m.media-amazon.com/images/I/81yWxFCRXgL._SL1500_.jpg"],
    pages: 400,
    language: "Español",
    publisher: "Aguilar",
    date_published: "2022-08-23T00:00:00.000Z",
    subjects: ["Finanzas personales", "No ficcion"],
  },
  {
    id: 2,
    title: "La canción de Aquiles",
    long_title: "De la autora de Circe, una epopeya inolvidable",
    authors: ["Madeline Miller"],
    edition: "Edición ",
    synopsis:
      "Grecia en la era de los héroes. Patroclo, un príncipe joven y torpe, ha sido exiliado al reino de Ftía, donde vive a la sombra del rey Peleo y su hijo divino, Aquiles. Aquiles, el mejor de los griegos, es todo lo que no es Patroclo: fuerte, apuesto, hijo de una diosa. Un día Aquiles toma bajo su protección al lastimoso príncipe y ese vínculo provisional da paso a una sólida amistad mientras ambos se convierten en jóvenes habilidosos en las artes de la guerra.Pero el destino nunca está lejos de los talones de Aquiles. Cuando se extiende la noticia del rapto de Helena de Esparta, se convoca a los hombres de Grecia para asediar la ciudad de Troya. Aquiles, seducido por la promesa de un destino glorioso, se une a la causa, y Patroclo, dividido entre el amor y el miedo por su compañero, lo sigue a la guerra. Poco podía imaginar que los años siguientes iban a poner a prueba todo cuanto habían aprendido y todo cuanto valoraban profundamente.",
    image: [
      "https://m.media-amazon.com/images/I/81ZotXBA5sL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81oduQY4mDL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/914YPNeigQL._SL1500_.jpg",
    ],
    pages: 392,
    language: "Español",
    publisher: "Alianza Editorial",
    date_published: "2021-03-04T00:00:00.000Z",
    subjects: ["Novela", "Ficcion historica", "Fantastico"],
  },
  {
    id: 3,
    title: "Hábitos atómicos",
    long_title:
      "Un método sencillo y comprobado para desarrollar buenos hábitos y eliminar los malos",
    authors: ["James Clear"],
    edition: "Autoconocimiento",
    synopsis:
      "A menudo pensamos que para cambiar de vida tenemos que pensar en hacer cambios grandes. Nada más lejos de la realidad. Según el reconocido experto en hábitos James Clear, el cambio real proviene del resultado de cientos de pequeñas decisiones: hacer dos flexiones al día, levantarse cinco minutos antes o hacer una corta llamada telefónica. Clear llama a estas decisiones “hábitos atómicos”: tan pequeños como una partícula, pero tan poderosos como un tsunami. En este libro innovador nos revela exactamente cómo esos cambios minúsculos pueden crecer hasta llegar a cambiar nuestra carrera profesional, nuestras relaciones y todos los aspectos de nuestra vida.",
    image: [
      "https://proassetspdlcom.cdnstatics2.com/usuaris/libros/thumbs/71b825a3-36b0-442b-8327-22f5a47a3d66/d_1200_1200/portada_habitos-atomicos_james-clear_202002111200.webp",
    ],
    pages: 336,
    language: "Español",
    publisher: "Diana",
    date_published: "2020-09-08T00:00:00.000Z",
    subjects: ["Motivación", "Autoayuda"],
  },
];

export const users = [
  {
    user_data: {
      id: 0,
      user_name: "juanperez",
      first_name: "Juan",
      last_name: "Perez",
      email: "juanperez@mail.com",
      birthday: "2000-08-29T00:00:00.000Z",
      image: "string",
    },
    config: {
      exchange_point: [
        {
          place_name: "Patio Olmos",
          latitude: "456789",
          longitude: "456789",
        },
      ],
      page_x_day: 2,
      favorite_subjects: ["Drama"],
    },
  },
  {
    user_data: {
      id: 2,
      user_name: "josepaz",
      first_name: "Jose",
      last_name: "Paz",
      email: "josepaz@mail.com",
      birthday: "1979-08-29T00:00:00.000Z",
      image: "string",
    },
    config: {
      exchange_point: [
        {
          place_name: "Patio Olmos",
          latitude: "456789",
          longitude: "456789",
        },
      ],
      page_x_day: 10,
      favorite_subjects: ["Action"],
    },
  },
];
