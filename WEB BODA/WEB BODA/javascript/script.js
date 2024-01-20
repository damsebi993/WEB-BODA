document.addEventListener("DOMContentLoaded", function () {
    
    //PASAR CURSOR HEADER
    const url = document.querySelectorAll(".url");
    url.forEach(x => x.addEventListener("mouseover", function () {
        this.style.color = "yellow";
    }));
    url.forEach(x => x.addEventListener("mouseleave", function () {
        this.style.color = "";
    }));
    //PASAR CURSOR BOTONES
    const boton = document.querySelectorAll(".boton");
    boton.forEach(x => x.addEventListener("mouseover", function () {
        this.style.backgroundColor = "red";
        this.style.border = "none";
        this.style.color = "white";
    }));
    boton.forEach(x => x.addEventListener("mouseleave", function () {
        this.style.backgroundColor = "";
        this.style.border = "";
        this.style.color = "";
    }));
    const grid = document.querySelectorAll(".imggrid");
    grid.forEach(x => x.addEventListener("mouseover", function () {
        this.querySelector('.overlay').style.opacity = "1";
        
    }));
    grid.forEach(x => x.addEventListener("mouseleave", function () {
        this.querySelector('.overlay').style.opacity = "0";
        
    }));
   
    //ZOOM IMAGENES CLIENTES
    const clientsimg = document.querySelectorAll(".clientsimg");
    clientsimg.forEach(x => x.addEventListener("mouseover", function () {
        this.style.transform = "scale(1.1)";
    }));
    clientsimg.forEach(x => x.addEventListener("mouseleave", function () {
        this.style.transform = "scale(1)";
    }));

    // Primero de dam
    let alerta = false;

    document.querySelector("textarea").addEventListener('input', function() {
        if (!alerta && this.value.includes('primerodedam')) {
            alert('¡Has escrito "primerodedam"!');
            alerta = true;
        }
    });
    //Limitar @
    document.querySelector('.arroba').addEventListener('keypress', function(event) {
        if (event.key === '@') {
            event.preventDefault();
        }
    });
    //Limitar números
    document.querySelector('.name').addEventListener('keypress', function(event) {
        if (!isNaN(event.key)) {
            event.preventDefault();
        }
    });
   // seleccionamos el formulario
    const form = document.querySelector('.formulario form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // previene la acción por defecto (enviar el formulario)
        alert('El formulario ha sido enviado');

    });

    

});