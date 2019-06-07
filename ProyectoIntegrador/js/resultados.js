window.onload = function(){
  var queryString = new URLSearchParams(window.location.search);

     var buscar = queryString.get("buscador");

     var url = "https://api.themoviedb.org/3/search/movie?api_key=9fe1abda2acd785b6fc8d949de634904&language=en-US&query="+ buscar +"&page=1&include_adult=false"

     fetch(url)

       .then(function(respuesta) {
         return respuesta.json()
       })
       .then(function(informacion) {
         console.log(informacion.results);
         var arrayDePelis = informacion.results

         for (var i = 0; i < arrayDePelis.length; i++) {
           var titulo =  arrayDePelis[i].title
           var poster = arrayDePelis[i].poster_path
           var id = arrayDePelis[i].id
           var resumen = arrayDePelis[i].overview
           var fecha = arrayDePelis[i].release_date
           var puntos = arrayDePelis[i].vote_average

           document.querySelector(".pelis").innerHTML +='<div class="pelis"><a class="poster" posArray="' + i + '" idPelicula="' + id + '" href="#modal-example" uk-toggle><img src="https://image.tmdb.org/t/p/original/'+ poster +'" width= "300px" alt=""></a></div>'

         }

         var posters = document.querySelectorAll(".poster")

         for (var i = 0; i < posters.length; i++) {
           posters[i].addEventListener("click", function() {
             id = this.getAttribute("idPelicula")
             pos = this.getAttribute("posArray")

             pelicula = arrayDePelis[pos]
             titulo = pelicula.title
             resumen = pelicula.overview

             document.querySelector(".titulo-pelicula").innerHTML = titulo
             document.querySelector(".resumen-pelicula").innerHTML = resumen
           })
         }
       })
       .catch(function(error) {
         console.log("Error: " + error);
       })

}
