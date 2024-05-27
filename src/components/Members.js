import React from 'react'
import Title from './Title'
import List from './List'

export default function Members ({ size }) {
  return (
    <>
      <Title>MEMBERS</Title>

      <List size={size}>
        <li>
          <b>Ash</b>: Lead vocals
        </li>
        <li>
          <b>Gastón Rodríguez</b>: Guitar, backing vocals
        </li>
        <li>
          <b>El "Cholo" Miranda</b>: Guitar
        </li>
        <li>
          <b>Eric Leiva</b>: Bass guitars, backing vocals
        </li>
        <li>
          <b>Fede Cerdeira</b>: Keyboards
        </li>
        <li>
          <b>Marra</b>: Drums
        </li>
      </List>
    </>
  )
}
