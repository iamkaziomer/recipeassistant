import React from 'react'
import Popular from '../components/Popular'
import Veggies from '../components/Veggies'
import Categories from '../components/Categories'

function Home() {
  return (
    <div>
        <Categories/>
        <Popular/>
        <Veggies/>
    </div>
    
  )
}

export default Home