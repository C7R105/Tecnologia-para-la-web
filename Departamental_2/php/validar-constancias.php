<?php 
//Modelo
include("conexion.php");

if(isset($_POST['accion']))
    $accion                 = $_POST['accion'];
if(isset($_GET['accion']))    
    $accion                 = $_GET['accion'];

switch ($accion) {
    case 'Read':
        accionReadPHP($conexion);
        break;
    case 'Update':
        accionUpdatePHP($conexion);//Para validar las constancias
        break;        
    default:
        # code...
        break;
}

function  accionReadPHP($conexion){
    $Respuesta = array(); //Arreglo 1

    if(isset($_GET['id'])){
        //Solo quiere una constancia
        $id=$_GET['id'];
        
        $Query=" SELECT c.id, a.nombre, a.programa, c.actividad, c.horas, c.fecha_inicio, c.fecha_fin, c.observaciones ";
        $Query=$Query." FROM alumno a, constancia c ";
        $Query=$Query." WHERE a.id=c.alumno_id AND c.valida=-1 AND c.id=".$id;

        $Resultado=mysqli_query($conexion,$Query);
        $numeroRegistros=mysqli_num_rows($Resultado);

        if($numeroRegistros>=1){
            $Registro=mysqli_fetch_array($Resultado);

            $Respuesta["estado"]         = 1; //Programador
            $Respuesta["mensaje"]        = "Si hay registro para mostrar";

            $Respuesta["id"]             = $Registro["id"];
            $Respuesta["nombre"]         = $Registro["nombre"];
            $Respuesta["programa"]       = $Registro["programa"];
            $Respuesta["actividad"]      = $Registro["actividad"];
            $Respuesta["horas"]          = $Registro["horas"];
            $Respuesta["fecha_inicio"]   = $Registro["fecha_inicio"];
            $Respuesta["fecha_fin"]      = $Registro["fecha_fin"];
            $Respuesta["observaciones"]  = $Registro["observaciones"];
        }else{
            $Respuesta["estado"]         = 0; //Programador
            $Respuesta["mensaje"]        = "No hay registro para mostrar";
        }
    }else{
        //Solo cosntancias sin validar
        $Query=" SELECT c.id, a.nombre, a.programa, c.actividad, c.horas ";
        $Query=$Query." FROM alumno a, constancia c ";
        $Query=$Query." WHERE a.id=c.alumno_id AND c.valida=-1 "; //-1, 0, 1
        
        $Resultado=mysqli_query($conexion,$Query);
        $numeroRegistros=mysqli_num_rows($Resultado);
        
        if($numeroRegistros>=1){
            
            $Respuesta["constancias"] = array();
            
            while($Registro=mysqli_fetch_array($Resultado)){
                $objetoConstancia = array();  // Arreglo 3
                
                $objetoConstancia["id"]            =$Registro["id"];
                $objetoConstancia["nombre"]        =$Registro["nombre"];
                $objetoConstancia["programa"]      =$Registro["programa"];
                $objetoConstancia["actividad"]     =$Registro["actividad"];
                $objetoConstancia["horas"]         =$Registro["horas"];

                array_push($Respuesta["constancias"],$objetoConstancia);
            }
            //Un momento-:(
            $Respuesta["estado"]         = 1; //Programador
            $Respuesta["mensaje"]        = "Si hay registros para mostrar";
        }else{
            $Respuesta["estado"]         = 1; //Programador
            $Respuesta["mensaje"]        = "Si hay registros para mostrar";
        }
        //Quiere todas las constancia a validar (-1 en el campo valida)s
    }

    echo json_encode($Respuesta);
    mysqli_close($conexion);
}

function accionUpdatePHP($conexion){
    $Respuesta = array();

    $id                         =$_POST["id"];
    $valida                     =$_POST["valida"];
    $denominacion               =$_POST["denominacion"];
    $modalidad                  =$_POST["modalidad"];
    $observaciones_encargado    =$_POST["observaciones_encargado"];

    if($valida==0){
        //constancia no valida
        $Query=" UPDATE constancia ";
        $Query=$Query." SET valida=".$valida.", observaciones_encargado='".$observaciones_encargado."' ";
        $Query=$Query." WHERE id=".$id;

        mysqli_query($conexion,$Query);
        $numeroRegistros=mysqli_affected_rows($conexion);

        if($numeroRegistros>=1){
            $respuesta["estado"]   = 1;
            $respuesta["mensaje"]  = "La constancia se valido correctamente";
        }else{
            $respuesta["estado"] = 0;
            $respuesta["mensaje"] = "La constancia no se pudo validar";
        }

    }else{
        $id                          = $_POST['id'];                        //1
        $valida                      = $_POST['valida '];                   //2
        $denominacion                = $_POST['denominacion'];              //3
        $observaciones_encargado     = $_POST['observaciones_encargado'];   //4
        //realizar una consulta para recuperar el factor = equivalencia en horas
        $Query=" SELECT factor FROM denominacion WHERE id=".$denominacion;
        $Resultado=mysqli_query($conexion,$Query);
        $Registro=mysqli_fetch_array($Resultado);
        $factor = $Registro["factor"];                                      //5

        //realizar una consulta para recuperar programa academico

        //echo "ESTA ES UNA CONSTANCIA VALIDA, POR FAVOR PROGRAMA LOS CALCULOS NECESARIOS";
        //constancia valida
        //realizar varios calculos: creditos, a cual electiva se le agregan esos creditos...
        //parte medular de nuestro sistema de las electivas
        //1. poner el valor de 1 al campo validar
        //2. hacer el calculo de los creditos de la constancia con base a la clasificacion del encargado 
        //3. distribuir estos creditos en las electivas
        //      Mecatronica: Electiva 1 = 7 creditos, Electiva 2 = 7 creditos, Electiva 3 = 7 creditos
        //      Sistemas: Electiva 1 = 20 creditos
        //      Ambiental: Electiva 1 = 6 creditos
        //      Alimentos: Electiva 1 = 3 creditos, Electiva 2 = 3 creditos
        //      metalurgica: Electiva 1 = 12 creditos
    }

    echo json_encode($Respuesta);
    mysqli_close($conexion);
}

?>