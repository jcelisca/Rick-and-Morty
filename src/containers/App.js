import { Fragment, useEffect, useState } from "react";
import Navbar from "../components/navegation/Navbar";
import Characters from "../components/data/Characters";
import Pagination from "../components/navegation/Pagination";


function App() {

  const [characters, setCharacters] = useState([]);
  const initialUrl = "https://rickandmortyapi.com/api/character";

  const fetCharacters = (url) =>{
    fetch(url)
    .then(response => response.json())
    .then(data =>setCharacters(data.results))
    .then(error => console.log(error))
  };

  useEffect(()=>{
    fetCharacters(initialUrl);
  },[])

  return (
    <Fragment>
      <Navbar/>
      <Pagination/>
      <Characters personaje={characters}/>
   </Fragment>
  );
}

export default App;
