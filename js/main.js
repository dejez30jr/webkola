

// nimasi ketikan nuri
const text = "SMK NURUL IMAN JAKTIM";
let index = 0;
const speed = 100; 

function typeWriter() {
    if (index < text.length) {
        document.querySelector(".containers").innerHTML += text.charAt(index);
        index++;
        document.querySelector('.containers').style.fontSize= "50px";
         document.querySelector('.containers').style.color="white";
         document.querySelector('.containers').style.fontWeight="bold";
         document.querySelector('.containers').style.textAlign= "center";
        setTimeout(typeWriter, speed);
    }
}
// end nimasi ketikan nuri

window.onload = typeWriter;

// Hide navbar sidebar saat di klik

document.addEventListener('DOMContentLoaded', function () {
    const offcanvasLinks = document.querySelectorAll('.offcanvas-body .tutup-nav');
    const offcanvasElement = document.getElementById('offcanvasNavbar');
    const bsOffcanvas = new bootstrap.Offcanvas(offcanvasElement);

    offcanvasLinks.forEach(link => {
        link.addEventListener('click', function () {
            const delay = 550;
            setTimeout(() => {
                bsOffcanvas.hide();
            }, delay);
        });
    });
});

// end Hide navbar sidebar saat di klik

// hover navbar start
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.nav-item a');

window.onscroll = () => {
    navLinks.forEach((link) => {
        link.classList.remove('Aktif');
    });
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 110;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('Aktif');
                document.querySelector('.nav-item a[href*=' + id + ']').classList.add('Aktif');
            });
        };
    });
};
// hover navbar end
// popup
document.querySelectorAll('.popklik').forEach(item => {
    item.addEventListener('click', function() {
        let popupId = this.getAttribute('data-popup');
        let popup = document.getElementById(popupId);
        popup.classList.toggle('on');
    });
});

document.querySelectorAll('.popupbox_js').forEach(item => {
    item.addEventListener('click', function() {
        item.classList.remove('on');
        if (!item.classList.contains('on')) {
            document.getElementById('Jurusan').scrollIntoView();
        }
    });
});
// popup End

// pop up identitas
const openI= document.getElementById("open-identitas");
const popupI= document.querySelector(".popup-identitas");
const closeI= document.querySelector('.close-identitas')
openI.addEventListener("click", function(){
  popupI.style.display= "flex";
});
closeI.addEventListener("click", function(){
  popupI.style.display= "none";
});


//pop end

// slide pp guru bray
function slideLeft() {
    const container = document.querySelector('.card-container');
    container.scrollBy({ left: -300, behavior: 'smooth' });
  }
  
  function slideRight() {
    const container = document.querySelector('.card-container');
    container.scrollBy({ left: 300, behavior: 'smooth' });
  }
