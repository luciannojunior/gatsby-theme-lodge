import React from 'react'
import Header from '../templates/Header'
import Footer from '../templates/Footer'
import SEO from '../components/SEO'

const Layout = ({ children, pageContext: { title } }) => {
  return (
    <>
      <SEO title={title}/>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
