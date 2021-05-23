import React, {useState} from 'react'
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

const Search = ({getQuery})=>{

    const [text, setText] = useState('');
    const onChange = (q) =>{
        toast.dark("Topildi");
        setText(q);
        getQuery(q)
    }

    return(
        <section className="search">
            <form>
                <input type="text" value={text} onChange={(e)=> onChange(e.target.value)} className="form-control" placeholder="Search Actors" autoFocus/>
            </form>
        </section>
    )
};
export default Search