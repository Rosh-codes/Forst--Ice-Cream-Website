const veganBtn = document.getElementById("vegan");
  const chocoBtn = document.getElementById("choco");
  const fruityBtn = document.getElementById("fruity");
  const seasonalBtn = document.getElementById("seasonal");

  
  const veganFlavours = document.querySelector(".veganFlavours");
  const chocoFlavours = document.querySelector(".choco-flavours");
  const fruityFlavours = document.querySelector(".fruity-flavours");
  const seasonalFlavours = document.querySelector(".seasonalFlavours");


  function showCategory(button, section) {

    veganBtn.classList.remove("active");
    chocoBtn.classList.remove("active");
    fruityBtn.classList.remove("active");
    seasonalBtn.classList.remove("active");


    veganFlavours.classList.add("hidden");
    chocoFlavours.classList.add("hidden");
    fruityFlavours.classList.add("hidden");
    seasonalFlavours.classList.add("hidden");
    button.classList.add("active");

    section.classList.remove("hidden");
  }

  veganBtn.addEventListener("click", function () {
    showCategory(veganBtn, veganFlavours);
  });

  chocoBtn.addEventListener("click", function () {
    showCategory(chocoBtn, chocoFlavours);
  });

  fruityBtn.addEventListener("click", function () {
    showCategory(fruityBtn, fruityFlavours);
  });

  seasonalBtn.addEventListener("click", function () {
    showCategory(seasonalBtn, seasonalFlavours);
  });




  const slides = document.querySelector('.slides');
  const images = document.querySelectorAll('.slides img');
  const dotsContainer = document.querySelector('.dots');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  let index = 0;
  const total = images.length;

  // Generate dots
  for (let i = 0; i < total; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => moveToSlide(i));
    dotsContainer.appendChild(dot);
  }

  const dots = document.querySelectorAll('.dot');

  function updateSlider() {
    slides.style.transform = `translateX(-${index * 100}%)`;

    // Update dots
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
  }

  function moveToSlide(i) {
    index = i;
    updateSlider();
  }

  function nextSlide() {
    index = (index + 1) % total;
    updateSlider();
  }

  function prevSlide() {
    index = (index - 1 + total) % total;
    updateSlider();
  }

  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);

  // Auto move
  setInterval(nextSlide, 3000);

  // Flip card functionality
  const flavourCards = document.querySelectorAll('.flavour-card');

  flavourCards.forEach(card => {
      const flipBtn = card.querySelector('.flip-btn');
      const flipBackBtn = card.querySelector('.flip-back-btn');
      if (flipBtn) {
          flipBtn.addEventListener('click', () => {
              card.classList.add('is-flipped');
          });
      }
      if (flipBackBtn) {
          flipBackBtn.addEventListener('click', () => {
              card.classList.remove('is-flipped');
          });
      }
  });


