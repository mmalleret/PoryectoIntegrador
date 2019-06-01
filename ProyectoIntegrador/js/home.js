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
     // var nombre = document.querySelector("#exampleInputName");
     //
     // if (document.querySelector("#singIn").onclick || document.querySelector("#segundoSign").onclick){
     //   var login = document.querySelector("#botonLog")
     //   login.style.disply= "none"
     //   var registro = document.querySelector("#botonRegist")
     //   resgitro.style.display= "none"
     //   document.querySelector(".login").innerHTML+= "Hi "
     //   document.querySelector(".login").innerHTML+= "<i class="fas fa-film"></i>" + nombre
     // } else {
     //   false}

     // Boton buscador
//    var queryString = new URLSearchParams(window.location.search);
//
//    var buscar = queryString.get("#buscador");
//
//    var url = "https://api.themoviedb.org/3/search/movie?api_key=9fe1abda2acd785b6fc8d949de634904&language=en-US&query="+ buscar +"&page=1&include_adult=false"
//
//    fetch(url)
//
//      .then(function(respuesta) {
//        return respuesta.json()
//      })
//      .then(function(informacion) {
//        console.log(informacion.results);
//        var arrayDePelis = informacion.results
//
//        for (var i = 0; i < arrayDePelis.length; i++) {
//          var titulo =  arrayDePelis[i].title
//          var url = arrayDePelis[i].poster_path
//          var id = arrayDePelis[i].id
//          var resumen = arrayDePelis[i].backdrop_path
//
//          document.querySelector(".peliculas").innerHTML += "<p> <a href=resultados.html?idPelis=" + id + ">" + titulo + "</a></p>"
//          document.querySelector(".peliculas").innerHTML += "<img src=" + url + " >"
//        }
//      })
//      .catch(function(error) {
//        console.log("Error: " + error);
//      })
//      // boton buscador //
//
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
     if (i == 0) {
       document.querySelector("#carrousel-populares").innerHTML += '<div class="carousel-item active"><img src="https://image.tmdb.org/t/p/original/'+url+'" class="d-block w-100" alt=""><div class="carousel-caption d-none d-md-block"><h3>'+titulo+'</h3></div></div>'

     } else {
       document.querySelector("#carrousel-populares").innerHTML += '<div class="carousel-item"><img src="https://image.tmdb.org/t/p/original/'+url+'" class="d-block w-100" alt=""><div class="carousel-caption d-none d-md-block"><h3>'+titulo+'</h3></div></div>'

     }
   }
 })
 .catch(function(error){
   console.log("Error" + error)
 })
//API peliculas mejores rankeadas//
 fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=9fe1abda2acd785b6fc8d949de634904&language=en-US&page=1")
 .then(function(respuesta){
   return respuesta.json()
 })
 .then(function(informacion){
     console.log(informacion);
     for(i=0; i<3; i++){
     var titulo=informacion.results[i].title
     var url=informacion.results[i].poster_path

     if (i == 0) {
       document.querySelector("#carrousel-puntuadas").innerHTML += '<div class="carousel-item active"><img src="https://image.tmdb.org/t/p/original/'+url+'" class="d-block w-100" alt=""><div class="carousel-caption d-none d-md-block"><h3>'+titulo+'</h3></div></div>'

     } else {
       document.querySelector("#carrousel-puntuadas").innerHTML += '<div class="carousel-item"><img src="https://image.tmdb.org/t/p/original/'+url+'" class="d-block w-100" alt=""><div class="carousel-caption d-none d-md-block"><h3>'+titulo+'</h3></div></div>'

     }
   }
 })
 .catch(function(error){
   console.log("Error" + error)
 })
 //API proximos estrenos//
 fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=9fe1abda2acd785b6fc8d949de634904&language=en-US&page=1")
 .then(function(respuesta){
   return respuesta.json()
 })
 .then(function(informacion){
     console.log(informacion);
     for(i=0; i<3; i++){
     var titulo=informacion.results[i].title
     var url=informacion.results[i].poster_path
     if (i == 0) {
       document.querySelector("#carrousel-estrenos").innerHTML += '<div class="carousel-item active"><img src="https://image.tmdb.org/t/p/original/'+url+'" class="d-block w-100" alt=""><div class="carousel-caption d-none d-md-block"><h3>'+titulo+'</h3></div></div>'

     } else {
       document.querySelector("#carrousel-estrenos").innerHTML += '<div class="carousel-item"><img src="https://image.tmdb.org/t/p/original/'+url+'" class="d-block w-100" alt=""><div class="carousel-caption d-none d-md-block"><h3>'+titulo+'</h3></div></div>'

     }
   }
 })
 .catch(function(error){
   console.log("Error" + error)
 })



}
