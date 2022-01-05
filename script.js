'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const closedModal = function(){
     modal.classList.add('hidden');
    overlay.classList.add('hidden');
    }

const openModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}


for(let i=0; i < btnsOpenModal.length; i++)
    (btnsOpenModal[i].addEventListener('click',openModal));


btnCloseModal.addEventListener('click',closedModal);
overlay.addEventListener('click',closedModal);


document.addEventListener('keydown',function(e){
    if (e.key==='Escape'){
        if(!modal.classList.contains('hidden')){
            closedModal(); 
        }
        
    }
    
})
   




