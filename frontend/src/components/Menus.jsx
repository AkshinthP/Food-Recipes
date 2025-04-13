import React, { useState, useEffect } from "react"
import Hero from "./Hero"
import Specialdishes from "./specialdishes"
import Filtereddishes from "./Filtereddishes"

function Menus(){

    const [menu,setMenu]=useState([])
    const [filterdish,setFilterdish]=useState([])
    const [loading,setloading]=useState(true)

    const getAllTheMenus = async ()=>{
        const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=c"
        const response = await fetch(API_URL)
        let data = await response.json()
        setMenu(data.meals)
        setloading(false)
        // console.log(data);
    }
    

    const getFilterdish = async ()=>{
        const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php"
        const response = await fetch(API_URL)
        let data = await response.json()
        setFilterdish(data.categories)
        // console.log("filtered",data.categories);
    } 

    useEffect(()=>{
        getAllTheMenus()
        getFilterdish()
    
    }, [])
    // console.log("this is menu",menu);
    // let menuimage = menu.map((item)=>{
    //     console.log(item.strCategory);
    //     return(
    //         <div>
    //             <h1>{item.strCategory}</h1>
    //             <img src={item.strMealThumb} alt="" />
    //         </div>
    //     )
        
    // })

    return(
        <div>
            {/* <h1>welcome</h1>
            <h1>{menuimage}</h1> */}
            <Hero/>
            {!loading ? (
                 <>
                    <Specialdishes specialmenus={menu} />
                     <Filtereddishes allMenus={menu} filterdishes={filterdish} />
                </>
             ) : (
                    <h1>Loading...</h1>
                )}  
        </div>
    )
}
export default Menus

// import React, { useState, useEffect } from "react";
// import Hero from "./Hero";
// import Specialdishes from "./specialdishes";
// import Filtereddishes from "./Filtereddishes";

// function Menus() {
//   const [menu, setMenu] = useState([]);
//   const [filterdish, setFilterdish] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetching all menu items
//   const getAllTheMenus = async () => {
//     const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=a";
//     const response = await fetch(API_URL);
//     let data = await response.json();
//     setMenu(data.meals);
//     setLoading(false);
//   };

//   // Fetching filter categories
//   const getFilterdish = async () => {
//     const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php";
//     const response = await fetch(API_URL);
//     let data = await response.json();
//     setFilterdish(data.categories);
//   };

//   // Load data when component mounts
//   useEffect(() => {
//     getAllTheMenus();
//     getFilterdish();
//   }, []);

//   return (
//     <div>
//       <Hero />
//       {!loading ? (
//         <>
//           <Specialdishes specialmenus={menu} />
//           <Filtereddishes allMenus={menu} filterdishes={filterdish} />
//         </>
//       ) : (
//         <h1>Loading...</h1>
//       )}
//     </div>
//   );
// }

// export default Menus;
