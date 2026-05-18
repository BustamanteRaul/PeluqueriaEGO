const contenedorDias = document.getElementById("contenedorDias");
const botonAnterior = document.getElementById("anterior");
const botonSiguiente = document.getElementById("siguiente");

const nombresDias = ["LUN", "MAR", "MIE", "JUE", "VIE", "SAB", "DOM"];
const nombresMeses = ["ENE","FEB","MAR","ABR","MAY","JUN","JUL","AGO","SEP","OCT","NOV","DIC"];

let offsetSemana = 0;

function renderizarDias() {
    contenedorDias.innerHTML = "";

    const hoy = new Date();
    const diaActual = hoy.getDay(); // 0=domingo, 1=lunes...
    const diaCorregido = diaActual === 0 ? 7 : diaActual;

    // lunes de la semana actual
    const inicioSemana = new Date(hoy);
    inicioSemana.setDate(hoy.getDate() - (diaCorregido - 1) + (offsetSemana * 7));

    for (let i = 0; i < 7; i++) {
        const fecha = new Date(inicioSemana);
        fecha.setDate(inicioSemana.getDate() + i);

        const nombreDia = nombresDias[i];
        const numero = fecha.getDate();
        const mes = nombresMeses[fecha.getMonth()];

        const boton = document.createElement("button");
        boton.type = "button";
        boton.innerHTML = `<strong>${nombreDia}</strong><br>${numero} ${mes}`;

        boton.addEventListener("click", () => {
            document.querySelectorAll("#contenedorDias button").forEach(b => b.classList.remove("activo"));
            boton.classList.add("activo");
        });

        contenedorDias.appendChild(boton);
    }
}


// Botones de navegación
botonSiguiente.addEventListener("click", () => {
    offsetSemana++;
    renderizarDias();
});

botonAnterior.addEventListener("click", () => {
    offsetSemana--;
    renderizarDias();
});

// Inicializar
renderizarDias();
