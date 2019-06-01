window.onload = function(){
  var queryString = new URLSearchParams(window.location.search);

     var buscar = queryString.get("#buscaPelis");

     var url = "https://api.themoviedb.org/3/search/movie?api_key=9fe1abda2acd785b6fc8d949de634904&language=en-US&query="+ buscar +"&page=1&include_adult=false"

     fetch(url)

       .then(function(respuesta) {
         return respuesta.json()
       })
       .then(function(informacion) {
         console.log(informacion.results);
         var arrayDePelis = informacion.results

         for (var i = 0; i < arrayDePelis.length; i++) {
           var titulo =  arrayDePelis.[i].title
           var poster = arrayDePelis.[i].poster_path
           var id = arrayDePelis[i].id
           var resumen = arrayDePelis[i].backdrop_path

           document.querySelector(".pelis").innerHTML += "<p> <a href=resultados.html?idPelis=" + id + ">" + titulo + "</a></p>"
           document.querySelector(".pelis").innerHTML += "<img src=" + poster + " >"
         }
       })
       .catch(function(error) {
         console.log("Error: " + error);
       })
       // boton buscador //



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
}
