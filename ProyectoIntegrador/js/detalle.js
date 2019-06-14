window.addEventListener("load", function(){
  function detallePelis(informacion){
    console.log("funcion");
    var posters = document.querySelectorAll("#detalle")
    var arrayDePelis = informacion.results
      for (var i = 0; i < posters.length; i++) {
        posters[i].addEventListener("click", function() {
          id = this.getAttribute("idPelicula")
          pos = this.getAttribute("posArray")
          pelicula = arrayDePelis[pos]

          fecha = pelicula.release_date
          idioma = pelicula.original_languages
          video = pelicula.video
          recomendadas = pelicula.genre_ids
          puntos = pelicula.vote_average
          url = pelicula.poster_path


        document.querySelector(".laFecha").innerHTML = '<p>Fecha de Estreno: '+ fecha + '</p>'
        document.querySelector(".puntosPeli").innerHTML = '<p>Puntuación: '+ puntos + '</p>'
        if (idioma == undefined) {
          document.querySelector(".generoDe").style.display = "none"
        }
        else {
          document.querySelector(".generoDe").innerHTML = idioma
        }
        document.querySelector(".deVideo").innerHTML = '<video src="' + video + '" autoplay poster="posterimage.jpg"></video>'

      })

    }
  }

populares().onclick{
fetch("https://api.themoviedb.org/3/movie/popular?api_key=9fe1abda2acd785b6fc8d949de634904&language=en-US&page=1")
  .then(function (respuesta){
    return respuesta.json()
  })
  .then(function(informacion){
    console.log(informacion.results);
    var arrayDePelis = informacion.results
    for(i=0; i<12; i++){
      detallePelis(informacion)

    }


  })
   .catch(function(error){
     console.log("Error" + error)
  })
}


  estrenos("onclick"){
    fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=9fe1abda2acd785b6fc8d949de634904&language=en-US&page=1")
    .then(function (respuesta){
      return respuesta.json()
    })
    .then(function(informacion){
      console.log(informacion.results);
      var arrayDePelis = informacion.results
      for(i=0; i<12; i++){
        detallePelis(informacion)

      }


    })
     .catch(function(error){
       console.log("Error" + error)
    })
  }
  ratings().onclick{
    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=9fe1abda2acd785b6fc8d949de634904&language=en-US&page=1")
      .then(function (respuesta){
        return respuesta.json()
      })
      .then(function(informacion){
        console.log(informacion.results);
        var arrayDePelis = informacion.results
        for(i=0; i<12; i++){
          detallePelis(informacion)

        }


      })
       .catch(function(error){
         console.log("Error" + error)
      })
    }









})
