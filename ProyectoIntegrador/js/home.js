window.onload = function(){

   // boton de busqueda//

   document.querySelector(".form-buscar").onsubmit = function(e) {
     var buscadorInput = document.querySelector("#buscador")
     if (buscadorInput.value.length < 3) {
       e.preventDefault()
       document.querySelector(".alert").style.display = "block"
       setTimeout(function() {
         document.querySelector(".alert").style.display = "none"
       },3000)
     }}
     // Boton buscador
   // var queryString = new URLSearchParams(location.search)
   //
   // var busco = queryString.get("#buscador")
   //
   // fetch("https://api.themoviedb.org/3/search/movie?api_key=9fe1abda2acd785b6fc8d949de634904&language=en-US&query="+ busco +"&page=1&include_adult=false")
   //   .then(function(respuesta) {
   //     return respuesta.json()
   //   })
   //   .then(function(informacion) {
   //     var arrayDePelis = informacion.results
   //
   //     for (var i = 0; i < arrayDePelis.length; i++) {
   //       var titulo =  arrayDePelis[i].title
   //       var url = arrayDePelis[i].poster_path
   //       var id = arrayDePelis[i].id
   //       var resumen = arrayDePelis[i].backdrop_path
   //
   //       document.querySelector(".peliculas").innerHTML += "<p> <a href=resultados.html?idPelis=" + id + ">" + titulo + "</a></p>"
   //       document.querySelector(".peliculas").innerHTML += "<img src=" + url + " >"
   //     }
   //   })
   //   .catch(function(error) {
   //     console.log("Error: " + error);
   //   })
 //API peliculas populares//
 fetch("https://api.themoviedb.org/3/movie/popular?api_key=9fe1abda2acd785b6fc8d949de634904&language=en-US&page=1")
 .then(function(respuesta){
   return respuesta.json()
 })
 .then(function(informacion){
     console.log(informacion);
     for(i=0; i<3; i++){
     var titulo=informacion.results[i].title
     var url=informacion.results[i].poster_path
     document.querySelector("#carrousel-populares").innerHTML += '<div id="peli'+i+'" class="carousel-item"><img src="https://image.tmdb.org/t/p/original/'+url+'" class="d-block w-100" alt=""><div class="carousel-caption d-none d-md-block"><h3>'+titulo+'</h3></div></div>'

     if (i == 0) {
       document.querySelector('#peli0').classList.add('active')
     }


   }
 })
 .catch(function(error){
   console.log("Error" + error)
 })






}
