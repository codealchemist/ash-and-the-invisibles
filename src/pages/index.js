import React from 'react'
import { Helmet } from 'react-helmet'
import logo from '../images/logo.jpg'
import Page from '../components/Page'
import Footer from '../components/Footer'
import Songs from '../components/Songs'
import '../global.css'

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <meta property='og:title' content='Ash And The Invisibles' />
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content='https://ash-and-the-invisibles.netlify.app'
        />
        <meta
          property='og:image'
          content='https://ash-and-the-invisibles.netlify.app/static/logo-b521cc64fdfca0a38c9876f383ff8146.jpg'
        />

        <title>Ash And The Invisibles</title>
      </Helmet>

      <Page>
        <img alt='Ash And The Invisibles' src={logo} />

        <Songs />

        <Footer>© 2024 Ash And The Invisibles</Footer>
      </Page>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
