let boton = document.getElementById("boton");

boton.addEventListener("click", function (event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let contrasena = document.getElementById("contrasena").value

    let emailJSON = JSON.stringify(email);
    let contrasenaJSON = JSON.stringify(contrasena)


    localStorage.setItem("email", emailJSON);
    localStorage.setItem("contrasena", contrasenaJSON)

    let valor = localStorage.getItem("email",emailJSON)
    let usuario = JSON.parse(valor)

    usuario !== "" ? window.location.href = "home.html" : alert("completa los datos")

})

const apiKey = "9ece0cf1d8689cef1553a43296b93476";
const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=34.36&lon=58.26&exclude=alerts&appid=${apiKey}`;

const climaContainer = document.getElementById("container-clima");

fetch(apiUrl)
    .then((resp) => resp.json())
    .then((data) => {
        const climaList = data.list;

        climaList.forEach((clima) => {
            const date = new Date(clima.dt * 1000); 
            const climaElement = document.createElement("div");
            climaElement.innerHTML = `
                <h2 class="clima-titulo">${date.toDateString()}</h2>
                <p>${clima.weather[0].description}</p>
                <p>Temperatura: ${clima.main.temp} °C</p>
            `;
            climaContainer.appendChild(climaElement);
        });
    })
    .catch((error) => {
        console.error("Error en el servidor del clima", error);
    });


    