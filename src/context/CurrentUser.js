import { createContext, useEffect, useState } from "react";

export const CurrentUser = createContext();

function CurrentUserProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);


    useEffect(() => {
        const getLoggedInUser = async () => {
            let response = await fetch('http://localhost:5000/authentication/profile', {
                credentials: 'include'
            })
            let user = await response.json()
            setCurrentUser(user)
        }
        getLoggedInUser()
    }, [])


    // async function getLoggedInUser() {
    //     const token = localStorage.getItem("token");
    //     if (token) {
    //         const response = await fetch("http://localhost:5000/authentication/profile", {
    //             headers: {
    //                 Authorization: `Bearer ${token}`,
    //             },
    //         });
    //         if (response.ok) {
    //             try {
    //                 const user = await response.json();
    //                 setCurrentUser(user);
    //             } catch (error) {
    //                 console.log('whoops', error)
    //             }
    //         } else {
    //             localStorage.removeItem("token");
    //             setCurrentUser(null);
    //         }
    //     }
    // }

    // useEffect(() => {
    //     getLoggedInUser();
    // }, []);

    return (
        <CurrentUser.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </CurrentUser.Provider>
    );
}

export default CurrentUserProvider;
