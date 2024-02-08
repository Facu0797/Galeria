import datos from "../datos/fotos";
import { cargarImagen } from "./cargarImagen";



const cargarImagenCarousel = (e) => {
    let ruta, nombre, descripcion;

    const id = parseInt(e.target.dataset.id);
    const galeria = document.querySelector("#galeria");
    const categoriaActiva = galeria.dataset.categoria;

    datos.fotos[categoriaActiva].forEach((foto) => {
        if (foto.id === id) {

            ruta = foto.ruta;
            nombre = foto.nombre;
            descripcion = foto.descripcion;

        }
    });

    cargarImagen(id, nombre, ruta, descripcion);
}


export default cargarImagenCarousel;