// local reviews data
const reviews = [
    {
      id: 1,
      name: "ahmed ben romthan",
      job: "web developer",
      img:
        "images/parent1.jpg",
      text:
        "Très bonne club, vraiment ravi d'avoir un tel encadrement en matière de robotique pour mon enfant",
    },
    {
      id: 2,
      name: "souad el kharawi",
      job: "web designer",
      img:
        "images/parent2.jpg",
      text:
        "Ma fille et moi sommes les toutes hyper satisfaites de ce que ce club offre, une expérience unique",
    },
    {
      id: 3,
      name: "hamza ben mabrouk",
      job: "tern",
      img:
        "images/parent3.jpg",
      text:
        "  5 étoiles! Vraiment surpris du professionnalisme au sein de ce club, une équipe de rêve était au suivi de ma fille ",
    },
    {
      id: 4,
      name: "lamia dridi",
      job: "femme au foyer",
      img:
        "images/parent4.jpg",
      text:
        "Ma fille et moi sommes les toutes hyper satisfaites de ce que ce club offre, une expérience unique ",
    },
  ];
  // select items
  const img = document.getElementById("person-img");
  const author = document.getElementById("author");
  const job = document.getElementById("job");
  const info = document.getElementById("info");
  
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const randomBtn = document.querySelector(".random-btn");
  
  // set starting item
  let currentItem = 0;
  
  // load initial item
  window.addEventListener("DOMContentLoaded", function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  });
  
  // show person based on item
  function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }
  // show next person
  nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });
  // show prev person
  prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  });
  // show random person
  randomBtn.addEventListener("click", function () {
    console.log("hello");
  
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
  });