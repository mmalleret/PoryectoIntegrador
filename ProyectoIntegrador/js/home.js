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
   .then(function (respuesta){
     return respuesta.json()
   })
   .then(function(informacion){
     console.log(informacion);
     for(i=0; i<12; i++){
       var url=informacion.results[i].poster_path
       console.log(url);
     if (i == 0) {
       document.querySelector("#carrousel-populares").innerHTML += '<li><div><img src="https://image.tmdb.org/t/p/original'+ url+'"></div></li>'
      }else {
        document.querySelector("#carrousel-populares").innerHTML += '<li><div><img src="https://image.tmdb.org/t/p/original'+url+'"></div></li>'
      }
     }
   })
    .catch(function(error){
      console.log("Error" + error)
   })

//API peliculas mejores rankeadas//
fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=9fe1abda2acd785b6fc8d949de634904&language=en-US&page=1")
  .then(function (respuesta){
    return respuesta.json()
  })
  .then(function(informacion){
    console.log(informacion);
    for(i=0; i<12; i++){
      var url=informacion.results[i].poster_path
      console.log(url);
    if (i == 0) {
      document.querySelector("#carrousel-puntuadas").innerHTML += '<li><div><img src="https://image.tmdb.org/t/p/original'+ url+'"></div></li>'
     }else {
       document.querySelector("#carrousel-puntuadas").innerHTML += '<li><div><img src="https://image.tmdb.org/t/p/original'+url+'"></div></li>'
     }
    }
  })
   .catch(function(error){
     console.log("Error" + error)
  })

 // //API proximos estrenos//
 fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=9fe1abda2acd785b6fc8d949de634904&language=en-US&page=1")
   .then(function (respuesta){
     return respuesta.json()
   })
   .then(function(informacion){
     console.log(informacion);
     for(i=0; i<12; i++){
       var url=informacion.results[i].poster_path
       console.log(url);
     if (i == 0) {
       document.querySelector("#carrousel-estrenos").innerHTML += '<li><div><img src="https://image.tmdb.org/t/p/original'+ url+'"></div></li>'
      }else {
        document.querySelector("#carrousel-estrenos").innerHTML += '<li><div><img src="https://image.tmdb.org/t/p/original'+url+'"></div></li>'
      }
     }
   })
    .catch(function(error){
      console.log("Error" + error)
   })



}
