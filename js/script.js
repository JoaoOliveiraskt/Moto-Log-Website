let ul = document.querySelector('nav .ul');

function openMenu(){
    ul.classList.add('open')
}

function closeMenu(){
    ul.classList.remove('open')
}

window.addEventListener('scroll', function() {
    var nav = document.querySelector('nav');
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 0) {
      nav.classList.add('scroll');
    } else {
      nav.classList.remove('scroll');
    }
  });
  