window.addEventListener("load", function(){


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

         document.querySelector(".laFecha").innerHTML = '<p>Fecha de Estreno: '+ fecha + '</p>'
         document.querySelector(".puntosPeli").innerHTML = '<p>Puntuación: '+ puntos + '</p>'

         if (idioma == undefined) {
           document.querySelector(".generoDe").style.display = "none"
         }
         else {
           document.querySelector(".generoDe").innerHTML = '<p class=idioma>Lenguaje original: '+idioma+'</p>'
         }

         document.querySelector("#elVerMas").style.display = "block";
         document.querySelector("#vamos").style.display = "none";

       })
       .catch(function(error){
         console.log("Error" + error)
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






})

function favoritos(idPelicula){
  console.log(idPelicula);
  var idPelicula = this.getAttribute("idpelicula")
  //chequear que la sesion exista
  var usuarioEnSesion = window.sessionStorage.getItem("usuario")
  //si la session existe voy a bucar a mi session storage mis favoritos
  // y voy a buscar tener la informacion
  var json = window.sessionStorage.getItem("favoritos")
  var arrayFavoritosEnSesion = JSON.parse(json)
  console.log(arrayFavoritosEnSesion);

  if (usuarioEnSesion === null ) {
    console.log("no hay sesion activa");
    document.querySelector("#miPerro").style.display = "none"
    document.querySelector(".alert-info").style.display = "block"
    //Alerta
  } else {
    document.querySelector(".alert-info").style.display = "none"
    //chequeo si la pelicula esta, si no esta la agrego y si esta la saco

  if (arrayFavoritosEnSesion === undefined || arrayFavoritosEnSesion === null) {
      var arrayFavoritos = []
      arrayFavoritos.push(id)
      window.sessionStorage.setItem("favoritos",JSON.stringify(arrayFavoritos))
      console.log(arrayFavoritos);
      //si no esta el boton se queda en agregar a favoritos sino cambia a quitar de favoritos
    }else{
      arrayFavoritosEnSesion.push(idPelicula)
      window.sessionStorage.setItem("favoritos",JSON.stringify(arrayFavoritosEnSesion))
      console.log(arrayFavoritosEnSesion);
      // console.log(JSON.parse(window.sessionStorage.setItem("favoritos"(arrayFavoritosEnSesion))))
      // arrayFavoritosEnSesion corregir esto, aqui debe ser un array
      if (arrayFavoritosEnSesion.indexOf[idPelicula] == -1 ){
        // indexof para checkear que no este en el array
        arrayFavoritosEnSesion.push(idPelicula)
        window.sessionStorage.setItem("favoritos",JSON.stringify(arrayFavoritosEnSesion))
      } else {
        document.querySelector("#miPerro").innerHTML = "Quitar de Favoritos"
        arrayFavoritosEnSesion.splice(idPelicula)
        window.sessionStorage.setItem("favoritos",JSON.stringify(arrayFavoritosEnSesion))
      }

    }
  }
}
