import styled from 'styled-components'

const Lyrics = styled.pre`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: left;
  margin: 10px 0;
  padding: 30px 20px;
  color: var(--color-3);
  background: var(--color-1);
  z-index: 10;
  max-width: 100vw;
  overflow-x: scroll;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  font-family: 'Courier Prime', monospace;
  font-weight: 400;

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

  @media (min-width: 360px) {
    font-size: 0.7rem;
  }

  @media (min-width: 768px) {
    font-size: 0.9rem;
  }

  @media (min-width: 800px) {
    font-size: 1rem;
  }
`

export default Lyrics
