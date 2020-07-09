let data = [
  {
    id: 1,
    company: "Photosnap",
    image: "./images/photosnap.svg",
    new: true,
    featured: true,
    title: "Senior Frontend Developer",
    tags: ["Frontend", "Senior", "HTML", "CSS", "JavaScript"],
    time: "1d ago",
    type: "Full Time",
    region: "USA Only",
  },
  {
    id: 2,
    company: "Manage",
    image: "./images/manage.svg",
    new: true,
    featured: true,
    title: "Fullstack Developer",
    tags: ["Fullstack", "Midweight", "Python", "React"],
    time: "1d ago",
    type: "Part Time",
    region: "Remote",
  },
  {
    id: 3,
    company: "Account",
    image: "./images/account.svg",
    new: true,
    featured: false,
    title: "Junior Frontend Developer",
    tags: ["Frontend", "Junior", "JavaScript", "React", "Sass"],
    time: "2d ago",
    type: "Part Time",
    region: "USA Only",
  },
  {
    id: 4,
    company: "MyHome",
    image: "./images/myhome.svg",
    new: false,
    featured: false,
    title: "Junior Frontend Developer",
    tags: ["Frontend", "Junior", "CSS", "JavaScript"],
    time: "5d ago",
    type: "type",
    region: "USA Only",
  },
  {
    id: 5,
    company: "Loop Studios",
    image: "./images/loop-studios.svg",
    new: false,
    featured: false,
    title: "Software Engineer",
    tags: ["FullStack", "Midweight", "JavaScript", "Ruby", "Sass"],
    time: "1w ago",
    type: "Full Time",
    region: "Worldwide",
  },
  {
    id: 6,
    company: "FaceIt",
    image: "./images/faceit.svg",
    new: false,
    featured: false,
    title: "Junior Backend Developer",
    tags: ["Backend", "Junior", "Ruby", "RoR"],
    time: "2w ago",
    type: "Full Time",
    region: "UK Only",
  },
  {
    id: 7,
    company: "Shortly",
    image: "./images/shortly.svg",
    new: false,
    featured: false,
    title: "Junior Developer",
    tags: ["Frontend", "Junior", "HTML", "JavaScript", "Sass"],
    time: "2w ago",
    type: "Full Time",
    region: "Worldwide",
  },
  {
    id: 8,
    company: "Insure",
    image: "./images/insure.svg",
    new: false,
    featured: false,
    title: "Junior Frontend Developer",
    tags: ["Frontend", "Junior", "JavaScript", "Vue", "Sass"],
    time: "2w ago",
    type: "Full Time",
    region: "USA Only",
  },
  {
    id: 9,
    company: "Eyecam Co.",
    image: "./images/eyecam-co.svg",
    new: false,
    featured: false,
    title: "Full Stack Engineer",
    tags: ["Fullstack", "Midweight", "JavaScript", "Python", "Django"],
    time: "3w ago",
    type: "Full Time",
    region: "Worldwide",
  },
  {
    id: 10,
    company: "The Air Filter Company",
    image: "./images/the-air-filter-company.svg",
    new: false,
    featured: false,
    title: "Front-end Dev",
    tags: ["Frontend", "Junior", "JavaScript", "React", "Sass"],
    time: "1mo ago",
    type: "Part Time",
    region: "Worldwide",
  },
];

const cards = document.querySelector(".cards");

function buildCards(
  id,
  company,
  image,
  isNew,
  isFeatured,
  title,
  tags,
  time,
  type,
  region
) {
  let card = document.createElement("div");
  card.innerHTML = `<div class='card__left'> \
    <img src=${image} alt"logo" class='card__image' /> 
  </div> 

  <div class='card__middle'> 
    <div class='card__middle-top'> 
        <p class='card__company'>${company}</p> 
    </div> 

    <div class='card__middle-m'> 
<h1 class='card__title'>${title}</h1> 
    </div> 

    <div class='card__middle-bottom'> 
      <p class='card__time'>${time}</p> 
      <p class='card__type'>${type}</p> 
      <p class='card__region'>${region}</p> 
    </div> 
  </div> 

  <div class='card__right'> </div> 
  </div>`;

  card.classList.add("card");

  cards.appendChild(card);

  const currentCard = document.querySelectorAll(".card");

  if (isNew) {
    let cardMiddleTop = document.querySelectorAll(".card__middle-top");

    let n = document.createElement("p");
    n.innerHTML = "NEW!";
    n.classList.add("card__new");

    cardMiddleTop[id].appendChild(n);
  }

  if (isFeatured) {
    let cardMiddleTop = document.querySelectorAll(".card__middle-top");

    let f = document.createElement("p");
    f.innerHTML = "FEATURED";
    f.classList.add("card__featured");

    cardMiddleTop[id].appendChild(f);
    currentCard[id].classList.add("borderLeft");
  }

  const cardRight = document.querySelectorAll(".card__right");

  tags.forEach((tag) => {
    const t = document.createElement("p");
    t.classList.add("card__tag");
    t.innerHTML = `${tag}`;
    cardRight[id].appendChild(t);
    currentCard[id].classList.add(`${tag}`);
  });
}

data.forEach((d) => {
  buildCards(
    d.id - 1,
    d.company,
    d.image,
    d.new,
    d.featured,
    d.title,
    d.tags,
    d.time,
    d.type,
    d.region
  );
});

// FILTER

let tags = [];
let tagsF = [];

const cardTags = document.querySelectorAll(".card__tag");
const searchbarTags = document.querySelector(".searchbar__tags");
const allCards = document.querySelectorAll(".card");
const clearButton = document.querySelector(".searchbar__clear");

cardTags.forEach((tag) => {
  tag.addEventListener("click", filter);
});

function filter(e) {
  tagsF.push(e.target.innerText + "\n  \n    \n  ");
  tags.push(e.target.innerText);

  let newTag = document.createElement("div");
  newTag.classList.add("searchbar__tag");
  newTag.innerHTML = `<p class="searchbar__tag-text">${e.target.innerText}</p>
  <div class="searchbar__tag-icon">
    <img src="images/icon-remove.svg" alt="" />
  </div>`;
  searchbarTags.appendChild(newTag);

  allCards.forEach((card) => {
    tags.forEach((tag) => {
      if (!card.classList.contains(tag) && tag != "") {
        card.style.display = "none";
      }
    });
  });
}

clearButton.addEventListener("click", () => {
  tags = [];
  tagsF = [];

  allCards.forEach((card) => {
    card.style.display = "flex";
  });

  searchbarTags.innerHTML = "";
});

window.addEventListener("click", removeFilter);

function removeFilter(e) {
  if (e.target.className == "searchbar__tag-icon") {
    e.target.parentNode.style.display = "none";

    let tagName = e.target.parentNode.innerText;
    let tagIndex = tagsF.indexOf(tagName);
    console.log(e.target.parentNode);

    tagsF[tagIndex] = "";
    tags[tagIndex] = "";

    allCards.forEach((card) => {
      card.style.display = "flex";
    });

    allCards.forEach((card) => {
      tags.forEach((tag) => {
        if (!card.classList.contains(tag) && tag != "") {
          card.style.display = "none";
        }
      });
    });
  }
}
