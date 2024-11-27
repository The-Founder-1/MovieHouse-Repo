const MovieName = new URLSearchParams(window.location.search).get('MovieName')

const renderDetails = async () =>{
   const res = await fetch(`https://www.movieTDB.com/movies/${MovieName}`);
   const JsonData = await res.json()
   console.log(JsonData)
}

window.addEventListener('DOMContentLoaded',()=> renderDetails())
