import dataFotos from "./datos/fotos";
import { cargarImagen } from "./galeria/cargarImagen";
const contenedorCategorias = document.querySelector("#categorias");
const galeria = document.querySelector("#galeria")

contenedorCategorias.addEventListener("click", (e) => {
    e.preventDefault()

    if (e.target.closest("a")) {
        galeria.classList.add("galeria--active");
        document.body.style.overflow = "hidden";
    }

    const categoriaActiva = e.target.closest("a").dataset.categoria;
    galeria.dataset.categoria = categoriaActiva;

    const fotos = dataFotos.fotos[categoriaActiva];

    const {id,nombre,ruta,descripcion} = fotos[0]

    cargarImagen(id,nombre,ruta,descripcion);

    const carousel = document.querySelector(".galeria__carousel-slides");
    carousel.innerHTML = "";

    fotos.forEach((foto) => {

        galeria.querySelector(".galeria__carousel-slides").innerHTML += `
        <a href="#" class="galeria__carousel-slide">
            <img class="galeria__carousel-image" src="${foto.ruta}" data-id="${foto.id} "alt="" />
        </a>

    `;

    });

    

    galeria.querySelector(".galeria__carousel-slide").classList.add("galeria__carousel-slide--active");
    
})