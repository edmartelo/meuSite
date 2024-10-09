// menu hamburguer

const btnMobile = document.getElementById('btn-mobile')

function toggleMenu(event) {
  if (event.type === 'touchStart') event.preventDefault
  const nav = document.getElementById('nav');
  // toggle - adiciona caso não tenha - remova caso tenha
  nav.classList.toggle('ativo')
}

btnMobile.addEventListener('click', toggleMenu);
// btnMobile.addEventListener('touchstart', toggleMenu);


// Função voltar ao topo.
window.onscroll = function () {
  showBackTop();
};


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


//Função aparecer botão após scroll
function showBackTop() {
  const btn = document.querySelector("#goToBack");

  if (
    document.body.scrollTop > 230 ||
    document.documentElement.scrollTop > 230
  ) {
    btn.classList.add("active");
  } else {
    btn.classList.remove("active");
  }
}


// INICIO BG PRINCIPAL

document.addEventListener('DOMContentLoaded', () => {
  const interBubble = document.querySelector('.interactive');
  let curX = 0;
  let curY = 0;
  let tgX = 0;
  let tgY = 0;

  const move = () => {
    curX += (tgX - curX) / 20;
    curY += (tgY - curY) / 20;
    interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
    requestAnimationFrame(move);
  };

  window.addEventListener('mousemove', (event) => {
    tgX = event.clientX;
    tgY = event.clientY;
  });

  move();
});

// FIM BG PRINCIPAL
