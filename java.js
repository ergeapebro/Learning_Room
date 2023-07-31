window.onload = init;

function init(){
    var button = document.getElementById("m")
    button.onclick=handleSubmitClick;
}

function handleSubmitClick(){
    alert("Selamat Datang di Learning Room")
}