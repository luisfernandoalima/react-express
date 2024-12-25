import { Link } from "react-router-dom"

export const Navbar = () => {
    return(
        <nav>
            <ul className="flex justify-center items-center gap-8 text-base md:text-lg text-slate-50">
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/list"}>Lista</Link></li>
            </ul>
        </nav>
    )
}