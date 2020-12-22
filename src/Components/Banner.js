import React, {useState, useEffect} from 'react'
import axios from "../axios"
import requests from "../requests"
import "./Banner.css"

function Banner() {

    const [movie, setMovie] = useState([])

    // use effect run on certain conditions
    useEffect(() => {

    async function fetchData() {

        const request = await axios.get(requests.fetchNetflixOriginals);
        // set it as the movie
      setMovie(
        request.data.results[
        Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      // Math.floor(Math.random() * request.data.results.length -1)
      return request;
    }
    fetchData();
    }, []);
    console.log(movie)

    // Add .... after certain length with the description
     function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

    return (
        <header className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
        "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
        backgroundPosition: "center center"
      }}> {/* Background img */}
            
            <div className="banner_contents">
                {/* titile */}  
                <h1 className="banner_title">
                    {/* if title dosnt exit go to name if name dosn't exit go... */}
                     {movie?.title || movie?.name || movie?.original_name}
                 </h1>

                {/* Div 2 button */}
                <div className="banner_btns">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My list</button>
                </div>

                {/* Descrption */}
                 <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>

            </div>

            {/* our empty div */}
            <div className="banner--fadeBottom" />
            
        </header>
    )
}

export default Banner
