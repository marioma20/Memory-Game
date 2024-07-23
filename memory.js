// name of game 
let namegame = 'Memory Game';
document.title = namegame;

// when click on button click heeding splash
document.querySelector('.container-button span').onclick = function(){

    let nameofperson = prompt('what sure name ?');

    if(nameofperson==null || nameofperson==""){

        document.querySelector('.name span').innerHTML = 'NotFound';

    }else{

        document.querySelector('.name span').innerHTML = nameofperson;
    }
    document.querySelector('.container-button').remove();
}

let duration = 1000;
let containerblock = document.querySelector('.memory-blocks');
// console.log(containerblock);
let blocks = Array.from(containerblock.children);
// console.log(blocks);

 
let rangeindex = [...Array(blocks.length).keys()];
// console.log(rangeindex);
// let range = Array.from(Array(blocks.length).keys());
// console.log(range);
 shafile(rangeindex);
  console.log(rangeindex);

blocks.forEach((block, index) =>{

    block.style.order = rangeindex[index];
    // console.log(index);

    block.addEventListener('click', function(){
        // console.log(block);
        flipfunction(block);
    });
})
function flipfunction(selectedblock){
    selectedblock.classList.add('is-fllibed');
    let allfliped = blocks.filter((block) => (block.classList.contains('is-fllibed')));
    // console.log(allfliped);
    if(allfliped.length === 2){
        
        stop();

        //  check(allfliped[0], allfliped[1]);
        check(allfliped[0],allfliped[1]);
    }
}
function check(fristblock,secondblock){
    let wrongtry = document.querySelector('.try span');
     
    if(fristblock.dataset.technology === secondblock.dataset.technology){
          
        fristblock.classList.remove('is-fllibed');
        secondblock.classList.remove('is-fllibed');

        fristblock.classList.add('has-match');
        secondblock.classList.add('has-match');

        document.getElementById('sucess').play();
        // console.log('has match');
    }else{

         wrongtry.innerHTML = parseInt(wrongtry.innerHTML) + 1;

        setTimeout(() =>{
            
            fristblock.classList.remove('is-fllibed');
            secondblock.classList.remove('is-fllibed');
            // console.log('no');

        }, duration);
        document.getElementById('fail').play();
    }
}

function stop(){

    containerblock.classList.add('no-clicking');

    setTimeout(() =>{
        containerblock.classList.remove('no-clicking');
    }, duration);
}
function shafile(array){

    let current = array.length;
    let temp, random;
    while(current > 0){
      random = Math.floor(Math.random() * current);
    //   console.log(random);
    current--;

    temp = array[current];
    array[current] = array[random];
    array[random] = temp;

      
    }
   return array;
}

