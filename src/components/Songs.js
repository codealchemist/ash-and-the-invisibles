import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import Title from './Title'
import Lyrics from './Lyrics'
import LangButton from './LangButton'
import songs from '../data/songs'
import getTitleId from '../utils/get-title-id'

export default function Songs () {
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
    </>
  )
}
