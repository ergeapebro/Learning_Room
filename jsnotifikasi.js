window.onload = init;

function init(){
    var submit = document.getElementById("batal")
    submit.onclick=handleSubmitClick;
}

function handleSubmitClick(){
     var batal = confirm("Anda yakin ingin membuang perubahan?")
         
     if (batal === true){
            window.location = "pengaturan.html";
         }
        
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

var box  = document.getElementById('box');
var down = false;


function notif(){
	if (down) {
		
		box.style.opacity = 0;
		down = false;
	}else {
		box.style.height  = '690px';
		box.style.opacity = 1;
		down = true;
	}
}


function happus(){
    let tulis = document.getElementById('b');
    tulis.parentNode.removeChild(tulis);
}
