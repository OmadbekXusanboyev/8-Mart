document.addEventListener('DOMContentLoaded', () => {
  // Loader animatsiyasi
  const loader = document.getElementById('loader');
  const content = document.getElementById('content');
  const scrollDownButton = document.querySelector('.scroll-down');
  const audio = document.getElementById('background-music');
  const playBtn = document.getElementById('play-btn');
  let isPlaying = false;

  // Scroll down tugmasi bosilganda pastga o'tish
  if (scrollDownButton) {
    scrollDownButton.addEventListener('click', () => {
      document.querySelector('.congrats-section').scrollIntoView({
        behavior: 'smooth'
      });
    });
  }

  // Loaderni yashirish
  setTimeout(() => {
    loader.style.opacity = 0;
    setTimeout(() => {
      loader.style.display = 'none';
      content.classList.remove('hidden');
      content.style.opacity = 1;
    }, 10);
  }, 2000);

  // Audio boshqaruvi
  audio.volume = 0.3;

  playBtn.addEventListener('click', () => {
    isPlaying = !isPlaying;
    playBtn.innerHTML = isPlaying
      ? '<i class="fas fa-pause"></i>'
      : '<i class="fas fa-play"></i>';
    isPlaying ? audio.play() : audio.pause();
  });

  // Generativ kartalar
  const cardContents = [
    {
      title: "Aziz Onalar",
      text: "Har bir onaning mehr-muhabbati bilan hayot yanada go'zal bo'ladi. 8-Mart muborak, aziz onalar!",
      img: "https://images.unsplash.com/photo-1732808767284-135e6c4edbb0?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW90aGVyJTIwbG92ZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      title: "Sevimli Qizlar",
      text: "Yoshlikning yorqin nuridek, quvonch va orzular bilan to'lib-toshgan qalblar. 8-Mart muborak, sevimli qizlar!",
      img: "https://images.unsplash.com/photo-1558280417-ea782f829e93?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMGZsb3dlcnxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      title: "Mehribon Opalar",
      text: "Har doim mehr bilan bizni qo'llab-quvvatlagan opalar, sizga sog'liq va baxt tilaymiz. 8-Mart muborak, mehribon opalar!",
      img: "https://images.pexels.com/photos/341970/pexels-photo-341970.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    }
  ];

  const container = document.querySelector('.cards-container');

  cardContents.forEach(card => {
    const cardEl = document.createElement('div');
    cardEl.className = 'card';
    cardEl.innerHTML = `
      <img class="card-img" src="${card.img}" alt="${card.title}">
      <h3>${card.title}</h3>
      <p>${card.text}</p>
    `;
    container.appendChild(cardEl);
  });

  // Scroll animatsiyalari: kartalar paydo bo'lishi uchun
  const cards = document.querySelectorAll('.card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(card => observer.observe(card));

  // Fon rasmini o'zgartirish (har 10 soniyada)
  const bgImages = [
    '?spring,blossom',
    '?flower,garden',
    '?woman,smile'
  ];

  setInterval(() => {
    document.body.style.backgroundImage =
      `linear-gradient(45deg, rgba(226,232,240,0.8), rgba(237,242,247,0.8)), 
       url('https://source.unsplash.com/random/1920x1080/${bgImages[Math.floor(Math.random() * bgImages.length)]}')`;
  }, 10000);
});


