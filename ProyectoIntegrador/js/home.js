window.onload = function(){
   fetch("https://api.themoviedb.org/3/genre/movie/list?language=en-US&api_key=9fe1abda2acd785b6fc8d949de634904")
   .then(function(respuesta){
     return respuesta.json()
   })
   .then(function(informacion){
       console.log(informacion);
       var titulo=informacion.data.title
       var url=informacion.data.poster_path

       document.querySelector("carrousel").innerHTML += "<article><h2>" + titulo + "</h2><img src='" + url +  "'></article>"

   })
   .catch(function(error){
     console.log("Error" + error)
   })
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







}
