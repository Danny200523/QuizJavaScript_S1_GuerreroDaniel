window.onload = function(){
  clima_principal();
};


function clima_principal() {
  const url = `https://api.weatherapi.com/v1/forecast.json?key=89cacd5521774b6e9a0115125252904&days=5&q=Bucaramanga`;
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
        if (response.location.localtime.substring(6,7)=== "4"){
          ciudad.innerHTML = `<div class="superior">
                                    <p class="ciudad">${response.location.name}, ${response.location.region}</p>
                                    <img class="img_lupa" src="./storage/storage/img/search_white.png" alt=""/>
                                    </div>
                                    <div class="nube">
                                    <p class="temp">${response.current.temp_c}°</p>
                                    <p class="feel">Feels Like ${response.current.feelslike_c}°</p>
                                    <div class="flex1">
                                    <img class="imc_ico" src="${response.current.condition.icon}" alt=""/>
                                    <p class="text_ico">${response.current.condition.text}</p>
                                    </div>
                                    </div>
                                    <div class="fecha">
                                    <p class="fec">ABRIL ${response.location.localtime.substring(9,10)}, ${response.location.localtime.substring(12,16)}</p>
                                    </div>`;
        }
        rain.innerHTML = `<div class="air_speed">
                          <img src="./storage/storage/img/air.png" alt="" />
                          <div class="flex">
                          <b>Wind Speed</b>
                          <b class="valor_air">${response.current.wind_kph} KM/H</b>
                          </div>
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
};