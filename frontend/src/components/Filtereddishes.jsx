import React, { useState } from 'react'
import Pagination from './Pagination';
import Carddish from './carddish';

function Filtereddishes(props) {
    console.log("props",props.filterdishes);
    let[allMenus,setAllMenus]=useState(props.allMenus)
    let[filterhandlerdish,setfilterhandlerdish]=useState([])
    let[activedish,setactivedish]=useState()
    let[currentpage,setcurrentpage]=useState(1)
    let[itemperpage,setitemperpage]=useState(5)

    let indexoflastdish=currentpage*itemperpage
    let indexoffirstdish=indexoflastdish-itemperpage

    let showthesedishes=filterhandlerdish.slice(indexoffirstdish,indexoflastdish)

    let filterhandler=((category)=>{
      setactivedish(category)
      console.log(category);
      let filterhandlerdishare = allMenus.filter((item)=>{
        return (
          item.strCategory===category
        )
      }).map((menuitem,index)=>{
        if (index<20){
          return(
            <li>
              <img src={menuitem.strMealThumb} alt="" />
              <h5>{menuitem.strMeal}</h5>
            </li>
            // <Carddish menuitem={menuitem} />
          )
        }
        
      }) 
      setfilterhandlerdish(filterhandlerdishare)
      
    })
    

    let filtercatogary= props.filterdishes.map((item)=>{
        return(
            <div>
                <li className={item.strCategory== activedish ? "active" :""} onClick={()=>{filterhandler(item.strCategory)}}>
                    {item.strCategory}
                </li>
            </div>
        )
    })
    
  return (
    <div className='filterdish'>
      <div className='filterbox'>
        <div className="filter-text">
            <h1>chose your dish</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque corporis iusto maxime consectetur maiores non cumque.</p>
        </div>
        <div className="filter-dish">
            <ul>
                {filtercatogary}
            </ul>
        </div>
        <div className='filterhandlerclass'>
          <ul>
            {/* {filterhandlerdish !=0 ? filterhandlerdish : 
            <div className='sorrybox'>
              <h3>Sorry, No item found</h3>
              <h4>Please choose another menu</h4>
              </div> } */}
              {filterhandlerdish.length > 0 ? (showthesedishes) : activedish ? (
                  <div className='sorrybox'>
                    <h3>Sorry, No item found</h3>
                    <h4>Please choose another menu</h4>
                  </div>
          ) : null }
            {/* {filterhandlerdish} */}
          </ul>
        </div>
        <Pagination 
        filterhandlerdish={filterhandlerdish}
        itemperpage={itemperpage}
        currentpage={currentpage}
        setcurrentpage={setcurrentpage}
        />
      </div>
    </div>
  )
}

export default Filtereddishes


// import React, { useState } from 'react';

// function Filtereddishes(props) {
//   let [allMenus, setAllMenus] = useState(props.allMenus);
//   let [filteredDishes, setFilteredDishes] = useState([]); // Set filtered data here

//   const filterHandler = (category) => {
//     // Filter based on category
//     let filteredDishesArray = allMenus.filter((item) => item.strCategory === category);
//     setFilteredDishes(filteredDishesArray); // Set filtered array to state
//   };

//   // Render category list
//   let filterCategory = props.filterdishes.map((item) => {
//     return (
//       <div key={item.strCategory}>
//         <li onClick={() => filterHandler(item.strCategory)}>
//           {item.strCategory}
//         </li>
//       </div>
//     );
//   });

//   // Render filtered dishes
//   let renderedDishes = filteredDishes.map((item) => {
//     return (
//       <li key={item.idMeal}>
//         <img src={item.strMealThumb} alt={item.strMeal} />
//         <h2>{item.strMeal}</h2>
//       </li>
//     );
//   });

//   return (
//     <div className='filterdish'>
//       <div className='filterbox'>
//         <div className="filter-text">
//           <h1>Choose Your Dish</h1>
//           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque corporis iusto maxime consectetur maiores non cumque.</p>
//         </div>
//         <div className="filter-dish">
//           <ul>
//             {filterCategory}
//           </ul>
//         </div>
//         <div>
//           <ul>
//             {renderedDishes}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Filtereddishes;



// import React, { useState } from 'react'

// function Filtereddishes(props) {
//     console.log("props",props.filterdishes);
//     let[allMenus,setAllMenus]=useState(props.allMenus)
//     let[filterhandlerdish,setfilterhandlerdish]=useState([])
//     let[activedish,setactivedish]=useState()

//     let filterhandler=((category)=>{
//       setactivedish(category)
//       console.log(category);
//       let filterhandlerdishare = allMenus.filter((item)=>{
//         return (
//           item.strCategory===category
//         )
//       }).map((item,index)=>{
//         if (index<10){
//           return(
//             <li>
//               <img src={item.strMealThumb} alt="" />
//               <h5>{item.strMeal}</h5>
//             </li>
//           )
//         }
        
//       })
//       setfilterhandlerdish(filterhandlerdishare)
      
//     })
    

//     let filtercatogary= props.filterdishes.map((item)=>{
//         return(
//             <div>
//                 <li className={item.strCategory== activedish ? "active" :""} onClick={()=>{filterhandler(item.strCategory)}}>
//                     {item.strCategory}
//                 </li>
//             </div>
//         )
//     })
    
//   return (
//     <div className='filterdish'>
//       <div className='filterbox'>
//         <div className="filter-text">
//             <h1>chose your dish</h1>
//             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque corporis iusto maxime consectetur maiores non cumque.</p>
//         </div>
//         <div className="filter-dish">
//             <ul>
//                 {filtercatogary}
//             </ul>
//         </div>
//         <div className='filterhandlerclass'>
//           <ul>
//           {filterhandlerdish.length > 0 ? (filterhandlerdish) : activedish ? (
//             <div className='sorrybox'>
//               <h3>Sorry, No item found</h3>
//               <h4>Please choose another menu</h4>
//             </div>
//           ) : null }



//             {/* {filterhandlerdish} */}
//           </ul>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Filtereddishes
