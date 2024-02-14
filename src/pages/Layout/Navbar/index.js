import { ROUTER } from "@/constant/Router"
import { useRouter } from "next/router"

export default function Navbar() {
    const activeLink = (path, current) => {
        return path === current
    }
    const { push, pathname } = useRouter()
    return (
        <>
            <div className="p-4 lg:p-3 bg-gray-800 flex flex-col  lg:flex-row justify-evenly items-center">
                <h1
                    className="text-3xl lg:text-4xl mb-3 lg:mb-0 font-bold text-transparent bg-gradient-to-r bg-clip-text cursor-pointer  from-sky-400 to-cyan-100"
                    onClick={() => push(ROUTER.Home)}
                >
                    Movie
                </h1>
                <div className="flex justify-center items-center cursor-pointer">
                    <div>
                        <p className={
                            activeLink(ROUTER.Home, pathname)
                                ? "text-sky-300 hover:opacity-75 transition-all duration-500 mr-8 py-1 border-b-4 border-cyan-100"
                                : "text-sky-300 hover:opacity-75 transition-all duration-500 mr-8 py-1"
                        }
                            onClick={() => push(ROUTER.Home)}
                        >
                            Home
                        </p>
                    </div>
                    <div className="flex justify-center items-center cursor-pointer">
                        <p className={
                            activeLink(ROUTER.WishList, pathname)
                                ? "text-sky-300 hover:opacity-75 transition-all duration-500 mr-8 py-1 border-b-4 border-cyan-100"
                                : "text-sky-300 hover:opacity-75 transition-all duration-500 mr-8 py-1"
                        }
                            onClick={() => push(ROUTER.WishList)}
                        >
                            WishList
                        </p>
                    </div>
                </div>

            </div>
        </>
    )
}