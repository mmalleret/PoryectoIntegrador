window.addEventListener("load", function(){

  function videoPelicula(){
    var urlParams = new URLSearchParams(window.location.search);
    var idPeliculas = urlParams.get("id");
    var urlTrailer = ""
    fetch("https://api.themoviedb.org/3/movie/" + idPeliculas + "/videos?api_key=11f88aad97603b2da806d195dbb8daed&language=en-US")
    .then(function(respuesta){
      return respuesta.json()
    })
    .then (function(data){
      console.log(data);
      console.log(data.status_code);
      var trailer = data.results[0].key
      urlTrailer = '<iframe width="560" height="315" src="https://www.youtube.com/embed/'+ trailer +'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>'
    })
    .catch(function(error){
      console.log(error);
      return console.log("Error" + error);
    })
    .catch(function(error){
      console.log("Error" + error)
    })
  }

  if (document.querySelector("#vamos") != null) {
     document.querySelector("#vamos").onclick = function() {
       var idPelicula = this.getAttribute("idpelicula")

       fetch("https://api.themoviedb.org/3/movie/" + idPelicula + "?api_key=11f88aad97603b2da806d195dbb8daed&language=en-US")
       .then(function(respuesta){
         return respuesta.json()
       })
       .then(function(pelicula){
         id = pelicula.id
         fecha = pelicula.release_date
         idioma = pelicula.original_language
         recomendadas = pelicula.genre_ids
         puntos = pelicula.vote_average
         url = pelicula.poster_path

        var arrayDeGeneros = pelicula.genres
        var generos =""
        for (var i=0; i< arrayDeGeneros.length; i++){
          generos+= arrayDeGeneros[i].name + " "
        }
         document.querySelector(".laFecha").innerHTML = '<p>Fecha de Estreno: '+ fecha + '</p>'
         document.querySelector(".puntosPeli").innerHTML = '<p>Puntuación: '+ puntos + '</p>'

         if (idioma == undefined) {
           document.querySelector(".generoDe").style.display = "none"
         }
         else {
           document.querySelector(".generoDe").innerHTML = '<p class=idioma>Lenguaje original: '+idioma+'</p>'
         }
         document.querySelector(".laLista").innerHTML = '<p class=laLista> Genero:<a href="listado.html?genero='+generos[i].id+'&nombre=' + generos[i].name + '">' + generos[i].name + '</a>'
         document.querySelector("#elVerMas").style.display = "block";
         document.querySelector("#vamos").style.display = "none";
         // document.querySelector("iframe").src += trailer

   })

     }
   }

//validando los datos de login//
  var login = document.querySelector("#singIn");
    login.onclick = function (event){
      event.preventDefault()
      var email = document.querySelector('input[name="inputEmail"]');
      var nombre = document.querySelector('input[name="inputName"]');
        if (email.value==""){
          UIkit.notification({message: 'Dejaste el email vacio', status: 'danger'})
        }
        else if (nombre.value=="") {
         UIkit.notification({message: 'No completaste tu nombre', status: 'danger'})
        }
        else if (nombre.value== "" && email.value==""){
        UIkit.notification({message: 'No completaste tu nombre', status: 'danger'})
        UIkit.notification({message: 'Dejaste el email vacio', status: 'danger'})
        }
        else {
          false
        }
//si los datos son correctos, guardarlos//
      if (nombre.value != "") {
          document.querySelector("#botonLog").click()
          window.localStorage.setItem("usuario", nombre.value)
          window.sessionStorage.setItem("usuario", nombre.value)
          mostrarInfoLogin(nombre.value)
          //cuando me logueo debo iniciar el array donde voy a guardar las pelis preferidas
          var arrayDePelisFavoritas = []
          console.log(arrayDePelisFavoritas);
        }
      }
//si el campo de login ya esta completo saludar al usuario//
      if (sessionStorage.getItem("usuario") != null) {
      mostrarInfoLogin(sessionStorage.getItem("usuario"))
      var usuario = "usuario"
      }
      function mostrarInfoLogin(nombreUsuario) {
        var nuevo = document.querySelector ('.nombreDeUsuario')
        nuevo.style.backgroundColor = "black"
        nuevo.innerHTML = "Bienvenido " +  nombreUsuario +'<i class="fas fa-user"></i>'
        document.querySelector ("#botonLog").style.display = "none"
        document.querySelector(".favoritos").style.display = "block"
      }


function favoritos(id){
  console.log(id);
  alert ("me clickearon")
  //primero reviso si hay alguna peli favorita en el array
  if (arrayDePelisFavoritas.indexOf(id)===-1){
  // en este caso no es favorita
  // pusheo el id dentro del array
    arrayDePelisFavoritas.push(id)
    //guardo en session el array, como es un objeto debo transformarlo a string
    window.sessionStorage.setItem("favorita",JSON.stringify(arrayDePelisFavoritas))
  } else{
    // esta peli ya es favorita, la saco del array
    arrayDePelisFavoritas.splice(arrayDePelisFavoritas.indexOf(id),1)
    //reemplazo el array que tenia la peli como favorita, por un array que ya no la tiene
    window.sessionStorage.setItem("favorita",JSON.stringify(arrayDePelisFavoritas))
  }

  console.log(id);
  console.log(JSON.parse(window.sessionStorage.getItem("favorita")))
  }



})
