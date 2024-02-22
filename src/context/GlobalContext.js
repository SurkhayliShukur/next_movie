import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

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

    const deleteFromWishList = (imdbID) => {
        const deleteMovie = wishList.filter((movie) => movie.imdbID !== imdbID)
        setWishList(deleteMovie)
        localStorage.setItem("wishMovies", JSON.stringify(deleteMovie))
        toast.success("Deleted Successfully", {
            autoClose:1000,
        })
    }
    useEffect(() => {
        const storedWishList = localStorage.getItem("wishMovies");
        if (storedWishList) {
          setWishList(JSON.parse(storedWishList));
        }
      }, []);


    const value = {
        wishList,
        setWishList,
        setSearch,
        search,
        wishLength,
        filterMovie,
        movieInWishList,
        deleteFromWishList
    }
    return(
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}

export default Provider