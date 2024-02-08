const galeria = document.querySelector(".galeria");

const carousel = (direccion) => {
    const opciones = {
        root: document.querySelector(".galeria__carousel"),
        rootMargin: "0px",
        threshold: 0.9,
    };

    const observador = new IntersectionObserver((entradas) => {
        const slidesVisibles = entradas.filter((entrada) => {
            if (entrada.isIntersecting === true) {
                return entrada;
            }
        })

        // console.log(slidesVisibles[slidesVisibles].length - 1);

        if (direccion === "adelante") {
            const ultimaSlideVisible = slidesVisibles[slidesVisibles.length - 1];
            const indexUltimaSlideVisible = entradas.indexOf(ultimaSlideVisible);

            if (entradas.length - 1 > indexUltimaSlideVisible) {
                entradas[indexUltimaSlideVisible + 1].target.scrollIntoView({
                    behavior: "smooth",
                    inline: "start"
                });
            }
            
        } else if (direccion === "atras") {
            const primerSlideVisible = slidesVisibles[0];
            const indexPrimerSlideVisible = entradas.indexOf(primerSlideVisible);

            if (indexPrimerSlideVisible >= 1){
                entradas[indexPrimerSlideVisible - 1].target.scrollIntoView({
                    behavior: "smooth",
                    inline: "start"
                })
            }
        }   

        const slides = galeria.querySelectorAll(".galeria__carousel-slide");
        slides.forEach((slide) => {
            observador.unobserve(slide);
    })
    }, opciones);

    const slides = galeria.querySelectorAll(".galeria__carousel-slide");
    slides.forEach((slide) => {
        observador.observe(slide);
    })

}


export default carousel;