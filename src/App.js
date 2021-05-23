import React, {useState, useEffect} from 'react'
import Header from './components/Header'
import axios from 'axios'
import CharactersGrid from './characters/CharactersGrid'
import Search from './components/Search'
import {toast} from 'react-toastify'
import {ToastContainer} from 'react-toastify'
import { css } from "@emotion/react";

function App() {

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('')

  useEffect(()=>{
    const fetchItems = async() =>{
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}` )
        console.log(result.data)
        toast.success("Breaking Bad")
        setItems(result.data);
        setIsLoading(false)
    }


    fetchItems()
  }, [query]);


  return (
    <div className="app">
      <div className="container">

        <Header/>

        <Search getQuery={(q)=> setQuery (q)} />

        <CharactersGrid isLoading={isLoading} items={items}/>

      </div>

<ToastContainer/>

    </div>

  );
}

export default App;
