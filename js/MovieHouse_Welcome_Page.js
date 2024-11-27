'use strict'
const body_Tag = document.body;
const First_Input_Tab = document.querySelector('input');
const Second_Input_Tab = document.getElementById('enterBtn')
const warning_Information_for_empty_tab = document.querySelector('.warning-Information-for-empty-tab');
const Not_Found_Information = document.querySelector('.Not-Found-Information');
const Searched_Movie = document.querySelector('.Searched-Movie');
const Table_Tag = document.getElementsByTagName('Table')[0]
const loader_effect = document.getElementsByTagName('div')[0]
const MovieName = First_Input_Tab.value;


const API = `https://dummyjson.com/users/${Math.floor(Math.random()* 30)+ 1}`;
const URL = `https://api.themoviedb.org/3/movie/157336?api_key=78ca8b749dc700ad76bafa2b68f8054f&append_to_response=MovieName`
console.log(URL)
// const APIKEY = process.env.APIKEY;
// console.log(APIKEY)
  
const getInformation = async (Method,API) =>{
  const  xhr =  new XMLHttpRequest()

  xhr.open(Method,API)
  try{

    xhr.responseType = 'json'

     xhr.onreadystatechange =()=>{

     if(xhr.status ===  204 || xhr.readyState === 1 && 2 ){
loader_effect.style.display = 'block';
console.log('loading...')
     } 
     if(typeof MovieName === 'string'){
    if(xhr.readyState === 4 && xhr.status === 200 ){

      loader_effect.classList.remove('display-ON')
      loader_effect.classList.add('display-none')
    
      const UserData = xhr.response;
      const FullName = UserData.firstName || UserData.lastName || UserData.maidenName;

        let htmlTemplate = `
        <thead>
          <tr>
          <th>
             Movie Picture 
          </th>
          <th>Name of Movie</th>
          <th>Download </th>
          </tr>
       </thead>
        <tbody>
           <tr>
             <td>
             <img src="https://image.tmdb.org/t/p/w500/${UserData.image}" alt="">
            </td>
           <td>
             ${FullName}
          </td>
          <td>
           <button><a href="MovieHouse_Download_Page.html">Download</a></button>
         </td>
          </tr>
       </tbody>                                                                                                                                                                                                                    
       `
       document.getElementsByTagName('table')[0].innerHTML = htmlTemplate;
        
        }

    if(xhr.status === 404){
         Not_Found_Information.classList.remove('display-none')
         Not_Found_Information.classList.add('display-ON') 
     }
    
     } 
    }

} catch(error){
  if(xhr.status === 504){
    console.log('Server Problem')
   }
   if(typeof MovieName !== 'string'){

    Not_Found_Information.classList.remove('display-none')
    Not_Found_Information.classList.add('display-ON') 
  
    setTimeout(()=>{
      Not_Found_Information.classList.add('display-none')
      Not_Found_Information.classList.remove('display-ON') 
    },2000)
   }
}
 xhr.send()
    
    }
    getInformation('GET',API)


    Second_Input_Tab.addEventListener('click',()=>{
      getInformation('GET',API)
    })