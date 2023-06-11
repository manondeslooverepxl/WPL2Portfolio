function toggleMenu() {
    var menuBg = document.getElementById("menu-bg");
    var lines = document.getElementsByClassName("line");

    if (menuBg.style.opacity === "" || menuBg.style.opacity === "0") {
        menuBg.style.opacity = "1";
        menuBg.style.pointerEvents = "auto";
        menuBg.style.transform = "scale(1)";
        for (var i = 0; i < lines.length; i++) {
            lines[i].classList.add("cross");
        }
    } else {
        menuBg.style.opacity = "0";
        menuBg.style.pointerEvents = "none";
        menuBg.style.transform = "scale(0)";
        for (var i = 0; i < lines.length; i++) {
            lines[i].classList.remove("cross");
        }
    }
}



/* Contact pagina */
$(document).ready(function(){
    $("#vragen").find(".uitklap-trigger").on("click",function(){
        $(".antwoord").slideUp();
        $(this).next(".antwoord").slideDown();
    });
});