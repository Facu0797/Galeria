import dataCategorias from "./datos/categorias";
const {categorias} = dataCategorias

const contenedorCategorias = document.querySelector('#categorias');

categorias.forEach((categoria) => {

    const nuevaCategoria = document.createElement("a");

    nuevaCategoria.href = "#";
    nuevaCategoria.classList.add("categoria");
    nuevaCategoria.dataset.categoria = categoria.id

    nuevaCategoria.innerHTML = `
        <img class="categoria__img" src="${categoria.imagenPortada}" alt="" />
        <div class="categoria__datos">
            <p class="categoria__nombre">${categoria.nombre}</p>
            <p class="categoria__numero-fotos">${categoria.numeroFotos} Fotos </p>
        </div>
    `;

    contenedorCategorias.append(nuevaCategoria)
})
