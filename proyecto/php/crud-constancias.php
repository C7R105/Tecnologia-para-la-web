<?php
    include("conexion.php");
    /*Modelo de datos = MVC = Modelo-Vista-Controlador
    Modelo = .PHP
    Vista = .HTML
    Controlador = .JS
    CRUD = CREAR = POST, 
    LEER = GET, 
    ACTUALIZAR = PUT  
    ELIMINAR = DELETE
    */

    //Estos son los datos extraidos del documento js
    if(isset($_POST['accion']))
    $accion          = $_POST['accion'];
    if(isset($_GET['accion']))
    $accion          = $_GET['accion'];

    switch ($accion){
        case 'Create':
            accionCreatePHP($conexion);
            break;
        case 'Read':
            accionReadPHP($conexion);
            break;
        case 'Delete':
            accionDeletePHP($conexion);
            break;
        case 'Update':
            accionUpdatePHP($conexion);
            break;
    }

    
    function accionCreatePHP($conexion){
    $nombre_actividad    = $_POST['nombre_actividad'];
    $fecha_inicio      = $_POST['fecha_inicio'];
    $fecha_fin     = $_POST['fecha_fin'];
    $horas          = $_POST['horas'];
    $archivo        = $_POST['archivo']; //investigar como subir un archivo en el servidor
    $observaciones         = $_POST['observaciones'];

    //En el query tenemos que es la misma consulta la que crea un nuevo registro dentro de la base de datos con ayuda del INSERT INTO
    $query    = "INSERT INTO constancia (id, actividad, fecha_inicio, fecha_fin, horas, archivo, observaciones, denominacion_id, alumno_id, electiva_id) 
    VALUES (NULL, '". $nombre_actividad."', '".$fecha_inicio."', '".$fecha_fin."', '".$horas."', '".$archivo."', '".$observaciones."', 1, 1, 1)";

    //echo $query;
    $resultado = mysqli_query($conexion,$query);//Esta instruccion crea el registro en la base de datos
    
    $respuesta = array();
//JSON es para formalizar el envio y recepcion de datos
    if($resultado >= 1){
        //todo bien
        $respuesta["estado"]=1;
        $respuesta["mensaje"]="la informacion se guardo correctamente";
        $respuesta["id"]=mysqli_insert_id($conexion);
        echo json_encode($respuesta);
    }
    else{
        //no todo bien
        $respuesta["estado"]=0;
        $respuesta["mensaje"]="ocurrio un error desconocido";
        $respuesta["id"]=-1;
        echo json_encode($respuesta);
    }
    mysqli_close($conexion);

    }
    
    function accionReadPHP($conexion)
    {   
        $respuesta = array();//arreglo1

        if(isset($_GET['id'])){
            $id=$_GET['id'];

            $query = "SELECT * FROM constancia WHERE id=".$id;

            $resultado = mysqli_query($conexion,$query);
            $numeroRegistros = mysqli_num_rows($resultado);

            if($numeroRegistros>=1){
                $Registros=mysqli_fetch_array($resultado);
                
                $respuesta["estado"] = 1;
                $respuesta["mensaje"] = "Si hay registros";

                $respuesta["id"]           = $Registros["id"];
                $respuesta["nombre_actividad"]           = $Registros["actividad"];
                $respuesta["fecha_inicio"] = $Registros["fecha_inicio"];
                $respuesta["fecha_Fin"] = $Registros["fecha_fin"];
                $respuesta["horas"]    = $Registros["horas"];
                $respuesta["archivo"]  = $Registros["archivo"];
                $respuesta["observaciones"]       = $Registros["observaciones"];

            }else{
                $respuesta["estado"] = 0;
                $respuesta["mensaje"] = "NO hay registros";
            }

        }else{
            $query = "SELECT * FROM constancia";
        }

        $query = "SELECT * FROM constancia";
        $resultado = mysqli_query($conexion,$query);
        $numeroRegistros = mysqli_num_rows($resultado);
        if($numeroRegistros >= 1){
            $respuesta["estado"]         = 1;
            $respuesta["mensaje"]        = "Si hay registros";
            $respuesta["constancias"] = array();//arreglo2
            
            while($row = mysqli_fetch_array($resultado)){
                $objetoConstancia = array();//arreglo3 nombre_actividad
                 
                $objetoConstancia["id"]           = $row["id"];
                $objetoConstancia["nombre_actividad"]           = $row["actividad"];
                $objetoConstancia["fecha_inicio"] = $row["fecha_inicio"];
                $objetoConstancia["fecha_Fin"] = $row["fecha_fin"];
                $objetoConstancia["horas"]    = $row["horas"];
                $objetoConstancia["archivo"]  = $row["archivo"];
                $objetoConstancia["observaciones"]       = $row["observaciones"];

                array_push($respuesta["constancias"],$objetoConstancia);
            }
        }
        else{
            $respuesta["estado"] = 0;
            $respuesta["mensaje"] = "NO hay registros";
        }
        echo json_encode($respuesta);
        mysqli_close($conexion);
    }
    
    function accionDeletePHP($conexion){
        $respuesta = array();
        $id =$_POST["id"];
        $query = "DELETE FROM constancia WHERE constancia.id = ".$id;

        mysqli_query($conexion,$query);
        $numeroRegistros=mysqli_affected_rows($conexion);

        if($numeroRegistros >=1){
            $respuesta["estado"]         = 1;
            $respuesta["mensaje"]        = "El registro se elimino correctamente";
        }else{
            $respuesta["estado"] = 0;
            $respuesta["mensaje"] = "Ocurrio un error desconocido";
        }

        echo json_encode($respuesta);
        mysqli_close($conexion);
        
    }
    
    function accionUpdatePHP($conexion){
        $Respuesta = array();
        
        $id              = $_POST["id"];
    
        $nombre_actividad    = $_POST['nombre_actividad'];
        $fecha_inicio      = $_POST['fecha_inicio'];
        $fecha_fin     = $_POST['fecha_fin'];
        $horas          = $_POST['horas'];
        $archivo        = $_POST['archivo']; //investigar como subir un archivo en el servidor
        $observaciones         = $_POST['observaciones'];
    
        $query=" UPDATE constancia ";
        $query=$query." SET actividad='".$nombre_actividad."', fecha_inicio='".$fecha_inicio."', fecha_fin='".$fecha_fin."', horas='".$horas."', archivo='".$archivo."', observaciones='".$observaciones."' ";
        $query=$query." WHERE id=".$id;
    
        mysqli_query($conexion,$query);
        $numeroRegistros=mysqli_affected_rows($conexion);
    
        if($numeroRegistros>=1){
            $respuesta["estado"]         = 1;
            $respuesta["mensaje"]        = "El registro se actualizo correctamente";
        }else{
            $respuesta["estado"] = 0;
            $respuesta["mensaje"] = "Ocurrio un error desconocido";
        }
    
        echo json_encode($respuesta);
        mysqli_close($conexion);
    }

?>