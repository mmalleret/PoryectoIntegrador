window.onload = function(){

   // boton de busqueda//

   document.querySelector("form").onsubmit = function(e) {
     var buscadorInput = document.querySelector("input")

     if (buscadorInput.value.length < 3) {
       e.preventDefault()
       setTimeout('alert("Capo! minimo 3 caracteres")',3000)
     }}
   // var queryString = new URLSearchParams(location.search)
   //
   // var busco = queryString.get("buscador")
   //
   // fetch("https://api.giphy.com/v1/gifs/search?api_key=lp7wQ6914aPRmDI6HePRPpQeZXyxLFkU&q=" + busco + "&limit=25&offset=0&rating=G&lang=en")
   //   .then(function(respuesta) {
   //     return respuesta.json()
   //   })
   //   .then(function(informacion) {
   //     var arrayDeGifs = informacion.data
   //
   //     for (var i = 0; i < arrayDeGifs.length; i++) {
   //       var titulo =  arrayDeGifs[i].title
   //       var url = arrayDeGifs[i].images.original.url
   //       var id = arrayDeGifs[i].id
   //
   //       document.querySelector("div").innerHTML += "<p> <a href=detalleGif.html?idGif=" + id + ">" + titulo + "</a></p>"
   //       document.querySelector("div").innerHTML += "<img src=" + url + " >"
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
