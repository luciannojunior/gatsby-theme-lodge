import React from 'react'
import Landing from './Landing'
import Cards from './Cards'
import Location from './Location'
import Gallery from './Gallery'

const Home = ({ landing, cards = {}, location = {}, gallery = {} }) => (
  <>
    <Landing {...landing} />
    <Cards {...cards} />
    <Location {...location} />
    <Gallery {...gallery} />
  </>
)

export default Home
