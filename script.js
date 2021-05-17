const numberElement = document.querySelector('.number');
const button = document.querySelector('button');



function RandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


function changeNumber(){

  button.disabled = true;

  numberElement.innerHTML ='*';
  function addStar(){
    numberElement.innerHTML +='*';
  }
  
  for (let i = 1000; i <= 4000; i+=1000){
    setTimeout(addStar, i);
  }
    

  function change(){
    numberElement.innerHTML = RandomInt (0, 101);
    button.disabled = false;
  }
  setTimeout(change, 5000);

  
  
}













