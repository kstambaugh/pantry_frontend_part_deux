import React, { useContext, useEffect, useState } from "react";
import { CurrentUser } from "../context/CurrentUser";
import NewIngredientItem from "../components/newIngredient";


export default function Ingredients() {

    const [userIngredients, setUserIngredients] = useState([])
    const { currentUser } = useContext(CurrentUser)


    // useEffect(() => {
    //     async function fetchData() {
    //         console.log('currentUser', currentUser)
    //         const userId = ''
    //         const response = await fetch(`http://localhost:5000/ingredients?id=${userId}`);
    //         const data = await response.json();
    //         setUserIngredients(data);
    //     }
    //     fetchData()
    // }, [])

    // const UserIngredientList = () => {
    //     userIngredients.map((item, index) => {
    //         return (
    //             <li key={index}>{item}</li>
    //         )
    //     })

    // }

    useEffect(() => {
        if (currentUser != null) {
            let id = currentUser.user_id
            const getUserIngredients = async () => {
                let response = await fetch(`http://localhost:5000/ingredients?=${id}`, {
                    method: 'GET'
                })
                if (response.ok) {
                    let data = response.json()
                    setUserIngredients(data)
                    console.log('okay response', data)
                } else {
                    console.log('else response')
                }

            }
            getUserIngredients()
        }

    }, [])

    if (currentUser) {
        return (
            <div>
                <h1>Ingredients</h1>
                <NewIngredientItem />
                <div>

                </div>




            </div>
        )
    } else {
        return (
            <h1>Please Login To Use This Feature</h1>

        )
    }
}