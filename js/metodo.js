const Procedimiento = (text, map, map2) => {
    var $resul = new String();
    var $i, $j, $c, posicion, fila1; //27
    let $minus = text.toLowerCase();
    let espacio = false;



    for ($i = 0; $i < $minus.length; $i++) { //hola mundo
        // $c = text.toLowerCase($i);
        $c = $minus.charAt($i); // ESPACIO
        //$minus = text.toLowerCase($c);
        //DEVUELVE UN NUMERO
        if ($c === ' ') {
            posicion = map2.indexOf($c); // "  "
            //4
            $j = posicion + posicion - posicion;

            fila1 = map2[$j];
            $resul += fila1;



        } else if ($c == 'a' || $c == 'b' || $c == 'c' || $c == 'd' || $c == 'e' || $c == 'f' || $c == 'g' || $c == 'h' || $c == 'i' || $c == 'j' || $c == 'k' || $c == 'l' || $c == 'm' || $c == 'n' || $c == 'ñ' || $c == 'o' || $c == 'p' || $c == 'q' || $c == 'r' || $c == 's' || $c == 't' || $c == 'u' || $c == 'v' || $c == 'w' || $c == 'x' || $c == 'y' || $c == 'z') {
            posicion = map.indexOf($c);
            $j = posicion + posicion - posicion;
            fila1 = map2[$j];
            console.log(fila1)
            $resul += fila1; //!+
        }
        else {
            $resul = 'Dentro del texto que ingreso hay algo diferente a una letra del abecedario, esto es un error y no se puede hacer la encriptacion'
        }
    }
    return $resul;
}
const enCRIPTADO = (text) => {
    var $resul = new String();
    let formula = ["!-,", "!+,", "!+-,", "!++,", "!++-,",
        "/-,", "/+,", "/+-,", "/++,", "/++-,",
        "#-,", "#+,", "#+-,", "#++,", "#++-,",
        "$-,", "$+,", "$+-,", "$++,", "$++-,",
        "%-,", "%+,", "%+-,", "%++,", "%++-,",
        "&-,", "&+,", " "
    ];
    $resul = Procedimiento(text, "abcdefghijklmnñopqrstuvwxyz ", formula);
    return $resul;
}

const Pro2 = (text, map3) => {
    var $resul = new String();
    var $i, $c, max = -1;
    var $resul = new String();
    let fila1, var2;
    var $i, $tam, $j;

    let signos = ["!-", "!+", "!+-", "!++", "!++-",
        "/-", "/+", "/+-", "/++", "/++-",
        "#-", "#+", "#+-", "#++", "#++-",//
        "$-", "$+", "$+-", "$++", "$++-",//
        "%-", "%+", "%+-", "%++", "%++-",
        "&-", "&+", " "
    ];

    let signos2 = [" !-", " !+", " !+-", " !++", " !++-",
        " /-", " /+", " /+-", " /++", " /++-",
        " #-", " #+", " #+-", " #++", " #++-",//
        " $-", " $+", " $+-", " $++", " $++-",//
        " %-", " %+", " %+-", " %++", " %++-",
        " &-", " &+", " "
    ];

    $tam = text.length;

    var separar = text.split(","); //,"#","$","%","&","/"
    // $letra=text.charAt($j);
    for ($i = 0; $i < separar.length; $i++) {
        //$resul += "i:::"+$i;
        // $resul+="posicion "+$i+":     "+ separar[$i]+"\n" ; // IMPRIMES EL VALOR
        max++;

        if ((text[$tam - 1]) != ',') {
            $resul = "ERROR AL INGRESAR LOS DATOS PARA EL DESIFRADO, PUEDE SER POR: \n 1.- INGRESO VALORES QUE NO CORRESPONDEN \n 2.-INGRESO VARIOS ESPACIOS SEGUIDOS \n 3.-Falta la ultima coma \n 4.-Ingreso simbolos que no corresponden"; 

        }

        else if (separar[$i] === '!-' || separar[$i] === '!+' || separar[$i] === '!+-'
            || separar[$i] === '!++' || separar[$i] === '!++-' || separar[$i] === '/-'
            || separar[$i] === '/+' || separar[$i] === '/+-' || separar[$i] === '/++'
            || separar[$i] === '/++-' || separar[$i] === '#-' || separar[$i] === '#+'
            || separar[$i] === '#+-' || separar[$i] === '#++' || separar[$i] === '#++-'
            || separar[$i] === '$-' || separar[$i] === '$+' || separar[$i] === '$+-'
            || separar[$i] === '$++' || separar[$i] === '$++-' || separar[$i] === '%-' || separar[$i] === '%+'
            || separar[$i] === '%+-' || separar[$i] === '%++' || separar[$i] === '%++-' || separar[$i] === '&-'
            || separar[$i] === '&+') {
            $j = signos.indexOf(separar[$i]);
            //$resul+="posicion i::"+$i +"posicion j::"+$j;

            fila1 = "" + map3.charAt($j);
            $resul += fila1;

        }
        else if (separar[$i] === ' !-' || separar[$i] === ' !+' || separar[$i] === ' !+-'
            || separar[$i] === ' !++' || separar[$i] === ' !++-' || separar[$i] === ' /-'
            || separar[$i] === ' /+' || separar[$i] === ' /+-' || separar[$i] === ' /++'
            || separar[$i] === '/++-' || separar[$i] === ' #-' || separar[$i] === ' #+'
            || separar[$i] === ' #+-' || separar[$i] === ' #++' || separar[$i] === ' #++-'
            || separar[$i] === ' $-' || separar[$i] === ' $+' || separar[$i] === ' $+-'
            || separar[$i] === ' $++' || separar[$i] === ' $++-' || separar[$i] === ' %-' || separar[$i] === ' %+'
            || separar[$i] === ' %+-' || separar[$i] === ' %++' || separar[$i] === ' %++-' || separar[$i] === ' &-'
            || separar[$i] === ' &+') {
            $j = signos2.indexOf(separar[$i]);
            //$resul+="posicion i::"+$i +"posicion j::"+$j;

            fila1 = " " + map3.charAt($j);
            $resul += fila1;

        }

        else if (max === (separar.length - 1)) {


            $resul += "";

            //    $resul += "eror"; 
        }

        else if (separar[$i] != ' !-' || separar[$i] != ' !+' || separar[$i] != ' !+-'
            || separar[$i] != ' !++' || separar[$i] != ' !++-' || separar[$i] != ' /-'
            || separar[$i] != ' /+' || separar[$i] != ' /+-' || separar[$i] != ' /++'
            || separar[$i] != '/++-' || separar[$i] != ' #-' || separar[$i] != ' #+'
            || separar[$i] != ' #+-' || separar[$i] != ' #++' || separar[$i] != ' #++-'
            || separar[$i] != ' $-' || separar[$i] != ' $+' || separar[$i] != ' $+-'
            || separar[$i] != ' $++' || separar[$i] != ' $++-' || separar[$i] != ' %-' || separar[$i] != ' %+'
            || separar[$i] != ' %+-' || separar[$i] != ' %++' || separar[$i] != ' %++-' || separar[$i] != ' &-'
            || separar[$i] != ' &+') {
                $resul = "ERROR AL INGRESAR LOS DATOS PARA EL DESIFRADO, PUEDE SER POR: \n 1.- INGRESO VALORES QUE NO CORRESPONDEN \n 2.-INGRESO VARIOS ESPACIOS SEGUIDOS \n 3.-Falta la ultima coma \n 4.-Ingreso simbolos que no corresponden"; 
        }
        else if (separar[$i] != '!-' || separar[$i] != '!+' || separar[$i] != '!+-'
            || separar[$i] != '!++' || separar[$i] != '!++-' || separar[$i] != '/-'
            || separar[$i] != '/+' || separar[$i] != '/+-' || separar[$i] != '/++'
            || separar[$i] != '/++-' || separar[$i] != '#-' || separar[$i] != '#+'
            || separar[$i] != '#+-' || separar[$i] != '#++' || separar[$i] != '#++-'
            || separar[$i] != '$-' || separar[$i] != '$+' || separar[$i] != '$+-'
            || separar[$i] != '$++' || separar[$i] != '$++-' || separar[$i] != '%-' || separar[$i] != '%+'
            || separar[$i] != '%+-' || separar[$i] != '%++' || separar[$i] != '%++-' || separar[$i] != '&-'
            || separar[$i] != '&+') {
                $resul = "ERROR AL INGRESAR LOS DATOS PARA EL DESIFRADO, PUEDE SER POR: \n 1.- INGRESO VALORES QUE NO CORRESPONDEN \n 2.-INGRESO VARIOS ESPACIOS SEGUIDOS \n 3.-Falta la ultima coma \n 4.-Ingreso simbolos que no corresponden"; 
        }
        else if (max != (separar.length - 1)) { $resul = "ERROR AL INGRESAR LOS DATOS PARA EL DESIFRADO, PUEDE SER POR: \n 1.- INGRESO VALORES QUE NO CORRESPONDEN \n 2.-INGRESO VARIOS ESPACIOS SEGUIDOS \n 3.-Falta la ultima coma \n 4.-Ingreso simbolos que no corresponden"; }
        

    }

    return $resul;


}
const desCRIPTADO = (text) => {
    var $resul = new String();
    $resul = Pro2(text, "abcdefghijklmnñopqrstuvwxyz ");
    return $resul;
}




const codificarR13 = () => document.getElementById("resultado").innerHTML = enCRIPTADO(document.getElementById("cadena").value);

const descodificarR13 = () => document.getElementById("resultado2").innerHTML = desCRIPTADO(document.getElementById("cadena2").value);