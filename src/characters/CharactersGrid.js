import React from 'react'
import CharacterItem from './CharacterItem'
import { css } from "@emotion/react";
import SyncLoader from "react-spinners/SyncLoader";



const CharactersGrid = ({items, isLoading}) =>{
    return isLoading ? (<h1>Loading...</h1>) : (<section className="cards">
    {items.map(item => (
        <CharacterItem key={item.char_id} className="text-white" item={item}> </CharacterItem>
    ) )}
    </section>)
};

export default CharactersGrid