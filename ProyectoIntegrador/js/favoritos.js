window.addEventListener("load", function(){
//guardo el arrayDePelisFavoritas que esta en session storage
 arrayDePelisFavoritas= JSON.parse(window.sessionStorage.getItem("favorita"));
//chequeo que el array tenga por lo menos una peli favorita (un item)
 if (arrayDePelisFavoritas.length>0){
   //como arrayDePelisFavoritas es un
  for (var i=0; i < arrayDePelisFavoritas.length; i++){
  var url = "https://api.themoviedb.org/3/movie/" + arrayDePelisFavoritas[i] + "?api_key=11f88aad97603b2da806d195dbb8daed&language=en-US"
  var urlImg = "https://image.tmdb.org/t/p/original"
  fetch(url)
  .then(function(respuesta){
    return respuesta.json()
  })
  .then(function(informacion){
  console.log(informacion);
  var ul = document.querySelector("")
  var li;
  li="<li>"
  li+='<p>'+pelicula.title+'</p>'
  li+='<a href='+ +'></a>'
  li+='<img src="'+urlImg+pelicula.poster_path+'">'
  li+= "</li>"
  ul.innerHTML += li
  })





}
}
}
