fetch("productos.json")
    .then((response) => response.json())
    .then((data) => {
        const perfumes = data.perfumes;

        const perfumesContainer = document.getElementById("perfumes-container");

        perfumes.forEach((perfume) => {
            const perfumeDiv = document.createElement("div");
            perfumeDiv.classList.add("perfume");

            const nombreElement = document.createElement("h1");

            const stockPrecioElement = document.createElement("p");

            const imagenElement = document.createElement("img");
            imagenElement.classList.add("imagen-perfume")

            const botonElement = document.createElement("button");
            botonElement.classList.add("boton-comprar");


            nombreElement.textContent = perfume.nombre;
            stockPrecioElement.textContent = `$${perfume.precio}`;
            imagenElement.src = perfume.imagen;
            botonElement.textContent = `Comprar`;



            perfumeDiv.appendChild(nombreElement);
            perfumeDiv.appendChild(stockPrecioElement);
            perfumeDiv.appendChild(imagenElement);
            perfumeDiv.appendChild(botonElement)


            perfumesContainer.appendChild(perfumeDiv);

            botonElement.addEventListener("click", function (event) {
                event.preventDefault();
                setTimeout(() =>{
                    const Toast = Swal.mixin({
                        toast: true,
                        position: "top-end",
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.onmouseenter = Swal.stopTimer;
                            toast.onmouseleave = Swal.resumeTimer;
                        }
                    });
                    Toast.fire({
                        icon: "success",
                        title: "Agregaste un producto al carrito"
                    });
                },1000)
                

            })
        });
    })
    .catch((error) => {
        console.error("Se produjo un error:", error);
    });

