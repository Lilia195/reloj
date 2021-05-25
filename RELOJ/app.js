setInterval(function generarHora(){
    let reloj= new Date();

    let hours= reloj.getHours();
    let minutes = reloj.getMinutes();
    let seconds = reloj.getSeconds();

    if (hours<10) {
        hours = "0" + hours;
    }
    if (minutes <10) {
        minutes = "0" + minutes;
    }
    if(seconds <10){
        seconds = "0" + seconds;
    }

    let days =['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'];
    let months =['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

    let day = days[reloj.getDay()];
    let today = reloj.getDate();
    let month = months [ reloj.getMonth()];
    let fullYear = reloj.getFullYear();

    let mostrarFecha=`<h1>${day}, ${today} de ${month} de ${fullYear}</h1>`;
    document.getElementById('mostrarFecha').innerHTML = mostrarFecha;
    document.getElementById('mostrarHora').textContent = `${hours}:${minutes}:${seconds}`;

        },250);