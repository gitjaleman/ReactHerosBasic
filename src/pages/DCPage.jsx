import React from 'react'
import ListHeros from '../components/ListHeros'
import NavBar from '../components/NavBar'

const DCPage = () => {
  return (
    <>
      <NavBar page={'dc'} />
      <ListHeros  page={'DC Comics'} />
    </>
  )
}

export default DCPage