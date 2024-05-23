import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import logo from '../images/logo.jpg'
import Page from '../components/Page'
import Title from '../components/Title'
import Footer from '../components/Footer'
import LangButton from '../components/LangButton'
import Lyrics from '../components/Lyrics'
import songs from '../data/songs'
import '../global.css'

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
