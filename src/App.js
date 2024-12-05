import React, { useState, useEffect } from "react";
import axios from "axios"; 

const API_KEY = "7802a828c7afbfb178b2eec0cf3d8396"
const API_URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`



function App() {

const [movies,setMovie] = useState([])
const [focusedIndex, setFocusedIndex] = useState(0)
const [error, setError] = useState(null); // State to handle errors

//fetching app
useEffect(()=>{
  axios.get(API_URL).then((response)=>{
    setMovie(response.data.results)
  })
  .catch((error)=>console.error("Appologise! Problem displaying movies",error))
},[])

//handle arrow key navigation fortv remotes
const handleKeyPass = (e) =>{
    if (movies.length === 0 ) return; // prevent navigation if lists ends

  if (e.key === "ArrowDown") {
    setFocusedIndex((prev)=>(prev+1)%movies.length)
  } else if(e.key === "ArrowUp"){
    setFocusedIndex((prev)=>(prev-1+movies.length)%movies.length)
  } else if (e.key === "Enter"){
    alert(`Selected:${movies[focusedIndex]?.title}`)
  }
}

useEffect(()=>{
  window.addEventListener("keydown",handleKeyPass)
  return () =>{
    window.removeEventListener("keydown",handleKeyPass)
  }
},[movies,focusedIndex])

  return (
    <div style={{ backgroundColor: "#000", color: "#fff", padding: "20px" }} >
      <h1 style={{ textAlign: "center" }}>Trending Movies</h1>
        {movies.length === 0 ? (
          <p>Loading </p>
        ):(
          movies.map((movie,index)=>(
            <div
              key={movie.id}
              style={{
                padding: "10px",
                margin: "10px 0",
                backgroundColor: focusedIndex === index ? "#00f" : "#444",
                color: focusedIndex === index ? "#fff" : "#ccc",
                textAlign: "center",
                borderRadius: "5px",
              }}
            >

          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={`${movie.title} Poster`}
                  style={{ width: "100%", maxWidth: "200px", borderRadius: "5px" }}
          />
              <p>{movie.title}</p>  
          </div>
          ))

        )}
    </div>
  );
}

export default App;
