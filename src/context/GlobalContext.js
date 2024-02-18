import { createContext, useContext, useState ,useEffect} from "react";

const GlobalContext = createContext

const GlobalContextProvider = ({ children }) => {
    const [wishlist, setWishList] = useState([])
    const [search, setSerach] = useState("")
    const wishLength = wishlist.length

    const movieInWishList = (imdbID) => {
        return wishlist.find((movie) => movie.imdbID === imdbID)
    }
    const filteredMovies = wishlist.filter((movie) => {
        return movie.Title.toLowerCase().includes(search.toLowerCase())
    })


    useEffect(() => {
        const storedWishList = localStorage.getItem("wishList");
        if (storedWishList) {
          setWishList(JSON.parse(storedWishList));
        }
      }, []);

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