
var idSeleccionadoParaValidar=0;

function actionRead(){
    $.ajax({
        url: "php/validar-constancias.php",
        method:'GET',
        data: {
          accion: 'Read'
        },
        success: function( resultado ) {
          var objetoJSON = JSON.parse(resultado);
          if(objetoJSON.estado==1){
                //Mostrar todos los registros de la base de datos en la tabla
                var tabla               = $('#example1').DataTable(); 
                
                for (var constancia of objetoJSON.constancias) 
                {
                  var botones             = '<a class="btn btn-warning btn-block btn-flat" data-toggle="modal" data-target="#modal-accion" onclick="recuperaDatosValidarConstancia('+constancia.id+');" href="#">';
                      botones=botones+'<i class="fas fa-tasks">';
                      botones=botones+'</i>';
                      botones=botones+'</a>';
              
                    tabla.row.add( [
                        constancia.programa,
                        constancia.nombre,
                        constancia.actividad,
                        constancia.horas,
                        botones
                    ] ).node().id = 'renglon_'+constancia.id;
                    
                    tabla.draw( false );
                }
            }else{
                
            }
        }
    });
}

function recuperaDatosValidarConstancia(id) {
  idSeleccionadoParaValidar=id;

  $.ajax({
      url: "php/validar-constancias.php",
      method:'GET',
      data: {
        id: idSeleccionadoParaValidar,
        accion       : 'Read'
      },
      success: function( resultado ) {
          var objetoJSON = JSON.parse(resultado);
          if(objetoJSON.estado==1){
              document.getElementById("nombre_validar").innerHTML=objetoJSON.nombre;
              $("#actividad_validar").val(objetoJSON.actividad);
              $("#fecha_inicio_validar").val(objetoJSON.fecha_inicio);
              $("#fecha_fin_validar").val(objetoJSON.fecha_fin);
              $("#horas_validar").val(objetoJSON.horas);
              $("#observaciones_validar").val(objetoJSON.observaciones);
          }else{
              alert(objetoJSON.mensaje);
          }
       
      }
  });
}

function accionValidarConstancia(){ //Actualizar la constancia
  //1. campos validar: -1, 
  //pero el encargado va a decir: 
  //valida = 1 o no valida = 0
  //2. campo: observaciones_encargado
  //3. campo: creditos
  //4. Campo: denominacion_id

  var valida_constancia  =$("#valida").val();
  var denominacion_constancia  =document.getElementById("denominacion").value;
  var observaciones_encargado_constancia  =document.getElementById("observaciones_encargado").value;

  $.ajax({
    url: "php/validar-constancias.php",
    method:'POST',
    data: {
      id: idSeleccionadoParaValidar, //1
      valida: valida_constancia, //2
      denominacion: denominacion_constancia,
      observaciones_encargado: observaciones_encargado_constancia, //3
      accion: 'Update'
    },
    success: function( resultado ) {
      alert(resultado);
        var objetoJSON = JSON.parse(resultado);
        
        if(objetoJSON.estado==1){
          
          var tabla = $('#example1').DataTable(); //referencia a la tabla 
          tabla.row( "#renglon_"+idSeleccionadoParaValidar).remove().draw(); //quitamos el renglon
          alert(objetoJSON.mensaje);  //mostrar mensaje
          $('#modal-accion').modal ('hide'); //cerrar ventana
        }else{
          alert(objetoJSON.mensaje);
        }
    }
  });
}

function accionRecuperarDenominaciones(){
  $.ajax({
    url: "php/CRUD-denominacion.php",
    method:"GET",
    data: {
      accion: 'Read'
    },
      success: function( Resultado ){
        var objetoJSON = JSON.parse(Resultado);
        if(objetoJSON.estado == 1){
                
          var denominaciones = $("#denominacion"); //pagina = select donde se despliegan las denominaciones

            for(var denominacion of objetoJSON.denominaciones){
                  //agregar las denominaciones en el Select
                  denominaciones.append('<option value="' + denominacion.id + '">' + denominacion.eje_tematico + ' / ' + denominacion.modalidad + '</option>'); //pagina
                }
        }else{
                //No nos interesa mostrar nada
        }
      }
  });
}
