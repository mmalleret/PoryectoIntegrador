window.onload = function(){
  var queryString = new URLSearchParams(window.location.search);

     var genre = queryString.get("genero");

     var namegenre = queryString.get("nombre");

     document.querySelector("main h2").innerHTML += namegenre + ' Movies'

fetch("https://api.themoviedb.org/3/discover/movie?api_key=11f88aad97603b2da806d195dbb8daed&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=" + genre)
.then(function(respuesta){
  return respuesta.json()
})
.then(function(informacion){
    console.log(informacion);

    var arrayDePelis = informacion.results
    for (var i = 0; i < arrayDePelis.length; i++) {
      var titulo =  arrayDePelis[i].title
      var url = arrayDePelis[i].poster_path
      var id = arrayDePelis[i].id
      var resumen = arrayDePelis[i].overview
      var fecha = arrayDePelis[i].release_date
      var puntos = arrayDePelis[i].vote_average

      document.querySelector(".noMeFunciona").innerHTML +='<div class="general"><a class="poster" posArray="' + i + '" idPelicula="' + id + '" href="#modal-example" uk-toggle><img src="https://image.tmdb.org/t/p/original/'+ url +'" width="300px"></a></div>'
    }
    var posters = document.querySelectorAll(".poster")

    for (var i = 0; i < posters.length; i++) {
      posters[i].addEventListener("click", function() {
        id = this.getAttribute("idPelicula")
        pos = this.getAttribute("posArray")

        pelicula = arrayDePelis[pos]
        titulo = pelicula.title
        resumen = pelicula.overview

        document.querySelector(".el-titular").innerHTML = titulo
        document.querySelector(".el-resumen").innerHTML = resumen
        })
    }
    })

.catch(function(error){
  console.log("Error" + error)
})
fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=11f88aad97603b2da806d195dbb8daed&language=en-US")

.then(function(infoGenero){
   return infoGenero.json()
})







}
