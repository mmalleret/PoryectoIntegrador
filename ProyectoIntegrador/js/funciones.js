window.onload=function(){
  validando los datos de login//
      var login = document.querySelector(".formulario-login");
      var nombre = document.querySelector ("input[name="inputName"]");
      var email = document.querySelector("input[name="inpuEmail"]");
      login.onsubmit = function (event){
        if (nombre.value ==""){
          event.preventDefault();
        }
      }

//guardar los datos en el local storage//
    var usuario = document.getElementById("#exampleInputName").value;
    var datos = localStorage.getItem("nombre", usuario);

//mostrar los datos obtenidos//
    var nombre = localStorage.getItem ("Nombre");
    document.getElementById("#exampleInputName").innerHTML = "Bienvenido" + nombre

// //Boton de favoritos
// var json = localStorage.getItem("favoritos")
//
// // Si ya habia favoritos..
// if (json != null) {
//   // Desempaquetar el string JSON
//   var objLit = JSON.parse(json)
//
//   // De todo el objeto literal me interesa EL ARRAY
//   var favoritos = objLit.carac
//
// } else {
//   // Si no habia creo el listado como VACIO
//   var favoritos = []
// }
//
// for (var i = 0; i < favoritos.length; i++) {
//   var idPeli = favoritos[i]
//
//   fetch('"https://api.themoviedb.org/3/movie/'+ idPeli +'?api_key=9fe1abda2acd785b6fc8d949de634904&language=en-US"')
//     .then(function(respuesta) {
//       return respuesta.json()
//     })
//     .then(function(peli) {
//       pelicula = peli.results
//       var titulo =  peli.title
//       var url = peli.poster_path
//       var id = peli.id
//
//       document.querySelector("elBotonFavs").innerHTML += "<p> <a href=detalle.html?idPeli=" + id + ">" + titulo + "</a></p>"
//
//       // Pregunto si el gif ya era favorito
//       if (favoritos.indexOf(id) == -1) {
//         // Si no era favorito digo "Queres agregarlo?"
//         // OJO QUE COMO HAY MUCHOS BOTONES EL BOTON TIENE UNA REFERENCIA DEL idGif
//         document.querySelector("elBotonFavs").innerHTML += "<button idGif=" + id + " class='favorito'>Agregar a Favoritos</button><br>"
//       } else {
//         // Si ya era, digo "Queres quitarlo?"
//         document.querySelector("elBotonFavs").innerHTML += "<button idGif=" + id + " class='favorito'>Quitar de Favoritos</button><br>"
//       }
//
//       document.querySelector("elBotonFavs").innerHTML += "<img src=" + url + " >"
//     })
// }
//
//
// function botonMasMenos ( ){
// //Boton de ver mas y ver menos
//  document.querySelector("#vamos").onclick = function(e){
//    document.querySelector("#elVerMas").classList.toggle("display-none")
//    console.log(document.querySelector("#vamos").innerText);
//
// if (document.querySelector("#vamos").innerText == "VER MAS") {
//   document.querySelector("#vamos").innerHTML = 'Ver Menos'
//
// } else {
//   document.querySelector("#vamos").innerText = 'Ver mas'
//    }
//   }
//  }
// }
