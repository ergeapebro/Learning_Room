window.onload = init;

function init(){
    var submit = document.getElementById("cancel")
    submit.onclick=handleSubmitClick;
}

function handleSubmitClick(){
     var cancel = confirm("Anda yakin ingin membuang perubahan?")
         
     if (cancel === true){
            window.location = "lrprofil.html";
         }
}


var box  = document.getElementById('box');
var down = false;

function notif(){
	if (down) {
		
		box.style.opacity = 0;
		down = false;
	}else {
		box.style.height  = '590px';
		box.style.opacity = 1;
		down = true;
	}
}
function happus(){
    let tulis = document.getElementById('b');
    tulis.parentNode.removeChild(tulis);
}


const menuToggle = document.querySelector('.sidebar-sisi img');
const navigation = document.querySelector('.aside');
menuToggle.onclick = () => {
  navigation.classList.toggle('buka');
}

const listItems = document.querySelectorAll('.list-item');
listItems.forEach(item => {
  item.onclick = () => {
    listItems.forEach(item => item.classList.remove('aktif'));
    item.classList.add('aktif');
  }
})