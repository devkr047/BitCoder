const container = document.getElementById('container');
const navbar = document.getElementById('navbar');
container.addEventListener('scroll', function () {
    if (this.scrollTop > 0) {
        navbar.style.backgroundColor = '#fff';
        navbar.style.boxShadow = '2px 2px 7px black';
    }
    else {

        navbar.style.backgroundColor = 'transparent';
        navbar.style.boxShadow = 'none';
    }
})


const side=document.getElementById('side');
const btn=document.getElementById('btn');

btn.addEventListener('click',function(){
    side.classList.toggle('active');
});