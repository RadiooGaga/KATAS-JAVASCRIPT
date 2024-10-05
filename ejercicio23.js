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

const shortMovie = [];
const mediumLengthMovie = [];
const longMovie = [];

for (const movie of movies){
  if (movie.durationInMinutes > 200){
    longMovie.push(movie);
  } else if (movie.durationInMinutes > 100) {
      mediumLengthMovie.push(movie);
    } else {
    shortMovie.push(movie);
  }
}


console.log("List of short movies",shortMovie);
console.log("List of medium length movies",mediumLengthMovie);
console.log("List of long movies",longMovie);

