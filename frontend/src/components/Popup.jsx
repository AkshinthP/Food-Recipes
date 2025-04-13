// import React from 'react'

// function Popup() {
//   return (
//     <div className='popupmain'>
//       <div>

//       </div>
//     </div>
//     // <alert>hello</alert>
//   )
// }

// export default Popup


import React from 'react'

function Popup({ dish, onClose }) {
  return (
      <div className="popup-overlay">
          <div className="popup-content">
              <button className="close-btn" onClick={onClose}>X</button>
              <img src={dish.strMealThumb} alt={dish.strMeal} />
              <h2>{dish.strMeal}</h2>
              <button className='popupbutton'>ordernow</button>
              {/* <p>{dish.strInstructions || "Delicious dish details will be shown here."}</p> */}
          </div>
      </div>
  );
}
export default Popup
