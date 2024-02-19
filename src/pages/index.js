import Layout from "../pages/Layout/index";
import { getMovies, getSearchMovies } from "../config/index"
import React ,{useContext}from "react";
import {GlobalContext} from "../context/GlobalContext"
import {toast} from "react-toastify"
import {FaHeart,FaRegHeart} from "react-icons/fa"



export default function Home({ movies }) {

  const {wishList,setWishList,movieInWishList} = useContext(GlobalContext)

  const addWish = (imdbID) =>{
    const selectMovie = movies.find((movie) => movie.imdbID === imdbID)
    const existed = wishList.find((movie) => movie.imdbID === imdbID)

    const wishedMovies =  existed ? [...wishList] : [...wishList,selectMovie];
    setWishList(wishedMovies)
    localStorage.setItem("wishMovies", JSON.stringify(wishedMovies))
    if(!existed){
      toast.success("Movie added successfully",{
        autoClose:1000,
      })
    }
    else{
      toast.info("Movie already added",{
        autoClose:1000
      })
    }
  }

  return (
    <>
      <Layout>
      <section className="flex flex-col justify-center items-center py-10 bg-gray-900 font-poppins">
    <div className=" bg-gray-900 container grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 ">
          {
            movies && movies.length > 0 ? (
              movies.map((item) => {
              const inWishList = movieInWishList(item.imdbID)
                return (
                  <div className="mx-auto" key={item.imdbID}>
                      <div className="group relative overflow-hidden cursor-pointer">
                          <img 
                          src={item.Poster}
                          className="group-hover:scale-110 group-hover:opacity-50 duration-500 rounded-sm h-96 w-96 object-cover"
                          alt={item.Title}
                          />
                          <div className="absolute px-8 bottom-8">
                          <h2 className="text-gega-grey group-hover:text-gega-melon group-hover:mb-5 font-poppins font-bold duration-500 text-xl">
                          {item.Title.slice(0, 13)}
                          <span className="group-hover:text-green-500 ml-3">
                            {item.Year}
                          </span>
                        </h2>

                        <p className="text-md opacity-0 group-hover:opacity-100 group-hover:mb-16 duration-500 text-gega-grey"></p>
                        <div className="absolute flex space-x-8 text-gega-grey opacity-0  -bottom-4 group-hover:bottom-1 group-hover:opacity-100 duration-500">
                          <button
                            className="hover:text-gega-red hover:opacity-60 duration:500"
                            onClick={() => addWish(item.imdbID)}
                          >
                            {
                              inWishList ? (
                                <FaHeart size={50} className="text-gega-red" />
                              )
                                : (
                                  <FaRegHeart size={50} className="text-gega-red" />
                                )
                            }

                          </button>
                        </div>
                          </div>
                      </div>
                  </div>
                )
              })
            ): (
                <p className = "text-gega-red text-4xl font-bold">Not Found...</p>
        )
          }
      </div>
    </section>
    </Layout >
    </>
  );
}


export async function getServerSideProps(context) {
  const { query } = context;

  try {
    let movies;

    if (query.search) {
      movies = await getSearchMovies(query.search);
    } else if (query.reset) {
      const response = await getMovies();
      movies = response.Search;
    } else {
      const response = await getMovies();
      movies = response.Search;
    }

    return {
      props: {
        movies: movies || [],
      },
    };
  } catch (error) {
    console.error("Error fetching movies:", error.message);
    return {
      redirect: "/404",
      props: {
        movies: null,
        hasError: true,
      },
    };
  }
}
//  export async function getServerSideProps() {
//     try {
//       const response = await getMovies();
//       console.log(response);
  
//       return {
//         props: {
//           movies: response.Search,
//         },
//       };
//     } catch (error) {
//       console.error("Error fetching movies:", error.message);
//       return {
//         redirect: "/404",
//         props: {
//           movies: null,
//           hasErrror: true,
//         },
//       };
//     }
//   }
  
