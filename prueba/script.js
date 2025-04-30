window.onload = function(){
    document.querySelector('form').addEventListener('submit', function(event){
        event.preventDefault();
        cat();
    });
};

function cat(){
    let imgContainer = document.getElementById("img_new");
    let val = document.getElementById("status").value;
    
    let url = `https://http.cat/${val}`;
    
    const img = new Image();

    img.onload = function() {
        console.log("Imagen cargada correctamente");
        imgContainer.innerHTML = ''; // Limpiar contenedor
        imgContainer.innerHTML = `<img src="${url}"/>`;
    };
    
    img.onerror = function() {
        console.log("Error al cargar la imagen");
        imgContainer.innerHTML = `<p>Error al cargar la imagen para el código ${val}. 
                               Asegúrate de que sea un código HTTP válido.</p>`;
    };
    
    img.src = url;
}