const images = [
	{
		image: 'img/01.webp',
		title: "Marvel's Spiderman Miles Morale",
		text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
	},
	{
		image: 'img/02.webp',
		title: 'Ratchet & Clank: Rift Apart',
		text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
	},
	{
		image: 'img/03.webp',
		title: 'Fortnite',
		text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
	},
	{
		image: 'img/04.webp',
		title: 'Stray',
		text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
	},
	{
		image: 'img/05.webp',
		title: "Marvel's Avengers",
		text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
	},
]

const lengthImage = images.length;
const principalDomElement = document.querySelector('.principal');
const principalWordDomElement = document.querySelector('.principal__word');
const secondImageDomElement = document.querySelector('.second-image');

for(let i = 0; i < lengthImage; i++){
  let currentImage = images[i];

  const htmlPrincipalImage = ` 
    <img src="./${currentImage.image}" alt="" class="myimage">
  `;
  const htmlPrincipalWord = `
    <h1 class="title">${currentImage.title}</h1>
    <p class="text">${currentImage.text}</p>
  `
  const htmlSecondImage = `
    <img src="./${currentImage.image}" alt="">
  `
  console.log(htmlPrincipalImage);

  principalDomElement.innerHTML += htmlPrincipalImage;
  principalWordDomElement.innerHTML += htmlPrincipalWord;
  secondImageDomElement.innerHTML += htmlSecondImage;
}

const itemImage = document.querySelectorAll('.myimage');
const itemTitle = document.querySelectorAll('.title');
const itemText = document.querySelectorAll('.text');

let currentIndex = 0;
itemImage[currentIndex].classList.add('active');
itemTitle[currentIndex].classList.add('active');
itemText[currentIndex].classList.add('active');

const iconUp = document.querySelector('.click-up');
const iconDown = document.querySelector('.click-down');
console.log(iconUp, iconDown);

iconUp.addEventListener('click', function(){
  if(currentIndex < (lengthImage - 1)){
    currentIndex++;
    if(currentIndex > (currentIndex - 1)){
      itemImage[currentIndex - 1].classList.remove('active');
      itemImage[currentIndex].classList.add('active');
      itemTitle[currentIndex - 1].classList.remove('active');
      itemTitle[currentIndex].classList.add('active');
      itemText[currentIndex - 1].classList.remove('active');
      itemText[currentIndex].classList.add('active');
    }
  }
})

iconDown.addEventListener('click', function(){
  if(currentIndex > 0){
    currentIndex--;
    if(currentIndex < (currentIndex + 1)){
      itemImage[currentIndex + 1].classList.remove('active');
      itemImage[currentIndex].classList.add('active');
      itemTitle[currentIndex - 1].classList.remove('active');
      itemTitle[currentIndex].classList.add('active');
      itemText[currentIndex - 1].classList.remove('active');
      itemText[currentIndex].classList.add('active');
    }
  }
})