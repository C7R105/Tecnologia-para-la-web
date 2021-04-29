function cambiaContenido(){
    var inputLongitud_1 = document.getElementById("input_longitud_1");
    var inputLongitud_2 = document.getElementById("input_longitud_2");
    var muestra_formula = document.getElementById("muestra_formula");
    var selectLongitud_1 = document.getElementById("select_longitud_1").value;
    var selectLongitud_2 = document.getElementById("select_longitud_2").value;

    //FUNCION PARA LONGITUD-------------------------------------------------------------------------------------
    //KILOMETRO A CUALQUIER OTRA UNIDAD
    if(selectLongitud_1 == "kilometro" && selectLongitud_2 == "kilometro"){
        inputLongitud_2.value = inputLongitud_1.value;
        muestra_formula.innerHTML = "El valor de longitud multiplicado por 1";
    }

    if(selectLongitud_1 == "kilometro" && selectLongitud_2 == "metro"){
        inputLongitud_2.value = inputLongitud_1.value * 1000;
        muestra_formula.innerHTML = "El valor de longitud multiplicado por 1000";
    }

    if(selectLongitud_1 == "kilometro" && selectLongitud_2 == "centimetro"){
        inputLongitud_2.value = inputLongitud_1.value * 100000;
        muestra_formula.innerHTML = "El valor de longitud multiplicado por 100000";
    }

    if(selectLongitud_1 == "kilometro" && selectLongitud_2 == "milimetro"){
        inputLongitud_2.value = inputLongitud_1.value * 1000000;
        muestra_formula.innerHTML = "El valor de longitud multiplicado por 1000000";
    }

    if(selectLongitud_1 == "kilometro" && selectLongitud_2 == "micrometro"){
        inputLongitud_2.value = inputLongitud_1.value * 1000000000;
        muestra_formula.innerHTML = "El valor de longitud multiplicado por 1000000000";
    }
    
    if(selectLongitud_1 == "kilometro" && selectLongitud_2 == "nanometro"){
        inputLongitud_2.value = inputLongitud_1.value * 1000000000000;
        muestra_formula.innerHTML = "El valor de longitud multiplicado por 1000000000000";
    }

    if(selectLongitud_1 == "kilometro" && selectLongitud_2 == "milla"){
        inputLongitud_2.value = inputLongitud_1.value/1.609;
        muestra_formula.innerHTML = "El valor de longitud dividido entre 1.609";
    }

    if(selectLongitud_1 == "kilometro" && selectLongitud_2 == "yarda"){
        inputLongitud_2.value = inputLongitud_1.value * 1094;
        muestra_formula.innerHTML = "El valor de longitud multiplicado por 1094";
    }

    if(selectLongitud_1 == "kilometro" && selectLongitud_2 == "pie"){
        inputLongitud_2.value = inputLongitud_1.value * 3281;
        muestra_formula.innerHTML = "El valor de longitud multiplicado por 3281";
    }

    if(selectLongitud_1 == "kilometro" && selectLongitud_2 == "pulgada"){
        inputLongitud_2.value = inputLongitud_1.value * 39370;
        muestra_formula.innerHTML = "El valor de longitud multiplicado por 39370";
    }

    if(selectLongitud_1 == "kilometro" && selectLongitud_2 == "milla_nautica"){
        inputLongitud_2.value = inputLongitud_1.value/1.852;
        muestra_formula.innerHTML = "El valor de longitud dividido entre 1.852";
    }

    //METROS A CUALQUIER OTRA UNIDAD
    if(selectLongitud_1 == "metro" && selectLongitud_2 == "kilometro"){
        inputLongitud_2.value = inputLongitud_1.value/ 1000;
        muestra_formula.innerHTML = "El valor de longitud dividido entre 1000";
    }
    
    if(selectLongitud_1 == "metro" && selectLongitud_2 == "metro"){
        inputLongitud_2.value = inputLongitud_1.value;
        muestra_formula.innerHTML = "El valor de longitud multiplicado por 1";
    }

    if(selectLongitud_1 == "metro" && selectLongitud_2 == "centimetro"){
        inputLongitud_2.value = inputLongitud_1.value * 100;
        muestra_formula.innerHTML = "El valor de longitud multiplicado por 100";
    }

    if(selectLongitud_1 == "metro" && selectLongitud_2 == "milimetro"){
        inputLongitud_2.value = inputLongitud_1.value * 1000;
        muestra_formula.innerHTML = "El valor de longitud multiplicado por 1000";
    }

    if(selectLongitud_1 == "metro" && selectLongitud_2 == "micrometro"){
        inputLongitud_2.value = inputLongitud_1.value * 1000000;
        muestra_formula.innerHTML = "El valor de longitud multiplicado por 1000000";
    }

    if(selectLongitud_1 == "metro" && selectLongitud_2 == "nanometro"){
        inputLongitud_2.value = inputLongitud_1.value * 1000000000;
        muestra_formula.innerHTML = "El valor de longitud dividido entre 1000000000";
    }

    if(selectLongitud_1 == "metro" && selectLongitud_2 == "milla"){
        inputLongitud_2.value = inputLongitud_1.value/ 1609;
        muestra_formula.innerHTML = "El valor de longitud dividido entre 1609";
    }

    if(selectLongitud_1 == "metro" && selectLongitud_2 == "yarda"){
        inputLongitud_2.value = inputLongitud_1.value * 1.094;
        muestra_formula.innerHTML = "El valor de longitud multiplicado por 1.094";
    }

    if(selectLongitud_1 == "metro" && selectLongitud_2 == "pie"){
        inputLongitud_2.value = inputLongitud_1.value * 3.281;
        muestra_formula.innerHTML = "El valor de longitud multiplicado por 3.281";
    }

    if(selectLongitud_1 == "metro" && selectLongitud_2 == "pulgada"){
        inputLongitud_2.value = inputLongitud_1.value * 39.37;
        muestra_formula.innerHTML = "El valor de longitud multiplicado por 39.37";
    }

    if(selectLongitud_1 == "metro" && selectLongitud_2 == "milla_nautica"){
        inputLongitud_2.value = inputLongitud_1.value/ 1852;
        muestra_formula.innerHTML = "El valor de longitud dividido entre 1852";
    }

    //CENTIMETROS A CUALQUIER OTRA UNIDAD
    if(selectLongitud_1 == "centimetro" && selectLongitud_2 == "kilometro"){
        inputLongitud_2.value = inputLongitud_1.value/ 100000;
        muestra_formula.innerHTML = "El valor de longitud dividido entre 100000";
    }
    
    if(selectLongitud_1 == "centimetro" && selectLongitud_2 == "metro"){
        inputLongitud_2.value = inputLongitud_1.value/ 100;
        muestra_formula.innerHTML = "El valor de longitud dividido entre 100";
    }

    if(selectLongitud_1 == "centimetro" && selectLongitud_2 == "centimetro"){
        inputLongitud_2.value = inputLongitud_1.value;
        muestra_formula.innerHTML = "El valor de longitud multiplicado por 1";
    }

    if(selectLongitud_1 == "centimetro" && selectLongitud_2 == "milimetro"){
        inputLongitud_2.value = inputLongitud_1.value * 10;
        muestra_formula.innerHTML = "El valor de longitud multiplicado por 10";
    }

    if(selectLongitud_1 == "centimetro" && selectLongitud_2 == "micrometro"){
        inputLongitud_2.value = inputLongitud_1.value * 10000;
        muestra_formula.innerHTML = "El valor de longitud multiplicado por 10000";
    }

    if(selectLongitud_1 == "centimetro" && selectLongitud_2 == "nanometro"){
        inputLongitud_2.value = inputLongitud_1.value * 10000000;
        muestra_formula.innerHTML = "El valor de longitud multiplicado por 10000000";
    }

    if(selectLongitud_1 == "centimetro" && selectLongitud_2 == "milla"){
        inputLongitud_2.value = inputLongitud_1.value/ 160934;
        muestra_formula.innerHTML = "El valor de longitud dividido entre 160934";
    }

    if(selectLongitud_1 == "centimetro" && selectLongitud_2 == "yarda"){
        inputLongitud_2.value = inputLongitud_1.value/ 91.44;
        muestra_formula.innerHTML = "El valor de longitud dividido entre 91.44";
    }

    if(selectLongitud_1 == "centimetro" && selectLongitud_2 == "pie"){
        inputLongitud_2.value = inputLongitud_1.value/ 30.48;
        muestra_formula.innerHTML = "El valor de longitud dividido entre 30.48";
    }

    if(selectLongitud_1 == "centimetro" && selectLongitud_2 == "pulgada"){
        inputLongitud_2.value = inputLongitud_1.value/ 2.54;
        muestra_formula.innerHTML = "El valor de longitud dividido entre 2.54";
    }

    if(selectLongitud_1 == "centimetro" && selectLongitud_2 == "milla_nautica"){
        inputLongitud_2.value = inputLongitud_1.value/ 185200;
        muestra_formula.innerHTML = "El valor de longitud dividido entre 185200";
    }

    //MILIMETROS A CUALQUIER OTRA UNIDAD
    if(selectLongitud_1 == "milimetro" && selectLongitud_2 == "kilometro"){
        inputLongitud_2.value = inputLongitud_1.value/ 1000000;
        muestra_formula.innerHTML = "El valor de longitud dividido entre 1000000";
    }
    
    if(selectLongitud_1 == "milimetro" && selectLongitud_2 == "metro"){
        inputLongitud_2.value = inputLongitud_1.value/ 1000;
        muestra_formula.innerHTML = "El valor de longitud dividido entre 1000";
    }

    if(selectLongitud_1 == "milimetro" && selectLongitud_2 == "centimetro"){
        inputLongitud_2.value = inputLongitud_1.value/ 10;
        muestra_formula.innerHTML = "El valor de longitud dividiendo entre 10";
    }

    if(selectLongitud_1 == "milimetro" && selectLongitud_2 == "milimetro"){
        inputLongitud_2.value = inputLongitud_1.value;
        muestra_formula.innerHTML = "El valor de longitud multiplicado por 1";
    }

    if(selectLongitud_1 == "milimetro" && selectLongitud_2 == "micrometro"){
        inputLongitud_2.value = inputLongitud_1.value * 1000;
        muestra_formula.innerHTML = "El valor de longitud multiplicado por 1000";
    }

    if(selectLongitud_1 == "milimetro" && selectLongitud_2 == "nanometro"){
        inputLongitud_2.value = inputLongitud_1.value * 1000000;
        muestra_formula.innerHTML = "El valor de longitud multiplicado por 1000000";
    }

    if(selectLongitud_1 == "milimetro" && selectLongitud_2 == "milla"){
        inputLongitud_2.value = inputLongitud_1.value/ 1609000;
        muestra_formula.innerHTML = "El valor de longitud dividido entre 1609000";
    }

    if(selectLongitud_1 == "milimetro" && selectLongitud_2 == "yarda"){
        inputLongitud_2.value = inputLongitud_1.value/ 914;
        muestra_formula.innerHTML = "El valor de longitud dividido entre 914";
    }

    if(selectLongitud_1 == "milimetro" && selectLongitud_2 == "pie"){
        inputLongitud_2.value = inputLongitud_1.value/ 305;
        muestra_formula.innerHTML = "El valor de longitud dividido entre 305";
    }

    if(selectLongitud_1 == "milimetro" && selectLongitud_2 == "pulgada"){
        inputLongitud_2.value = inputLongitud_1.value/ 25.4;
        muestra_formula.innerHTML = "El valor de longitud dividido entre 25.4";
    }

    if(selectLongitud_1 == "milimetro" && selectLongitud_2 == "milla_nautica"){
        inputLongitud_2.value = inputLongitud_1.value/ 1852000;
        muestra_formula.innerHTML = "El valor de longitud dividido entre 1852000";
    }

    //MICROMETRO A CUALQUIER OTRA UNIDAD
    if(selectLongitud_1 == "micrometro" && selectLongitud_2 == "kilometro"){
        inputLongitud_2.value = inputLongitud_1.value/ 1000000000;
        muestra_formula.innerHTML = "El valor de longitud dividido entre 1000000000";
    }
    
    if(selectLongitud_1 == "micrometro" && selectLongitud_2 == "metro"){
        inputLongitud_2.value = inputLongitud_1.value/ 1000000;
        muestra_formula.innerHTML = "El valor de longitud dividido entre 1000000";
    }

    if(selectLongitud_1 == "micrometro" && selectLongitud_2 == "centimetro"){
        inputLongitud_2.value = inputLongitud_1.value/ 10000;
        muestra_formula.innerHTML = "El valor de longitud dividido entre 10000";
    }

    if(selectLongitud_1 == "micrometro" && selectLongitud_2 == "milimetro"){
        inputLongitud_2.value = inputLongitud_1.value/ 1000;
        muestra_formula.innerHTML = "El valor de longitud dividido entre 1000";
    }

    if(selectLongitud_1 == "micrometro" && selectLongitud_2 == "micrometro"){
        inputLongitud_2.value = inputLongitud_1.value;
        muestra_formula.innerHTML = "El valor de longitud multiplicado por 1";
    }

    if(selectLongitud_1 == "micrometro" && selectLongitud_2 == "nanometro"){
        inputLongitud_2.value = inputLongitud_1.value * 1000;
        muestra_formula.innerHTML = "El valor de longitud multiplicado por 1000";
    }

    if(selectLongitud_1 == "micrometro" && selectLongitud_2 == "milla"){
        inputLongitud_2.value = inputLongitud_1.value/ 1609000000;
        muestra_formula.innerHTML = "El valor de longitud dividido entre 1609000000";
    }

    if(selectLongitud_1 == "micrometro" && selectLongitud_2 == "yarda"){
        inputLongitud_2.value = inputLongitud_1.value/ 914400;
        muestra_formula.innerHTML = "El valor de longitud dividido entre 914400";
    }

    if(selectLongitud_1 == "micrometro" && selectLongitud_2 == "pie"){
        inputLongitud_2.value = inputLongitud_1.value/ 304800;
        muestra_formula.innerHTML = "El valor de longitud dividido entre 304800";
    }

    if(selectLongitud_1 == "micrometro" && selectLongitud_2 == "pulgada"){
        inputLongitud_2.value = inputLongitud_1.value/ 25400;
        muestra_formula.innerHTML = "El valor de longitud dividido entre 25400";
    }

    if(selectLongitud_1 == "micrometro" && selectLongitud_2 == "milla_nautica"){
        inputLongitud_2.value = inputLongitud_1.value/ 1852000000;
        muestra_formula.innerHTML = "El valor de longitud dividido entre 1852000000";
    }

    //NANOMETRO A CUALQUIER OTRA UNIDAD
    if(selectLongitud_1 == "nanometro" && selectLongitud_2 == "kilometro"){
        inputLongitud_2.value = inputLongitud_1.value/ 1000000000000;
        muestra_formula.innerHTML = "El valor de longitud dividido entre 1000000000000";
    }
    
    if(selectLongitud_1 == "nanometro" && selectLongitud_2 == "metro"){
        inputLongitud_2.value = inputLongitud_1.value/ 1000000000;
        muestra_formula.innerHTML = "El valor de longitud dividido entre 1000000000";
    }

    if(selectLongitud_1 == "nanometro" && selectLongitud_2 == "centimetro"){
        inputLongitud_2.value = inputLongitud_1.value/ 10000000;
        muestra_formula.innerHTML = "El valor de longitud dividido entre 10000000";
    }

    if(selectLongitud_1 == "nanometro" && selectLongitud_2 == "milimetro"){
        inputLongitud_2.value = inputLongitud_1.value/ 1000000;
        muestra_formula.innerHTML = "El valor de longitud dividido entre 1000000";
    }

    if(selectLongitud_1 == "nanometro" && selectLongitud_2 == "micrometro"){
        inputLongitud_2.value = inputLongitud_1.value/ 1000;
        muestra_formula.innerHTML = "El valor de longitud multiplicado por 1000";
    }

    if(selectLongitud_1 == "nanometro" && selectLongitud_2 == "nanometro"){
        inputLongitud_2.value = inputLongitud_1.value;
        muestra_formula.innerHTML = "El valor de longitud multiplicado por 1";
    }

    if(selectLongitud_1 == "nanometro" && selectLongitud_2 == "milla"){
        inputLongitud_2.value = inputLongitud_1.value/ 1609000000000;
        muestra_formula.innerHTML = "El valor de longitud dividido entre 1609000000000";
    }

    if(selectLongitud_1 == "nanometro" && selectLongitud_2 == "yarda"){
        inputLongitud_2.value = inputLongitud_1.value/ 914400000;
        muestra_formula.innerHTML = "El valor de longitud dividido entre 914400000";
    }

    if(selectLongitud_1 == "nanometro" && selectLongitud_2 == "pie"){
        inputLongitud_2.value = inputLongitud_1.value/ 304800000;
        muestra_formula.innerHTML = "El valor de longitud dividido entre 304800000";
    }

    if(selectLongitud_1 == "nanometro" && selectLongitud_2 == "pulgada"){
        inputLongitud_2.value = inputLongitud_1.value/ 25400000;
        muestra_formula.innerHTML = "El valor de longitud dividido entre 25400000";
    }

    if(selectLongitud_1 == "nanometro" && selectLongitud_2 == "milla_nautica"){
        inputLongitud_2.value = inputLongitud_1.value/ 1852000000000;
        muestra_formula.innerHTML = "El valor de longitud dividido entre 1852000000000";
    }

    //MILLA A CUALQUIER OTRA UNIDAD
    if(selectLongitud_1 == "milla" && selectLongitud_2 == "kilometro"){
        inputLongitud_2.value = inputLongitud_1.value * 1.609;
        muestra_formula.innerHTML = "El valor de longitud multiplicado por 1.609";
    }
    
    if(selectLongitud_1 == "milla" && selectLongitud_2 == "metro"){
        inputLongitud_2.value = inputLongitud_1.value * 1609;
        muestra_formula.innerHTML = "El valor de longitud multiplicado por 1609";
    }

    if(selectLongitud_1 == "milla" && selectLongitud_2 == "centimetro"){
        inputLongitud_2.value = inputLongitud_1.value * 160934;
        muestra_formula.innerHTML = "El valor de longitud multiplicado por 160934";
    }

    if(selectLongitud_1 == "milla" && selectLongitud_2 == "milimetro"){
        inputLongitud_2.value = inputLongitud_1.value * 1609000;
        muestra_formula.innerHTML = "El valor de longitud multiplicado por 1609000";
    }

    if(selectLongitud_1 == "milla" && selectLongitud_2 == "micrometro"){
        inputLongitud_2.value = inputLongitud_1.value * 1609000000;
        muestra_formula.innerHTML = "El valor de longitud multiplicado por 1609000000";
    }

    if(selectLongitud_1 == "milla" && selectLongitud_2 == "nanometro"){
        inputLongitud_2.value = inputLongitud_1.value * 1609000000000;
        muestra_formula.innerHTML = "El valor de longitud multiplicado por 1609000000000";
    }

    if(selectLongitud_1 == "milla" && selectLongitud_2 == "milla"){
        inputLongitud_2.value = inputLongitud_1.value;
        muestra_formula.innerHTML = "El valor de longitud multiplicado por 1";
    }

    if(selectLongitud_1 == "milla" && selectLongitud_2 == "yarda"){
        inputLongitud_2.value = inputLongitud_1.value * 1760;
        muestra_formula.innerHTML = "El valor de longitud multiplicado por 1760";
    }

    if(selectLongitud_1 == "milla" && selectLongitud_2 == "pie"){
        inputLongitud_2.value = inputLongitud_1.value * 5280;
        muestra_formula.innerHTML = "El valor de longitud multiplicado por 5280";
    }

    if(selectLongitud_1 == "milla" && selectLongitud_2 == "pulgada"){
        inputLongitud_2.value = inputLongitud_1.value * 63360;
        muestra_formula.innerHTML = "El valor de longitud multiplicado por 63360";
    }

    if(selectLongitud_1 == "milla" && selectLongitud_2 == "milla_nautica"){
        inputLongitud_2.value = inputLongitud_1.value/ 1.151;
        muestra_formula.innerHTML = "El valor de longitud dividido entre 1.151";
    }

    //YARDA A CUALQUIER OTRA UNIDAD
    if(selectLongitud_1 == "yarda" && selectLongitud_2 == "kilometro"){
        inputLongitud_2.value = inputLongitud_1.value/ 1094;
        muestra_formula.innerHTML = "El valor de longitud dividido entre 1094";
    }
    
    if(selectLongitud_1 == "yarda" && selectLongitud_2 == "metro"){
        inputLongitud_2.value = inputLongitud_1.value / 1.094;
        muestra_formula.innerHTML = "El valor de longitud dividido entre 1.094";
    }

    if(selectLongitud_1 == "yarda" && selectLongitud_2 == "centimetro"){
        inputLongitud_2.value = inputLongitud_1.value * 91.44;
        muestra_formula.innerHTML = "El valor de longitud multiplicado por 91.44";
    }

    if(selectLongitud_1 == "yarda" && selectLongitud_2 == "milimetro"){
        inputLongitud_2.value = inputLongitud_1.value * 914;
        muestra_formula.innerHTML = "El valor de longitud multiplicado por 914";
    }

    if(selectLongitud_1 == "yarda" && selectLongitud_2 == "micrometro"){
        inputLongitud_2.value = inputLongitud_1.value * 914400;
        muestra_formula.innerHTML = "El valor de longitud multiplicado por 914400";
    }

    if(selectLongitud_1 == "yarda" && selectLongitud_2 == "nanometro"){
        inputLongitud_2.value = inputLongitud_1.value * 914400000;
        muestra_formula.innerHTML = "El valor de longitud multiplicado por 914400000";
    }

    if(selectLongitud_1 == "yarda" && selectLongitud_2 == "milla"){
        inputLongitud_2.value = inputLongitud_1.value / 1760;
        muestra_formula.innerHTML = "El valor de longitud dividido entre 1760";
    }

    if(selectLongitud_1 == "yarda" && selectLongitud_2 == "yarda"){
        inputLongitud_2.value = inputLongitud_1.value;
        muestra_formula.innerHTML = "El valor de longitud multiplicado por 1";
    }

    if(selectLongitud_1 == "yarda" && selectLongitud_2 == "pie"){
        inputLongitud_2.value = inputLongitud_1.value * 3;
        muestra_formula.innerHTML = "El valor de longitud multiplicado por 3";
    }

    if(selectLongitud_1 == "yarda" && selectLongitud_2 == "pulgada"){
        inputLongitud_2.value = inputLongitud_1.value * 36;
        muestra_formula.innerHTML = "El valor de longitud multiplicado por 36";
    }

    if(selectLongitud_1 == "yarda" && selectLongitud_2 == "milla_nautica"){
        inputLongitud_2.value = inputLongitud_1.value/ 2025;
        muestra_formula.innerHTML = "El valor de longitud dividido entre 1025";
    }

    //PIE A CUALQUIER OTRA UNIDAD
    if(selectLongitud_1 == "pie" && selectLongitud_2 == "kilometro"){
        inputLongitud_2.value = inputLongitud_1.value/ 3281;
        muestra_formula.innerHTML = "El valor de longitud dividido entre 3281";
    }
    
    if(selectLongitud_1 == "pie" && selectLongitud_2 == "metro"){
        inputLongitud_2.value = inputLongitud_1.value/ 3.281;
        muestra_formula.innerHTML = "El valor de longitud dividido entre 3.281";
    }

    if(selectLongitud_1 == "pie" && selectLongitud_2 == "centimetro"){
        inputLongitud_2.value = inputLongitud_1.value * 30.48;
        muestra_formula.innerHTML = "El valor de longitud multiplicado por 30.48";
    }

    if(selectLongitud_1 == "pie" && selectLongitud_2 == "milimetro"){
        inputLongitud_2.value = inputLongitud_1.value * 305;
        muestra_formula.innerHTML = "El valor de longitud multiplicado por 305";
    }

    if(selectLongitud_1 == "pie" && selectLongitud_2 == "micrometro"){
        inputLongitud_2.value = inputLongitud_1.value * 304800;
        muestra_formula.innerHTML = "El valor de longitud multiplicado por 304800";
    }

    if(selectLongitud_1 == "pie" && selectLongitud_2 == "nanometro"){
        inputLongitud_2.value = inputLongitud_1.value * 304800000;
        muestra_formula.innerHTML = "El valor de longitud multiplicado por 304800000";
    }

    if(selectLongitud_1 == "pie" && selectLongitud_2 == "milla"){
        inputLongitud_2.value = inputLongitud_1.value / 5280;
        muestra_formula.innerHTML = "El valor de longitud dividido entre 5280";
    }

    if(selectLongitud_1 == "pie" && selectLongitud_2 == "yarda"){
        inputLongitud_2.value = inputLongitud_1.value/ 3;
        muestra_formula.innerHTML = "El valor de longitud dividido entre 3";
    }

    if(selectLongitud_1 == "pie" && selectLongitud_2 == "pie"){
        inputLongitud_2.value = inputLongitud_1.value;
        muestra_formula.innerHTML = "El valor de longitud multiplicado por 1";
    }

    if(selectLongitud_1 == "pie" && selectLongitud_2 == "pulgada"){
        inputLongitud_2.value = inputLongitud_1.value * 12;
        muestra_formula.innerHTML = "El valor de longitud multiplicado por 12";
    }

    if(selectLongitud_1 == "pie" && selectLongitud_2 == "milla_nautica"){
        inputLongitud_2.value = inputLongitud_1.value/ 6076;
        muestra_formula.innerHTML = "El valor de longitud dividido entre 6076";
    }

    //PULGADA A CUALQUIER OTRA UNIDAD
    if(selectLongitud_1 == "pulgada" && selectLongitud_2 == "kilometro"){
        inputLongitud_2.value = inputLongitud_1.value/ 39370;
        muestra_formula.innerHTML = "El valor de longitud dividido entre 39370";
    }
    
    if(selectLongitud_1 == "pulgada" && selectLongitud_2 == "metro"){
        inputLongitud_2.value = inputLongitud_1.value/ 39.37;
        muestra_formula.innerHTML = "El valor de longitud dividido entre 39.37";
    }

    if(selectLongitud_1 == "pulgada" && selectLongitud_2 == "centimetro"){
        inputLongitud_2.value = inputLongitud_1.value * 2.54;
        muestra_formula.innerHTML = "El valor de longitud multiplicado por 2.54";
    }

    if(selectLongitud_1 == "pulgada" && selectLongitud_2 == "milimetro"){
        inputLongitud_2.value = inputLongitud_1.value * 25.4;
        muestra_formula.innerHTML = "El valor de longitud multiplicado por 25.4";
    }

    if(selectLongitud_1 == "pulgada" && selectLongitud_2 == "micrometro"){
        inputLongitud_2.value = inputLongitud_1.value * 25400;
        muestra_formula.innerHTML = "El valor de longitud multiplicado por 25400";
    }

    if(selectLongitud_1 == "pulgada" && selectLongitud_2 == "nanometro"){
        inputLongitud_2.value = inputLongitud_1.value * 25400000;
        muestra_formula.innerHTML = "El valor de longitud multiplicado por 25400000";
    }

    if(selectLongitud_1 == "pulgada" && selectLongitud_2 == "milla"){
        inputLongitud_2.value = inputLongitud_1.value / 63360;
        muestra_formula.innerHTML = "El valor de longitud dividido entre 63360";
    }

    if(selectLongitud_1 == "pulgada" && selectLongitud_2 == "yarda"){
        inputLongitud_2.value = inputLongitud_1.value/ 36;
        muestra_formula.innerHTML = "El valor de longitud dividido entre 36";
    }

    if(selectLongitud_1 == "pulgada" && selectLongitud_2 == "pie"){
        inputLongitud_2.value = inputLongitud_1.value/ 12;
        muestra_formula.innerHTML = "El valor de longitud dividido entre 12";
    }

    if(selectLongitud_1 == "pulgada" && selectLongitud_2 == "pulgada"){
        inputLongitud_2.value = inputLongitud_1.value;
        muestra_formula.innerHTML = "El valor de longitud multiplicado por 1";
    }

    if(selectLongitud_1 == "pulgada" && selectLongitud_2 == "milla_nautica"){
        inputLongitud_2.value = inputLongitud_1.value/ 72913;
        muestra_formula.innerHTML = "El valor de longitud dividido entre 72913";
    }

    //MILLA NAUTICA A CUALQUIER OTRA UNIDAD
    if(selectLongitud_1 == "milla_nautica" && selectLongitud_2 == "kilometro"){
        inputLongitud_2.value = inputLongitud_1.value * 1.852;
        muestra_formula.innerHTML = "El valor de longitud multiplicado por 1.852";
    }
    
    if(selectLongitud_1 == "milla_nautica" && selectLongitud_2 == "metro"){
        inputLongitud_2.value = inputLongitud_1.value * 1852;
        muestra_formula.innerHTML = "El valor de longitud multiplicado por 1852";
    }

    if(selectLongitud_1 == "milla_nautica" && selectLongitud_2 == "centimetro"){
        inputLongitud_2.value = inputLongitud_1.value * 185200;
        muestra_formula.innerHTML = "El valor de longitud multiplicado por 185200";
    }

    if(selectLongitud_1 == "milla_nautica" && selectLongitud_2 == "milimetro"){
        inputLongitud_2.value = inputLongitud_1.value * 1852000;
        muestra_formula.innerHTML = "El valor de longitud multiplicado por 1852000";
    }

    if(selectLongitud_1 == "milla_nautica" && selectLongitud_2 == "micrometro"){
        inputLongitud_2.value = inputLongitud_1.value * 1852000000;
        muestra_formula.innerHTML = "El valor de longitud multiplicado por 1852000000";
    }

    if(selectLongitud_1 == "milla_nautica" && selectLongitud_2 == "nanometro"){
        inputLongitud_2.value = inputLongitud_1.value * 1852000000000;
        muestra_formula.innerHTML = "El valor de longitud multiplicado por 1852000000000";
    }

    if(selectLongitud_1 == "milla_nautica" && selectLongitud_2 == "milla"){
        inputLongitud_2.value = inputLongitud_1.value * 1.151;
        muestra_formula.innerHTML = "El valor de longitud multiplicado por 1.151";
    }

    if(selectLongitud_1 == "milla_nautica" && selectLongitud_2 == "yarda"){
        inputLongitud_2.value = inputLongitud_1.value * 2025;
        muestra_formula.innerHTML = "El valor de longitud multiplicado por 2025";
    }

    if(selectLongitud_1 == "milla_nautica" && selectLongitud_2 == "pie"){
        inputLongitud_2.value = inputLongitud_1.value * 6076;
        muestra_formula.innerHTML = "El valor de longitud multiplicado por 6076";
    }

    if(selectLongitud_1 == "milla_nautica" && selectLongitud_2 == "pulgada"){
        inputLongitud_2.value = inputLongitud_1.value * 72913;
        muestra_formula.innerHTML = "El valor de longitud multiplicado por 72913";
    }

    if(selectLongitud_1 == "milla_nautica" && selectLongitud_2 == "milla_nautica"){
        inputLongitud_2.value = inputLongitud_1.value;
        muestra_formula.innerHTML = "El valor de longitud multiplicado por 1";
    }
}
    
    //FUNCION PARA TEMPERATURA-------------------------------------------------------------------------------------
    function cambiaTemperatura(){
        var inputTemperatura_1 = document.getElementById("input_temperatura_1");
        var inputTemperatura_2 = document.getElementById("input_temperatura_2");
        var muestra_formula = document.getElementById("formula");
        var selectTemperatura_1 = document.getElementById("select_temperatura_1").value;
        var selectTemperatura_2 = document.getElementById("select_temperatura_2").value;

        if(selectTemperatura_1 == "celsius" && selectTemperatura_2 == "celsius"){ //CELSIUS
            inputTemperatura_2.value = inputTemperatura_1.value;
            muestra_formula.innerHTML = "Es el mismo valor que se introdujo";
        }

        if(selectTemperatura_1 == "celsius" && selectTemperatura_2 == "fahrenheit"){ //CELSIUS
            inputTemperatura_2.value = (((inputTemperatura_1.value)*(1.8))+32);
            muestra_formula.innerHTML = "aplicando: (°C × 9/5) + 32 = °F";
        }

        if(selectTemperatura_1 == "celsius" && selectTemperatura_2 == "kelvin"){ //CELSIUS
            inputTemperatura_2.value = parseFloat(inputTemperatura_1.value) + parseFloat(273.15);
            muestra_formula.innerHTML = "aplicando: °C + 273.15 = K";
        }

        if(selectTemperatura_1 == "fahrenheit" && selectTemperatura_2 == "celsius"){ //FAHRENHEIT
            inputTemperatura_2.value = (((inputTemperatura_1.value)-32)*(5/9));
            muestra_formula.innerHTML = "Aplicando: (°F − 32) × 5/9 = °C";
        }

        if(selectTemperatura_1 == "fahrenheit" && selectTemperatura_2 == "fahrenheit"){ //FAHRENHEIT
            inputTemperatura_2.value = inputTemperatura_1.value;
            muestra_formula.innerHTML = "Es el mismo valor que se introdujo";
        }

        if(selectTemperatura_1 == "fahrenheit" && selectTemperatura_2 == "kelvin"){ //FAHRENHEIT
            inputTemperatura_2.value = (((inputTemperatura_1.value - 32) * (5/9)) + 273.15);
            muestra_formula.innerHTML = "Aplicando: (°F − 32) × 5/9 + 273.15 = K";
        }

        if(selectTemperatura_1 == "kelvin" && selectTemperatura_2 == "celsius"){ //KELVIN
            inputTemperatura_2.value = inputTemperatura_1.value - 273.15;
            muestra_formula.innerHTML = "Aplicando: K − 273.15 = °C ";
        }

        if(selectTemperatura_1 == "kelvin" && selectTemperatura_2 == "fahrenheit"){ //KELVIN
            inputTemperatura_2.value = (((inputTemperatura_1.value - 273.15)*(9/5))+32);
            muestra_formula.innerHTML = "Aplicando: (K − 273.15) × 9/5 + 32 = °F";
        }

        if(selectTemperatura_1 == "kelvin" && selectTemperatura_2 == "kelvin"){ //KELVIN
            inputTemperatura_2.value = inputTemperatura_1.value;
            muestra_formula.innerHTML = "Es el mismo valor que se introdujo";
        }
}

//FUNCION PARA TEMPERATURA-------------------------------------------------------------------------------------
function cambiaMasa(){
    var inputMasa_1 = document.getElementById("input_masa_1");
    var inputMasa_2 = document.getElementById("input_masa_2");
    var muestra_formula = document.getElementById("formula_masa");
    var selectMasa_1 = document.getElementById("select_masa_1").value;
    var selectMasa_2 = document.getElementById("select_masa_2").value;


    //TONELADA A CUALQUIER OTRA UNIDAD
    if(selectMasa_1 == "tonelada" && selectMasa_2 == "tonelada"){
        inputMasa_2.value = inputMasa_1.value;
        muestra_formula.innerHTML = "El valor de masa multiplicado por 1";
    }
    
    if(selectMasa_1 == "tonelada" && selectMasa_2 == "kilogramo"){
        inputMasa_2.value = inputMasa_1.value * 1000;
        muestra_formula.innerHTML = "El valor de masa multiplicado por 1000";
    }

    if(selectMasa_1 == "tonelada" && selectMasa_2 == "gramo"){
        inputMasa_2.value = inputMasa_1.value * 1000000;
        muestra_formula.innerHTML = "El valor de masa multiplicado por 1000000";
    }

    if(selectMasa_1 == "tonelada" && selectMasa_2 == "miligramo"){
        inputMasa_2.value = inputMasa_1.value* 1000000000;
        muestra_formula.innerHTML = "El valor de masa multiplicado por 1000000000";
    }

    if(selectMasa_1 == "tonelada" && selectMasa_2 == "microgramo"){
        inputMasa_2.value = inputMasa_1.value * 1000000000000;
        muestra_formula.innerHTML = "El valor de masa multiplicado por 1000000000000";
    }

    if(selectMasa_1 == "tonelada" && selectMasa_2 == "libra"){
        inputMasa_2.value = inputMasa_1.value * 2205;
        muestra_formula.innerHTML = "El valor de masa multiplicado por 2205";
    }

    if(selectMasa_1 == "tonelada" && selectMasa_2 == "onza"){
        inputMasa_2.value = inputMasa_1.value * 35274;
        muestra_formula.innerHTML = "El valor de masa multiplicado por 35274";
    }

    //KILOGRAMO A CUALQUIER OTRA UNIDAD
    if(selectMasa_1 == "kilogramo" && selectMasa_2 == "tonelada"){
        inputMasa_2.value = inputMasa_1.value/ 1000;
        muestra_formula.innerHTML = "El valor de masa dividido entre 1000";
    }
    
    if(selectMasa_1 == "kilogramo" && selectMasa_2 == "kilogramo"){
        inputMasa_2.value = inputMasa_1.value;
        muestra_formula.innerHTML = "El valor de masa multiplicado por 1";
    }

    if(selectMasa_1 == "kilogramo" && selectMasa_2 == "gramo"){
        inputMasa_2.value = inputMasa_1.value * 1000;
        muestra_formula.innerHTML = "El valor de masa multiplicado por 1000";
    }

    if(selectMasa_1 == "kilogramo" && selectMasa_2 == "miligramo"){
        inputMasa_2.value = inputMasa_1.value* 1000000;
        muestra_formula.innerHTML = "El valor de masa multiplicado por 1000000";
    }

    if(selectMasa_1 == "kilogramo" && selectMasa_2 == "microgramo"){
        inputMasa_2.value = inputMasa_1.value * 1000000000;
        muestra_formula.innerHTML = "El valor de masa multiplicado por 1000000000";
    }

    if(selectMasa_1 == "kilogramo" && selectMasa_2 == "libra"){
        inputMasa_2.value = inputMasa_1.value * 2.205;
        muestra_formula.innerHTML = "El valor de masa multiplicado por 2.205";
    }

    if(selectMasa_1 == "kilogramo" && selectMasa_2 == "onza"){
        inputMasa_2.value = inputMasa_1.value * 35.274;
        muestra_formula.innerHTML = "El valor de masa multiplicado por 35.274";
    }

    //GRAMO A CUALQUIER OTRA UNIDAD
    if(selectMasa_1 == "gramo" && selectMasa_2 == "tonelada"){
        inputMasa_2.value = inputMasa_1.value/ 1000000;
        muestra_formula.innerHTML = "El valor de masa dividido entre 1000000";
    }
    
    if(selectMasa_1 == "gramo" && selectMasa_2 == "kilogramo"){
        inputMasa_2.value = inputMasa_1.value/ 1000;
        muestra_formula.innerHTML = "El valor de masa dividido entre 1000";
    }

    if(selectMasa_1 == "gramo" && selectMasa_2 == "gramo"){
        inputMasa_2.value = inputMasa_1.value;
        muestra_formula.innerHTML = "El valor de masa multiplicado por 1";
    }

    if(selectMasa_1 == "gramo" && selectMasa_2 == "miligramo"){
        inputMasa_2.value = inputMasa_1.value* 1000;
        muestra_formula.innerHTML = "El valor de masa multiplicado por 1000";
    }

    if(selectMasa_1 == "gramo" && selectMasa_2 == "microgramo"){
        inputMasa_2.value = inputMasa_1.value * 1000000;
        muestra_formula.innerHTML = "El valor de masa multiplicado por 1000000";
    }

    if(selectMasa_1 == "gramo" && selectMasa_2 == "libra"){
        inputMasa_2.value = inputMasa_1.value/ 454;
        muestra_formula.innerHTML = "El valor de masa dividido entre 454";
    }

    if(selectMasa_1 == "gramo" && selectMasa_2 == "onza"){
        inputMasa_2.value = inputMasa_1.value/ 28.35;
        muestra_formula.innerHTML = "El valor de masa dividido entre 28.35";
    }

    //MILIGRAMO A CUALQUIER OTRA UNIDAD
    if(selectMasa_1 == "miligramo" && selectMasa_2 == "tonelada"){
        inputMasa_2.value = inputMasa_1.value/ 1000000000;
        muestra_formula.innerHTML = "El valor de masa dividido entre 1000000000";
    }
    
    if(selectMasa_1 == "miligramo" && selectMasa_2 == "kilogramo"){
        inputMasa_2.value = inputMasa_1.value/ 1000000;
        muestra_formula.innerHTML = "El valor de masa dividido entre 1000000";
    }

    if(selectMasa_1 == "miligramo" && selectMasa_2 == "gramo"){
        inputMasa_2.value = inputMasa_1.value/ 1000;
        muestra_formula.innerHTML = "El valor de masa dividido entre 1000";
    }

    if(selectMasa_1 == "miligramo" && selectMasa_2 == "miligramo"){
        inputMasa_2.value = inputMasa_1.value;
        muestra_formula.innerHTML = "El valor de masa multiplicado por 1";
    }

    if(selectMasa_1 == "miligramo" && selectMasa_2 == "microgramo"){
        inputMasa_2.value = inputMasa_1.value * 1000;
        muestra_formula.innerHTML = "El valor de masa multiplicado por 1000";
    }

    if(selectMasa_1 == "miligramo" && selectMasa_2 == "libra"){
        inputMasa_2.value = inputMasa_1.value/ 453592;
        muestra_formula.innerHTML = "El valor de masa dividido entre 453592";
    }

    if(selectMasa_1 == "miligramo" && selectMasa_2 == "onza"){
        inputMasa_2.value = inputMasa_1.value/ 28350;
        muestra_formula.innerHTML = "El valor de masa dividido entre 28350";
    }

    //MICROGRAMO A CUALQUIER OTRA UNIDAD
    if(selectMasa_1 == "microgramo" && selectMasa_2 == "tonelada"){
        inputMasa_2.value = inputMasa_1.value/ 1000000000000;
        muestra_formula.innerHTML = "El valor de masa dividido entre 1000000000000";
    }
    
    if(selectMasa_1 == "microgramo" && selectMasa_2 == "kilogramo"){
        inputMasa_2.value = inputMasa_1.value/ 1000000000;
        muestra_formula.innerHTML = "El valor de masa dividido entre 1000000000";
    }

    if(selectMasa_1 == "microgramo" && selectMasa_2 == "gramo"){
        inputMasa_2.value = inputMasa_1.value/ 1000000;
        muestra_formula.innerHTML = "El valor de masa dividido entre 1000000";
    }

    if(selectMasa_1 == "microgramo" && selectMasa_2 == "miligramo"){
        inputMasa_2.value = inputMasa_1.value/ 1000;
        muestra_formula.innerHTML = "El valor de masa dividido entre 1000";
    }

    if(selectMasa_1 == "microgramo" && selectMasa_2 == "microgramo"){
        inputMasa_2.value = inputMasa_1.value;
        muestra_formula.innerHTML = "El valor de masa multiplicado por 1";
    }

    if(selectMasa_1 == "microgramo" && selectMasa_2 == "libra"){
        inputMasa_2.value = inputMasa_1.value/ 453600000;
        muestra_formula.innerHTML = "El valor de masa dividido entre 453600000";
    }

    if(selectMasa_1 == "microgramo" && selectMasa_2 == "onza"){
        inputMasa_2.value = inputMasa_1.value/ 28350000;
        muestra_formula.innerHTML = "El valor de masa dividido entre 28350000";
    }

    //LIBRA A CUALQUIER OTRA UNIDAD
    if(selectMasa_1 == "libra" && selectMasa_2 == "tonelada"){
        inputMasa_2.value = inputMasa_1.value/ 2205;
        muestra_formula.innerHTML = "El valor de masa dividido entre 2205";
    }
    
    if(selectMasa_1 == "libra" && selectMasa_2 == "kilogramo"){
        inputMasa_2.value = inputMasa_1.value/ 2.205;
        muestra_formula.innerHTML = "El valor de masa dividido entre 2.205";
    }

    if(selectMasa_1 == "libra" && selectMasa_2 == "gramo"){
        inputMasa_2.value = inputMasa_1.value * 454;
        muestra_formula.innerHTML = "El valor de masa multiplicado por 454";
    }

    if(selectMasa_1 == "libra" && selectMasa_2 == "miligramo"){
        inputMasa_2.value = inputMasa_1.value* 453592;
        muestra_formula.innerHTML = "El valor de masa multiplicado por 453592";
    }

    if(selectMasa_1 == "libra" && selectMasa_2 == "microgramo"){
        inputMasa_2.value = inputMasa_1.value * 453600000;
        muestra_formula.innerHTML = "El valor de masa multiplicado por 453600000";
    }

    if(selectMasa_1 == "libra" && selectMasa_2 == "libra"){
        inputMasa_2.value = inputMasa_1.value;
        muestra_formula.innerHTML = "El valor de masa multiplicado por 1";
    }

    if(selectMasa_1 == "libra" && selectMasa_2 == "onza"){
        inputMasa_2.value = inputMasa_1.value* 16;
        muestra_formula.innerHTML = "El valor de masa multiplicado por 16";
    }

    //ONZA A CUALQUIER OTRA UNIDAD
    if(selectMasa_1 == "onza" && selectMasa_2 == "tonelada"){
        inputMasa_2.value = inputMasa_1.value/ 35274;
        muestra_formula.innerHTML = "El valor de masa dividido entre 35274";
    }
    
    if(selectMasa_1 == "onza" && selectMasa_2 == "kilogramo"){
        inputMasa_2.value = inputMasa_1.value/ 35.274;
        muestra_formula.innerHTML = "El valor de masa dividido entre 35.274";
    }

    if(selectMasa_1 == "onza" && selectMasa_2 == "gramo"){
        inputMasa_2.value = inputMasa_1.value * 28.35;
        muestra_formula.innerHTML = "El valor de masa multiplicado por 28.53";
    }

    if(selectMasa_1 == "onza" && selectMasa_2 == "miligramo"){
        inputMasa_2.value = inputMasa_1.value* 28350;
        muestra_formula.innerHTML = "El valor de masa multiplicado por 28350";
    }

    if(selectMasa_1 == "onza" && selectMasa_2 == "microgramo"){
        inputMasa_2.value = inputMasa_1.value * 28350000;
        muestra_formula.innerHTML = "El valor de masa multiplicado por 28350000";
    }

    if(selectMasa_1 == "onza" && selectMasa_2 == "libra"){
        inputMasa_2.value = inputMasa_1.value/ 16;
        muestra_formula.innerHTML = "El valor de masa dividido entre 16";
    }

    if(selectMasa_1 == "onza" && selectMasa_2 == "onza"){
        inputMasa_2.value = inputMasa_1.value;
        muestra_formula.innerHTML = "El valor de masa multiplicado por 1";
    }
}