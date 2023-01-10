import './App.css';
import React from 'react';
import Card from './components/Card';

//api key = a605339c

const API_URL = 'https://www.omdbapi.com?apikey=a605339c'
function App() {

  //storing movies in movie array
  const[movies,setMovies] = React.useState([]);

  const[usertext,setusertext] = React.useState("Aveng");
  //searched movies will be fetched from api and data will be stored in movies array
  const searchMovies = async(movieName) =>{
    const response = await fetch(`${API_URL}&s=${movieName}`)
    const data = await response.json();
    
    setMovies(data.Search);
    // console.log(data.Search);
  }

  //using useeffect to call searchmovies once page loads
  React.useEffect(()=>{
    searchMovies(usertext)
  },[usertext])

  function handleChange(event){
    setusertext(event.target.value)
    console.log(usertext)
  }


  return (
    <div className="App">
      {/* <h1 className='header'>Netflix</h1> */}
      <img src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo-500x281.png" className='netflix-logo'/>
      <input type="text" 
             className='search_bar' 
             placeholder='Search for movies'
             onChange={handleChange}
             value={usertext}       
      />
      {/* <button onClick={changeSearch}>Search</button> */}

        {movies?.length > 0 ? 
          <div className='movie_cards'>
            {movies.map(movie=>(
            <Card key = {movie.imdbID}
                imgUrl={movie.Poster}
                type = {movie.Type}
                title = {movie.Title}
                year = {movie.Year}   
                />
              
            ))}
          </div>
        :
        
        <div className='no_movies'>
            <p>No Movies Found !</p>
            {/* {console.log("no movies found")} */}
        </div>
          
      }

      
    </div>
  );
}

export default App;
