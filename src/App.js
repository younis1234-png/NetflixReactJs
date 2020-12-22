// 4b0d654b6a907f787d7bf934497a0565
import React from "react"
import './App.css';
import Row from "./Components/Row"
import requests from "./requests";
import Banner from "./Components/Banner"
import Nav from "./Components/Nav"


function App() {
  return (
	  <div className="app">
		  {/* <Nav /> */}
		  <Nav />
		  {/* <Banner /> */}
		  <Banner />
		  
     	 	<Row isLargeRow title="NETFLIX ORIGINALS" isLargeRow fetchUrl={requests.fetchNetflixOriginals} />
			<Row title="Trending" fetchUrl={requests.fetchTrending} />
			<Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
			<Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
			<Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
			<Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
			<Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
			<Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />

		</div>
  );
}

export default App;


// npm i axios ==> postman