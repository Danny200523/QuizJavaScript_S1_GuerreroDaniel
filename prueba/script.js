function cat(){
    let img = document.getElementById("img_new");
    let val = document.getElementById("status").value;
    let url = `https://http.cat/${val}`;
    console.log(val)
    let pepito = new XMLHttpRequest();
    pepito.open("GET",url);
    pepito.onreadystatechange = function(){
        if (this.status === 200 && this.readyState===4){
            img.innerHTML = `<img src="${url}"/>`;
        }
        else{
            console.log("No funciono")
        }
    };
}
cat();