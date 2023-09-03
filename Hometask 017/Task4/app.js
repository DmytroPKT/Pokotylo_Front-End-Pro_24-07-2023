'use strickt';

const imgSources = [
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpg",
  "images/4.jpg",
  "images/5.jpg",
  "images/6.jpg",
  "images/7.jpg",
  "images/8.jpg",
  "images/9.jpg"
];

const randomIndex = Math.floor(Math.random() * imgSources.length);
const randomSrc = imgSources[randomIndex];
const randomImg = document.getElementById('randomImg');
randomImg.src = randomSrc;
randomImg.style.width = '50%';
  
  
  
  