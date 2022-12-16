$(document).ready(function () {
    console.log("Ipzael's code for dmcmusiccenter.com")

    let currentTime = new Date().getTime();
    var updatedTIme = new Date(currentTime + 3 * 60 * 60 * 1000);

    var x = setInterval(function () {

        var now = new Date().getTime();

        var distance = updatedTIme - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("CountDown").innerHTML = hours + "h "
            + minutes + "m " + seconds + "s ";

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("CountDown").innerHTML = "";
        }
    }, 1000);

    $('#CountDown').css({
        'font-size': '2em',
        'color': '#f7b500',
        'font-weight': 'bold',
    });

    var WhatsAppButton = $("<div/>", {
        id: "WhatsApp",
        class: "Button",
    }).appendTo('body');

    $(WhatsAppButton).css({
        "position": "fixed",
        "right": "24px",
        "width": "64px",
        "height": "64px",
        "border-radius": "100%",
        "background-repeat": "no-repeat",
        "background-size": "50%",
        "background-position": "center",
        "z-index": "100",
        "cursor": "pointer",
        "display": "inline-block",
        "background-color": '#25D366',
        "background-image": "url(http://dmcmusiccenter.com/wp-content/uploads/2022/12/Digital_Glyph_White.svg)",
        "bottom": "96px"
    });

    $("#WhatsApp.Button").click(function () {
        var PhoneNumber = "+525588112930"
        var Message = encodeURIComponent("¡Hola! Tengo una duda sobre " + document.title + ".")
        var a = "https://wa.me/" + PhoneNumber + "?text=" + Message
        window.open(a);
    });

});