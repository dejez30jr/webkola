
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
