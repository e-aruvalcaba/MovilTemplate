var isLoadingNow = true;
var intervalo;
var localDataStored;
// INICIA CLONACION DE FUNCIONALIDAD ANIMATE 2017

/*
v1.0 salida a produccion: Enero 2019.
v2.0 terminada 20 Octubre 2019
v3.0 Adaptacion Responsive Template HTML5 v1
Notas:
*/
//Variables Globales
window.start = this;
var termino = false;
var banderillas = false;
var Rutas = new Array();
var Pag = new Array();
var PagTotal = 0;
var currentPagina = 0;
var TRAK = new Array();
var NombreModulos = new Array();
var Modulos = new Array();
var menu_open = false;
var bussy = false;
var fullscreen = false;
var Total;
var TRAKtmp = new Array();
var Evals = new Array();
var EvalInProgress = false;
var EvalID = 19;
var ULTIMO = 0;
var Avance = 0;
var ONLINE = false;
var xmlGlosario = "xml/glosario.xml"
var IDActual = 0;
var URLactual = window.location;
var obj;
var _root = window.parent;
var timeline = 0;
var contador = 0;
var canvasContenido;
var estadoMenu = false;
var terminado = false;
var LastMCVid = false;
var VidLast = false;
var estadoSim = false;
var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
var SCORE;
var OS;
var visibleSim;
var visibleVid;
var oportunidades = 0;
var intentoAct = 0;
var califMinima = 0;
var validar_control;
var validar_shift;
var backdoor = false;
var clave_backdoor = "123";
var clave_TerminarTema = "qwe";
var clave_eval = "asd";
var clave_borrar = "zxc";
var Glosario_gpo = new Array();
var Glosario_pal = new Array();
var Glosario_desc = new Array();
var pagActual = 0; // pagina actual en la que se esta dentro del tema
var numPags = 0; // numero de paginas totales del tema
var controlAtras = false; // un controlador para retroceder
var NumPreguntas = 0; //se guarda el numero de preguntas de la evaluacion
var checkboxText = ""; //se guardan las eqituetas HTML para backdoor de EVAL
var controlEvalArray = 0; //controla las posiciones del arreglo de preguntas en EVAL (solo desde el start)
var controlIrUltimo = false; // controlador para que te mande a la ultima pagina del ultimo tema que visitaste
var contControlCheckbox = 0; //contador controlador para backdoor de evaluacion
var btnAtras;
var btnSiguiente;
var btnMenu;
var btnEval;
var btnHome;
var btnCerrar;
var EdoBtns = {
    btnAtras: true,
    btnSiguiente: true,
    btnMenu: true,
    btnEval: true,
    btnCerrar: true,
    btnHome: true,
    barra: true
};
var NumTemas = 0;
var Temaslibre = false;
var btnArray = [];
var libre = false;
var tl = new gsap.timeline();
var debug = false;
// var myVar = setInterval(myTimer, 20);
var cursoConAudio = false; // Identifica si el curso llevara audios, por este medio se inicializan y ejecutan todos los metodos y funciones para el audio.
var audio;
var bloqueoAudio = false;
var audioIsPlaying = false;
var ListaAudios = [];
var moviePlay = "";
var ListaPreloadAudio = [];

// window.onresize = function(){

//     if(isMobile() || $(window).width() < 1200){
//         console.log("Entro window")
//         $("#sidebarCol").css("height", "unset");
//     }
// }


function setBodyColor() {
    // console.log("COLOR DEL BODY")
    // $("#contenido").css("background-color", "#6286C9");
}
/**
 * Funcionalidad del nuevo cargador
 */
$(document).ready(function () {
    var counter = 0;
    var c = 0;
    intervalo = setInterval(function () {
        $(".loading-page .counter h1").html(c + "%");
        $(".loading-page .counter hr").css("width", c + "%");

        counter++;
        c++;

        // if (counter == 100){
        //     clearInterval(intervalo);
        // }

        if (counter == 100 && isLoadingNow == false || counter == 100) {
            if (intervalo) {
                clearInterval(intervalo);
            }
            $("#loader").css("display", "none");
            $("#navbar").addClass("d-flex");
            $("#superContainer").addClass("d-block");
            $("#footer_desktop").addClass("d-lg-flex");

        }
    }, 50);

})
/**
 * Detener la carga cuando se haya terminado de cargar
 */
function stopLoading() {
    isLoadingNow = false;
    clearInterval(intervalo);
    $("#loader").css("display", "none");
    $("#navbar").addClass("d-flex");
    $("#superContainer").addClass("d-block");
}

function loadContent(path) {
    // enterPageTransition();
    $('#content').load(path, () => {
        // ¿Que hacer al cargar el contenido?
        gsap.to($('#content'), { duration: 0.5, opacity: 1 })

    });
}

function enterPageTransition() {
    $("#ultimoContainer").css("display", "flex");
    gsap.to($("#ultimoContainer"), { duration: 0.5, ease: "power1.out", left: 0 });
}
function leavePageTransition() {
    gsap.to($("#ultimoContainer"), { duration: 1, ease: "power1.out", left: -2500 });
    setTimeout(() => {
        $("#ultimoContainer").css("display", "none");
    }, 1000);
}

function animateContentOut() {
    gsap.to($("#content"), { duration: 0.1, x: -1999, opacity: 0 });
}
function animateContentIn() {
    gsap.to($("#content"), { duration: 0.2, x: 0, ease: "none", opacity: 1, });
}

$('[data-toggle="offcanvas"]').on('click', () => {
    $('.offcanvas-collapse').toggleClass('open');
    blockScrollOnMobile();
    callMenu();
});

function animateme() {
    $(".float").removeClass("nextAnimation");
    gsap.to($(".float"), { duration: 1.5, y: "500" });
}

function animatemeBack() {
    gsap.to($(".float"), { duration: 2, ease: "elastic.out(1, 0.3)", y: "0", onComplete: addNextAnimation });
}

function addNextAnimation() {
    $(".float").css("y", "0px")
    $(".float").addClass("nextAnimation");
}
// function resizeMenuHeight() {
//     // Setear el height del contenedor para que no haga scroll al aparecer
//     debugger
//     if(isMobile() === false && $(window).width() > 1999){
//         $("#sidebarCol").css("height", ($(window).height() - 56).toString());
//     }
// }

function cerrarMenu() {
    if ($('#sidebarCol').hasClass("menu-show")) {

        if (!isMobile()) {
            // gsap.to($("#sidebarCol"), { duration: 0.2, x: $("#sidebarCol").position().left - 100, opacity: 0 });
            $('#sidebarCol').toggleClass("close-animation");
            setTimeout(() => {
                $('#sidebarCol').removeClass("menu-show");
                $('#sidebarCol').addClass("menu-hide");
                $('.navbar-collapse').removeClass("open");
            }, 100);

            setTimeout(() => {
                $('#sidebarCol').toggleClass("close-animation");
            }, 200);
        } else {
            $('#sidebarCol').removeClass("menu-show");
            $('#sidebarCol').addClass("menu-hide");
            $('.navbar-collapse').removeClass("open");
        }
        let btnArray = new Array();
        if (EdoBtns.btnAtras && IDActual > 0) { btnArray.push(btnAtras); btnArray.push(btnAtrasD); }
        if (EdoBtns.btnSiguiente) { btnArray.push(btnSiguiente); btnArray.push(btnSiguienteD); }
        habilitar_deshabilitar_btns(btnArray, "h", "llamar_menu");
        this.menu_open = false;
        $('html').css("overflow", "auto");
        // gsap.to($("#sidebarCol"), { duration: 0.8, ease: "back.out(1.7)", x: "-500", opacity: 0});
    }
}

function callMenu() {
    if (isMobile()) {
        $('#sidebarCol').css("transform", "inherit");
    }

    // detectarMovil(){}
    if ($('#sidebarCol').hasClass("menu-hide")) {
        $('#sidebarCol').removeClass("menu-hide");
        // resizeMenuHeight();
        $('#sidebarCol').addClass("menu-show");
        if (!isMobile()) {
            // gsap.to($("#sidebarCol"), { duration: 0.2, x: "0", opacity: 1 });
        }

        this.menu_open = true;
        let stateBackup = [EdoBtns.btnSiguiente, EdoBtns.btnAtras];

        // Deshabilitar botones atras y siguiente.
        habilitar_deshabilitar_btns(getBtnArray(btnAtras, btnSiguiente), "d", "llamar_menu");
        EdoBtns.btnSiguiente = stateBackup[0];
        EdoBtns.btnAtras = stateBackup[1];
        $('html').css("overflow", "hidden");

    } else {
        cerrarMenu();
    }
    actualizar_menuHTML(TRAK);

    $('#sidebarCol').prop("disabled", true);

}

function blockScrollOnMobile() {
    if ($('.offcanvas-collapse').hasClass('open')) {
        $(".html").addClass("blck_scroll");
    } else {
        $(".html").removeClass("blck_scroll");
    }
}






// window.onresize = function () {
//     let maxHeight = window.screen.height,
//         maxWidth = window.screen.width,
//         curHeight = window.innerHeight,
//         curWidth = window.innerWidth;

//     if (maxWidth == curWidth && maxHeight >= (curHeight - 10) && maxHeight <= (curHeight + 10)) {
//         fullscreen = true;
//     } else {
//         fullscreen = false;
//     }

//     if (fullscreen) {
//         fullscreen = true;
//         $(".contenedor").css("width", "100%");
//     } else {
//         fullscreen = false;
//         $(".contenedor").css("width", "75%");
//     }

//     // if (debug) {
//     //     console.log("--------------------------------------"); console.log($("#menuHTML").height());	// console.log($("#div_contenido").height());	// console.log("--------------------------------------");
//     // }
//     // $("#menuHTML").height($("#div_contenido").height() - 30);
//     // $("#menuHTML").height($("#div_contenido").height() - 30);
//     // $("#temasContainer").height($("#menuHTML").height() - 100);
//     // $("#barraInferior").width($("#div_contenido").width() + 1);
//     // $("#mensajesHTML").width($("#div_contenido").width());
//     // $("#ultimoContainer").width($("#div_contenido").width());
//     // let h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
//     // let diff = h - $("#content").height();
//     // $("#content").css("margin-top", (((diff / 2) - 10).toString() + "px"));
// }

// Funciones para el control del audio
function getAudioInstance() {
    return $("#templateAudio");
}
/**
 * @description Resetea el curso y todas sus variables
 */
function reiniciarCurso() {

    habilitar_deshabilitarBarra("h");
    // Resetear el trak intentos, avance y el ultimo visto
    for (let i = 0; i < NumTemas; i++) {
        TRAK[i] = 0;
    }
    intentoAct = 0;
    ULTIMO = 0;
    Avance = 0;
    actualizar_menuHTML(TRAK);
    reset_navegacion();
    leavePageTransition();
    setTimeout(() => {
        ir(0);
    }, 500);
}

/**
 * @param NA.
 * @returns boolean
 * @description Regresa true si el curso se esta corriendo en un navegador mobile o tablet.
 */
function detectarMovil() {
    var check = false;
    (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};

/**
 * @param {*} tipo Tipo de alerta. {1} para mensaje siguiente. {2} para mensaje tema terminado.
 * @param {*} texto Texto que contendra la alerta al mostrarse.
 * @returns Void
 * @description Lanza las banderillas con texto para avisar al usuario que el tema/frame termino y hay que presionar siguiente.
 */
function alertas(tipo, texto) {
    switch (tipo) {
        case 1:
            texto = texto === "" || texto === null || texto === undefined || texto === NaN ? "Actividad Completada. Presione Siguiente para continuar..." : texto;
            mostrarSiguiente(texto);
            break;
        case 2:
            texto = texto === "" || texto === null || texto === undefined || texto === NaN ? "Tema Completado. Clic en Siguiente para continuar..." : texto;
            mostrarTemaCompletado(texto);
            break;
    }
}

/**
 * @param NA
 * @returns Void
 * @description Inicializa la linea del tiempo de GSAP en el proyecto para el control correcto de las animaciones de las banderillas para presionar siguiente.
 */
function inicializaMensajes() {
    tl = new TimelineMax({ repeat: 0, onComplete: stopAlertas });
    tl.from($("#mensajesHTML"), 1, { opacity: 0, right: '100px' })
    tl.to($("#mensajesHTML"), 1, { opacity: 0, right: '400px', delay: 5 });
    $("#div_contenido").css("min-width", "800px");
}

/**
 * @param NA
 * @returns Void
 * @description Restablece las clases de los contenedores de las alertas y lo oculta.
 */
function stopAlertas() {
    tl.pause()
    if ($("#alertasContainer").hasClass("siguiente")) {
        $("#alertasContainer").removeClass("siguiente");
    }
    if ($("#alertasContainer").hasClass("completado")) {
        $("#alertasContainer").removeClass("completado");
    }
    $("#mensajesHTML").css("display", "none");
}
/**
 * @param {*}texto Texto a mostrar en la alerta
 * @returns void
 * @description Establece los valores para mostrar la alerta para el Siguiente Tema
 */
function mostrarSiguiente(texto) {
    $("#alertasContainer").addClass("siguiente");
    $("#mensajesHTML").css("display", "inline-block");
    $("#alertasContainer").html(texto);
    tl.restart();
}
/**
 * @param {*}texto Texto a mostrar en la alerta
 * @returns void
 * @description Establece los valores para mostrar la alerta para el Tema completado
 */
function mostrarTemaCompletado(texto) {
    $("#alertasContainer").addClass("completado");
    $("#mensajesHTML").css("display", "inline-block");
    $("#alertasContainer").html(texto);
    tl.restart();
}

/**
 * @param {*}jsonob Objeto Json con la configuracion del curso
 * @returns void
 * @description Crea dinamicamente los elementos mostrados en el menuHTML ademas les asigna su evento clic y los elementos como el titulo del curso evaluaciones etc.
 */
function populateMenu(jsonob) {
    let modulosbreak = [0, 2];
    // Agregar Nombre del Curso
    let consecutivo = 0;
    for (let index = 0; index < jsonob.Modulos.length; index++) {
        for (let j = 0; j < jsonob.Modulos[index]['Mod' + (index + 1)].length; j++) {
            id = consecutivo;
            if (modulosbreak.indexOf(j) !== -1) { //(j === 0) {

                $("#temasContainer").append(
                    "<div id='" + (consecutivo + 1) + "' onclick='llamarTema(" + (consecutivo) + ")' class='col-12 d-flex reset paddingMobile tituloTemaMenu' style='padding-top: 7px!important' data-toggle='offcanvas'>" +
                    "<i class='fas fa-circle menuIcon pl-2'></i>" +
                    "<p class='reset menuParag'>" + jsonob.Modulos[index]['Mod' + (index + 1)][j] + "</p>" +
                    "</div>"
                );
            } else {
                // $("#temasContainer").append(
                //     "<div id='" + (consecutivo + 1) + "' onclick='llamarTema(" + (consecutivo) + ")' class='col-12 d-flex reset paddingMobile tituloTemaMenu' style='padding-left: 30px!important; padding-top: 7px!important' data-toggle='offcanvas'>" +
                //     "<i class='fas fa-circle menuIcon pl-2'></i>" +
                //     "<p class='reset menuParag'>" + jsonob.Modulos[index]['Mod' + (index + 1)][j] + "</p>" +
                //     "</div>"
                // );<

                // SI se necesita el margen se habilita el codigo de arriba
                $("#temasContainer").append(
                    "<div id='" + (consecutivo + 1) + "' onclick='llamarTema(" + (consecutivo) + ")' class='col-12 d-flex reset paddingMobile tituloTemaMenu' style='padding-top: 7px!important' data-toggle='offcanvas'>" +
                    "<i class='fas fa-circle menuIcon pl-2'></i>" +
                    "<p class='reset menuParag'>" + jsonob.Modulos[index]['Mod' + (index + 1)][j] + "</p>" +
                    "</div>"
                );
            }
            consecutivo++;
            if (debug) {
                console.log(jsonob.Modulos[index]['Mod' + (index + 1)][j]);
            }
        }// end for Temas
        // desbloquearTema(0);
    }//End Main For


}// end PopulateMenu function

function cambiarColorFranjas(estilo) {
    let gtl = gsap.timeline();

    switch (estilo) {
        case "portada":
            gtl.to($("#body"), { duration: 0.2, backgroundColor: "#f5f5f5" }); //shorter syntax!            
            break;
        case "reset":
            gtl.to($("#body"), { duration: 0.2, backgroundColor: "#ffffff" }); //shorter syntax!            
            break;
    }


}

/**
 * @param id:Number
 * @returns void
 * @description Carga el tema en el iframe contenido basandose en el id que recibe. 
 */
function llamarTema(id) {
    let aaa = gsap.timeline();
    aaa.to($(".contenido"), { duration: 0.2, backgroundColor: "#ffffff" }); //shorter syntax!

    ir(id);
    cerrarMenu();
}

function isMobile() {
    let value = false;

    if (navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)) {
        value = true;
    }

    // console.log(value)
    return value;
}
/**
 * @param NA
 * @returns void
 * @description Obtiene la informacion del navegador en el cual esta corriendo el contenido.
 * se confirma en que navegador se esta viendo el curso
 */
var getBrowserInfo = function () {
    var ua = navigator.userAgent,
        tem,
        M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE ' + (tem[1] || '');
    }
    if (M[1] === 'Chrome') {
        tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
        if (tem != null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
    }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
    if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
    return M.join(' ');
};

if (debug) {
    console.log("el navegador usado y la version son");
    console.log(getBrowserInfo());
    console.log(getBrowserInfo().split(" ")[0]);
}
function initialize() {

    setTimeout(inicializar, 2000);
    // window.onresize();
    if (cursoConAudio) {
        audio = getAudioInstance();
    }
}

function preloadAudio(url) {
    console.log("trying to preload " + url);
    var audioLoaded = new Audio();

    audioLoaded.addEventListener('error', function failed(e) {
        console.log("COULD NOT LOAD AUDIO");
        $("#NETWORKERROR").show();
    });
    audioLoaded.src = url;

    //   audioLoaded.load();  // add this line
}

function preloadAllAudios() {

    for (let i = 0; i < ListaAudios.length; i++) {
        if (ListaAudios[i] !== "") {
            // var sound = new Audio();
            // ListaPreloadAudio[i] = $.get(ListaAudios[i], function (data) {
            // 	console.log("Load was performed on audio" + i + 1 + ".");
            // 	return data;
            // });
            preloadAudio(ListaAudios[i]);
        }
    }
}

function preloadImages(arrayOfImages) {
    var queue = new createjs.LoadQueue(true);
    queue.on("complete", handleComplete, this);

    // var manifest = {[
    // 	{src:"images/AC_H05_03_ES_atlas_.png?1606700409514", id:"AC_H05_03_ES_atlas_"}
    // ]}

    // queue.loadFile({ src: "temas/images/AC_H05_03_ES_atlas_.png?1606700409514", id: "AC_H05_03_ES_atlas_" });

    // 	for (let i = 0; i < arrayOfImages.length; i++) {
    // //		const element = ;
    // 		queue.loadFile(arrayOfImages[i]);
    // 	}

    // $(arrayOfImages).each(function(){
    //     $('<img/>')[0].src = this;
    //     // Alternatively you could use:
    //     // (new Image()).src = this;
    // });
}
function handleComplete() {
    console.log("Imagen Cargada")
}

function inicializar() {
    InitApi();
}
/**
 * @param NA
 * @returns void
 * @description Inicializa la aplicacion.
 * Función para iniciarlizar API
 *  */
function InitApi() {
    if (debug) {
        console.log("------Inicializacion------");
    }
    getAPI(); //Inicializa el API para el uso de las funciones con SCORM que se encuentran en api.JS.
    IdentificarEstado();
}
/**
 * @param NA
 * @returns void
 * @description Identifica la plataforma de ejecucion del contenido [Local/Online].
 * Función para validar si se navega de manera local o en linea
 *  */
function IdentificarEstado() {
    if (debug) {
        console.log("------Identificado la Ejecucion del Curso------");
    }
    //se determina si el curso corre en local o en linea
    if (String(URLactual).indexOf("http://localhost") == 0 || String(URLactual).indexOf("lumicmedia.com") > 0 || String(URLactual).indexOf("clientes.cdilearning.com") > 0) {
        leeLocal();
        ONLINE = false;
    } else {
        if (String(URLactual).indexOf("http") == 0) {

            if (String(URLactual).indexOf("http://www.lumicmedia.com/") == 0) {
                leeLocal();
                ONLINE = false;
            } else {
                leeOnline();
                ONLINE = true;
                new_nswf_DoFSCommand("getParam", "");
            }
        } else {
            leeLocal();
            ONLINE = false;
        }
    }
}
/**
 * @param JSON Config
 * @returns void
 * @description Obtiene y establece los datos contenidos en el archivo de configuraciones para su uso global.
 * @legacy aqui se colocan todos los archivos SWF que se veran en el curso
 *  */
function initConfig(jsonob) {
    if (debug) {
        console.log("numero de modulos:" + jsonob.Modulos.length / 2);
    }
    let numModulos = jsonob.Modulos.length;
    let indexRutas = 0; // el index de rutas es el segundo objeto en modulos por eso empieza en 1
    let index = 0; // index general en 0

    for (let i = 0; i < jsonob["Rutas"].length; i++) {//New Rutas obtaining method
        for (var j = 0; j < (jsonob["Rutas"][i]["Rut" + (i + 1)]).length; j++) { //recorre el objeto por modulo

            Rutas.push((jsonob["Rutas"][i]["Rut" + (i + 1)])[j]); // se guardan en un arreglo
            index++;
        }
    }
    Total = Rutas.length; // total de rutas/temas
    TotalArchivos = Rutas.length; // se guarda el total de los archivos no borrar!  
    if (debug) {
        console.log("Dato de las rutas: ");
        console.log(Rutas);
        console.log("json trak es:  " + jsonob.Trak);
    }
    initbarra(jsonob);
    $("#NombreDelCurso").html(jsonob.NombreCurso);

    if (ULTIMO > 1 || (ULTIMO === 1 && TRAK[0] == 2)) {
        console.log("mostrarUltimo")
        mostrarUltimo();
    }
}

function llamarRetros() {

}
/**
 * @param NA
 * @returns void
 * @description Actualiza el texto de la barraHTML que muestra el total de temas completados / total temas del curso
 */
function actualizaTemasTerminados() {
    let text = (IDActual + 1) + "/" + NumTemas;
    actualizarProgressBarCDI();
    return $("#numTemasCompletados").html(text);
}
/**
 * @param NA
 * @returns void
 * @description Actualiza la barra de progreso que se encuentra en la barraHTML basandose en el avance del trak global.
 */
function actualizarProgressBar() {

    // let total = 100 / TRAK.length;
    // let progress = 0;
    // for (let index = 0; index < TRAK.length; index++) {
    // 	if (TRAK[index] > 1) {
    // 		progress += total;
    // 	}
    // }
    // $("#progressBar").css("width", progress + "%");
    // $("#percent").html(progress.toFixed(0) + "%");
}
/**
 * @param NA
 * @returns void
 * @description Actualiza la barra de progreso que se encuentra en la barraHTML basandose en el avance del trak global.
 */
function actualizarProgressBarCDI() {
    let progress = (((IDActual + 1) * 100) / numPags);
    $("#progressBar").css("width", progress + "%");
    $("#percent").html(progress.toFixed(0) + "%");
}

/**
 * @param NA
 * @returns void
 * @description Lee los datos del curso almacenados en el LOCAL STORAGE del navegador. Se ejecuta cuando el curso no esta en un servidor web.
 */
function leeLocal() {
    if (debug) {
        console.log("lee local");
    }
    var localStor = leeLocalStorage();
    //Si el local Storage esta vacio o no existe, entonces crea el json a partir de el excel 'configuration.xlsx'
    if (localStor == undefined || localStor == "") {
        if (debug) { console.log("No existe un Informacion"); }
        obj = $.parseJSON(ConfigurationJson);
    } else { // en caso de que ya exista algun guardado
        if (debug) { console.log("Ya existe Informacion"); }
        obj = $.parseJSON(localStor);
    }
    if (debug) {
        console.log("Asignacion de valores");
        console.log(JSON.stringify(obj));
    }

    setValues(obj);
    initConfig(obj);
    cargarPortada();
    // alert(localStor)
}
/**
 * @param {*}ob Objeto JSON de configuracion del curso.
 * @returns void
 * @description Establece los valores contenidos en el objeto JSON del curso que fue leido previamente del LocalStorage o el CMI SuspendData del LMS y los asigna a objetos locales para trabajarlos.
 */
function setValues(ob) {

    ULTIMO = ob.Ultimo;
    Avance = ob.Avance;
    oportunidades = ob.Evaluaciones[0].MaxIntentos; // Will be deprecated, not functional for multiple evals MUS BE AN ARRAY
    intentoAct = ob.Evaluaciones[0].IntentoActual; // Will be deprecated, not functional for multiple evals MUS BE AN ARRAY
    SCORE = ob.Evaluaciones[0].CalActual; // Will be deprecated, not functional for multiple evals MUS BE AN ARRAY
    califMinima = ob.Evaluaciones[0].CalMinima; // Will be deprecated, not functional for multiple evals MUS BE AN ARRAY
    TRAK = ob.Trak;
    NumTemas = ob.NumTemas;
    if (TRAK.length === 0 || TRAK === undefined || TRAK === null || TRAK === NaN) {
        for (let i = 0; i < ob.NumTemas; i++) {
            TRAK.push(0);
        }
    }
    // Pag = ob.Pag;
    libre = ob.Libre;
    NombreModulos = ob.NombreModulos;
    Modulos = ob.Modulos;
    Evals = ob.Evaluaciones; //New implemented feature multi eval
    if (cursoConAudio) {
        ListaAudios = ob.Audios; //Nueva implementacion 21 11 2020 - Manejar audios del curso
    }
}

function iniciarTrak() {
    TRAK = [];
    for (let i = 0; i < numPags; i++) {
        TRAK.push(0);
    }

    return TRAK;
}
/**
 * @param NA
 * @returns void
 * @description Actualiza los valores al objeto JSON que fue leido al iniciar el curso desde el LOCAL STORAGE o el CMI SUSPEND DATA del LMS para volverlo a almacenar.
 */
function setObject() {

    obj.Trak = TRAK;
    obj.Ultimo = ULTIMO;
    obj.Evaluaciones[0]["CalActual"] = SCORE; //Will be deprecated, not functional for multiple evals::: SCORES MUST BE AN ARRAY
    obj.Evaluaciones[0]["MaxIntentos"] = oportunidades;  //Will be deprecated, not functional for multiple evals MUS BE AN ARRAY
    obj.Evaluaciones[0]["IntentoActual"] = intentoAct;  //Will be deprecated, not functional for multiple evals MUST BE AN ARRAY
    obj.Evaluaciones[0].CalMinima = califMinima;  //Will be deprecated, not functional for multiple evals MUS BE AN ARRAY
    obj.Libre = libre;
    obj.Avance = Avance;
    if (cursoConAudio) {
        obj.Audios = ListaAudios;
    }
}

/**
 * @param NA
 * @returns void
 * @description Lee los datos del curso almacenados en el local storage.
 */

function leeLocalStorage() {
    var retorno;
    try {
        var nav = getBrowserInfo().split(" ")[0];
        if (nav == "IE" || isMobile()) {
            if (debug) {
                console.log("leyendo cookie");
            }
            retorno = (document.cookie.indexOf('data=') === -1 ? '' : ("; " + document.cookie).split('; data=')[1].split(';')[0]);
        } else {
            if (debug) { console.log("leyendo LocalStorage"); }
            retorno = window.localStorage.getItem(NombreCurso);
        }
    } catch (e) {
        console.log("error al leer local storage:" + e.text);
    }
    return retorno;
}
/**
 * @param NA
 * @returns void
 * @description Establece los datos manejados en el curso a una llave del LOCAL STORAGE del navegador. (Si el navegador usado es Internet Explorer, guarda los datos en una cookie)
 */

function guardaLocalStorage(clave) {
    try {
        var nav = getBrowserInfo().split(" ")[0];
        if (nav == "IE" || isMobile()) {
            if (debug) { console.log("se guarda en cookie"); }
            var expiration_date = new Date();
            expiration_date.setFullYear(expiration_date.getFullYear() + 1);
            document.cookie = "data=" + JSON.stringify(clave) + "; expires=" + expiration_date.toGMTString();
        } else { //Fixed para chrome
            if (debug) { console.log("se guarda en LocalStorage"); }
            window.localStorage.setItem(NombreCurso, JSON.stringify(clave));
        }
    } catch (e) {
        console.log("no pudo guardar archivos en local storage:" + e.text);
    }
}
/**
 * @param NA
 * @returns void
 * @description Al parecer es para imprimir un iframe. ESTA FUNCION ES LEGACY NO SE UTILIZARA.
 */

function imprimirIframe() {
    if (debug) { console.log("imprime"); }
    window.frames["Contenido"].focus();
    window.frames["Contenido"].print();
}

/**
 * @param NA
 * @returns void
 * @description Lee los datos almacenados en el CMI SUSPEND DATA del LMS haciendo uso de la API SCORM 1.2.
 *  */
function leeOnline() {
    if (debug) {
        console.log("LEE ONLINE");
        console.log("regresoLMS " + regresoLMS);
    }
    regresoLMS = ComunicacionLMS("leer"); //Recuperar el suspend_data del LMS

    if (regresoLMS == "" || regresoLMS == undefined) {
        if (debug) { console.log("suspent data vacio, generando json"); }
        obj = $.parseJSON(ConfigurationJson);
    } else {
        if (debug) { console.log("suspend data diferente a vacio"); }
        var jsonObj = regresoLMS;
        obj = $.parseJSON(jsonObj);
    }
    if (debug) { console.log(obj); }
    //Guardar el contenido recuperado del LMS en las variables locales.
    setValues(obj);
    initConfig(obj);
    cargarPortada();
}
/**
 * @param NA
 * @returns void
 * @description Guarda los datos del curso en el LOCAL STORAGE o el CMI SUSPEN DATA segun sea el caso.
 */
function guardarDatos() {
    setObject(); // se llama la funcion pára guardar los datos en el Json
    if (ONLINE) {
        if (debug) {
            console.log("guardando datos online");
            console.log("json-generando");
        }
        var jsonObj = JSON.stringify(obj);
        //Guardar en el suspend data
        ComunicacionLMS("guardar", jsonObj);
    } else { //guarda los datos en local storage
        if (debug) {
            console.log("guardando datos local");
        }
        guardaLocalStorage(obj);
    }
}
function comenzarCurso() {
    ir(0);
}
/**
 * @param {*}id ID del tema a cargar
 * @returns void
 * @description Carga el contenido especificado por el parametro ID y lo carga en el div contenido del template.
 */
function ir(id) {
    cambiarColorFranjas("reset");
    if ($("#btnSiguiente").hasClass("nextAnimation")) {
        $("#btnSiguiente").removeClass("nextAnimation");
    }
    if (menu_open) {
        callMenu();
    }
    if (debug) {
        console.log("********", ULTIMO, id, TRAK[id]);
        console.log("**********************IR");
        console.log("ir " + id);
    }
    $('#content').css("opacity", 0);
    if (cursoConAudio) {
        limpiarAudio();
    }

    // if (TRAK[id] == 2) {
    // 	setTimeout(function () {
    // 		desbloquearAudio();
    // 	}, 500);
    // }

    // Nueva carga de temas
    loadContent(Rutas[id]);

    IDActual = id;

    if (debug) { console.log("IDActual: ", IDActual, " ULTIMO: ", ULTIMO); }
    // console.log("IDActual: ", IDActual, " ULTIMO: ", ULTIMO);
    actualizaTemasTerminados();
}
/**
 * @param {*}Canvas	Canvas del Tema a iniciar. 
 * @returns void
 * @description Ejecuta las funciones necesarias para registrar el inicio de un tema. Colocar esta funcion en el primer frame de cada tema.
 */
function iniciar_tema() {
    habilitar_deshabilitar_btns(getBtnArray(btnSiguiente), "d", "iniciar_tema");
    try {
        if (debug) { console.log("inicio_tema", _root.IDActual); }
        //se cambia el estado del tema a 1 "tema iniciado"
        if (TRAK[IDActual] < 1) {
            TRAK[IDActual] = 1;
        }
        //en caso de venir desde la opcion de ultimo tema, va a la ultima pagina visitada
        if (controlIrUltimo) { controlIrUltimo = false; }
        //si entra desde un tema adelante con el boton de atras o desde la opcion de ultimo tema ...lo manda a la ultima pagina
        if (controlAtras) { controlAtras = false; }

        if (Avance >= _root.ULTIMO) {
            habilitar_deshabilitar_btns(getBtnArray(btnSiguiente), "h", "iniciar_tema");
        }
        if (IDActual !== 0) {
            ULTIMO = IDActual; // se actualiza el ultimo tema			
        }
        _root.Avance = IDActual > _root.Avance ? IDActual : _root.Avance;
        guardarDatos();
        if (debug) { console.log("fin inicio tema"); }

    } catch (error) {
        if (debug) { console.warn("Error iniciando tema: " + error); }
    }
    actualizar_menuHTML(TRAK);
    reset_navegacion();
    // leavePageTransition();
}
function obtenerFramePorPagina(pagDestino) {
    // 
    let sum = 0;
    let antSum = 0;
    for (let i = 0; i < obj.Pag.length; i++) {
        sum += parseInt(obj.Pag[i]);
        if (pagDestino >= antSum && pagDestino <= sum) {

            let ret = [];
            ret[0] = i;
            ret[1] = pagDestino - antSum;
            return ret;
        }
        antSum = sum;
    }
}
/**
 * @param NA
 * @returns void
 * @description Ejecuta las funciones necesarias para registrar el final de un tema.  
 */
function final_tema() {
    if (debug) { console.log("*********************FINAL TEMA", _root.IDActual); }
    if (TRAK[IDActual] < 2) {
        TRAK[IDActual] = 2;
        $("#btnSiguiente").addClass("nextAnimation");
    }
    if (IDActual > 0) {
        ULTIMO = IDActual; // se actualiza el ultimo tema
    }
    _root.Avance = _root.currentPagina > _root.Avance ? _root.currentPagina : _root.Avance;
    if (debug) { console.log(_root.ULTIMO, _root.IDActual, TRAK, TRAK[_root.IDActual]); }
    //activar boton siguiente
    habilitar_deshabilitar_btns(getBtnArray(btnSiguiente), "h", "final_tema")
    actualizar_menuHTML(TRAK); // actualizar el menu
    guardarDatos();
    actualizarProgressBar();
    if (banderillas) {
        alertas(2, "Tema Completo. Haz Clic en Siguiente para continuar.")
    }
    console.log(" Curso Completado " + cursoCompletado());
    reset_navegacion();
}
/**
 * @param {*}time Tiempo en segundos para llamar la finalizacion de un tema. 
 * @returns void
 * @description Ejecuta las funciones necesarias para registrar el final de un tema con un retraso en segundos del valor recibido.  
 */
function retrasar_final_tema(seconds) {
    if (debug) { console.log("*********************FINAL TEMA", _root.IDActual + " retrasado por " + seconds); }
    if (typeof seconds === 'number') { return }
    seconds = seconds > 0 ? seconds : 1;
    setTimeout(final_tema, seconds * 1000);
}
/**
 * @param {*}time Tiempo en segundos para llamar la habilitacion del boton siguiente y su banderilla correspondiente. 
 * @returns void
 * @description Ejecuta las funciones necesarias para habilitar el boton siguiente y mostrar la alerta siguiente retrasado en segundos por el numero que se envie .  
 */
function retrasar_habilitar_siguiente(seconds) {
    if (debug) { console.log("-habilitar siguiente retrasado por " + seconds); }
    if (typeof seconds === 'number') { return }
    if (banderillas) {
        alertas(1, "Da clic en siguiente para continuar.");
    }
    seconds = seconds > 0 ? seconds : 1;
    setTimeout(habilitarSiguiente, seconds * 1000);
}
/**
 * @param NA
 * @returns void
 * @description FUNCION LEGACY ::|:: Lanza el Glosario
 */
function glosarioX() {
    var iframe = document.getElementById("glosario");
    iframe.src = "temas/" + obj.NombreIntro + ".html";
    var g = document.getElementById('btnGlos');
    g.click();
}
/**
 * @param NA
 * @returns void
 * @description Carga el ultimo tema visitado por el usuario
 */
function irUltimo() {
    // let resp = obtenerFramePorPagina(ULTIMO);
    // let aaa = gsap.timeline();
    // aaa.to($(".contenido"), { duration: 0.2, backgroundColor: "#4472C4" }); //shorter syntax!

    ir(ULTIMO);
    // cerrarUltimo();
    actualizaTemasTerminados();

    if (cursoConAudio) {
        setTimeout(function () {
            llamarAudio();
        }, 1100);
    }

    reset_navegacion();
    leavePageTransition();
}
function cargarUltimoAudio(ultimoAudioID) {

    if (audio[0] && IDActual >= 1) {
        audio[0].src = ListaAudios[ultimoAudioID];
        if (audio[0].src != "") {
            audioIsPlaying = true;
        } else {
            audioIsPlaying = false;
        }

        if (audioIsPlaying) {
            reproducirAudio();
        }
    }
}

function llamarAudio() {
    if (audioIsPlaying) {
        reproducirAudio();
    }
}
/**
 * @param NA
 * @returns void
 * @description Oculta el contenedor del mensaje para el punto de retorno (deseas ir al ultimo tema visitado?)
 */
function cerrarUltimo() {
    // $("#ultimoContainer").css("display", "none");
}
/**
 * @param NA
 * @returns void
 * @description Muestra el contenedor del mensaje para el punto de retorno (deseas ir al ultimo tema visitado?)
 */
function mostrarUltimo() {
    enterPageTransition();
    // $("#ultimoContainer").css("display", "block");
    // TweenLite.from($("#ultimoContainer"), 1, { opacity: 0 });
}
/**
 * @param Valor Canvas del contenido
 * @returns void
 * @description FUNCION LEGACY ::|:: Obtiene el canvas del contenido
 */
function getCanvas(valor) {
    if (debug) { console.log("Obtener Canvas"); }
    canvasContenido = valor;
}
function obtenerMovieclip(valor) {
    if (debug) { console.log("Obtener Canvas"); }
    moviePlay = valor;
}

/**
 * @description Desbloquea el contenido del template cuando se termina de escuchar un audio.
 */
function desbloquearAudio() {
    try {
        //actualizacion 26 11 2020 --- Dar play a la animacion principal del tema
        moviePlay.play();
    } catch (error) {
    }
    // desbloquear el tema
    // $("#Contenido").css("pointer-events", "all");
}
/**
 * @description Reproduce audio cargado en la etiqueta audio del template y bloquea el contenido.
 */
function reproducirAudio() {
    // Validacion para determinar si se bloquea el tema una vez visto.
    // if (TRAK[IDActual] < 2) {
    // 	$("#Contenido").css("pointer-events", "none");
    // 	audio.on('ended', function () {
    // 		terminaReproduccionAudio();
    // 	});
    // }

    // Bloqueo del contenido
    // $("#Contenido").css("pointer-events", "none");

    // Desbloqueo del contenido al terminar el audio
    audio[0].play();
    audio.on('ended', function () {
        terminaReproduccionAudio();
    });


    /* Es necesaria una funcion auxiliar para desbloquear el contenido por si acaso el audio se buggea etc???
      setTimeout(terminaReproduccionAudioAuxiliar, 20000);
     */
}

function ejecutarAccionesAudio() {

    if (!audioIsPlaying) {
        return
    }

    try {
        if (cursoConAudio) {
            if (audio[0]) {
                if (audio[0].currentTime > 0 && audio[0].currentTime < audio[0].duration && !audio[0].paused) { // si se esta reproduciendo
                    audio[0].pause();
                } else if (audio[0].duration != audio[0].currentTime && audio[0].paused) { // si esta pausado
                    audio[0].play();
                }
            }
        }
    } catch (e) {
        console.log("No audio action executed")
    }

}
/**
 * @description Desbloquea el contenido en la finalizacion del audio que se esta reproduciendo.
 */
function terminaReproduccionAudio() {
    console.log("Debloqueo");
    desbloquearAudio();
}

//Función para cargar portada y ocultar contenido no indispensable
/**
 * @param NA
 * @returns void
 * @description FUNCION LEGACY ::|:: Carga la portadea del curso en v1 del template
 */
function cargarPortada() {
    if (debug) { console.log("cargar portada"); }
    var iframe = document.getElementById("Contenido");
    if (debug) { console.log("temas/" + obj.NombreIntro + ".html"); }
    // ir(0);
    loadContent(obj.Portada);
    stopLoading();
}
//------------------------------------------------------------------------------------------------------------
// #region BARRAHTML
// NUEVAS FUNCIONES PARA LA BARRA HTML
/**
 * @params 
 * @returns void
 * @description Inicializa la barra HTML, almacenando la instancia de los botones en variables globales 
 * */
function initbarra(jsonob) {
    btnAtras = document.getElementById("btnAtras");
    btnAtrasD = document.getElementById("btnAtrasD"); // Vista desktop
    btnSiguiente = document.getElementById("btnSiguiente");
    btnSiguienteD = document.getElementById("btnSiguienteD"); // Vista desktop
    btnMenu = document.getElementById("btnMenu");
    btnEval = document.getElementById("btnEval");
    btnHome = document.getElementById("btnHome");
    btnCerrar = document.getElementById("btnCerrar");

    habilitar_deshabilitar_btns(getBtnArray(btnSiguiente, btnAtras), "d", "initbarra");
    if (!cursoCompletado()) {
        // habilitar_deshabilitar_btns(getBtnArray(btnEval), "d", "initbarra");
    }
    actualizaTemasTerminados();
    actualizarProgressBar(70);
    populateMenu(jsonob);
    inicializaMensajes();
}

/**
 * @params botones a controlar: array, accion a realizar: string d | string h, nombre de la funcion donde se llamo functionName:string
 * @returns void (Activa o desactiva los botones)
 * @description Habilita o deshabilita los botones que se le envien, si ocurre algun error lanza un log con la funcion donde ocurrio
 * */
function habilitar_deshabilitar_btns(arraybtn, action, functionName) {
    if (action !== "d" && action !== "h") {
        if (debug) {
            console.error("Funcion habilitar_deshabilitar_btns:" +
                "No se enviaron los parametros de habilitar o habilitar correctamente." +
                " Llamdo desde funcion: " + functionName);
        }
        return;
    }
    if (arraybtn.length == 0) {
        if (debug) {
            console.error("Funcion habilitar_deshabilitar_btns:" +
                "Se enviaron 0 elementos en el array de botones. " +
                "Llamdo desde funcion: " + functionName);
        }
        return;
    }
    name = "disabledButton";
    hidd = "nextHiddenButton"
    for (let index = 0; index < arraybtn.length; index++) {
        if (action === "d") {
            $("#" + arraybtn[index].id.toString()).addClass(name);
            $("#" + arraybtn[index].id.toString()).find("a").addClass(hidd);
            EdoBtns[arraybtn[index].id.toString()] = false;
        } else {
            $("#" + arraybtn[index].id.toString()).removeClass(name);
            $("#" + arraybtn[index].id.toString()).find("a").removeClass(hidd);
            EdoBtns[arraybtn[index].id.toString()] = true;
        }
    }
    if (debug) { console.log("Nuevo edo de botones: "); }
    if (debug) { console.log(this.EdoBtns); }
}
function habilitarSiguiente() {
    habilitar_deshabilitar_btns(getBtnArray(btnSiguiente), "h", "habilitarSiguiente");
    if (banderillas) {
        alertas(1, "Da clic en siguiente para continuar.");
    }
}
function habilitarAtras() {
    habilitar_deshabilitar_btns(getBtnArray(btnAtras), "h", "habilitarAtras")
}
function deshabilitarSiguiente() {
    habilitar_deshabilitar_btns(getBtnArray(btnSiguiente), "d", "deshabilitarSiguiente");
}
function deshabilitarAtras() {
    habilitar_deshabilitar_btns(getBtnArray(btnAtras), "d", "deshabilitaratras");
}
function habilitar_deshabilitarBarra(action) {
    switch (action) {
        case "d":
            habilitar_deshabilitar_btns(this.getBtnArray(this.btnAtras, this.btnSiguiente, this.btnMenu), "d", "habilitar_deshabilitarBarra");
            break;
        case "h":
            habilitar_deshabilitar_btns(this.getBtnArray(this.btnAtras, this.btnSiguiente, this.btnMenu), "h", "habilitar_deshabilitarBarra");
            break;

        default:
            habilitar_deshabilitar_btns(this.getBtnArray(this.btnAtras, this.btnSiguiente, this.btnMenu), "d", "habilitar_deshabilitarBarra");
            break;
    }
}

/**
 * @params NA
 * @returns void
 * @description Actualiza el objeto que controlar el estado de los botones validando la clase disabled.
 * */
function actualizarEdoBotones() {
    //implemented indexOf to internet explorer compatibility
    this.EdoBtns.btnAtras = this.btnAtras.className.indexOf("disabledButton") >= 0 ? false : true;
    this.EdoBtns.btnSiguiente = this.btnSiguiente.className.indexOf("disabledButton") >= 0 ? false : true;
    // this.EdoBtns.btnCerrar = this.btnCerrar.className.indexOf("disabledButton") >= 0 ? false : true; //desactivado para la barra cdi
    // this.EdoBtns.btnHome = this.btnHome.className.indexOf("disabledButton") >= 0 ? false : true;//desactivado para la barra cdi
    this.EdoBtns.btnMenu = this.btnMenu.className.indexOf("disabledButton") >= 0 ? false : true;
    // this.EdoBtns.btnEval = this.btnEval.className.indexOf("disabledButton") >= 0 ? false : true;//desactivado para la barra cdi
}
/**
 * @params Botones que formaran parte del arreglo de botones para habilitar/deshabilitar
 * @returns array:htmlElements(botones)
 * @description Recibe hasta 6 botones de la barra HTML y retorna un arreglo con dichos botones para activar/desactivar dinamico.
 * */
function getBtnArray(e1, e2, e3, e4, e5, e6, e7, e8) {
    let paramArray = [e1, e2, e3, e4, e5, e6, e7, e8];
    // console.log(paramArray)
    this.btnArray = [];
    for (let i = 0; i < 7; i++) {
        if (paramArray[i] != null && paramArray[i] != undefined) {
            this.btnArray.push(paramArray[i]);

            if (paramArray[i].id === "btnSiguiente") {
                this.btnArray.push(btnSiguienteD);
            }
            if (paramArray[i].id === "btnAtras") {
                this.btnArray.push(btnAtrasD);
            }
        }
    }
    return this.btnArray;
}
/**
 * @params NA
 * @returns void
 * @description Bloquea todos los botones de accion de la barraHTML (comunmente se usa durante evalucion).
 * //muestra el mensaje de siquiente naranja
 * */
function bloquear_barra(action) {

    switch (action) {
        case "d":
            if (this.EdoBtns.barra === false)
                return;
            habilitar_deshabilitar_btns(
                getBtnArray(this.btnAtras, this.btnSiguiente, this.btnEval, this.btnHome, this.btnCerrar, this.btnMenu),
                action, "bloquear_barra");
            this.EdoBtns.barra = false;
            break;
        case "h":
            if (this.EdoBtns.barra === true)
                return;
            habilitar_deshabilitar_btns(
                getBtnArray(this.btnAtras, this.btnSiguiente, this.btnEval, this.btnHome, this.btnCerrar, this.btnMenu),
                action, "bloquear_barra");
            this.EdoBtns.barra = false;
            this.EdoBtns.barra = true;
            break;
        default:
            if (debug) {
                console.warn("El parametro de entrada para bloquear/Desbloquer barra es incorrecto, " +
                    "solo se acepta 'd' para deshabilitar o 'h' para habilitar.");
            }
            return;
    }
}
/**
 * @params action:string | d -> desactivar, h -> activar
 * @returns void
 * @description Habilita el boton evaluacion (comunmente al terminar todos los temas del curso).
 * 
 * */
function habilitar_deshabilitar_eval(action) {
    if (this.libre) {
        habilitar_deshabilitar_btns(getBtnArray(btnEval), "d", "habilitar_deshabilitar_eval");
    }
    switch (action) {
        case "d":
            if (this.EdoBtns.btnEval === false)
                return;
            habilitar_deshabilitar_btns(getBtnArray(btnEval), "d", "habilitar_deshabilitar_eval");
            break;
        case "d":
            if (this.EdoBtns.btnEval === true)
                return;
            habilitar_deshabilitar_btns(getBtnArray(btnEval), "h", "habilitar_deshabilitar_eval");
            break;
        default:
            break;
    }

}
/**
 * @params NA
 * @returns void
 * @description Controola la negacion al siguiente frame del contenido. Si es el ultimo frame salta al siguiente tema excepto si es el ultimo tema.
 * 
 * */
//Función para cambio de frame dentro del div contenido
function siguiente_frame() {
    if (validarLimiteTemas()) {
        siguienteTema();
        _root.Avance = IDActual > _root.Avance ? IDActual : _root.Avance;
        actualizaTemasTerminados();
        guardarDatos();
    }
}
function validarLimiteTemas() {
    return IDActual < (TRAK.length - 1);
}
/**
 * @params NA
 * @returns void
 * @description Controla la navegacion al frame anterior del contenido. Si es el primer frame del tema 2 en delante salta al tema anterior.
 * 
 * *///Función para retroceder frames dentro del div contenido
function anterior_frame() {
    temaAnterior();
    _root.Avance = IDActual > _root.Avance ? IDActual : _root.Avance;
    actualizaTemasTerminados();
    guardarDatos();
}
/**
 * @params NA
 * @returns void
 * @description Navega al siguiente tema del contenido.
 * 
 * */
function siguienteTema() {
    ir(_root.IDActual + 1);
}

function limpiarAudio() {
    audio[0].pause();
    audio[0].src = "";
}

/**
 * @params NA
 * @returns void
 * @description Navega al tema anterior del contenido.
 * 
 * */
function temaAnterior(id) {
    ir(IDActual - 1);
    controlAtras = true; //setear en true para al iniciar tema enviar a ultima pagina
    currentPagina = ULTIMO - 1;
    actualizaTemasTerminados();
}
var sumaPag = 0;
//#endregion BARRAHTML

/**
 * @param {*}Pagina Actual(Frame Actual).
 * @param {*}CantidadPaginas Total de paginas del tema Actual
 * @returns void
 * @description Actualiza la navegacion y lleva a cabo validaciones para botones en cada frame.
 * */
function reset_navegacion() {

    //stopAlertas();

    /*Deshabilitar el boton atras */
    this.habilitar_deshabilitar_btns(getBtnArray(this.btnSiguiente), "d", "reset_navegacion");

    /*Si es el primer tema, se deshabilitar el boton atras */
    if (IDActual !== 0) {
        this.habilitar_deshabilitar_btns(getBtnArray(this.btnAtras), "h", "reset_navegacion");
    } else { /*Si no es el primer tema se habilita el boton atras */
        this.habilitar_deshabilitar_btns(getBtnArray(this.btnAtras), "d", "reset_navegacion");
    }

    /*Habilitar el boton siguiente si el usuario ya vio ese tema*/
    if (libre && validarLimiteTemas() || TRAK[IDActual] > 1 && IDActual < TRAK.length && validarLimiteTemas()) {
        this.habilitar_deshabilitar_btns(getBtnArray(this.btnSiguiente), "h", "reset_navegacion");
    }

    guardarDatos();
}
/**
 * @param NA
 * @returns Bool
 * @description Valida si el curso ha sido completado
 */
function cursoCompletado() {
    let completo = true;
    for (let index = 0; index < this.TRAK.length; index++) {
        if (TRAK[index] < 2) {
            completo = false;
            break;
        }
    }
    return completo;
}
/**
 * @param {*}TrakCurso: Trak de avance del curso
 * @returns void
 * @description Actualiza los indicadores y desbloquea/bloquea los botones segun el avance del TRAK.
 */
function actualizar_menuHTML(TrakCurso) {
    for (let i = 0; i < TrakCurso.length; i++) {
        var element = $("#" + i).find("i");
        var tema = $("#" + (i + 1));
        actualizarIndicadores(tema, TrakCurso[i]);

        if (i > 0 && TrakCurso[i - 1] >= 2 || Temaslibre) { //bloquear botones aun no terminados
            if (debug) { console.log("desbloqueo Tema: " + i); }
            desbloquearTema(tema);
        } else {
            if (i > 0) {
                if (debug) { console.log("tema +" + i + "bloqueado"); }
                bloquearTema(tema);
            }
        }//terminan funciones de bloqueo de temas.
        // Actualizar el estatus de los modulos
        // actualizarEstatusModulo(i); // de momento para el template CDI no se usara

        if (TRAK[tema.attr("id") - 1] == 0) { // Manejar el estilo del tema no iniciado
            if (tema.hasClass("menuTemaDesbloqueado")) {
                tema.removeClass("menuTemaDesbloqueado");
            }
            tema.addClass("tituloTemaMenuNoIniciado")
        } else {
            tema.removeClass("tituloTemaMenuNoIniciado")
        }
    }
    /**
     * @param {*} Elemento: DOM HTML Element
     * @returns void
     * @description Establece los estilos para desbloquear boton al elemento especificado
     */
    function desbloquearTema(elemento) {
        elemento.removeClass("menuTemaDisabled");
        elemento.addClass("menuTemaDesbloqueado");
    }
    /**
     * @param {*} Elemento: DOM HTML Element
     * @returns void
     * @description Establece los estilos para bloquear boton al elemento especificado
     */
    function bloquearTema(elemento) {
        elemento.addClass("menuTemaDisabled")
    }
    /**
     * @param {*} Elemento: DOM HTML Objeto
     * @param {*} Status: 0 | 1 | 2 : TRAK STATUS
     * @returns void
     * @description Actualiza el indicador de avance del tema segun su estatus en el TRAK.
     */
    function actualizarIndicadores(elemento, status) {
        let i = elemento.find("i");
        switch (status) {
            case 0:
                if (i.hasClass("menuIconStyleIniciado")) {
                    i.removeClass("menuIconStyleIniciado")
                }
                if (i.hasClass("menuIconStyleCompletado")) {
                    i.removeClass("menuIconStyleCompletado")
                }
                i.addClass("menuIconStyle");
                break;
            case 1:
                i.removeClass("menuIconStyle").addClass("menuIconStyleIniciado");
                break;
            case 2:
                i.removeClass("menuIconStyleIniciado").addClass("menuIconStyleCompletado");
                break;
        }
    }
}