import { useState } from "react"
// import React{useState} from 'react'

function Carddish(props) {
  return (
    <div>
      <li>
        <a href="javaScript:;" onClick={() => props.showPopupHandler(props.menuitem)}>
        <img src={props.menuitem.strMealThumb} alt="loading" />
        <h4>{props.menuitem.strMeal}</h4>
        </a>
    </li>
    </div>
  )
}

export default Carddish
