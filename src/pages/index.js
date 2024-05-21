import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import logo from '../images/logo.jpg'
import '../global.css'
import {
  myLastStand,
  throughtTheAges,
  theBarNextDoorToHell,
  theGatesToTheEnd,
  rockAndRollQueen,
  donQuixote,
  harborPeaceInYourHeart
} from '../data/songs'

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

  a {
    display: block;
    color: #bebebe;
    font-size: 1.2rem;
    padding: 10px 0;
    text-decoration: none;

    &:hover {
      color: white;
    }
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 3rem;
    }

    a {
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

const Lyrics = styled.pre`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
  padding: 30px 20px;
  color: #aeaeae;
  background: #1e1e1e;
  font-family: 'Courier Prime', monospace;
  font-weight: 400;
  z-index: 10;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);

  // Custom borders.
  --mask: conic-gradient(
        from 135deg at top,
        #0000,
        #000 1deg 89deg,
        #0000 90deg
      )
      top/30px 51% repeat-x,
    conic-gradient(from -45deg at bottom, #0000, #000 1deg 89deg, #0000 90deg)
      bottom/30px 51% repeat-x;
  -webkit-mask: var(--mask);
  mask: var(--mask);

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }

  @media (min-width: 360px) {
    font-size: 0.9rem;
  }
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
    title: 'My Last Stand',
    lyrics: myLastStand
  },
  {
    title: 'Throught The Ages',
    lyrics: throughtTheAges
  },
  {
    title: 'The Bar Next Door To Hell',
    lyrics: theBarNextDoorToHell
  },
  {
    title: 'The Gates To The End',
    lyrics: theGatesToTheEnd
  },
  {
    title: 'Rock And Roll Queen',
    lyrics: rockAndRollQueen
  },
  {
    title: 'Don Quixote',
    lyrics: donQuixote
  },
  {
    title: 'Harbor Peace In Your Heart',
    lyrics: harborPeaceInYourHeart
  }
]

const IndexPage = () => {
  const [shownSong, setShownSong] = useState(null)
  const hash = window.location.hash?.slice(1) || ''

  function showHideSong (index) {
    const songIndex = shownSong === index ? null : index
    setShownSong(songIndex)
  }

  useEffect(() => {
    if (hash) {
      const index = songs.findIndex(
        song => song.title.replaceAll(' ', '-') === hash
      )
      if (index !== -1) {
        setShownSong(index)
      }
    }
  }, [hash])

  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Ash And The Invisibles</title>
      </Helmet>

      <Page>
        <img alt='Ash And The Invisibles' src={logo} />

        <Title>SONGS</Title>

        {songs.map((song, index) => (
          <>
            <Link
              to={`#${song.title.replaceAll(' ', '-')}`}
              onClick={() => showHideSong(index)}
            >
              {index + 1}- {song.title}
            </Link>

            {shownSong === index && (
              <Lyrics onClick={() => showHideSong(index)}>{song.lyrics}</Lyrics>
            )}
          </>
        ))}

        <Footer>© 2024 Ash And The Invisibles</Footer>
      </Page>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
