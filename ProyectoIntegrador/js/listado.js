window.onload = function(){
  var queryString = new URLSearchParams(window.location.search);

     var genre = queryString.get("genero");

fetch("https://api.themoviedb.org/3/discover/movie?api_key=11f88aad97603b2da806d195dbb8daed&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=" + genre)
.then(function(respuesta){
  return respuesta.json()
})
.then(function(informacion){
    console.log(informacion);

    var arrayDePelis = informacion.results 
    for (var i = 0; i < arrayDePelis.length; i++) {
      var titulo =  arrayDePelis[i].title
      var poster = arrayDePelis[i].poster_path
      var id = arrayDePelis[i].id
      var resumen = arrayDePelis[i].overview
      var fecha = arrayDePelis[i].release_date
      var puntos = arrayDePelis[i].vote_average

      document.querySelector(".genero").innerHTML +='<div class="generos"><a class="poster" posArray="' + i + '" idPelicula="' + id + '" href="#modal-example" uk-toggle><img src="https://image.tmdb.org/t/p/original/'+ poster +'" width= "300px" alt=""></a></div>'

    }

})
.catch(function(error){
  console.log("Error" + error)
})
}
