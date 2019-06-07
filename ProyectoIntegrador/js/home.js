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


 //API peliculas populares//
 fetch("https://api.themoviedb.org/3/movie/popular?api_key=9fe1abda2acd785b6fc8d949de634904&language=en-US&page=1")
   .then(function (respuesta){
     return respuesta.json()
   })
   .then(function(informacion){
     console.log(informacion.results);
     var arrayDePelis = informacion.results
     for(i=0; i<12; i++){
       var url=informacion.results[i].poster_path
       console.log(url);
       var titulo =  arrayDePelis[i].title
       var id = arrayDePelis[i].id
       var resumen = arrayDePelis[i].overview
       var fecha = arrayDePelis[i].release_date
       var puntos = arrayDePelis[i].vote_average
       if (i == 0) {
         document.querySelector("#carrousel-populares").innerHTML += '<li><div class="pelis"><a class= "poster" posArray="' + i + '" idPelicula="' + id + '"href="#modal-example" uk-toggle><img src="https://image.tmdb.org/t/p/original'+ url+'"></a></div></li>'
        }else {
          document.querySelector("#carrousel-populares").innerHTML += '<li><div class="pelis"><a class= "poster" posArray="' + i + '" idPelicula="' + id + '"href="#modal-example" uk-toggle><img src="https://image.tmdb.org/t/p/original'+url+'"></a></div></li>'
        }
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

//API peliculas mejores rankeadas//
fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=9fe1abda2acd785b6fc8d949de634904&language=en-US&page=1")
  .then(function (respuesta){
    return respuesta.json()
  })
  .then(function(informacion){
    console.log(informacion);
    var arrayDePelis = informacion.results
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
