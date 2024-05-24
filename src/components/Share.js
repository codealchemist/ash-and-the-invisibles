import React from 'react'
import styled from 'styled-components'
import Title from './Title'
import qrImage from '../images/qr.png'

const QrCode = styled.img`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  display: block;
`

export default function Share () {
  return (
    <>
      <Title>Share with QR</Title>
      <QrCode src={qrImage} alt='QR Code' />
    </>
  )
}
