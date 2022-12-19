// import { useState } from "react"

// export default function ItemButtons(itemData) {

//     const [direction, setDirection] = useState({
//         inPantry: ' ',
//         inGrocery: ' '
//     })


//     const handleClick = async (e) => {
//         let title = e.target.id;
//         let ingr_id = itemData.value.ingr_id;
//         console.log(title)

//         // Update the state first
//         switch (title) {
//             case 'Pantry':
//                 setDirection({
//                     inPantry: true,
//                     inGrocery: false,
//                 });
//             case 'Grocery':
//                 setDirection({
//                     inPantry: false,
//                     inGrocery: true,
//                 });

//         }

//         // if (title == "Pantry") {
//         //     setDirection({
//         //         inPantry: true,
//         //         inGrocery: false,
//         //     });
//         // } else if (title == "Grocery") {
//         //     setDirection({
//         //         inPantry: false,
//         //         inGrocery: true,
//         //     });
//         // } else {
//         //     return console.log("no title", title == "Pantry");
//         // }

//         try {
//             const response = await fetch(
//                 `http://localhost:5000/ingredients/${ingr_id}`,
//                 {
//                     method: "PUT",
//                     credentials: "include",
//                     mode: "cors",
//                     headers: {
//                         "Content-Type": "application/json"
//                     },
//                     body: JSON.stringify(direction)
//                 }
//             );
//             setDirection('')
//             const data = await response.json();
//             console.log(data);
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     return (
//         <div>
//             <button id="Pantry" onClick={handleClick}>Pantry</button>
//             <button id="Grocery" onClick={handleClick}>Grocery</button>
//             <button>Delete</button>
//         </div>
//     )
// }


