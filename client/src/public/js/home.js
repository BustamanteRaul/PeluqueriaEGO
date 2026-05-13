const contenedorDias = document.getElementById("contenedorDias");

const botonAnterior = document.getElementById("anterior");
const botonSiguiente = document.getElementById("siguiente");

const nombresDias = ["DOM", "LUN", "MAR", "MIE", "JUE", "VIE", "SAB"];

const nombresMeses = [
    "ENE",
    "FEB",
    "MAR",
    "ABR",
    "MAY",
    "JUN",
    "JUL",
    "AGO",
    "SEP",
    "OCT",
    "NOV",
    "DIC"
];

let offsetSemana = 0;

function renderizarDias(){

    contenedorDias.innerHTML = "";

    const hoy = new Date();

    const lunes = new Date(hoy);

    const diaActual = hoy.getDay();

    const diferencia = diaActual === 0 ? -6 : 1 - diaActual;

    lunes.setDate(hoy.getDate() + diferencia + (offsetSemana * 7));

    for(let i = 0; i < 6; i++){

        const fecha = new Date(lunes);

        fecha.setDate(lunes.getDate() + i);

        const nombreDia = nombresDias[fecha.getDay()];
        const numero = fecha.getDate();
        const mes = nombresMeses[fecha.getMonth()];

        const boton = document.createElement("button");

boton.type = "button";

boton.innerHTML = `
    <strong>${nombreDia}</strong><br>
    ${numero} ${mes}
`;

boton.addEventListener("click", () => {

    const botones = document.querySelectorAll("#contenedorDias button");

    botones.forEach(b => {
        b.classList.remove("activo");
    });

    boton.classList.add("activo");

});

contenedorDias.appendChild(boton);
    }
}

botonSiguiente.addEventListener("click", () => {
    offsetSemana++;
    renderizarDias();
});

botonAnterior.addEventListener("click", () => {
    offsetSemana--;
    renderizarDias();
});

renderizarDias();