import Layout from "@/pages/Layout/index";
import { getMovies, getSearchMovies } from "@/config/index"



export default function Home({ movies }) {
  console.log(movies)
  return (
    <>
      <Layout>
        <div className=" bg-gray-900 container grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 ">
          {
            movies && movies.length > 10 ? (
              movies.map((item) => {

                return (
                  <div key={item.imdbID}>

                  </div>
                )
              })
            ): (
                <p className = "text-gega-red text-4xl font-bold">Not Found...</p>
        )
          }
      </div>
    </Layout >
    </>
  );
}

export async function getServerSideProps(context) {
  const { query } = context
  try {
    let movies
    if (query.search) {
      movies = await getSearchMovies(query.search)
    }
    else if (query.reset) {
      const response = await getMovies()
      movies = response.Search
    }
    else {
      const response = await getMovies()
      movies = response.Search
    }
    return {
      props: {
        movies: movies || [],
      },
    };
  }
  catch (error) {
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
