import React from 'react'
import "../css/Search.css"
import { useGlobalContext } from '../contexts/Context';
export default function Search() {
  const {query,searchPost} = useGlobalContext();
  return (
    
    <>
    <h2>
        News API 
    </h2> 
    {/*  */}
    <form action="">
    <input type="search" placeholder="Search Here" value={query} onChange={(e)=>searchPost(e.target.value)}/>
    </form>
    </>
  )
}
