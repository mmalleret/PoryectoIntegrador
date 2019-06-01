window.onload = function(){
fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=9fe1abda2acd785b6fc8d949de634904&language=en-US")
.then(function(respuesta){
  return respuesta.json()
})
.then(function(informacion){
    console.log(informacion);
    for(i=0; i<19; i++){
    var titulo=informacion.results[i].title
    var url=informacion.results[i].poster_path
    if (i == 0) {
      document.querySelector(".generos").innerHTML += ''+url+''+titulo+''

    } else {
      document.querySelector(".generos").innerHTML += ''+url+''+titulo+''

    }
  }
})
.catch(function(error){
  console.log("Error" + error)
})
}
