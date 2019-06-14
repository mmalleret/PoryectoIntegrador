


window.addEventListener("load", function(){

  function favoritos(id){
    console.log(id);

    //chequear que la sesion exista
    var usuarioEnSesion = window.sessionStorage.getItem("usuario")
    if (usuarioEnSesion === null ) {
      console.log("no hay sesion activa");
      document.querySelector("#favoritos").style.display = "none"
      //Alerta
    } else {
      //chequeo si la pelicula esta, si no esta la agrego y si esta la saco

    if (favoritos!=null) {
      favoritos.push()
    }
      var arrayFavoritos =[]
      console.log(usuarioEnSesion);
      //si no esta el boton se queda en agregar a favoritos sino cambia a quitar de favoritos
    }


  }
favoritos()

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
        else if (nombre.value == "" && email.value==""){
        UIkit.notification({message: 'Dejaste el email vacio', status: 'danger'})
        UIkit.notification({message: 'No completaste tu nombre', status: 'danger'})
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
      if (localStorage.getItem("usuario") != null) {
      mostrarInfoLogin(localStorage.getItem("usuario"))
      var usuario = "usuario"
      }
      function mostrarInfoLogin(nombreUsuario) {
        var nuevo = document.querySelector ('.nombreDeUsuario')
        nuevo.innerHTML = "Bienvenido " +  nombreUsuario
        document.querySelector ("#botonLog").style.display = "none"
        document.querySelector(".favoritos").style.display = "block"

      }




  //boton favoritos
  var json = localStorage.getItem("favoritos")

  // Si ya habia favoritos..
  if (json != null) {
  // Desempaquetar el string JSON
  var objLit = JSON.parse(json)
  // De todo el objeto literal me interesa EL ARRAY
  var favoritos = objLit.carac
  } else {
    var favoritos = []
      // Si no habia creo el listado como VACIO
    }
    for (var i = 0; i < favoritos.length; i++) {
        var idPeli = favoritos[i]
          fetch('"https://api.themoviedb.org/3/movie/'+ idPeli +'?api_key=9fe1abda2acd785b6fc8d949de634904&language=en-US"')
          .then(function(respuesta) {
                return respuesta.json()
              })
          .then(function(peli) {
            pelicula = peli.results
            var titulo =  peli.title
            var url = peli.poster_path
            var id = peli.id

          document.querySelector("elBotonFavs").innerHTML += "<p> <a href=detalle.html?idPeli=" + id + ">" + titulo + "</a></p>"
            // Pregunto si el gif ya era favorito
          if (favoritos.indexOf(id) == -1) {
            // Si no era favorito digo "Queres agregarlo?"

            // OJO QUE COMO HAY MUCHOS BOTONES EL BOTON TIENE UNA REFERENCIA DEL idGif
          document.querySelector("elBotonFavs").innerHTML += "<button idPeli=" + id + " class='favorito'>Agregar a Favoritos</button><br>"
          } else {
            // Si ya era, digo "Queres quitarlo?"
          document.querySelector("elBotonFavs").innerHTML += "<button idPeli=" + id + " class='favorito'>Quitar de Favoritos</button><br>"
          }

          })
          .catch(function(error){
            console.log("Error" + error)
          })
          }







})
function favoritos(id){
  console.log(id);
  // window.sessionStorage.removeItem("favoritos")
  var arrayFavoritosEnSesion = JSON.parse(window.sessionStorage.getItem("favoritos"))
  console.log(arrayFavoritosEnSesion);
  //chequear que la sesion exista
  var usuarioEnSesion = window.sessionStorage.getItem("usuario")
  if (usuarioEnSesion === null ) {
    console.log("no hay sesion activa");
    document.querySelector("#favoritos").style.display = "none"
    //Alerta
  } else {
    //chequeo si la pelicula esta, si no esta la agrego y si esta la saco
    if (arrayFavoritosEnSesion === undefined || arrayFavoritosEnSesion === null) {
      var arrayFavoritos =[]
      arrayFavoritos.push(id)
      window.sessionStorage.setItem("favoritos",JSON.stringify(arrayFavoritos))
      console.log(arrayFavoritos);
      //si no esta el boton se queda en agregar a favoritos sino cambia a quitar de favoritos
    } else{
      arrayFavoritosEnSesion.push(id)
      console.log(arrayFavoritosEnSesion);
      console.log(JSON.parse(window.sessionStorage.setItem("favoritos",arrayFavoritosEnSesion)))
      // arrayFavoritosEnSesion corregir esto, aqui debe ser un array
      if (arrayFavoritosEnSesion.indexOf[id] ==-1 ){
        arrayFavoritosEnSesion.push(id)
        window.sessionStorage.setItem("favoritos",arrayFavoritosEnSesion)
      } else {
        arrayFavoritosEnSesion.remove(id)
      }
      // indexof para checkear que no este en el array

    }
  }


}
