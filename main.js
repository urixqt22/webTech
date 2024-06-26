

// Show Menu
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    }
}
showMenu('nav_toggle', 'nav_menu');

const navLink = document.querySelectorAll('.nav_link'); 
function linkAction() {
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    const navMenu = document.getElementById('nav_menu');
    navMenu.classList.remove('show');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

const images = document.querySelectorAll('.activity_img img');

images.forEach(img => {
    img.addEventListener('click', () => {
        img.classList.toggle('zoomed');
    });
});
