import React, { useState } from 'react'
import './home.css'
import { nurbek } from './data/index1'
import { Link } from 'react-router-dom'

function Home() {

  return (

    <div>
      <div><h1>Биздин бүлөө</h1><hr/>
    <table>
        <thead>
            <tr><th colSpan={6}>Байназаровтор</th></tr>
          <tr>
            <th>№</th>
            <th>Аты</th>
            <th>Бүлөөдө ким</th>
            <th>Жашоодoгу орду</th>
            <th>Туулган жылы</th>
            <th>Туулган күнү</th>
          </tr>
        </thead>
        <tbody>
          {nurbek.map((person, index) => (
            <tr key={person.id}>
              <td>{index +1}</td>
              <td>
                <Link to={`/service/${person.id}`}>{person.name}</Link>
              </td>
              <td>{person.kim}</td>
              <td>{person.jash}</td>
              <td>{person.year}</td>
              <td>{person.kun}</td>
            </tr>
          )
        )}
          
        </tbody>
    </table>
    <hr />
      </div>

    </div>
  )
}

export default Home
