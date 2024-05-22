import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import logo from '../images/logo.jpg'
import '../global.css'
import myLastStand from '../data/songs/01-my-last-stand'
import throughtTheAges from '../data/songs/02-through-the-ages'
import theBarNextDoorToHell from '../data/songs/03-the-bar-next-door-to-hell'
import theGatesToTheEnd from '../data/songs/04-the-gates-to-the-end'
import rockAndRollQueen from '../data/songs/05-rock-and-roll-queen'
import donQuixote from '../data/songs/06-don-quixote'
import harborPeaceInYourHeart from '../data/songs/07-harbor-peace-in-your-heart'

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
    border-bottom: 1px dashed var(--color-1);
  }

  a {
    display: block;
    color: var(--color-4);
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
  align-items: left;
  margin: 10px 0;
  padding: 30px 20px;
  color: var(--color-3);
  background: var(--color-1);
  font-family: 'Courier Prime', monospace;
  font-weight: 400;
  z-index: 10;
  max-width: 100vw;
  overflow-x: scroll;
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
    font-size: 0.7rem;
  }
`

const LangButton = styled.div`
  position: absolute;
  top: 25px;
  right: 15px;
  font-size: 2.5em;
  border: 1px dashed var(--color-3);
  border-radius: 50%;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    margin: 5px 0 0 0;
  }

  @media (min-width: 768px) {
    font-size: 2.4rem;
  }

  @media (min-width: 360px) {
    font-size: 1.7rem;
  }
`

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  margin: 40px 0 0 0;
  padding: 20px;
  color: var(--color-3);
  border-top: 1px dashed var(--color-1);
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

function getTitleId (title) {
  return title.replaceAll(' ', '-')
}

const IndexPage = () => {
  const [shownSong, setShownSong] = useState(null)
  const [songsLang, setSongsLang] = useState({
    0: 'en',
    1: 'en',
    2: 'en',
    3: 'en',
    4: 'en',
    5: 'en',
    6: 'en'
  })
  const hash =
    typeof window !== 'undefined' ? window.location.hash?.slice(1) || '' : null

  function showHideSong (index) {
    const songIndex = shownSong === index ? null : index
    setShownSong(songIndex)
  }

  function chooseSongLang ({ event, lang, index }) {
    event.stopPropagation()
    setSongsLang({ ...songsLang, [index]: lang })
  }

  const esLyrics = ({ song, index }) => (
    <Lyrics onClick={() => showHideSong(index)}>
      <LangButton
        onClick={event => chooseSongLang({ event, lang: 'en', index })}
      >
        <p>🇺🇸</p>
      </LangButton>
      {song.lyrics.es}
    </Lyrics>
  )

  const enLyrics = ({ song, index }) => (
    <Lyrics onClick={() => showHideSong(index)}>
      <LangButton
        onClick={event => chooseSongLang({ event, lang: 'es', index })}
      >
        <p>🇦🇷</p>
      </LangButton>
      {song.lyrics.en}
    </Lyrics>
  )

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
          <React.Fragment key={getTitleId(song.title)}>
            <Link
              to={`#${getTitleId(song.title)}`}
              onClick={() => showHideSong(index)}
            >
              {index + 1}- {song.title}
            </Link>

            {shownSong === index &&
              songsLang[index] === 'en' &&
              enLyrics({ song, index })}

            {shownSong === index &&
              songsLang[index] === 'es' &&
              esLyrics({ song, index })}
          </React.Fragment>
        ))}

        <Footer>© 2024 Ash And The Invisibles</Footer>
      </Page>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
