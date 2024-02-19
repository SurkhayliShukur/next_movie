import { createContext, useState } from "react";

export const GlobalContext = createContext();

const Provider = ({children}) => {
    const [wishList, setWishList] = useState([])
    const [search,setSearch] = useState("")
    const wishLength = wishList.length;

    const filterMovie = wishList.filter((movie) => {
        return movie.Title.toLowerCase().includes(search.toLowerCase())
    })
    const movieInWishList = (imdbID) => {
        return wishList.find((movie) => movie.imdbID === imdbID)
    }


    const value = {
        wishList,
        setWishList,
        setSearch,
        search,
        wishLength,
        filterMovie,
        movieInWishList
    }
    return(
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}

export default Provider