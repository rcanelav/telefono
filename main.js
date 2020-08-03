window.sr = ScrollReveal();
sr.reveal('.navbar', {
    duration: 3500,
    origin: 'bottom'
});
sr.reveal('.header-content-left', {
    duration: 2500,
    origin: 'top',
    distance: '300px'
});
sr.reveal('.header-content-right', {
    duration: 2800,
    origin: 'right',
    distance: '300px'
});
sr.reveal('.header-btn', {
    duration: 2000,
    origin: 'bottom',
    delay: 1450
});
sr.reveal('#testimonial', {
    duration: 2500,
    origin: 'left',
    distance: '300px',
    viewFactor: 0.2,
    reset: true

});

sr.reveal('.info-left', {
    duration: 2500,
    origin: 'right',
    distance: '300px'
});

sr.reveal('.info-right', {
    duration: 2500,
    origin: 'right',
    distance: '300px',
    reset: true

});

sr.reveal('.card', {
    duration: 1500,
    // opacity: 0.1,
    delay: 400,
    reset: true
});



// SmoothScrolling
$(document).ready(function() {
    $("a").on('click', function(event) {

        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function() {
                window.location.hash = hash;
            });
        }
    });
});


var navigation = document.getElementById("navbarNav");
var btns = navigation.getElementsByClassName("nav-item");

for (var i = 0; i < btns.length; i++) {

    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }

        this.className += " active";

    });
}