<?php
    //Estos datos seran requeridos para establecer la comunicacion con la base de datos
    $servidor        = "sql204.byetcluster.com";//Es nuestro servidor
    $usuario         = "b5_28241935";//Este somos nosotros
    $clave           = "CARLOSivan16";//El servidor Apache no requiere clave
    $basedatos       = "b5_28241935_electivas";//Es el nombre de la base de datos

    //mysql_connect es la funcion de MySql que hace la conexion a la base de datos, para esto, requiere los parametros servidor, usuario, clave y saber con que base de datos estaremos trabajando
    $conexion = mysqli_connect($servidor,$usuario,$clave,$basedatos);
    //En el query tenemos que es la misma consulta la que crea un nuevo registro dentro de la base de datos con ayuda del INSERT INTO
?>