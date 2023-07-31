
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

// mengambil elemen div id popup

var popup = document.getElementById('pop');
// mengambil elemen button id modal

var hk = document.getElementById('hk');
// mengambil class closeBtn
//bernilai nol karena jika bernilai satu maka tampilan tidak akan hilang
var closeBtn = document.getElementsByClassName('closeBtn')[0];
 
// jika tombol di klik maka akan memanggil function open modal

hk.addEventListener('click', openPopup);
// jika tombol di klik maka akan memanggil function close modal

closeBtn.addEventListener('click', closePopup);
// jika tombol di klik maka akan memanggil function outside click

window.addEventListener('click', outsideClick);
 
// Function untuk open modal

function openPopup(){

  popup.style.display = 'block';

}
 
// Function untuk close modal

function closePopup(){

  popup.style.display = 'none';

} 
// Function untuk close modal jika di klik diluar modal (outside click)



