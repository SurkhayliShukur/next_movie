import { createContext, useContext, useState } from "react";

const GlobalContext = createContext

const GlobalContextProvider = ({ children }) => {
    const [wishlist, setWishList] = useState([])
    const [search, setSerach] = useState("")
    const wishLength = wishlist.length

    const movieInWishList = (imdbID) => {
        return wishlist.find((movie) => movie.imdbID === imdbID)
    }

    const value = {
        wishlist,
        setWishList,
        movieInWishList,
        search
    }
    const Component = GlobalContext.Provider;
    return (
        <Component value={value}>
            {children}
        </Component>
    )
}
const useGlobalContext = () => useContext(GlobalContext)
export { GlobalContextProvider, useGlobalContext };