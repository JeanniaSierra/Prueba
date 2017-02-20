var resultado = 0;
var correctas = 0;

function validar() {
    //validamos la 1 respuesta

    if (formulario.res1[0].checked) {
        res1 = 10;
        correctas = correctas + 1;
    } else {
        res1 = 0;
    }

    //validamos la 2 respuesta

    if (formulario.res2.value == "servidor web") {
        res2 = 10;
        correctas = correctas + 1;
    } else {
        res2 = 0;
    }

    //validamos la 3 respuesta

    if (formulario.res3[1].checked) {
        res3 = 10;
        correctas = correctas + 1;
    } else {
        res3 = 0;
    }

    //validamos la 4 respuesta

    if (formulario.res4[0].checked && formulario.res4[2].checked) {
        res4 = 10;
        correctas = correctas + 1;
    } else {
        if (formulario.res4[0].checked || formulario.res4[2].checked) {
            res4 = 5;
        } else {
            res4 = 0;
        }
    }

    //validamos la 5 respuesta

    if (formulario.res5[0].checked) {
        res5 = 10;
        correctas = correctas + 1;
    } else {
        res5 = 0;
    }

    //validamos la 6 respuesta

    if (formulario.res6[2].checked) {
        res6 = 10;
        correctas = correctas + 1;
    } else {
        res6 = 0;
    }

    //validamos la 7 respuesta

    if (formulario.res7.value == "ip") {
        res7 = 10;
        correctas = correctas + 1;
    } else {
        res7 = 0;
    }

    //validamos la 8 respuesta

    if (formulario.res8[1].checked) {
        res8 = 10;
        correctas = correctas + 1;
    } else {
        res8 = 0;
    }

    //validamos la 9 respuesta

    if (formulario.res9[0].checked) {
        res9 = 10;
        correctas = correctas + 1;
    } else {
        res9 = 0;
    }

    //validamos la 10 respuesta

    if (formulario.res10[1].checked) {
        res10 = 10;
        correctas = correctas + 1;
    } else {
        res10 = 0;
    }

    resultado = res1 + res2 + res3 + res4 + res5 + res6 + res7 + res8 + res9 + res10;
    
    alert('puntaje obtenido: ' + resultado + ' / 100');
    inc=10-correctas;
    alert('respuestas correctas: ' + correctas + '\nrespuestas incorrectas: ' + inc);
	alert('nuevos cambios ');
    

}