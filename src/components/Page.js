import styled from 'styled-components'

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

    a,
    li {
      font-size: 1.5rem;
    }

    img {
      width: 50%;
    }
  }
`

export default Page
