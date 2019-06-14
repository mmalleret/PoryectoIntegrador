window.onload = function(){
function detallePelis( ){
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

}







}
