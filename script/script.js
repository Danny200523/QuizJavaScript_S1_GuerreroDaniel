
function clima_principal() {
  const url = `http://api.weatherapi.com/v1/forecast.json?key=cf5151ce4fda4f35a26115148252804&days=5&q=Bucaramanga`;
  const ciudad = document.getElementById("editable");
  const rain = document.getElementById("cuadros1");
  let pepito = new XMLHttpRequest();

  pepito.open("GET", url, true); // 'GET' es el método y 'true' es para solicitud asincrónica
  pepito.onreadystatechange = function () {
    if (this.readyState === 4) {
      // 4 significa que la solicitud se completó
      if (this.status === 200) {
        // Verifica que la respuesta haya sido exitosa
        let response = JSON.parse(this.responseText);
        ciudad.innerHTML = `<div class="superior">
                                    <p class="ciudad">${response.location.name}, ${response.location.region}</p>
                                    <img class="img_lupa" src="./storage/storage/img/search_white.png" alt=""/>
                                    </div>
                                    <div class="nube">
                                    <p class="temp">${response.current.temp_c}°</p>
                                    <img class="imc_ico" src="${response.current.condition.icon}" alt=""/>
                                    </div>
                                    <div class="fecha">
                                    <p class="fec">${response.location.localtime}</p>
                                    </div>`;
        rain.innerHTML = `
                <div class="air_speed">
                    <img src="./storage/storage/img/air.png" alt="" />
                    <b>Wind Speed</b>
                    <b>${response.wind_kph} KM/H</b>
                </div>
                <div class="rain_change">
                    <img src="./storage/storage/img/rainy.png" alt="" />
                    <b>Rain Change</b>
                </div>`;
        console.log("¡Funciona!");
        console.log(this.readyState);
        console.log(this.status);
      } else {
        // Si el status no es 200, muestra el error
        console.log("Error en la solicitud:", this.status);
        ciudad.innerHTML = `<p>Error al cargar el clima</p>`;
        console.log(this.readyState);
        console.log(this.status);
      }
    }
  };
  pepito.onerror = function () {
    // Si hay un error con la solicitud
    console.log("Error en la conexión de red");
    ciudad.innerHTML = `<p>No se pudo conectar al servidor</p>`;
  };
  pepito.send(); // Envía la solicitud
}

clima_principal();