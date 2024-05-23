import styled from 'styled-components'

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

export default LangButton
