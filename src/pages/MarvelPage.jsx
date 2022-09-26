import React from 'react'
import ListHeros from '../components/ListHeros'
import NavBar from '../components/NavBar'

ListHeros

const MarvelPage = () => {

  return (
    <>
      <NavBar page={'marvel'} />
      <ListHeros  page={'Marvel Comics'} />
    </>
    
  )
}

export default MarvelPage