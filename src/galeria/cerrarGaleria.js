const cerrarGaleria = () => {

    galeria.classList.remove("galeria--active");

    document.body.style.overflow = "";
}

export {cerrarGaleria}