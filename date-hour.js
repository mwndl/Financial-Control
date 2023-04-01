var agora = new Date();
var hora = agora.getHours();
var minutos = agora.getMinutes();
if (minutos < 10) {
    minutos = "0" + minutos;
}
var valorPadrao = hora + ":" + minutos;
document.getElementById("hora").value = valorPadrao;
