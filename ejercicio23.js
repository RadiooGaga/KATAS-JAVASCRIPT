//Usa un bucle para crear 3 arrays de peliculas filtrados por categorias. 
//Pelicula pequeña, menos de 100 minutos, pelicula mediana, mas de 100 minutos 
//y menos de 200 y pelicula grande, mas de 200 minutos. Imprime cada array  
//por consola.

const movies = [
    { name: "Titan A.E.", durationInMinutes: 130 },//media
    { name: "Nightmare before Christmas", durationInMinutes: 225 },//larga
    { name: "Inception", durationInMinutes: 165 },//media
    { name: "The Lord of the Rings", durationInMinutes: 967 },//larga
    { name: "Star Wars: A New Hope", durationInMinutes: 214 },//larga
    { name: "Terminator", durationInMinutes: 140 },//media
  ];


  const shortFilm = [];
  const mediumFilm = [];
  const featureFilm = [];
  
  for (const movie of movies) {
    const duration = movie.durationInMinutes; // Acceder a la duración
  
    if (duration < 100) {
        shortFilm.push(movie);
    } else if (duration >= 100 && duration < 200) {
        mediumFilm.push(movie);
    } else if (duration >= 200) {
        featureFilm.push(movie);
    }
  
  }
  
  console.log("Short Films:", shortFilm);
  console.log("Medium Films:", mediumFilm);
  console.log("Feature Films:", featureFilm);

