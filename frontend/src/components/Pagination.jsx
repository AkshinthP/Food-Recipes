import React, { useState } from 'react'

function Pagination(props) {

    let numberofpages=[]
    for(let i=1;i<=Math.ceil(props.filterhandlerdish.length/props.itemperpage);i++){
        numberofpages.push(i)
    }

    function shownextdisheshandler(event){
        let currentpage=event.target.id
        props.setcurrentpage(currentpage)
    }
    let pages= numberofpages.map((item)=>{
        return(
            <li 
            className={props.currentpage == item ? "active" : ""}
            id={item} onClick={shownextdisheshandler}>{item}
            </li>
        )
    })
    
    
  return (
    <div className='center'>
        <div className='pagination'>
            <ul>{pages}</ul>
        </div>
    </div>
  )
}
export default Pagination 
