$(document).ready(function () {
    var counter = 0;
    var c = 0;
    var i = setInterval(function () {
        $(".loading-page .counter h1").html(c + "%");
        $(".loading-page .counter hr").css("width", c + "%");

        counter++;
        c++;

        if (counter == 11) {
            clearInterval(i);
            $("#loader").css("display", "none");
            $("#navbar").addClass("d-flex");
            $("#superContainer").addClass("d-block");
        }
    }, 50);

})

function loadContent(e, index) {
    arr = ['/movil/temas/botones_contenido.html','/movil/temas/tema1.html', '/movil/temas/cartas_giratorias.html', '/movil/temas/botones_contenido.html', '/movil/temas/texto1Bloque.html', '/movil/temas/cartas_giratorias.html', '/movil/temas/acordeon.html']
    e.preventDefault();

    switch (index) {
        case 1:
            setTimeout(() => {
                $('#b1').load(arr[index - 1], () => {
                    setTimeout(() => {
                    }, 1000);
                });
            }, 100);
            break;
        case 2:
            setTimeout(() => {
                $('#b2').load(arr[index - 1], () => {
                    setTimeout(() => {
                    }, 1000);
                });
            }, 100);
            break;
        case 3:
            setTimeout(() => {
                $('#b3').load(arr[index - 1], () => {
                    setTimeout(() => {
                    }, 1000);
                });
            }, 100);
            break;
        default:
            break;
    }
    setTimeout(() => {
        $('#content').load(arr[index - 1], () => {
            setTimeout(() => {
                animateContentIn();
            }, 1000);
        });
    }, 100);
}

function loadContentIframe(index) {
    arr = ['/movil/temas/tema1.html', 'movil/temas/cartas_giratorias.html', 'movil/temas/acordeon.html']
    animateContentOut();
    let iframe;
    switch (index) {
        case 1:
            iframe = document.getElementById("b1");
            break;
        case 2:
            iframe = document.getElementById("b2");
            break;
        case 3:
            iframe = document.getElementById("b3");
            break;
        default:
            break;
    }

    setTimeout(() => {

        iframe.src = arr[index - 1];
        iframe.onload = function () {
            setTimeout(() => {
                animateContentIn();
            }, 1000);
        }

    }, 100);
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

function callMenu() {
    if ($('#sidebarCol').hasClass("menu-hide")) {
        $('#sidebarCol').removeClass("menu-hide");
        $('#sidebarCol').addClass("menu-show")
    } else {

        if ($('#sidebarCol').hasClass("menu-show")) {
            $('#sidebarCol').removeClass("menu-show");
            $('#sidebarCol').addClass("menu-hide")
        }
    }
}

function blockScrollOnMobile() {
    if ($('.offcanvas-collapse').hasClass('open')) {
        $(".html").addClass("blck_scroll");
    } else {
        $(".html").removeClass("blck_scroll");
    }
}