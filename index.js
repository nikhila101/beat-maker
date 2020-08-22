window.addEventListener('load', () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector('.visual');
  const colors = [
     "#C70039",
     "#FFC300",
     "#AAE018",
     "#18E0CD",
     "#104DDF",
     "#6005B9"
  ];


 //sound
 pads.forEach((pad, index) => {
   pad.addEventListener('click', function(){
     sounds[index].currentTime = 0;
     sounds[index].play();

     createBubbles(index);
   });
 });

//create func to make bubbles
const createBubbles = (index) => {
  const bubble = document.createElement("div");
  visual.appendChild(bubble);
  bubble.style.backgroundColor = colors[index];
  bubble.style.animation = "jump 2s ease";
  bubble.addEventListener('animationend', function(){
    visual.removeChild(this);
  });
};

});
