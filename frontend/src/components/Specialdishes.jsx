import { useState } from "react";
import Popup from "./popup"
import Carddish from "./carddish";

function Specialdishes(props){
    const [showPopup, setShowPopup] = useState(false);
    const [selectedDish, setSelectedDish] = useState(null);


    console.log("props are",props.specialmenus);
    function showPopupHandler(menuitem) {
        setSelectedDish(menuitem);
        setShowPopup(true);
    }
    function closePopupHandler() {
        setShowPopup(false);
        setSelectedDish(null);
    }

    let specialmenu = props.specialmenus.map((menuitem,index)=>{
        if(index<6){
            return(
                // <li>
                //     <a href="javaScript:;" onClick={() => showPopupHandler(menuitem)}>
                //     <img src={menuitem.strMealThumb} alt="loading" />
                //     <h4>{menuitem.strMeal}</h4>
                //     </a>
                // </li>
                <Carddish menuitem={menuitem} index={index} showPopupHandler={showPopupHandler} closePopupHandler={closePopupHandler} />
    )
        }
        
    })
    
    return(
        <section className="specialdishes">
            <div className="container">
                <div className="speciadishes-content">
                    <h1>Our Special Dishes</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, ex voluptates! Sed eaque dolor magnam excepturi, explicabo doloremque culpa cumque veritatis aspernatur a voluptates, facere, porro debitis repellat consequuntur eum iusto similique beatae quis earum. Nihil?</p>
                </div>
                <div className="specialdishes-menu">
                    <ul>
                        {specialmenu}
                    </ul>
                </div>
            </div>
            {showPopup && selectedDish && (
                <Popup dish={selectedDish} onClose={closePopupHandler} />
            )}
        </section>
    )
}
export default Specialdishes


// import { useState } from "react";
// import Popup from "./Popup";

// function Specialdishes(props) {
//     const [showPopup, setShowPopup] = useState(false);
//     const [selectedDish, setSelectedDish] = useState(null);

//     console.log("props are", props.specialmenus);

//     function showPopupHandler(menuitem) {
//         setSelectedDish(menuitem);
//         setShowPopup(true);
//     }

//     function closePopupHandler() {
//         setShowPopup(false);
//         setSelectedDish(null);
//     }

//     let specialmenu = props.specialmenus.map((menuitem, index) => {
//         if (index < 6) {
//             return (
//                 <li key={menuitem.idMeal}>
//                     <a href="javascript:;" onClick={() => showPopupHandler(menuitem)}>
//                         <img src={menuitem.strMealThumb} alt="Dish" />
//                         <h4>{menuitem.strMeal}</h4>
//                     </a>
//                 </li>
//             );
//         }
//         // return null;  // ✅ Ensures function always returns something
//     });

//     return (
//         <section className="specialdishes">
//             <div className="container">
//                 <div className="speciadishes-content">
//                     <h1>Our Special Dishes</h1>
//                     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
//                 </div>
//                 <div className="specialdishes-menu">
//                     <ul>
//                         {specialmenu}
//                     </ul>
//                 </div>
//             </div>
            
//             {showPopup && selectedDish && (
//                 <Popup dish={selectedDish} onClose={closePopupHandler} />
//             )}
//         </section>
//     );
// }

// export default Specialdishes;
