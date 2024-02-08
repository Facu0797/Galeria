import { cargarAnteriorSiguiente } from "./cargarImagen";
import cargarImagenCarousel from "./carouselSlideClick";
import { cerrarGaleria } from "./cerrarGaleria";
import carousel from "./carousel";

const galeria = document.querySelector("#galeria");

galeria.addEventListener("click", (e) => {
   const boton =  e.target.closest("button");

            //Cerrar galeria 
    if(boton?.dataset?.accion === "cerrar-galeria"){
        cerrarGaleria()
    }

            // cargarImagenCarousel
    if (e.target.dataset.id) {
        cargarImagenCarousel(e)
    }

            // Boton Siguiente
    if (boton?.dataset?.accion === "siguiente-imagen") {
        cargarAnteriorSiguiente("siguiente");
    }

            //Boton Anterior
    if (boton?.dataset.accion === "anterior-imagen") {
        cargarAnteriorSiguiente("anterior");
    }
            //Boton Anterior carousel
    if (boton?.dataset?.accion === "siguiente-slide") {
        carousel("adelante");
    }

            //Boton Anterior carousel
    if (boton?.dataset.accion === "anterior-slide") {
        carousel("atras");
    }

})