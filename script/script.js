window.onload = function(){
    clima_principal();
}

function clima_principal(){
    let url = `http://api.weatherapi.com/v1/forecast.json?key=cf5151ce4fda4f35a26115148252804&days=5&q=Floridablanca`;
    let ciudad = document.getElementById("editable_main");
    let pepito = new XMLHttpRequest;
    pepito.open(`GET`,url);
    pepito.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200){
            let response = JSON.parse(this.responseText);
            ciudad.innerHTML = innerHTML+`
            <p class="ciudad">${response["name"]}, ${response["region"]}</p>
            <p class="temp">${response["current"]["temp_c"]}</p>
            `;

        }
    }
}
