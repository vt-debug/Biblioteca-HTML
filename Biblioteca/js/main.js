document.addEventListener('DOMContentLoaded', () => {
  // Atualizar ano em todos os footers
  const year = new Date().getFullYear();
  document.querySelectorAll('#year, #year2, #year3, #year4, #year5, #year6')
    .forEach(el => { if (el) el.textContent = year; });

  // ===== Menu mobile =====
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeMenu = document.getElementById('closeMenu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.add('active');
    });
  }
  if (closeMenu) {
    closeMenu.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
    });
  }

// ===== Carrossel =====
const carouselTrack = document.getElementById('carouselTrack');
if (carouselTrack) {
  const slidesData = [
    {title:'Como referenciar corretamente',text:'Guia rápido para citações e referências.',img:'https://picsum.photos/seed/d1/400/250'},
    {title:'Novo acervo de TI',text:'Livros e e-books atualizados em tecnologia.',img:'https://picsum.photos/seed/d2/400/250'},
    {title:'Salas de estudo reserváveis',text:'Reserve pelo portal e garanta seu espaço.',img:'https://picsum.photos/seed/d3/400/250'}
  ];

  slidesData.forEach(s=>{
    const slide = document.createElement('div');
    slide.className = 'card';
    slide.innerHTML = `<img src="${s.img}" alt=""><h4>${s.title}</h4><p>${s.text}</p>`;
    carouselTrack.appendChild(slide);
  });

  const prev = document.querySelector('.carousel-btn.prev');
  const next = document.querySelector('.carousel-btn.next');
  let index = 0;

  function updateCarousel() {
    const slideWidth = carouselTrack.querySelector('.card').offsetWidth + 20;
    const totalSlides = carouselTrack.children.length;
    const visibleSlides = Math.floor(document.querySelector('.carousel').offsetWidth / slideWidth);
    const maxIndex = totalSlides - visibleSlides;

    if (index < 0) index = 0;
    if (index > maxIndex) index = maxIndex;

    carouselTrack.style.transform = `translateX(-${index * slideWidth}px)`;
  }

  prev.addEventListener('click', () => {
    index--;
    updateCarousel();
  });

  next.addEventListener('click', () => {
    index++;
    updateCarousel();
  });

  window.addEventListener('resize', updateCarousel);
  updateCarousel();
}


  // ===== Scroll reveal =====
  const reveals = document.querySelectorAll('.reveal-up');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting) e.target.classList.add('is-visible');
    });
  }, {threshold: 0.15});
  reveals.forEach(r=>io.observe(r));

  // Função global para reativar reveals quando adiciona conteúdo
  window.initReveals = function() {
    document.querySelectorAll('.reveal-up').forEach(r=>{
      if(!r._observed) { io.observe(r); r._observed = true; }
    });
  };
});
