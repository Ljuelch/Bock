const btnJa = document.getElementById("ja");
const btnNein = document.getElementById("nein");

btnJa.addEventListener("click", () =>
    window.location = "https://www.google.com/maps/dir//Hradeker+Str.+12,+16761+Hennigsdorf/@52.6540532,13.1937313,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47a9001fd8553863:0x748d70d7d89bc966!2m2!1d13.19592!2d52.65405?hl=de"
)

function hoverEffect() {
    btnNein.addEventListener("mouseover", function() {
        this.kleiner-= 10;
        this.style.right = Math.random() * 100+"%";
        this.style.top = Math.random() * 100+"%";
        this.style.width = this.kleiner / 100 * 200 + "px";
        this.style.height = this.kleiner + "px";
        this.style.fontSize = this.kleiner / 100 * 2 + "rem";
        if (this.kleiner <= 10) {
            this.style.display = "none";
        }
    });
    btnNein.kleiner = 100;
}

hoverEffect();