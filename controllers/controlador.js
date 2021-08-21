let etiqueta1=document.getElementById("boton1");
let etiqueta2=document.getElementById("boton2");
let imagen1=document.getElementById("imagen1");
let titulo1=document.getElementById("titulo1");
let audio1=document.getElementById("audio1");
let imagen2=document.getElementById("imagen2");
let titulo2=document.getElementById("titulo2");
let audio2=document.getElementById("audio2");
let imagen3=document.getElementById("imagen3");
let titulo3=document.getElementById("titulo3");
let audio3=document.getElementById("audio3");

etiqueta1.addEventListener("click",perroGuardian1);

function perroGuardian1(){
    imagen1.src="img/imagen4.jpg";
    audio1.src="audio/audio4.mp3";
    titulo1.textContent="Banda Cuatro";

    imagen2.src="img/imagen5.jpg";
    audio2.src="audio/audio5.mp3";
    titulo2.textContent="Banda Cinco";

    imagen3.src="img/imagen6.jpg";
    audio3.src="audio/audio6.mp3";
    titulo3.textContent="Banda Seis";

    
}

etiqueta2.addEventListener("click",perroGuardian2);

function perroGuardian2(){
    imagen1.src="img/imagen1.jpg";
    audio1.src="audio/audio1.mp3";
    titulo1.textContent="Banda Uno";

    imagen2.src="img/imagen2.jpg";
    audio2.src="audio/audio2.mp3";
    titulo2.textContent="Banda Dos";

    imagen3.src="img/imagen3.jpg";
    audio3.src="audio/audio3.mp3";
    titulo3.textContent="Banda Tres";

    
}