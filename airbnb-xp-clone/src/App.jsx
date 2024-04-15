import { useState } from 'react'
import './App.css'
import data from './data.js'
import Header from './components/Header'
import Panel from './components/Panel'
import Card from './components/Card'


function App() {
  
  const cards = data.map(d => {
    return <Card key={d.id} {...d} />
  } )

  return (
    <>
      <Header />
      <Panel />
      <section className='carousel'>
        {cards}
      </section>
    </>
  )
}

export default App