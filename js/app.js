$(document).ready(function() {
    //Inicializamos la API de reconocimiento de Voz
    //Recuerda que solo funciona en pocos navegadores
    var recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    //establecemos el idioma que reconocera
    recognition.lang = "es";

    //Cuando haga click en las letras...empezara a escuchar
    $('#buscar').click(function(event) {
        //empezamos el reconocimiento de voz
        recognition.start();
    });
        //Evento que se genera cuando terminamos de hablar...
           recognition.onresult = function (event) {
                finalResult = '';
                //event.resultIndex contiene las palabras que reconocio la API
                for (var i = event.resultIndex; i < event.results.length; ++i) {
                    //Verificamos todas las palabras reconocidas y las concatenamos para mostrarlas
                    if (event.results[i].isFinal) {
                        finalResult = event.results[i][0].transcript;
                        $('#buscar').val(finalResult);
                    }
                }
            };
});