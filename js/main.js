function preguntar(){
    const preguntas = ["¿En que año llegó el hombre a la luna?", "¿Cuántos corazones tienen los pulpos?", "¿Cuántos titulos mundiales de formula 1 ganó Juan Manuel Fangio?", "¿Cuántos lados tiene un rombo?", "¿Qué cantidad expresa el siguiente número romano: 'IX'?", "¿Cuántos mundiales ganó la selección mayor de fútbol Argentina?" ];
    const respuestas = ["1969", "3", "5", "4", "9", "3"];
    let puntos = 0;
    let jugarDeNuevo
    
    do {
        for (let i = 0; i <6; i++){
            let respuestaUsuario = prompt(preguntas[i]);
        if (respuestaUsuario == respuestas[i]) {        
            alert("¡Correcto! ¡sumas 10 puntos!");
            puntos += 10;
        }else {
            alert("Incorrecto, la respuesta correcta era: " + respuestas[i]);
            }
        }
            jugarDeNuevo = confirm("¡Juego terminado!  Tu puntuación final es: " + puntos + "pts. ¿Quieres volver a jugar");
        if (jugarDeNuevo){
            puntos = 0;
        }
    }while(jugarDeNuevo);
    }
    

    alert("¡Bienvenido al juego de preguntas y respuestas!. Utiliza números para responder las preguntas. ¡Buena Suerte!")
    preguntar()