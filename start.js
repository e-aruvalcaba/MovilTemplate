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

function loadContent(e) {
    e.preventDefault();
    animateContentOut();

    // $('#content').animate({
    //     opacity: 0,
    //     left: "-9999px",
    //     display: "none"
    // }, 500, function () {
    //     // Animation complete.
    // });

    setTimeout(() => {
        $('#content').load("soplas/new.html", () => {
            setTimeout(() => {
                animateContentIn();
            }, 1000);
        });
    }, 100);

    // setTimeout(() => {
    //     $('#content').load("soplas/new.html", () => {
    //         $('#content').animate({
    //             opacity: 1,
    //             left: "0px",
    //             display: "block"
    //         }, 1000, function () {
    //             // Animation complete.
    //         });
    //     })
    // }, 500);
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
    gsap.to($(".float"), {duration: 1, y: "500"});
}

function animatemeBack() {
    gsap.to($(".float"), {duration: 2,  ease: "elastic.out(1, 0.3)", y: "0", onComplete: addNextAnimation});
}

function addNextAnimation(){
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