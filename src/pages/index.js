import * as React from 'react'
import styled from 'styled-components'
import logo from '../images/logo.jpg'

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #3a3a3a;
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
  position: absolute;
  left: 0;
  top: 0;
  font-family: 'Playfair Display', serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  color: white;

  img {
    width: 100%;
    border-bottom: 1px dashed #1e1e1e;
  }

  p {
    color: #bebebe;
    font-size: 1.2rem;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 3rem;
    }

    p {
      font-size: 1.5rem;
    }

    img {
      width: 50%;
    }
  }
`

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 400;
`

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  margin: 40px 0 0 0;
  padding: 20px;
  color: #aeaeae;
  border-top: 1px dashed #1e1e1e;
`

const songs = [
  {
    title: 'My Last Stand'
  },
  {
    title: 'Throught The Ages'
  },
  {
    title: 'The Bar Next Door To Hell'
  },
  {
    title: 'The Gates To The End'
  },
  {
    title: 'Rock And Roll Queen'
  },
  {
    title: 'Quixote'
  },
  {
    title: 'Harbor Peace In Your Heart'
  }
]

const IndexPage = () => {
  return (
    <Page>
      <img alt='Ash And The Invisibles' src={logo} />

      <Title>SONGS</Title>

      {songs.map((song, index) => (
        <p key={song.title}>
          {index + 1}- {song.title}
        </p>
      ))}

      <Footer>© 2024 Ash And The Invisibles</Footer>
    </Page>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
