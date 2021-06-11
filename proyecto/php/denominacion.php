<?php 
//Modelo
include("conexion.php");

if(isset($_POST['accion'])){
    $accion                 = $_POST['accion'];
    $parametro              = $_POST['parametro'];
}
if(isset($_GET['accion'])){    
    $accion                 = $_GET['accion'];
    $parametro              = $_GET['parametro'];
}

switch ($parametro) {
    case 1:
        accionRead1PHP($conexion); //Siempre entra aquí. entonces hay que poner los actionRead en este mismo case? si y mandas un parametro extra para saber cual debe de regresarte
    break;   
    case 2:
        accionRead2PHP($conexion);
    break;    
    case 3:
        accionRead3PHP($conexion);
    break;  
    case 4:
        accionReadElectivasPHP($conexion);
    break;  
}

function accionRead1PHP($conexion)
{   
    $respuesta = array();//arreglo1
    if(isset($_GET['id'])){
        $id=$_GET['id'];

        $query =" SELECT * FROM denominacion WHERE eje_tematico='Inquietudes vocacionales propias' ";

        $resultado = mysqli_query($conexion,$query);
        $numeroRegistros = mysqli_num_rows($resultado);

        if($numeroRegistros>=1){
            $Registros=mysqli_fetch_array($resultado);
            
            $respuesta["estado"] = 1;
            $respuesta["mensaje"] = "Si hay registros";

            $respuesta["id"]           = $Registros["id"];
            //$respuesta["eje_tematico"]    = $Registros["eje_tematico"];
            $respuesta["modalidad"]    = $Registros["modalidad"];
            $respuesta["ejemplos"]     = $Registros["ejemplos"];
            $respuesta["descripcion"]  = $Registros["descripcion"];

        }else{
            $respuesta["estado"] = 0;
            $respuesta["mensaje"] = "NO hay registros";
        }

    }else{

        $query =" SELECT * FROM denominacion WHERE eje_tematico='Inquietudes vocacionales propias' ";

        $resultado = mysqli_query($conexion,$query);
        $numeroRegistros = mysqli_num_rows($resultado);
        if($numeroRegistros >= 1){
            $respuesta["estado"]         = 1;
            $respuesta["mensaje"]        = "Si hay registros";
            $respuesta["denominaciones"] = array();//arreglo2
        
            while($row = mysqli_fetch_array($resultado)){
                $objetoDenominacion = array();//arreglo3
             
                $objetoDenominacion["id"]           = $row["id"];
                //$objetoDenominacion["eje_tematico_1"]    = $row["eje_tematico"];
                $objetoDenominacion["modalidad_1"]    = $row["modalidad"];
                $objetoDenominacion["ejemplos_1"]     = $row["ejemplos"];
                $objetoDenominacion["descripcion_1"]  = $row["descripcion"];           

                array_push($respuesta["denominaciones"],$objetoDenominacion);
            }
        }
        else{
            $respuesta["estado"] = 0;
            $respuesta["mensaje"] = "NO hay registros";
        }
    }
    echo json_encode($respuesta);
    mysqli_close($conexion);
}


function accionRead2PHP($conexion)
{   
    $respuesta = array();//arreglo1
    if(isset($_GET['id'])){
        $id=$_GET['id'];

        $query =" SELECT * FROM denominacion WHERE eje_tematico='Énfasis en la profesión' ";

        $resultado = mysqli_query($conexion,$query);
        $numeroRegistros = mysqli_num_rows($resultado);

        if($numeroRegistros>=1){
            $Registros=mysqli_fetch_array($resultado);
            
            $respuesta["estado"] = 1;
            $respuesta["mensaje"] = "Si hay registros";

            $respuesta["id"]           = $Registros["id"];
            $respuesta["modalidad"]    = $Registros["modalidad"];
            $respuesta["ejemplos"]     = $Registros["ejemplos"];
            $respuesta["descripcion"]  = $Registros["descripcion"];

        }else{
            $respuesta["estado"] = 0;
            $respuesta["mensaje"] = "NO hay registros";
        }

    }else{
        $query =" SELECT * FROM denominacion WHERE eje_tematico='Énfasis en la profesión' ";

        $resultado = mysqli_query($conexion,$query);
        $numeroRegistros = mysqli_num_rows($resultado);
        if($numeroRegistros >= 1){
            $respuesta["estado"]         = 1;
            $respuesta["mensaje"]        = "Si hay registros";
            $respuesta["denominaciones"] = array();//arreglo2
        
            while($row = mysqli_fetch_array($resultado)){
                $objetoDenominacion = array();//arreglo3
             
                $objetoDenominacion["id"]           = $row["id"];
                $objetoDenominacion["modalidad_2"]    = $row["modalidad"];
                $objetoDenominacion["ejemplos_2"]     = $row["ejemplos"];
                $objetoDenominacion["descripcion_2"]  = $row["descripcion"];           

                array_push($respuesta["denominaciones"],$objetoDenominacion);
            }
        }
        else{
            $respuesta["estado"] = 0;
            $respuesta["mensaje"] = "NO hay registros";
        }
    }
    echo json_encode($respuesta);
    mysqli_close($conexion);
}



function accionRead3PHP($conexion)
{   
    $respuesta = array();//arreglo1
    if(isset($_GET['id'])){
        $id=$_GET['id'];

        $query =" SELECT * FROM denominacion WHERE eje_tematico='Complementarias a la formación' ";

        $resultado = mysqli_query($conexion,$query);
        $numeroRegistros = mysqli_num_rows($resultado);

        if($numeroRegistros>=1){
            $Registros=mysqli_fetch_array($resultado);
            
            $respuesta["estado"] = 1;
            $respuesta["mensaje"] = "Si hay registros";

            $respuesta["id"]           = $Registros["id"];
            $respuesta["modalidad"]    = $Registros["modalidad"];
            $respuesta["ejemplos"]     = $Registros["ejemplos"];
            $respuesta["descripcion"]  = $Registros["descripcion"];

        }else{
            $respuesta["estado"] = 0;
            $respuesta["mensaje"] = "NO hay registros";
        }

    }else{
        $query =" SELECT * FROM denominacion WHERE eje_tematico='Complementarias a la formación' ";

        $resultado = mysqli_query($conexion,$query);
        $numeroRegistros = mysqli_num_rows($resultado);
        if($numeroRegistros >= 1){
            $respuesta["estado"]         = 1;
            $respuesta["mensaje"]        = "Si hay registros";
            $respuesta["denominaciones"] = array();//arreglo2
        
            while($row = mysqli_fetch_array($resultado)){
                $objetoDenominacion = array();//arreglo3
             
                $objetoDenominacion["id"]           = $row["id"];
                $objetoDenominacion["modalidad_3"]    = $row["modalidad"];
                $objetoDenominacion["ejemplos_3"]     = $row["ejemplos"];
                $objetoDenominacion["descripcion_3"]  = $row["descripcion"];           

                array_push($respuesta["denominaciones"],$objetoDenominacion);
            }
        }
        else{
            $respuesta["estado"] = 0;
            $respuesta["mensaje"] = "NO hay registros";
        }
    }
    echo json_encode($respuesta);
    mysqli_close($conexion);
}


function accionReadElectivasPHP($conexion)
{   
    $respuesta = array();//arreglo1
    if(isset($_GET['id'])){
        $id=$_GET['id'];

        //$query =" SELECT * FROM electiva ";

        $query =" SELECT nombre, creditos, creditos_acumulados FROM electiva ";

        $resultado = mysqli_query($conexion,$query);
        $numeroRegistros = mysqli_num_rows($resultado);

        if($numeroRegistros>=1){
            $Registros=mysqli_fetch_array($resultado);
            
            $respuesta["estado"] = 1;
            $respuesta["mensaje"] = "Si hay registros";

            //$respuesta["id"]           = $Registros["id"];
            $respuesta["nombre"]    = $Registros["nombre"];
            $respuesta["creditos"]    = $Registros["creditos"];
            $respuesta["creditos_acumulados"]     = $Registros["creditos_acumulados"];

        }else{
            $respuesta["estado"] = 0;
            $respuesta["mensaje"] = "NO hay registros";
        }

    }else{
        //$query =" SELECT * FROM electiva ";

        $query =" SELECT nombre, creditos, creditos_acumulados FROM electiva ";

        $resultado = mysqli_query($conexion,$query);
        $numeroRegistros = mysqli_num_rows($resultado);
        if($numeroRegistros >= 1){
            $respuesta["estado"]         = 1;
            $respuesta["mensaje"]        = "Si hay registros";
            $respuesta["electivas"] = array();//arreglo2
        
            while($row = mysqli_fetch_array($resultado)){
                $objetoElectiva = array();//arreglo3
             
                //$objetoElectiva["id"]           = $row["id"];
                $objetoElectiva["nombre"]    = $row["nombre"];
                $objetoElectiva["creditos"]    = $row["creditos"];
                $objetoElectiva["creditos_acumulados"]     = $row["creditos_acumulados"];

                array_push($respuesta["electivas"],$objetoElectiva);
            }
        }
        else{
            $respuesta["estado"] = 0;
            $respuesta["mensaje"] = "NO hay registros";
        }
    }
    echo json_encode($respuesta);
    mysqli_close($conexion);
}

?>