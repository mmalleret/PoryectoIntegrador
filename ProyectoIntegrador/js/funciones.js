window.onload=function(){
  //validando los datos de login//
      var login = document.querySelectir(".formulario-login");
      var nombre = document.querySelector ("input[name="inputName"]");
      login.onsubmit = function (event){
        if (nombre.value ==""){
          event.preventDefault();
        }
      }

//guardar los datos en el local storage//
    var nom= document.getElementById("#exampleInputName").value;
    var json = localStorage.getItem("nombre", nom);

//mostrar los datos obtenidos//
    var nombre = localStorage.getItem ("Nombre");
    document.getElementById("#exampleInputName").innerHTML = "Bienvenido" + nombre




}
