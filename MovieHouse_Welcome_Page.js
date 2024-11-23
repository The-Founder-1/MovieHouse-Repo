'use strict'
const body_Tag = document.body;
const First_Input_Tab = document.querySelector('input');
const Second_Input_Tab = document.getElementById('enterBtn')
const warning_Information_for_empty_tab = document.querySelector('.warning-Information-for-empty-tab');
const Not_Found_Information = document.querySelector('.Not-Found-Information');
const Searched_Movie = document.querySelector('.Searched-Movie');

const link = document.location.href;



const DisplayOutWarningInfo =()=>{
    setTimeout(()=>{
        warning_Information_for_empty_tab.classList.remove('display-ON')
        warning_Information_for_empty_tab.classList.add('display-none')
    },2000)
}
const getInputValueWarning =()=>{
    if(First_Input_Tab.value.length < 1){
        warning_Information_for_empty_tab.classList.remove('display-none')
        warning_Information_for_empty_tab.classList.add('display-ON')
        DisplayOutWarningInfo()
    }
}

const getCorrectValueInputed = () =>{
    Searched_Movie.classList.remove('display-none')
    Searched_Movie.classList.add('display-ON')
    console.log(link)
  }  

const getValuedInputValue =()=>{
    if(First_Input_Tab.value.length > 1){
      console.log('Hello world...')  
      getCorrectValueInputed()   
    }
    }

const getWrongInputValue =()=>{
        if(typeof First_Input_Tab.value !== 'string'){
            Not_Found_Information.classList.remove('display-none')
            Not_Found_Information.classList.add('display-ON')
     }
    }


Second_Input_Tab.addEventListener('click',()=>{
 getInputValueWarning();
getValuedInputValue()
 getWrongInputValue()
    
})